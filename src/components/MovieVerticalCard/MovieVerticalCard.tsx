import "./MovieVerticalCard.css";
import { Movie } from "../../interfaces/Movie"; 
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  movie: Movie;
};

const imageURL = import.meta.env.VITE_IMG;

const MovieVerticalCard = ({ movie }: Props) => { 

  return (
    <Card variant="outlined" sx={{ maxWidth: 305 }} className="movie-card">
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={`${imageURL}${movie.backdropPath}`}
        alt={movie.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
         
        <Typography variant="body1" className="overview">{movie.overview}</Typography>

      </CardContent>

      <CardActions> 
        <Button size="small"><Link to={`movie/${movie.id}`}>Ver mais</Link></Button>
      </CardActions>

    </Card>
  );
};

export default MovieVerticalCard;
