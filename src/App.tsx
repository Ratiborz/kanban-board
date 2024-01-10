import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardsDataProvider from './components/context/CardsData';

function App() {
  return (
    <>
      <CardsDataProvider>
        <Header />
        <div className="container">
          <Cards />
        </div>
        <Footer />
      </CardsDataProvider>
    </>
  );
}

export default App;
