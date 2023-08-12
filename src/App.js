import React from 'react';
import './App.css';
import Menu from './Menu';
import Header from './header'; // Corregido el nombre a "Header"
import Search from './search'; // Cambiado "search" por "Search"

function App() {
  return (
    <div className="App">
      <header>
        <Header /> {/* Usar el componente Header */}
      </header>
      <Menu />
      <Search /> {/* Usar el componente Search */}
    </div>
  );
}

export default App;

