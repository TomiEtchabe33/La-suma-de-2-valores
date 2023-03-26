import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={presion}>
          <p>Ingrese primer valor:</p><input class="valores" type="number" name="valor1" />
          <p>Ingrese segundo valor:</p><input class="valores" type="number" name="valor2" />
          <p>
            <input class="boton" type="submit" value="Sumar" />
          </p>
        </form>
      </header>
    </div>
    
  );
}

function presion(e) {
  e.preventDefault();
  const v1=parseInt(e.target.valor1.value, 10);
  const v2=parseInt(e.target.valor2.value, 10);
  const suma=v1+v2;
  alert('La suma total es: '+suma);
}

export default App;
