import React from "react";
import "./NavBar.css"
const Array= [
    { name: 'Home', 
      link:"#"},
    {name:'Services', 
      link:"#"}, 
    {name:'Contact',
      link:"#"}
    ];
const NavBar =() => {
    return (
        <div className="nav-item">
            {Array.map(e=>(
            <div className="navigation">
                <a className={e.name==='Services' ? "dropdown" : "navmenu"} href={e.link}>{e.name}
                    {
                        e.name==='Services' && (<div class="dropdown-content">
                        <a href="#">For entrpreneurs</a>
                        <a href="#">For Students</a>
                        <a href="#">For hobbyists</a>
                    </div>)
                    }
                    
                </a>

               
            </div>
            )

            )}
        
        </div>
    );
}
export default NavBar;