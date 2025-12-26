// Componente Card:
// Props esperadas:
// - titulo: string (nome do produto)
// - descricao: string (texto descritivo)
// - preco: string (formato "R$ XX,XX")
// - imagem: caminho para imagem (importada em cardapio.js)
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg";

const Card = ({ titulo, descricao, preco, imagem }) => {
  return (
    <div className="card">
      <div className="card__textos">
        {/* Título do prato */}
        <h2 className="card__titulo">{titulo}</h2>

        {/* Descrição do prato */}
        <p>{descricao}</p>

        {/* Preço com estilo */}
        <p className="card__preco">{preco}</p>
      </div>

      <div className="card__img">
        {/* Imagem do produto (passada via prop `imagem`) */}
        <img src={imagem} alt={`Imagem de ${titulo}`} />
      </div>
    </div>
  );
};
export default Card;
// ...existing code...