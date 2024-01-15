import { Link, useParams } from 'react-router-dom';
import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './DetailPage.module.scss';
import { useContext, useState } from 'react';
import { CardsContext, CardsContextType } from '../../context/CardsData';

export const DetailPage = () => {
  const { cards, setCards } = useContext(CardsContext) as CardsContextType;
  const { index } = useParams(); // Получение параметра id из URL

  const taskId = Number(index);
  const selectedTask = cards.flatMap((card) => card.tasks).find((task) => task.id === taskId);

  if (!selectedTask) {
    return <div>Задача с id {taskId} не найдена</div>;
  }

  const { name, description } = selectedTask;

  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedDescription(selectedTask.description);
  };

  const handleSaveClick = () => {
    const updatedCards = [...cards]; // Создать копию массива cards
    const foundTask = updatedCards.flatMap((card) => card.tasks).find((task) => task.id === taskId);

    if (foundTask) {
      foundTask.description = editedDescription;
      setCards(updatedCards); // Обновить состояние cards
    } else {
      console.error('Задача с указанным ID не найдена');
    }

    setIsEditing(false);
  };

  return (
    <div className="detail-task">
      <div className="task-information">
        <h1 className="detail-h1">{name}</h1>
        {isEditing ? (
          <div className="wrapper-form">
            <textarea
              className="edit-text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button className="edit-btn" onClick={handleSaveClick}>
              Сохранить
            </button>
          </div>
        ) : (
          <p className="detail-p" onClick={handleEditClick}>
            {description}
          </p>
        )}
      </div>
      <Link to={'/'}>
        <CardSvgSelector id="cancel-cross" />
      </Link>
    </div>
  );
};
