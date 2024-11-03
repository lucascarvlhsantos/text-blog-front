import React from 'react';

type CardProps = {
  imagem: string;
  tituloImagem: string;
  titulo: string;
  conteudo: string;
  cor: string;
};
const Card: React.FC<CardProps> = ({ imagem }) => {
  return (
    <button className={"post"} style={{
    backgroundImage: `url(${imagem})`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    width: '130px',
    height: '180px'}}>
    </button>
  );
};
export default Card;
