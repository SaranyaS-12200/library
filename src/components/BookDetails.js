import * as React from 'react';
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



export function BookDetails({ booklist }) {
    const history = useHistory();
    const { index } = useParams();
    console.log(index, booklist);
    const Book = booklist[index];
    return (
      <div>
        
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              B
            </Avatar>
          }
          title={Book.bname}
          
        />
        <CardMedia
          component="img"
          height="194"
          image={Book.bpic_url}
          alt={Book.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {Book.bsummary}
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