import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

export type Card = {
  title: string;
  tasks: Array<{
    id: number;
    name: string;
    description: string;
  }>;
};

export type CardsContextType = {
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
};

export const CardsContext = createContext<undefined | CardsContextType>(undefined);

const CardsDataProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([
    {
      title: 'Backlog',
      tasks: [
        {
          id: 0,
          name: 'Login page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Sprint bugfix',
          description: 'Fix all the bugs',
        },
      ],
    },
    {
      title: 'Ready',
      tasks: [
        {
          id: 0,
          name: 'Shop page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Checkout bugfix',
          description: 'Fix all the bugs',
        },
        {
          id: 2,
          name: 'Shop bug1',
          description: 'Fix all the bugs',
        },
        {
          id: 3,
          name: 'Shop bug2',
          description: 'Fix all the bugs',
        },
        {
          id: 4,
          name: 'Shop bug3',
          description: 'Fix all the bugs',
        },
        {
          id: 5,
          name: 'Shop bug4',
          description: 'Fix all the bugs',
        },
      ],
    },
    {
      title: 'In Progress',
      tasks: [
        {
          id: 0,
          name: 'User page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Auth bugfix',
          description: 'Fix all the bugs',
        },
      ],
    },
    {
      title: 'Finished',
      tasks: [
        {
          id: 0,
          name: 'Main page – performance issues',
          description: 'Fix all the bugs',
        },
        {
          id: 1,
          name: 'Main page bugfix',
          description: 'Fix all the bugs',
        },
      ],
    },
  ]);

  return <CardsContext.Provider value={{ cards, setCards }}>{children}</CardsContext.Provider>;
};

export default CardsDataProvider;
