import React from 'react';

interface Card {
  title: string;
  tasks: { id: number; name: string; description: string }[];
}

interface Props {
  cards: Card[];
}

const Ready: React.FC<Props & { onTaskMove: (taskId: number) => void }> = ({ cards, onTaskMove }) => {
  const handleTaskMove = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTask = e.target.value;
    console.log(selectedTask);

    // Найдем задачу в Backlog
    const backlogTask = cards[0].tasks.find((task) => task.name === selectedTask);

    if (backlogTask) {
      const updatedBacklogTasks = cards[0].tasks.filter((task) => task.name !== selectedTask);
      const updatedCards = [{ ...cards[0], tasks: updatedBacklogTasks }, ...cards.slice(1)];

      const readyTasks = [...cards[1].tasks, backlogTask];

      onTaskMove(backlogTask.id);
    }
  };

  return (
    <div className="task addTask">
      <select className="select" onChange={handleTaskMove}>
        {cards[0].tasks.map((task, index) => (
          <option key={index} value={task.name}>
            {task.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Ready;
