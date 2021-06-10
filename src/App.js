import './App.css';
import Todo from './components/todo';
const todos = [
  { id: 1, title: "wash dishes", completed: false },
  { id: 2, title: "make dinner", completed: true }
]
function App() {
  return (
    <div className="App">
{todos.map((todo) => 
<Todo todo={todo} />
)}
    </div>
  );
}

export default App;
