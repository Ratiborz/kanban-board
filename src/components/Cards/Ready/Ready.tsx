import React, { useContext } from 'react';
import { CardsContext, CardsContextType } from '../../context/CardsData';

const Ready: React.FC<{ onTaskMove: (taskId: number) => void }> = ({ onTaskMove }) => {
  const { cards, setCards } = useContext(CardsContext) as CardsContextType;

  const handleTaskMove = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTask = e.target.value;

    // Поиск задачи в Backlog
    const backlogTask = cards[0].tasks.find((task) => task.name === selectedTask);

    if (backlogTask) {
      const taskObj = {
        id: cards[0].tasks.length,
        name: selectedTask,
        description: '',
      };

      const updatedCards = [...cards]; // создание копии объекта cards
      updatedCards[1].tasks.push(taskObj); // обновление массива tasks в копии
      setCards(updatedCards);

      onTaskMove(backlogTask.id); // Вызов функции обработки перемещения задачи
    }
  };

  return (
    <div className="task addTask">
      <select className="select" onChange={handleTaskMove}>
        {cards[0].tasks.map((task, index: number) => (
          <option key={index} value={task.name}>
            {task.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Ready;
