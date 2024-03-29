import React, { useContext } from 'react';
import Select from 'react-select';
import { CardsContext, CardsContextType } from '../../../context/CardsData';

type MyOptionType = {
  value: string;
  label: string;
};

const TaskList: React.FC<{ cardIndex: number }> = ({ cardIndex }) => {
  const { cards, setCards } = useContext(CardsContext) as CardsContextType;

  const actualArray = cardIndex === 0 ? 0 : cardIndex - 1;

  const handleTaskMove = (selectedOptions: readonly MyOptionType[]) => {
    if (selectedOptions) {
      const updatedCards = [...cards]; // Создать копию массива cards
      selectedOptions.forEach((selectedOption) => {
        const selectedTask = selectedOption.value;
        const backlogTask = updatedCards[actualArray].tasks.find((task) => task.name === selectedTask);

        if (backlogTask) {
          const existingTask = updatedCards[cardIndex].tasks.find((task) => task.id === backlogTask.id);

          if (!existingTask) {
            updatedCards[cardIndex].tasks.push(backlogTask); // Просто переместить задачу в другую карточку
            updatedCards[actualArray].tasks = updatedCards[actualArray].tasks.filter(
              (task) => task.id !== backlogTask.id
            ); // Удалить задачу из предыдущей карточки
          }
        }
      });
      setCards(updatedCards); // Обновить состояние карточек
    }
  };

  const options: MyOptionType[] = cards[actualArray].tasks.map((task) => ({
    value: task.name,
    label: task.name,
  }));

  return (
    <div className="task addTask">
      <Select className="select" isMulti onChange={handleTaskMove} options={options} />
    </div>
  );
};

export default TaskList;
