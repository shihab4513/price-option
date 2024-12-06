import React, { useState } from 'react'
import Link from '../Link/Link';
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Nav = () => {
    const [open,setOpen]=useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
      
      
  
    return (
     <nav className='md:hidden text-2xl'>
        <div onClick={()=>{setOpen(!open)}}>
            {
                open===true ? <AiOutlineClose></AiOutlineClose>:<AiOutlineMenu className=''></AiOutlineMenu>
            }
        
        </div>
        
        <ul className='md:flex'>
        {
        routes.map(route=><Link route={route} key={route.id}></Link>)
      }
        </ul>
        
     </nav>
  )
}

export default Nav