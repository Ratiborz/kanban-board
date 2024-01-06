import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './InProgress.module.scss';

type Props = {};

const InProgress = (props: Props) => {
  return (
    <div className="card">
      <h3 className="card-h3__name">InProgress</h3>
      <div className="card-tasks">
        <div className="task">User page – performance issues</div>
        <div className="task">Auth bugfix</div>
      </div>
      <button className="card-btn">
        <CardSvgSelector id="plus" /> Add card
      </button>
    </div>
  );
};

export default InProgress;
