import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './Backlog.module.scss';

type Props = {};

const Backlog = (props: Props) => {
  return (
    <div className="card">
      <h3 className="card-h3__name">Backlog</h3>
      <div className="card-tasks">
        <div className="task">Login page – performance issues</div>
        <div className="task">Sprint bugfix</div>
      </div>
      <button className="card-btn">
        <CardSvgSelector id="plus" /> Add card
      </button>
    </div>
  );
};

export default Backlog;
