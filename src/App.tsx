import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
