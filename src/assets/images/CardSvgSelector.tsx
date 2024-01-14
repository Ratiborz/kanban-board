type Props = {
  id: string;
};

export const CardSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'plus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M1 0.5L11 13L19 0.5" stroke="black" />
        </svg>
      );
    case 'cancel-cross':
      return (
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="3"
          stroke="#000000"
          fill="none">
          <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
          <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
        </svg>
      );
    default:
      return <svg></svg>;
      break;
  }
};
