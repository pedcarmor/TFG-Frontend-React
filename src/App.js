import 'styles/App.css';
import Users from 'views/showAllUsers'
import User from 'components/ShowUser'
import {
  BrowserRouter as Router,
  NavLink, Route,Routes
} from "react-router-dom"

function App() {
  return (
    
    <div className='container'>
    <Router>
      <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/api/admin/users">users</NavLink>
      </div>
      <Routes>
        <Route path="/api/admin/users" element={<Users />} ></Route>
        <Route path="/api/admin/users/:username" element={<User />} ></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
