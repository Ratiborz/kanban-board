import React, { useContext } from 'react';
import Select from 'react-select';
import { CardsContext, CardsContextType } from '../../context/CardsData';

type MyOptionType = {
  value: string;
  label: string;
};

const Ready: React.FC<{ onTaskMove: (taskId: number) => void }> = ({ onTaskMove }) => {
  const { cards, setCards } = useContext(CardsContext) as CardsContextType;

  const handleTaskMove = (selectedOptions: readonly MyOptionType[]) => {
    if (selectedOptions) {
      selectedOptions.forEach((selectedOption) => {
        const selectedTask = selectedOption.value;
        const backlogTask = cards[0].tasks.find((task) => task.name === selectedTask);

        if (backlogTask) {
          const taskObj = {
            id: cards[0].tasks.length,
            name: selectedTask,
            description: '',
          };

          const updatedCards = [...cards];
          updatedCards[1].tasks.push(taskObj);
          setCards(updatedCards);
          onTaskMove(backlogTask.id);
        }
      });
    }
  };

  const options: MyOptionType[] = cards[0].tasks.map((task) => ({
    value: task.name,
    label: task.name,
  }));

  return (
    <div className="task addTask">
      <Select className="select" isMulti onChange={handleTaskMove} options={options} />
    </div>
  );
};

export default Ready;
