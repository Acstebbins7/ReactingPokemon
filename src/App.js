import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import CardForm from './components/CardForm';
import Cards from './components/Cards';
import { useState } from 'react';


function App() {
  const [cardList, setCardList] = useState([]);
  const createCard = (newCard) => {
    setCardList([...cardList, newCard])
  }
  return (
    <div className="App">
      <h1 className="jumbotron"><i class="nes-squirtle"></i>  <i class="nes-ash"></i> Gotta Catch <i class="nes-pokeball"></i> Them All <i class="nes-bulbasaur"></i>  <i class="nes-charmander"></i></h1>
      <div className="row">
        <div className="col-sm-1 bg-info"></div>
        <div className="col-sm-3"><CardForm makeCard={createCard}/></div>
        <div className="col-sm-8">
          {
            cardList.map((item, i) => <Cards myCard={item}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
