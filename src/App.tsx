import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardsDataProvider from './context/CardsData';
import { DetailPage } from './components/DetailPage/DetailPage';

function App() {
  return (
    <>
      <CardsDataProvider>
        <div className="wrapper">
          <Header />
          <main className="main-container">
            <Routes>
              <Route path="/" element={<Cards />} />
              <Route path="/tasks/:index" element={<DetailPage />} />
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CardsDataProvider>
    </>
  );
}

export default App;
