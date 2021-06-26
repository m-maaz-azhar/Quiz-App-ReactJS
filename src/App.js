import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './screens/Dashboard';
import Quiz from './screens/Quiz';
import Results from './screens/Results';

function App() {
  
  return (
    <Provider store={store}>
      <Router>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/quiz" component={Quiz}/>
                <Route exact path="/results" component={Results}/>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
