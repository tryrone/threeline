import './App.scss';
import store from './state/store';
import { Provider } from 'react-redux';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
