import { useContext } from 'react';
import './Footer.module.scss';
import { CardsContext, CardsContextType } from '../../context/CardsData';
type Props = {};

const Footer = (props: Props) => {
  const { cards } = useContext(CardsContext) as CardsContextType;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-p__task-info">
          <p className="task-info__p">{`Active tasks: <${cards[0].tasks.length}>`} </p>
          <p className="task-info__p">{`Finished tasks: <${cards[3].tasks.length}>`} </p>
        </div>
        <p className="task-info__p">{`Kanban board by <NAME>, <YEAR>`}</p>
      </div>
    </footer>
  );
};

export default Footer;
