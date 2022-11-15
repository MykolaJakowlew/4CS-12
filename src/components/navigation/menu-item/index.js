import React, { useState } from "react";
import './style.css';

function MenuItem (props) {

 const [show, setShow] = useState(false);

 const onMouseEnter = () => {
  console.log('onMouseEnter', props.title);
  setShow(true);
 };
 const onMouseLeave = () => {
  console.log('onMouseLeave', props.title);
  setShow(false);
 };

 let classList = 'menu-sub';

 if (show) {
  classList += ' show';
 }

 return <div
  onMouseLeave={onMouseLeave}
  onMouseEnter={onMouseEnter}
  className="menu-item"
 >
  {props.title}
  {
   props.items &&
   <div className={classList}>
    {/* <div className={`menu-sub ${show ? 'show' : ''}`}> */}
    {props.items.map(elem => <div>{elem.title}</div>)}
   </div>
  }
 </div>;
}

export default MenuItem;