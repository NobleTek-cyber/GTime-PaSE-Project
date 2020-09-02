import React from 'react';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
         
    <nav className="navbar">
      <div className="container">
        <a href="#">Hulk</a>
        
        <a href="#" className="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>

   
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

       
        <div className="sample-wallpaper">
          
          <article className="wallpaper">
            <img src="./img/venom-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          
          <article className="wallpaper">
            <img src="./img/hulk-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

         
          <article className="wallpaper">
            <img src="./img/venom-2.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
      </div>
    </header>
      </div>
    );
  }
}

export default App;
