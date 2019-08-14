// count - setup default prop value to zero
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
      name: 'title'
    };
  }
  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'));
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState ) {
    if(this.state.count !== prevState.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  addOne() {
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      };
    });
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }
  reset() {
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }
  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
const root = document.getElementById('app');
ReactDOM.render(<Counter />, root);
// let count = 0;
// const someId = 'idHere';
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} id={someId} className="btn">+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();
