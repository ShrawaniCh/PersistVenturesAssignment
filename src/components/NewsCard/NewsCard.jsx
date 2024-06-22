import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './NewsCard.scss';

export default function NewsCard({heading,description,poster,onClick}) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={poster || "data:image/jpeg;base64,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"}
          alt="No image"
          sx={{  objectFit: "contain" , backgroundColor: "#e9e9e9"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
