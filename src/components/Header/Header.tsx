import { useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../assets/images/GlobalSvgSelector';
import './Header.module.scss';
import { CardSvgSelector } from '../../assets/images/CardSvgSelector';

const Header = (): JSX.Element => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modal) {
        const modalElement = document.querySelector('.modal');
        if (modalElement && !modalElement.contains(event.target as Node)) {
          toggleModal();
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modal]);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-h1__name">Awesome Kanban Board</h1>

        <div className="header-account-icons">
          <GlobalSvgSelector id="account-logo" />
          <div onClick={toggleModal} className="wrapper-svg">
            <GlobalSvgSelector id="arrow-down" />
          </div>
        </div>
        {modal && (
          <div className="modal">
            <span className="rhomb-wrapper">
              <CardSvgSelector id="rhomb" />
            </span>

            <p>Profile</p>
            <p>Log Out</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
