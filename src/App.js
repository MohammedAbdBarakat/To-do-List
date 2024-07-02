import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import TaskDetails from './TaskDetails';
import SortTasks from './SortTasks';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/tasks/:id'>
              <TaskDetails />
            </Route>
            <Route path='/sortTasks'>
              <SortTasks />
            </Route>
            <Route path='/*'>
              <NotFound />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
