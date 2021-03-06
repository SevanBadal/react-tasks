const app = {
  title: 'Indecision App',
  subtitle: 'Let the computer decide',
  options: []
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderApp();
  }

};
const removeAll = () => {
  app.options = [];
  renderApp();
};
const numbers = [55, 101, 1000];
const appRoot = document.getElementById('app');
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}> Remove All</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="enter todo" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
