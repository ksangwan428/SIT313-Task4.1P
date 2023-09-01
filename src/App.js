import './App.css';
import CardList from './CardList';
import Header from './Header';
import Bottom from './bottom';
import Kartik from './kartik';
import CardList123 from './Cardlist1';

function App() {
  return (
    <div>
      <Header/>
     <img src = {require('./c.jpg')} alt="chitkara" style={{width:'100%'}}/>
     <CardList/>
     <CardList123/>
     <staffList2/>
     <Bottom/>
     <Kartik/>
    </div>
  );
}

export default App;