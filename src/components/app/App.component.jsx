import React from 'react';
import './App.style.sass';
import '../../assets/css/reset.css'
import '../../assets/css/fontello.css';
import {Header} from "../header/header.component";
import {Footer} from "../footer/footer.component";
import {Request} from "../reauest-form/request-form.component";
import {Advantages} from "../advantages/advantages.component"


export function App() {
  return (
    <div className="App">
      <Header />
      <Request />
      <Advantages />
      <Footer />
    </div>
  );
}

export default App;
