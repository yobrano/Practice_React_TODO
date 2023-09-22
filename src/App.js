import './App.css';
import Layout from './Components/Layout';
import TodoManager from './Components/TodoContextManager';
import TodoForm from './Components/TodoForm';
import TodoListView from './Components/TodoListView';

function App() {
	return (
		
			<TodoManager>
				<Layout/>
			</TodoManager>

	);
}

export default App;
