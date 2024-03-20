import "./card.css";
import Equilibrium from "/images/image-equilibrium.jpg";
import Eterium from "/logos/icon-ethereum.svg";
import Clock from "/logos/icon-clock.svg";
import Avatar from "/images/image-avatar.png"
export default function Card() {
   
  return (
    <div className="container">
      <img className="equilibrium" src={Equilibrium} alt="Equilibrium img" />
    <h1 className="title">Equilibrium #3429</h1> 
    
      <p className="text">Our Equilibrium collection promotes balance and calm.</p>
      <div className="info_container">
        <div className="eterium">
          <img  src={Eterium} alt="eterium icon" />
          <span>0.041 ETH</span>
        </div>
        <div className="clock">
          <img src={Clock} alt="clock icon" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="avatar">
        <img src={Avatar} alt="avatar img" />
        <p>Creation of <span>Jules Wyvern</span></p>
   
      </div>
    </div>
  );
}
