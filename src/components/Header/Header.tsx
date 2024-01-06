import { GlobalSvgSelector } from '../../assets/images/GlobalSvgSelector';
import './Header.module.scss';

type Props = {};

const Header = (props: Props): JSX.Element => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-h1__name">Awesome Kanban Board</h1>

        <div className="header-account-icons">
          <GlobalSvgSelector id="account-logo" />
          <GlobalSvgSelector id="arrow-down" />
        </div>
      </div>
    </header>
  );
};

export default Header;
