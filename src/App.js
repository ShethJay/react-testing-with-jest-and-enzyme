import React from 'react';
import Header from './components/header';
import Headline from './components/headline'
import './app.scss';

const tempArr = [{
  fName: 'Jay',
  lName: 'Sheth',
  email: 'Jay@gmail.com',
  age: 25,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline 
          header="posts" 
          desc="Click the button the to render posts"
          tempArr={tempArr} />  
      </section> 
    </div>
  );
}

export default App;
