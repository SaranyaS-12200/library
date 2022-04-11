
import "./App.css";
import { BookList } from "./components/BookList";
import { AddNewBook } from "./components/AddNewBook";
import { BookDetails } from "./components/BookDetails";
import { Editbookdetail } from "./components/Editbookdetail";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const IBookList = [
    {
      bid: "1",
      bname: "Richdad Poordad",
      author: "Ronaldo",
      quote: "Learn from yesterday ,live for today, hope for tomorrow",
      category: "Personal Finance",
      bpic_url:"https://thefab20s.com/wp-content/uploads/2021/03/IMG_6514-1440x1920.jpg",
      bsummary:"Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence."
    },
    {
      bid: "2",
      bname: "Richdad Poordad",
      author: "Ronaldo",
      quote: "Learn from yesterday ,live for today, hope for tomorrow",
      category: "Personal Finance",
      bpic_url:"https://thefab20s.com/wp-content/uploads/2021/03/IMG_6514-1440x1920.jpg",
      bsummary:"Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence."
    },
    {
      bid: "3",
      bname: "Richdad Poordad",
      author: "Ronaldo",
      quote: "Learn from yesterday ,live for today, hope for tomorrow",
      category: "Personal Finance",
      bpic_url:"https://thefab20s.com/wp-content/uploads/2021/03/IMG_6514-1440x1920.jpg",
      bsummary:"Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence."
    },
  ];
  const [booklist, setBooklist] = useState(IBookList);
  return (
    <div className="App">
      <div>
        <ul> 
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/booklist">ListBook</Link></li>
        <li><Link to="/addnewbook">AddNewBook</Link></li>
        <li><Link to="/Bookdetails">BookDetails</Link></li>
        </ul>
      </div>
      <Switch>
        <Route  exact path='/'><h1>home</h1></Route>
        <Route  path="/booklist"><BookList booklist={booklist} setBooklist={setBooklist} /></Route>
        <Route  path="/addnewbook"><AddNewBook booklist={booklist} setBooklist={setBooklist}/></Route>
        <Route path='/Bookdetails'><BookDetails booklist={booklist}/></Route>
        <Route path='/editbookdetail/:index'><Editbookdetail booklist={booklist} setBooklist={setBooklist}/></Route>
      </Switch>
    </div>
  );
}


export default App;
