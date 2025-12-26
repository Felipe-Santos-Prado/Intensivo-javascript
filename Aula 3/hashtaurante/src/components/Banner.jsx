// Componente simples que exibe a imagem do banner do restaurante.
// Importa a imagem local e renderiza dentro de uma div.banner.
import imgHashtaurante from "../assets/hashtaurante.webp";

const Banner = () => {
  return (
    <div className="banner">
      <img src={imgHashtaurante} alt="Banner do Hashtaurante" />
    </div>
  );
}

export default Banner
// ...existing code...