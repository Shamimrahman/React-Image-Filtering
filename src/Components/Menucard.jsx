import React from "react";
import ReactDOM from "react-dom";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import './Menucard.css'

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 270,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
             boxShadow: "0 8px 70px -12px rgba(0,0,0,0.3)",
            transition:"all .25s linear",
             transform: "scale(1.1)",



          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%"
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold"
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.unit
            }
          }
        }
      }
    }
  }
};

function Menucard({image,name,price,description}) {
  return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className="App">
          <Card className={"MuiEngagementCard--01 item-inside"} >
            <CardMedia
              image={ 
               image
              }
             
            />
            <CardContent>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
              {name}
              </Typography>
              <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
            {price}
            </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
               {description}
              </Typography>
              <Divider light />
              <button className="btnred ml-12 btnFade">Order</button>
            </CardContent>
          </Card>
        </div>
      </MuiThemeProvider>
  );
}

export default Menucard;