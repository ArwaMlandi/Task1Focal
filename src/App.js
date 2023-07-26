import logo from './logo.svg';
import './App.css';
import Nav from './component/navBar/Nav';
import Hero from './component/Hero/Hero';
import MainPage from './component/mainPage/MainPage';
import Footer from './component/footer/Footer';
import pic1 from './images/pic1.jpg';
import pic4 from './images/pic4.jpg';
import pic3 from './images/pic3.jpg';
import { useState } from 'react';

function App() {
  const [title1]=useState("Fast Food");
  const [title2]=useState("Best Food");
  const [title3]=useState("Delecious Food");

  const [desc1]=useState("  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae a nemo voluptatum blanditiis ex! Sunt temporibus tenetur aspernatur quaerat perferendis quis error tempore nihil ipsam laudantium, quo eligendi culpa molestias.");

  const [desc2]=useState("  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae a nemo voluptatum blanditiis ex! Sunt temporibus tenetur aspernatur quaerat perferendis quis error tempore nihil ipsam laudantium, quo eligendi culpa molestias.");

  const [desc3]=useState("  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae a nemo voluptatum blanditiis ex! Sunt temporibus tenetur aspernatur quaerat perferendis quis error tempore nihil ipsam laudantium, quo eligendi culpa molestias.");
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <MainPage pic1={pic1} pic4={pic4} pic3={pic3} title1={title1} title2={title2} title3={title3}
     desc1={desc1} desc2={desc2} desc3={desc3}/>
     <Footer/>
    </div>
  );
}

export default App;
