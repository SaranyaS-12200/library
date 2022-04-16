import "../styles/AddNewBook.css";
import {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { API } from "./global";


export function AddNewBook() {
    const [bookid,setBookid]=useState();
    const [bookname,setBookname]=useState('');
    const [bookauthor,setBookauthor]=useState('');
    const [bookquote,setBookquote]=useState('');
    const [bookcategory,setBookcategory]=useState('');
    const [bookpic, setBookpic] = useState('');
  const [booksummary,setBooksummary]=useState('');
    const history=useHistory();
  
    const Addbook=()=>{
      const newBook={
        bid: bookid,
        bname:bookname ,
        author: bookauthor,
        quote:bookquote ,
        category: bookcategory,
        bpicurl:bookpic,
        bsummary:booksummary
      };

      //1.method must be POST
      //2.body-JSON data
      //3.headers- JSON data
fetch(`${API}/booklist`,{
method:"POST",
body:JSON.stringify(newBook),
headers:{
"Content-Type":"application/json"
}
}).then(()=> history.push('/booklist'));
    
    };

    return (
<div>
      <div className="AddnewBook_Form">
        <TextField id="outlined-basic" label="Enter BookID" variant="outlined" value={bookid}
          onChange={(event) => setBookid(event.target.value)} />
        <TextField id="outlined-basic" label="Enter BookName" variant="outlined" value={bookname}
          onChange={(event) => setBookname(event.target.value)} />
        <TextField id="outlined-basic" label="Enter BookAuthor" variant="outlined" value={bookauthor}
          onChange={(event) => setBookauthor(event.target.value)} />
        <TextField id="outlined-basic" label="Enter BookQuote" variant="outlined" value={bookquote}
          onChange={(event) => setBookquote(event.target.value)} />
        <TextField id="outlined-basic" label="Enter BookCategory(PersonalFinance,Novel,Motivation)" variant="outlined" value={bookcategory} onChange={(event) => setBookcategory(event.target.value)} />
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
        <Button variant="contained"
          onClick={()=>{ Addbook();
          //  const CopyBooklist= [...booklist,newBook]; 
          //  setBooklist(CopyBooklist);
          }}
        >AddBook</Button>
      </div>
</div>
    );
  }

  //1.method must be POST
  //2.body-JSON data
  //3.headers- JSON data
// fetch(`${API}/booklist`,{
//   method:"POST",
//   body:JSON.stringify(data),
//   headers:{
//     "Content-Type":"application/json"
//   }
// })