import './App.css';
import './Style.css';
import FunctionalCount from './button.js'
import images from './Images/image1.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images} alt="Img"/>
        <FunctionalCount />
      </header>
    </div>
  );
}

export default App; 