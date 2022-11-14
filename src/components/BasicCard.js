import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  const { title, description, component: Component, state, setState  } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">{title} </Typography>

        <Typography sx={{ marginTop: 4 }} variant="body1">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: 10 }}>
        {!Component ? null : <Component state={state} setState={setState} />}
      </CardActions>
    </Card>
  );
}
