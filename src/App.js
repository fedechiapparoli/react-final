
import './App.css';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
     
      <NavBar/>
     <ItemListConteiner name='Budweiser' description='Exquisita' price='$95'/>
     <ItemListConteiner name='Quilmes' description='Exquisita' price='$90'/>
     <ItemListConteiner name='Stella Artrois' description='Exquisita' price='$100'/>
    </div>
  );
}

export default App;
