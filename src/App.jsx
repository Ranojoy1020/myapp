
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
// import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (

    <div className="App bg-dark">
      <Header/>
      {/* <Counter/> */}
      <Todo/>
    </div>
  );
}

export default App;
