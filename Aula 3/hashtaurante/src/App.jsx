import "./App.css";
import Categorias from "./components/Categorias";
import Cards from "./components/Cards.jsx";
import Banner from "./components/Banner.jsx";
import { useState } from "react";

function App() {
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  
  return (
    <div className="container">
      <Banner/>

      <Categorias numCategoriaSelecionada = {numCategoriaSelecionada} 
      setNumCategoriaSelecionada = {setNumCategoriaSelecionada}/>
      {/* Self Closed Tag */}

      <Cards numCategoriaSelecionada = {numCategoriaSelecionada}/>
      
    </div>
  );
}

export default App;

// rfce
// React Function Component Export
