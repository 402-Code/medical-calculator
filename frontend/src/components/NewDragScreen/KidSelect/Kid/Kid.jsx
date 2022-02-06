import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

function Kid({ kid }) {
  return (
    <>
      <Card elevation={16} sx={{ boxShadow: "none" }}>
        <CardContent
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <Avatar sx={{ width: 50, height: 50 }}>{kid.name.slice(0, 2)}</Avatar>
          <Typography variant="h4">{kid.name}</Typography>
        </CardContent>
        <CardActions sx={{ pt: 0 }}>
          <ButtonGroup variant="contained">
            <Button component={Link} to={`/history/${kid.name}`}>
              Historia dawkowania
            </Button>
            <Button component={Link} to={`/edit/${kid.name}`}>
              Edytuj
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
}

export default Kid;
