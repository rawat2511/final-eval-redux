import { useSelector } from 'react-redux';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Users from './Components/UsersPage/Users';

function App() {
  const person = useSelector(state => state.person.person);
  console.log(person);
  return (
    <div className="App">
      <AllRoutes />
      
    </div>
  );
}

export default App;
