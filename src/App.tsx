import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardsDataProvider from './components/context/CardsData';

function App() {
  return (
    <>
      <CardsDataProvider>
        <div className="wrapper">
          <Header />
          <main className="main-container">
            <Cards />
          </main>
          <Footer />
        </div>
      </CardsDataProvider>
    </>
  );
}

export default App;
