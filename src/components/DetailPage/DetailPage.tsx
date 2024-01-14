import { useLocation, useParams } from 'react-router-dom';
import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './DetailPage.module.scss';
import { useContext } from 'react';
import { CardsContext, CardsContextType } from '../../context/CardsData';

export const DetailPage = () => {
  // const { cards, setCards } = useContext(CardsContext) as CardsContextType;
  // const { index } = useParams();
  const location = useLocation();
  console.log('Current location is ', location);

  return (
    <div className="detail-task">
      <div className="task-information">
        <h1 className="detail-h1">Main page – performance issues</h1>
        <p className="detail-p">
          Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках.
          Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в
          Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами,
          фигурой и восклицательным знаком.
        </p>
      </div>
      <CardSvgSelector id="cancel-cross" />
    </div>
  );
};
