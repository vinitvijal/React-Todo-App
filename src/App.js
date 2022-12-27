
import './App.css';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import ShowTodo from './components/ShowTodo';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreateTodo/>
      <ShowTodo/>
    </div>
  );
}

export default App;
