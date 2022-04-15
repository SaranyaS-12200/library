
import "./App.css";
import { IBookList } from "./components/IBookList";
import { BookList } from "./components/BookList";
import { AddNewBook } from "./components/AddNewBook";
import { BookDetails } from "./components/BookDetails";
import { Editbookdetail } from "./components/Editbookdetail";
import {Home} from "./components/Home";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {ImLibrary} from "react-icons/im";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  
  const [booklist, setBooklist] = useState(IBookList);
  const history=useHistory();
  return (

    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>history.push('/')}
          >
            <ImLibrary />
          </IconButton>
          <Button color="inherit"
                onClick={() => history.push("/")}
              >Home</Button>
              <Button color="inherit"
                onClick={() => history.push("/booklist")}
              >BookList</Button>
              <Button color="inherit"
                onClick={() => history.push("/addnewbook")}
              >AddNew Book</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route  exact path='/'><Home/></Route>
        <Route  path="/booklist"><BookList/></Route>
        <Route  path="/addnewbook"><AddNewBook booklist={booklist} setBooklist={setBooklist}/></Route>
        <Route path='/editbookdetail/:id'><Editbookdetail booklist={booklist} setBooklist={setBooklist}/></Route>
        <Route path="/bookdetail/:id"><BookDetails/></Route>
      </Switch>
    </div>
    
   
  );
}


export default App;
// https://my-json-server.typicode.com/SaranyaS-12200/librarylist/booklist


// fetch("https://my-json-server.typicode.com/SaranyaS-12200/librarylist/booklist")
// .then((data)=>data.json())
// .then((data)=>console.log(data));