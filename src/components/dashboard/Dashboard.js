import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeContext } from "../../context/ThemeContext";
const useStyles = makeStyles((theme) => ({
  div1: {
    marginLeft: "300px",
    marginRight: "100px",
    marginTop: "100px",
  },
  div2: {
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "100px",
  },
}));
function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { disOpen } = context;
        console.log(context);
        return (
          <div className={disOpen ? classes.div1 : classes.div2}>
            <div>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </div>
            <br></br>
            <div>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </div>{" "}
            <br></br>
            <div>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </div>{" "}
            <br></br>
            <div>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Dashboard;

// <div className={classes.div1}>
// <div>
//   What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//   printing and typesetting industry. Lorem Ipsum has been the
//   industry's standard dummy text ever since the 1500s, when an
//   unknown printer took a galley of type and scrambled it to make a
//   type specimen book. It has survived not only five centuries, but
//   also the leap into electronic typesetting, remaining essentially
//   unchanged. It was popularised in the 1960s with the release of
//   Letraset sheets containing Lorem Ipsum passages, and more recently
//   with desktop publishing software like Aldus PageMaker including
//   versions of Lorem Ipsum
// </div>
// <br></br>
// <div>
//   What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//   printing and typesetting industry. Lorem Ipsum has been the
//   industry's standard dummy text ever since the 1500s, when an
//   unknown printer took a galley of type and scrambled it to make a
//   type specimen book. It has survived not only five centuries, but
//   also the leap into electronic typesetting, remaining essentially
//   unchanged. It was popularised in the 1960s with the release of
//   Letraset sheets containing Lorem Ipsum passages, and more recently
//   with desktop publishing software like Aldus PageMaker including
//   versions of Lorem Ipsum
// </div>{" "}
// <br></br>
// <div>
//   What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//   printing and typesetting industry. Lorem Ipsum has been the
//   industry's standard dummy text ever since the 1500s, when an
//   unknown printer took a galley of type and scrambled it to make a
//   type specimen book. It has survived not only five centuries, but
//   also the leap into electronic typesetting, remaining essentially
//   unchanged. It was popularised in the 1960s with the release of
//   Letraset sheets containing Lorem Ipsum passages, and more recently
//   with desktop publishing software like Aldus PageMaker including
//   versions of Lorem Ipsum
// </div>{" "}
// <br></br>
// <div>
//   What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//   printing and typesetting industry. Lorem Ipsum has been the
//   industry's standard dummy text ever since the 1500s, when an
//   unknown printer took a galley of type and scrambled it to make a
//   type specimen book. It has survived not only five centuries, but
//   also the leap into electronic typesetting, remaining essentially
//   unchanged. It was popularised in the 1960s with the release of
//   Letraset sheets containing Lorem Ipsum passages, and more recently
//   with desktop publishing software like Aldus PageMaker including
//   versions of Lorem Ipsum
// </div>
// </div>
