import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://as2.ftcdn.net/v2/jpg/00/64/19/71/1000_F_64197195_bGtFNqSvL6wuSN3ppKNLmk3gi8Ba9Gwa.jpg"
        title="Create Quiz"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        Put your knowledge to the test and create your own interactive quiz!
          Test your audience, challenge their understanding, and have fun while
          designing questions on any topic of your choice. Get started now with
          our user-friendly 'Create Quiz' feature!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
          <Button onClick={() => navigate("/create-quiz")}>
            create a quiz
          </Button>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
