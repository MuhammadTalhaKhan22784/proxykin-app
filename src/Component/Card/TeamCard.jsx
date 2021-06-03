import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function TeamCard(props) {
  return (
    // <Card className="teamcard">
    //   <CardMedia
    //     className="tcard_img"
    //     image={props.img}
    //     title="Contemplative Reptile"
    //   />
    //   <div className="tcard_bottom">
    //     <Typography gutterBottom variant="h5" component="h2">
    //       {props.name}
    //     </Typography>
    //     <Typography variant="body2" color="textSecondary" component="span">
    //       {props.role}
    //     </Typography>
    //   </div>
    // </Card>

    <div className="edu_team_main_box">
      <h3>
        <Link to="/#">Jacklen Fandores</Link>
      </h3>
      <p>Web Designer</p>
      <ul>
        <li>
          <Link to="/#">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link to="/#">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="/#">
            <i className="fab fa-youtube"></i>
          </Link>
        </li>
        <li>
          <Link to="/#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
      </ul>
      <div className="edu_team_inner_box">
        <img src={props.img} alt="img" />
      </div>
    </div>
 
 );
}
