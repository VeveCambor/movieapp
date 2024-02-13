import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <Grid container spacing={2}>
      {movies.map(movie => (
        <Grid item key={movie.id} xs={12} sm={6} md={3} onClick={() => onSelectMovie(movie.id)}>
          <Card sx={{ borderRadius: '10px' }}>
            <CardMedia
              component="img"
              height="140"
              image={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {movie.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
