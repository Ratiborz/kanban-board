import { GlobalSvgSelector } from '../../assets/images/GlobalSvgSelector';
import './Header.module.scss';

type Props = {};

const Header = (props: Props): JSX.Element => {
  const handleClick = () => {
    console.log('work');
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-h1__name">Awesome Kanban Board</h1>

        <div className="header-account-icons">
          <GlobalSvgSelector id="account-logo" />
          <div onClick={handleClick} className="wrapper-svg">
            <GlobalSvgSelector id="arrow-down" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
