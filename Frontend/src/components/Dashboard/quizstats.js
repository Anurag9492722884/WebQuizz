import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MediaCard3() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://cdn.vectorstock.com/i/1000x1000/41/56/stats-people-logo-icon-design-vector-22904156.webp"
        title="Create Quiz"
      />
      <CardContent>
      <Typography gutterBottom variant="h7" component="div">
      Get a comprehensive overview of student ranks in this quiz. Our ranking system considers both performance and submission time, ensuring fair evaluation. Easily identify the top-performing students and recognize their achievements based on their ranks."
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
     
          <Button onClick={() => navigate("/student-stats")}>show quizzes stats</Button>
        
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
