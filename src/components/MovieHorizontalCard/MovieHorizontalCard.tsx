"./MovieHorizontalCard.css";
import { Movie } from "../../interfaces/Movie";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FcLike } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";

type Props = {
  movie: Movie;
};

const imageURL = import.meta.env.VITE_IMG;

const MovieHorizontalCard = ({ movie }: Props) => {
  return (
    <Card sx={{ display: "flex", background: "transparent" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={`${imageURL}${movie.backdropPath}`}
        />

        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body1">
            {movie.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <AiOutlineLike />
            <Typography>{movie.voteCount}</Typography>
            <FcLike /> <Typography>{movie.voteAverage}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieHorizontalCard;
