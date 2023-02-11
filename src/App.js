import './App.css';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import { useEffect, useState } from 'react';

function App() {

  const [isLogged, setIsLogged] = useState(null)



  const logInControl = () => {
    localStorage.getItem("token") ? setIsLogged(true) : setIsLogged(null);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  useEffect(() => {
    logInControl();
  }, [isLogged]);

  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    logOut();
  });

  console.log(isLogged);

  return (
    <div className="App">{isLogged ? <SearchPage logOut={logOut} /> : <LoginPage isLogged={isLogged} setIsLogged={setIsLogged} />}</div>
  );
}

export default App;

