import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
//setup vars
const firstBook = {
  img:'https://m.media-amazon.com/images/I/61OekEp8GjL._AC_UL480_FMwebp_QL65_.jpg',
  title: "Burn after writing - L'édition française officielle",
  author: 'Sharon Jones et Veronique Dumont'
}

function Booklist(){
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author} >
          <p> Exercitation dolor mollit veniam eiusmod ipsum cupidatat ea fugiat labore. Lorem aliquip esse et consectetur commodo eiusmod ipsum. Culpa et id anim cupidatat. Nulla quis aute ipsum ipsum elit proident do pariatur amet. Laborum deserunt qui consequat adipisicing id. Aute elit mollit aliqua laboris excepteur sunt non cupidatat proident veniam. Excepteur consectetur id aute adipisicing ad aliquip laborum quis ea dolore sunt et laborum voluptate. </p>
      </Book>
      <Book />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img 
      src={img}>
      </img>
      <h1>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem'}}> {author} </h4>
      {children}
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'))