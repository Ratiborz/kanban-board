import Backlog from './components/Backlog/Backlog';
import Finished from './components/Finished/Finished';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InProgress from './components/In Progress/InProgress';
import Ready from './components/Ready/Ready';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Backlog />
        <Ready />
        <InProgress />
        <Finished />
      </div>
      <Footer />
    </>
  );
}

export default App;
