import "../styles/BookList.css";
import * as ReactBootStrap from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import {GrView} from "react-icons/gr";
import {MdDelete} from "react-icons/md";
import {AiOutlineEdit} from "react-icons/ai";
import { useHistory } from "react-router-dom";
export function BookList({booklist,setBooklist}) {
  const history=useHistory();
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
          {booklist.map(({bid,bname,author}, index) => ( 
            <BookListTableView bid={bid} name={bname} author={author} 
            id={index}
            deletebutton={<IconButton onClick={()=>{
              const copyBooklist=[...booklist];
              copyBooklist.splice(index,1);
              setBooklist(copyBooklist);
            }}><MdDelete/></IconButton>} 
            editbutton={<IconButton
              aria-label="Edit"
              color="secondary"
              onClick={() => {
                console.log(index);
                history.push(`/editbookdetail/${index}`)
              }}
            >
              <AiOutlineEdit/>
            </IconButton>}
            viewmore={
              <IconButton color="primary" aria-label="Viewmore"
              onClick={() => {
                history.push(`/bookdetail/${index}`)
              }}
            ><GrView /></IconButton>
            }
            />
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

function BookListTableView({ bid, name, author , deletebutton ,editbutton,viewmore}) {
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
