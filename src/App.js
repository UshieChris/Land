import Navbar from './components/Navbar';
import Mainnav from './components/Mainnav';
import './App.css';
import Secondcont from './components/Secondcont';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Navbar />
        <div className='sec'>
           <Secondcont />
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
