import React, {useState, useEffect, Component} from "react";
import colors from "tailwindcss/colors";
import logo from "../../assets/styles/images/Sagelogo2.png"
import banner from "../../assets/styles/images/NameBanner.png"
import "./nav.css"

const NavBar =()=>{

    const [scroll, setScroll]=useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);

    const getScroll = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setScroll(false); 
          } else { // if scroll up show the navbar
            setScroll(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      };
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', getScroll);
            
          // cleanup function
          return () => {
            window.removeEventListener('scroll', getScroll);
          };
        }
      }, [lastScrollY]);
    

  return (
  
//   <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>Navbar</div>);
<header className=" w-full h-0 z-50 ">
  <div className={scroll? 'navimg-fixed ' : 'navimg-fixed'} >
  {/* <img 
        src= {logo}
        alt = "Roof Tiles"
        class="w-64 h-48 pb-8 z-50"/> */}
  <button class="relative w-full h-auto z-30"/>
  </div>
<nav
  class={scroll ? 'navbar-fixed z-30 w-full fixed bg-transparent text-gray-200 navbar navbar-expand-lg h-32 transition-opacity duration-1000 ease-in-out opacity-100 ' : 'navbar-fixed z-30 w-full fixed bg-transparent text-gray-200 navbar navbar-expand-lg h-32 transition-opacity duration-1000 ease-in-out opacity-100 '}
>
<li class="w-32 h-36 absolute -rotate-90 z-30" >
						<img src={logo}/>
					  </li>
            <div class=" flex justify-center items-center top-4 left-24 absolute z-30 w-1/3 h-auto drop-shadow-lg shadow-light">
						<img src={banner}/>
					  </div>
  <div class='navbar-fixed w-full px-32 mx-4 grid grid-cols-5 h-fit bg-transparent py-8'>
    <div class="p-1  grid col-start-3 col-end-6 bg-primary relative overflow-hidden rounded-lg shadow-sm shadow-dark ">
      <div className="flex justify-center items-center w-full">
      <ul class="w-full navbar-nav relative flex flex-row justify-center items-cente px-4 gap-12 list-style-none mr-auto font-bold opacity-100">

        <li class="nav-item p-2 hover:text-light2 focus:text-orange-400">
          <a class="nav-link p-0" href="/"
          >Home</a>
        </li>
        <li class="nav-item p-2 hover:text-light2 focus:text-orange-400">
          <a class="nav-link p-0" href="#services"
          >Blog</a>
        </li>
        <li class="nav-item p-2 hover:text-light2 focus:text-orange-400">
          <a
            class="nav-link p-0"
            href="#reviews"
            >Herbs</a
          >
        </li>
        <li class="nav-item p-2 hover:text-light2 focus:text-orange-400">
          <a
            class="nav-link p-0"
            href="./404"
            >Spirtuality</a
          >
        </li>
        <li class="nav-item p-2  hover:text-light2 focus:text-orange-400">
          <a
            class="nav-link p-0"
            href="#contact"
            >Products</a
          >
        </li>
        <li className="nav-item  py-2 opacity-90 hover:text-light2 hover:scale-110">
            <button type="click">Shop</button>
        </li>
      </ul>
      </div>
      </div>
</div>
</nav>
</header>
)
}


export default NavBar;