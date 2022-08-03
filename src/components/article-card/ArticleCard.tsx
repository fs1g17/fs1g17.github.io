import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ArticleCardProps {
  imageUrl: string;
  title: string;
  body: string;
  readMoreUrl: string;
}

const ResponsiveCard = styled(Card)(({ theme }) => ({
  background: "red",
  [theme.breakpoints.up("md")]: {
    width: 700,
  },
  [theme.breakpoints.down("sm")]: {
    width: 350,
  },
}));

const ArticleCard = (props: ArticleCardProps) => (
  <ResponsiveCard>
    <CardActionArea style={{ background: "black" }}>
      <CardMedia
        component="img"
        height="160"
        image={props.imageUrl}
        alt="card image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="red"
          textAlign="center"
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="white">
          {props.body}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions
      style={{
        background: "black",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <a
        href={props.readMoreUrl}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button size="small" style={{ color: "red", fontSize: 14 }}>
          Read More
        </Button>
      </a>
    </CardActions>
  </ResponsiveCard>
);

export default ArticleCard;
