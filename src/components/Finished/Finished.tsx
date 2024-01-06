import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './Finished.module.scss';

type Props = {};

const Finished = (props: Props) => {
  return (
    <div className="card">
      <h3 className="card-h3__name">Finished</h3>
      <div className="card-tasks">
        <div className="task">Main page – performance issues</div>
        <div className="task">Main page bugfix</div>
      </div>
      <button className="card-btn">
        <CardSvgSelector id="plus" /> Add card
      </button>
    </div>
  );
};

export default Finished;
