import React from 'react'

const Book = (props) => {
  const { img, title, author, children } = props;
  const clickHandler = () => alert('Hello World');
  return (
    <article className='book' onClick={clickHandler}>
      <img 
      src={img}>
      </img>
      <h1>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem'}}> {author} </h4>
      {children}
    </article>
  );
}

export default Book
