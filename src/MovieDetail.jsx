import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';

const MovieDetail = ({ movie, onBack }) => {
  if (!movie) return <div>Loading...</div>;

  return (
    <Grid      
    container 
    spacing={2} 
    sx={{ 
      marginTop: '20px', 
      justifyContent: 'center',
      flexGrow: 1 
    }}>
      <Grid item xs={12} md={6}>
        <Card sx={{ borderRadius: '10px' }}>
          <CardMedia
            component="img"
            height="340"
            image={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` } 
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h4">
              {movie.title}
            </Typography>
            <Typography variant="subtitle1">
              Release Date: {movie.release_date}
            </Typography>
            <Typography variant="body2">
              Runtime: {movie.runtime} minutes
            </Typography>
            <Typography variant="body2">
              Genre: {movie.genres.map(genre => genre.name).join(', ')}
            </Typography>
            <Typography variant="body2">
              Rating: {movie.vote_average} / 10
            </Typography>
            <Typography paragraph>
              {movie.overview}
            </Typography>
          </CardContent>
          <Button onClick={onBack}>Back to List</Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
