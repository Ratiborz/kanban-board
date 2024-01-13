import { useContext, useEffect, useState } from 'react';
import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './Cards.module.scss';
import Ready from './Ready/Ready';
import Backlog from './Backlog/Backlog';
import { Card, CardsContext, CardsContextType } from '../../context/CardsData';

const Cards = () => {
  const [newTask, setNewTask] = useState(10);
  const [newTaskName, setNewTaskName] = useState('');
  const [handleNewTask, setHandleNewTask] = useState(false);

  const { cards, setCards } = useContext(CardsContext) as CardsContextType;

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

  useEffect(() => {
    if (handleNewTask) {
      const taskObj = {
        id: cards[0].tasks.length,
        name: newTaskName,
        description: 'This task has no description',
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
      {cards.map((card: Card, cardIndex: number) => (
        <div key={cardIndex} className="card">
          <h3 className="card-h3__name">{card.title}</h3>
          <div className="card-tasks">
            {card.tasks.map((task, index: number) => (
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

          {newTask === cardIndex && [1, 2, 3].includes(cardIndex) ? <Ready cardIndex={cardIndex} /> : ''}

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
              disabled={[1, 2, 3].includes(cardIndex) && cards[cardIndex - 1].tasks.length === 0 ? true : false}
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
