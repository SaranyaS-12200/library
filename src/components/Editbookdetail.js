import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Editbookdetail({booklist,setBooklist}) {
  const { id } = useParams();
  const Book = booklist[id];
  console.log(Book);
  const history = useHistory();
  const [bookid,setBookid]=useState(Book.bid);
  const [bookname,setBookname]=useState(Book.bname);
  const [bookauthor,setBookauthor]=useState(Book.author);
  const [bookquote,setBookquote]=useState(Book.quote);
  const [bookcategory,setBookcategory]=useState(Book.category);
  const [bookpic, setBookpic] = useState(Book.bpic_url);
  const [booksummary,setBooksummary]=useState(Book.bsummary);
  return (
    <div>
      <div>
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
          onClick={() => {
            console.log(bookid,bookname,bookauthor,bookcategory,bookquote,booksummary,bookpic);

            const updatedBook = {
              bid: bookid,
              bname:bookname ,
              author: bookauthor,
              quote:bookquote ,
              category: bookcategory,
              bpic_url:bookpic,
              bsummary:booksummary
            };
            const copyBooklist = [...booklist];
            copyBooklist[id] = updatedBook;
            setBooklist(copyBooklist);
            history.push("/booklist");
          }}
        >Save BookDetails</Button>
      </div>
    </div>
  );
}
