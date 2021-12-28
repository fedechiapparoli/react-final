
import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetailsConteiner from './components/ItemDetailsConteiner';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
     
      <NavBar/>
     <ItemListConteiner/>
     <ItemDetailsConteiner/>
     
     
     
    </div>
  );
}

export default App;
