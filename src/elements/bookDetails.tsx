import React from 'react';
import { IoEye } from "react-icons/io5";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs"; 
import { MdModeComment } from "react-icons/md";

type BookDetails = {
  bookUrl: string;
  bookTitle: string;
  bookAuthor: string;
  analytics: [number, number, number];
  saved: boolean;
  description: string;
};

const BookDetails: React.FC<BookDetails> = ({ bookUrl, bookTitle, bookAuthor, analytics, saved, description }) => {
  return (
    <>
      <div className='book-photo' style={{
      backgroundImage: `url(${bookUrl})`,
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      width: '250px',
      height: '500px'
      }}>
      </div>
      <div className='book-title'>
          <h2>{bookTitle}</h2>
          <div className='title-bottom'>
              <span>{bookAuthor}</span>
              <button>Ler texto</button>
          </div>
      </div>
      <div className='book-analitycs'>
          <div className='analitycs-element'>
              <IoEye /><span>{analytics[0]}</span>
          </div>
          <div className='analitycs-element'>
              <MdModeComment /><span>{analytics[1]}</span>
          </div>
          <div className='analitycs-element'>
              <BsBookmarkCheckFill /><span>{analytics[2]}</span>
          </div>
          <div className='analitycs-element-btn' style={{marginRight: 0}}>
          {saved ? (
            <button><BsBookmarkCheckFill /></button>
          ) : (
            <button><BsBookmarkPlus /></button>
          )}
              
          </div>
      </div>

      <div className='book-description'>
          <h2>DESCRIÇÃO</h2>
          <p>{description}</p>
      </div>
    </>
  );
};
export default BookDetails;