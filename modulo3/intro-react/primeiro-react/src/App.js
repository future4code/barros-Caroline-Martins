import imagemCarol from './carol.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert("Boa Noite!")
  }
  return (
    <div className="App">
       
      <header className="App-header">
        <h3>Sejam Bem-Vindes! Sou Caroline Martins</h3>
        <img src={imagemCarol} className="App-logo" alt="imagemCarol" />
        <p>
          Este é o meu primeiro site React
        </p>
       <button onClick={mensagem}>Clique Aqui</button>
      </header>
    </div>
  );
}

export default App;
