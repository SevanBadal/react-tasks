// component VisibilityToggle
  // render(), constructor(), handleToggleVisibility()
  // state: visibility -> false
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibilty = this.toggleVisibilty.bind(this);
  }
  toggleVisibilty() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibilty}>
          {this.state.visibility ? 'hide details' : 'show details'}
        </button>
        {
          this.state.visibility && (
            <div>
              <p>{this.props.details}</p>
            </div>
          )
        }
      </div>
    );
  }
}
const root = document.getElementById('app');
ReactDOM.render(<VisibilityToggle details="Hey, these are some details"/>, root);
// let show = false;
// const toggleDetails = () => {
//   show = !show;
//   renderApp();
// }
// const details = "Hey. These are some details you can see!";

// const root = document.getElementById('app');

// const renderApp= () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {show ? 'hide details' : 'show details'}
//       </button>
//       {show && (
//         <div>
//           <p>{details}</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, root);
// };

// renderApp();
