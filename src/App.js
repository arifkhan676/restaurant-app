import './App.css';
import MainComponent from './Components/MainComponent';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import myStore from './Components/Redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
