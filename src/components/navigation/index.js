import React from "react";
import './style.css';
import MenuItem from "./menu-item";

function Navigation () {

 const menu = [
  { title: "home page" },
  {
   title: 'pages',
   items: [
    { title: 'page 1' },
    { title: 'page 2' },
    { title: 'page 3' },
    { title: 'page 4' },
   ]
  },
  { title: "ABDC", items: [{ title: '1' }, { title: '2' }] }
 ];

 return (
  <header>
   {menu.map(elem => <MenuItem title={elem.title} items={elem.items} />)}
  </header>
 );
}

export default Navigation;