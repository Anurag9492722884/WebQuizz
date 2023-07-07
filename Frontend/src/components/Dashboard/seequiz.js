import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard2() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://www.shutterstock.com/image-vector/quiz-comic-pop-art-style-260nw-1506580442.jpg"
        title="Create Quiz"
      />
      <CardContent>
      <Typography gutterBottom variant="h7" component="div">
      Access a centralized view of all the quizzes you have created as an administrator. Stay organized and manage your quizzes effectively. Easily navigate through the list of quizzes, edit their details, and monitor their usage. Simplify quiz administration and ensure seamless management of your quiz library."
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
     
          <Button onClick={() => navigate("/see-all-quiz")}>See Created Quizzes</Button>
        
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
