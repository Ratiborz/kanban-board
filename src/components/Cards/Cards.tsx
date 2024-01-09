import { useEffect, useState } from 'react';
import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './Cards.module.scss';
import Ready from './Ready/Ready';
import Backlog from './Backlog/Backlog';

const Cards = () => {
  const [newTask, setNewTask] = useState(10);
  const [newTaskName, setNewTaskName] = useState('');
  const [handleNewTask, setHandleNewTask] = useState(false);

  const [cards, setCards] = useState([
    {
      title: 'Backlog',
      tasks: [
        {
          id: 0,
          name: 'Login page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Sprint bugfix',
          description: 'Fix all the bugs',
        },
      ],
    },
    {
      title: 'Ready',
      tasks: [
        {
          id: 0,
          name: 'Shop page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Checkout bugfix',
          description: 'Fix all the bugs',
        },
        {
          id: 2,
          name: 'Shop bug1',
          description: 'Fix all the bugs',
        },
        {
          id: 3,
          name: 'Shop bug2',
          description: 'Fix all the bugs',
        },
        {
          id: 4,
          name: 'Shop bug3',
          description: 'Fix all the bugs',
        },
        {
          id: 5,
          name: 'Shop bug4',
          description: 'Fix all the bugs',
        },
      ],
    },
    {
      title: 'In Progress',
      tasks: [
        {
          id: 0,
          name: 'User page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Auth bugfix',
          description: 'Fix all the bugs',
        },
      ],
    },
    {
      title: 'Finished',
      tasks: [
        {
          id: 0,
          name: 'Main page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Main page bugfix',
          description: 'Fix all the bugs',
        },
      ],
    },
  ]);

  const addTask = (index: number) => {
    setNewTask(index);
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setHandleNewTask(true);
    }
  };

  const handleNewTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const handleTaskMove = (taskId: number) => {
    const updatedCards = cards.map((card) => {
      return {
        ...card,
        tasks: card.tasks.filter((task) => task.id !== taskId),
      };
    });
    setCards(updatedCards);
  };

  useEffect(() => {
    if (handleNewTask) {
      const taskObj = {
        id: cards[0].tasks.length,
        name: newTaskName,
        description: '',
      };
      const updatedCards = [...cards]; // создание копии объекта cards
      updatedCards[0].tasks.push(taskObj); // обновление массива tasks в копии
      setCards(updatedCards); // обновление состояния cards

      // Скрыть поле ввода после добавления задачи
      setNewTask(10);
      setNewTaskName('');
      setHandleNewTask(false);
    }
  }, [handleNewTask]);

  return (
    <>
      {cards.map((card, cardIndex) => (
        <div key={cardIndex} className="card">
          <h3 className="card-h3__name">{card.title}</h3>
          <div className="card-tasks">
            {card.tasks.map((task, index) => (
              <div key={index} className="task">
                {task.name}
              </div>
            ))}
          </div>
          {newTask === cardIndex && cardIndex === 0 ? (
            <Backlog onKeyDown={handleEnterKeyPress} value={newTaskName} onChange={handleNewTaskInputChange} />
          ) : (
            ''
          )}

          {newTask === cardIndex && cardIndex === 1 ? <Ready onTaskMove={handleTaskMove} cards={cards} /> : ''}

          {newTask === cardIndex && cardIndex === 0 ? (
            <button
              className="card-btn addTask-btn"
              disabled={!newTaskName.trim()}
              onClick={() => setHandleNewTask(!handleNewTask)}>
              Submit
            </button>
          ) : (
            <button
              className="card-btn"
              onClick={() => {
                addTask(cardIndex);
              }}>
              <CardSvgSelector id="plus" /> Add card
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default Cards;
