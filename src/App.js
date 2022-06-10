import './App.css';
import PetList from './Components/Pet/PetList'
import { data } from './data.js'


function App() {
  return (
    <>
    <div className="App">
    
   <PetList pets={data.pets} />

    </div>
    </>
  );
}

export default App;
