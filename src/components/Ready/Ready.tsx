import { CardSvgSelector } from '../../assets/images/CardSvgSelector';
import './Ready.module.scss';

type Props = {};

const Ready = (props: Props) => {
  return (
    <div className="card">
      <h3 className="card-h3__name">Ready</h3>
      <div className="card-tasks">
        <div className="task">Shop page – performance issues</div>
        <div className="task">Checkout bugfix</div>
        <div className="task">Shop bug1</div>
        <div className="task">Shop bug2</div>
        <div className="task">Shop bug3</div>
        <div className="task">Shop bug4</div>
        <div className="task">Shop bug5</div>
        <div className="task">Shop bug6</div>
        <div className="task">Shop page – performance issues</div>
      </div>
      <button className="card-btn">
        <CardSvgSelector id="plus" /> Add card
      </button>
    </div>
  );
};

export default Ready;
