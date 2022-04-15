import * as React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useState } from 'react';

export function BookDetails() {
  const [book,setBook]=useState({});
  const history = useHistory();
  const { id } = useParams();
  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/SaranyaS-12200/librarylist/booklist/${id}`,{method:"GET"})
    .then((data)=>data.json())
    .then((data)=>setBook(data))
    // .catch((err)=>console.log(err));
  },[]);
 
  // useEffect(() => {fetch(`API/${id}`,{method: "GET",}) // promise.then((data) => data.json()) // Response object.then((mv) => setMovie(mv));}, []);
    // console.log(id,booklist);
    // const Book = {};
    return (
      <div>
        
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              B
            </Avatar>
          }
          title={book.bname}
          
        />
        <CardMedia
          component="img"
          height="194"
          image={book.bpic_url}
          alt={book.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {book.bsummary}
          </Typography>
        </CardContent>
      </Card>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    );
  }