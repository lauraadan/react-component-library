import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import type { CardProps } from "./Card.types";

export function Card({
  title,
  image,
  imageAlt,
  text,
  children,
  ...props
}: CardProps) {
  return (
    <MuiCard sx={{ maxWidth: 345 }} {...props}>
      <CardActionArea>
        {image && (
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={imageAlt || title}
          />
        )}

        <CardContent>
          {title && (
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
          )}

          {text && (
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          )}

          {children}
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}
