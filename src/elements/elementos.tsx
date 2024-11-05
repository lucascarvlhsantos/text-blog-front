import React from 'react';
import { SearchText } from '../App';

type CardProps = {
  imagem: string;
  onClick: () => void;
};
const Card: React.FC<CardProps> = ({ imagem, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={"post"} style={{
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
