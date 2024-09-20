import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <div className="profile-grid">
        <UserProfile name="Kenneth Castro" age={22} location="QC" />
        <UserProfile name="Ken Chii" age={20} location="Kyoto" />
        <UserProfile name="Kay Si" age={21} location="Luzon" />
      </div>
    </div>
  );
}
export default App;