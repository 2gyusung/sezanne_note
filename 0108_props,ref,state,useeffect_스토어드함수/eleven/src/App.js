
import './App.scss';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './json/data.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body data={data} />
      <Footer/>
    </div>
  );
}

export default App;
