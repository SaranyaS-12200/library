import "../styles/BookList.css";
import * as ReactBootStrap from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import {useState} from "react";
import { useEffect } from "react";

const API="https://my-json-server.typicode.com/SaranyaS-12200/librarylist";

export function BookList() {
  const [booklist, setBooklist] = useState([]);
  const history = useHistory();
  //listing the data using fetch "Get(default Method)".

  const getbooks=()=>{    fetch(`${API}/booklist`,{method:"GET"})
  .then((data)=>data.json())
  .then((data)=>setBooklist(data));};
  useEffect(()=>getbooks(),[]);

  //delete book refresh data
  const deletebook = (id) =>{
     fetch(`${API}/booklist/${id}`,{
       method:"DELETE"
      }).then(() => getbooks());
    };
  return (
    <div className="Table">
      <ReactBootStrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>BINO:</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {booklist.map(({ bid, bname, author,id }, index) => {
            return (
            <BookListTableView
              bid={bid}
              name={bname}
              author={author}
              key={index}
              id={id}
              deletebutton={
                <IconButton
                  onClick={()=>deletebook(id)
                  //   () => {
                  //   const copyBooklist = [...booklist];
                  //   copyBooklist.splice(index, 1);
                  //   setBooklist(copyBooklist);
                  // }
                }
                >
                  <MdDelete />
                </IconButton>
              }
              editbutton={
                <IconButton
                  aria-label="Edit"
                  color="secondary"
                  onClick={() => {
                    console.log(index);
                    history.push(`/editbookdetail/${index}`);
                  }}
                >
                  <AiOutlineEdit />
                </IconButton>
              }
              viewmore={
                <IconButton
                  color="primary"
                  aria-label="Viewmore"
                  onClick={() => {
                    history.push(`/bookdetail/${id}`);
                  }}
                >
                  <GrView />
                </IconButton>
              } 
            />
            );
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

function BookListTableView({
  bid,
  name,
  author,
  deletebutton,
  editbutton,
  viewmore,
}) {
  return (
    <tr>
      <td>{bid}</td>
      <td>{name}</td>
      <td>{author}</td>
      <td>{viewmore}</td>
      <td>{editbutton}</td>
      <td>{deletebutton}</td>
    </tr>
  );
}
