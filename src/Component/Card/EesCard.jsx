import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function EesCard() {

  return (
    <Card className="eescard">
        <CardContent>
        <i className="fas fa-user-secret"></i>
          <Typography gutterBottom variant="h5" component="h2">
            PREVENT MISUSE,
            <br />
            ABUSE AND FRAUD
          </Typography>
        </CardContent>
    </Card>
  );
}
