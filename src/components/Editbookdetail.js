import '../styles/Editbookdetail.css';
import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { API } from './global';

export function Editbookdetail() {
  const { id } = useParams();
  // const Book = booklist[id];
  // console.log(Book);
  const [book,setBook]=useState(null);

  useEffect(()=>{
    fetch(`${API}/booklist/${id}`,{
      method:"GET"
    })
    .then((data)=>data.json())
    .then((data)=>setBook(data))
    .catch((err)=>console.log(err));
  },[]);
  
  return (
    <div>
      {book ? <EditBookForm book={book}/> : <h2>loading.....</h2>}
    </div>
  );
}

function EditBookForm({book}){
  const [bookid,setBookid]=useState(book.bid);
  const [bookname,setBookname]=useState(book.bname);
  const [bookauthor,setBookauthor]=useState(book.author);
  const [bookquote,setBookquote]=useState(book.quote);
  const [bookcategory,setBookcategory]=useState(book.category);
  const [bookpic, setBookpic] = useState(book.bpicurl);
  const [booksummary,setBooksummary]=useState(book.bsummary);
  const history = useHistory();

  const editBook=()=>{
    console.log(bookid,bookname,bookauthor,bookcategory,bookquote,booksummary,bookpic);
    const updatedBook = {
      bid: bookid,
      bname:bookname ,
      author: bookauthor,
      quote:bookquote ,
      category: bookcategory,
      bpicurl:bookpic,
      bsummary:booksummary
    };
    
    //1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete -> movie to /movies
    fetch(`${API}/booklist/${book.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedBook),
      headers:{
      "Content-Type":"application/json"
      }
      }).then(()=> history.push('/booklist'));
  }
  return (
    <div className='Editbookdetails'>
        <TextField id="outlined-basic"
          label="BookId"
          variant="outlined"
          value={bookid}
          onChange={(event) => setBookid(event.target.value)} />
        <TextField id="outlined-basic"
          label="BookName"
          variant="outlined"
          value={bookname}
          onChange={(event) => setBookname(event.target.value)} />
        <TextField id="outlined-basic"
          label="BookAuthor"
          variant="outlined"
          value={bookauthor}
          onChange={(event) => setBookauthor(event.target.value)} />
        <TextField id="outlined-basic"
          label="Quote"
          variant="outlined"
          value={bookquote}
          onChange={(event) => setBookquote(event.target.value)} />
        <TextField id="outlined-basic"
          label="Category"
          variant="outlined"
          value={bookcategory}
          onChange={(event) => setBookcategory(event.target.value)} />
           <TextField id="outlined-basic"
          label="BookPoster"
          variant="outlined"
          value={bookpic}
          onChange={(event) => setBookpic(event.target.value)} />
           <TextField id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={booksummary}
          onChange={(event) => setBooksummary(event.target.value)} />
        <Button
          variant="contained"
          color="success"
          onClick={() => {editBook()
            // const copyBook = [...book];
            // copyBook[id] = updatedBook;
            // setBook(copyBook);
            // history.push("/booklist");
          }}
        >Save BookDetails</Button>
      </div>
  );
}
