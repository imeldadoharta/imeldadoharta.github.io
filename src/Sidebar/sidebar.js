import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
// import SidebarLogin from "./menudenganlogin";
// import MenutanpaLogin from "./menutanpalogin";
//import {sidebarLogin,menutanpaLogin} from '../Sidebar/sidebar'

const Sidebar = (props) => {
    const [isLogged, setisLogged] = useState(false);

    useEffect(() => {
        checkStorage();
        return () => { };
    }, [isLogged]);

    function checkStorage() {
        if (localStorage.getItem("token")) {
            setisLogged(true);
        } else {
            setisLogged(false);
        }
    }



    return (

        <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">

                <li class="nav-item">
                    <Link to="/home" class="nav-link" >
                        <i class="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* {isLogged ?<SidebarLogin/>:<MenutanpaLogin/>} */}

                <li class="nav-item">
                    <Link to="/home " class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
                        <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        {!isLogged ? (
                            <li >
                                <Link to="/login">
                                    <i class="bi bi-circle"></i><span>Login</span>
                                </Link>
                            </li>
                        ) : <div></div>}
                        <li>
                            <Link to="/home">
                                <i class="bi bi-circle"></i><span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                <i class="bi bi-circle"></i><span>User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/datatables">
                                <i class="bi bi-circle"></i><span>Data</span>
                            </Link>
                        </li>
                      
                        <li>
                            <Link to="/parentchild">
                                <i class="bi bi-circle"></i><span>Parent Component</span>
                            </Link>
                        </li>

                    </ul>
                </li>
            </ul>

        </aside>

    )
};







export default Sidebar;
