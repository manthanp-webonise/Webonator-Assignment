import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter , Route , Switch, Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';

const Routes = (
  <Switch>
  <Route exact path="/" component={Login}/>
  <Route path="/Dashboard" component={Dashboard}/>
  <Redirect to="/" />
  </Switch>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {Routes}
      </header>
    </div>
  );
}

export default App;
