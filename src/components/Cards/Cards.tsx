import { useContext, useEffect, useState } from 'react';
import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './Cards.module.scss';
import TaskList from './TaskList/TaskList';
import Backlog from './Backlog/Backlog';
import { Card, CardsContext, CardsContextType } from '../../context/CardsData';
import { Link } from 'react-router-dom';
import { storageCards } from '../../modules/storage';

const Cards = () => {
  const [newTask, setNewTask] = useState<number>(10);
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [handleNewTask, setHandleNewTask] = useState<boolean>(false);

  const initialCards = storageCards.getItem('cards');

  const countTask = initialCards?.reduce((accumulator: number, card: Card) => {
    return accumulator + card.tasks.length; // высчитывает id для задачи после перезагрузки
  }, 0);

  const [nextTaskId, setNextTaskId] = useState<number>(0 || countTask);

  const { cards, setCards } = useContext(CardsContext) as CardsContextType;

  const addTask = (index: number): void => {
    setNewTask(index);
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      setHandleNewTask(true);
    }
  };

  const handleNewTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskName(e.target.value);
  };

  useEffect(() => {
    if (handleNewTask) {
      const taskObj = {
        id: nextTaskId,
        name: newTaskName,
        description: 'This task has no description',
      };
      const updatedCards = [...cards]; // создание копии объекта cards
      updatedCards[0].tasks.push(taskObj); // обновление массива tasks в копии
      setCards(updatedCards); // обновление состояния cards

      setNextTaskId(nextTaskId + 1);
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
                <Link className="task-link" to={`/tasks/${cards[cardIndex].tasks[index].id}`}>
                  {task.name}
                </Link>
              </div>
            ))}
          </div>
          {newTask === cardIndex && cardIndex === 0 ? (
            <Backlog onKeyDown={handleEnterKeyPress} value={newTaskName} onChange={handleNewTaskInputChange} />
          ) : (
            ''
          )}

          {newTask === cardIndex && [1, 2, 3].includes(cardIndex) ? <TaskList cardIndex={cardIndex} /> : ''}

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
