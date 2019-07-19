// App.js
import Nozes from '../../nozes.js';
import Message from './Message.js';
import Notifier from './Notifier.js';
const { div, h1 } = Nozes;

function App() {
  return div(
    h1('Messenger'),
    Notifier(),
    Message('no message yet')
  );
}

document.body.appendChild(App());