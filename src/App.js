// import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import {UserContextProvider} from './UserContext'


function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <Greet />
      </UserContextProvider>
      
    </div>
  );
}

export default App;
