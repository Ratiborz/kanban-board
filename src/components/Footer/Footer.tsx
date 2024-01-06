import './Footer.module.scss';
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-p__task-info">
          <p className="task-info__p">{`Active tasks: <N>`} </p>
          <p className="task-info__p">{`Finished tasks: <M>`} </p>
        </div>
        <p className="task-info__p">{`Kanban board by <NAME>, <YEAR>`}</p>
      </div>
    </footer>
  );
};

export default Footer;
