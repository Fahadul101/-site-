import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
export default function NabBar(){
    return(
        <header className="bg-green-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                   <NavLink to ="/" exact
                   activeClassName="text-white" 
                   className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-200 text-4xl font-bold cursive tracking-widest">
                       Fahad's Life
                    </NavLink>
                    <NavLink to="/post"
                     className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-100"
                     activeClassName="text-red-100 bg-green-700"
                     >
                       Blog Posts
                    </NavLink>
                    <NavLink to="project"className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-100"
                    activeClassName="text-red-100 bg-green-700"
                    >
                       Projects
                    </NavLink>
                    <NavLink to="about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-100"
                    activeClassName="text-red-10 bg-green-700"
                    >
                       About 
                    </NavLink> 
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                     <SocialIcon url="https://www.linkedin.com/in/fahadul-islam-04b463172/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                     <SocialIcon url="https://github.com/Fahadul101" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                     <SocialIcon url="https://www.facebook.com/Fahadul.Islam112" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                </div>
            </div>
        </header>

    )
}