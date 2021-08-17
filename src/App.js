import logo from './logo.svg';
import './App.css';
import react from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
          <ProfilePhoto />
          <div>
    <FullName />
    <Adress />
    </div>
    </div>
  );
}

export default App;
