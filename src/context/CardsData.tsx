import { ReactNode, createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { storageCards } from '../modules/storage';

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
  const initialCards = storageCards.getItem('cards');
  const [cards, setCards] = useState<Card[]>(
    initialCards || [
      {
        title: 'Backlog',
        tasks: [],
      },
      {
        title: 'Ready',
        tasks: [],
      },
      {
        title: 'In Progress',
        tasks: [],
      },
      {
        title: 'Finished',
        tasks: [],
      },
    ]
  );

  useEffect(() => {
    storageCards.setItem(cards);
  }, [cards]);

  return <CardsContext.Provider value={{ cards, setCards }}>{children}</CardsContext.Provider>;
};

export default CardsDataProvider;
