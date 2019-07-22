import Elements, { watch, dispatch } from '../../nozes.js';
import InputForm from './InputForm.js';
import Tasks from './Tasks.js';
import Footer from './Footer.js';

const { div, h1 } = Elements;

function App() {
  watch('tasklist log', console.log);

  return div(
    h1('Todo List'),
    InputForm(),
    Tasks(),
    Footer()
  );
}

export default App;
