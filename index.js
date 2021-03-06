/**
 * CHALLENGE 7-6 - TASK
 *
 * Add one more button with color "secondary".
 * Also change styles of the existing and new buttons
 * using property "variant".
 *
 * You can use one of the following values:
 * "text", "flat", "outlined", "contained", "raised", "fab", "extendedFab"
 */
//code before

// class MyButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clickedQty: 0 };
//   }

//   render() {
//     return React.createElement(
//       window["material-ui"].Button,
//       {
//         variant: "contained",
//         color: this.props.color,
//         onClick: () =>
//           this.setState({
//             clickedQty: ++this.state.clickedQty
//           })
//       },
//       this.state.clickedQty > 0
//         ? `Button was clicked ${
//             this.state.clickedQty
//           } times`
//         : "Click me!!!"
//     );
//   }
// }

// const button1 = React.createElement(MyButton, {
//   color: "primary"
// });

// const buttonContainer1 = document.getElementById("button1");

// ReactDOM.render(button1, buttonContainer1);

// code after
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedQty: 0 };
  }

  render() {
    return React.createElement(
      window["material-ui"].Button,
      {
        variant: this.props.variant || "contained",
        color: this.props.color,
        onClick: () =>
          this.setState({
            clickedQty: ++this.state.clickedQty
          })
      },
      this.state.clickedQty > 0
        ? `Button was clicked ${
            this.state.clickedQty
          } times`
        : "Click me!!!"
    );
  }
}

const button1 = React.createElement(MyButton, {
  color: "primary"
});

const buttonContainer1 = document.getElementById("button1");

ReactDOM.render(button1, buttonContainer1);


const button2 = React.createElement(MyButton, {
  variant: "raised",
  color: "secondary"
  
})

const buttonContainer2 = document.getElementById("button2");

ReactDOM.render(button2, buttonContainer2);
