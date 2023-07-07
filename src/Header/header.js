import React,{useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";
//import { Link } from 'react-router-dom'

const Header = (props) => {
    const [isLoggedOut, setisLoggedOut] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
      checkStorage();
      return () => {};
    }, [isLoggedOut]);

    function checkStorage() {
      if (localStorage.getItem("token")) {
        setisLoggedOut(true);
      } else {
        setisLoggedOut(false);
      }
    }

    const logout = () => {        
        localStorage.removeItem("token");
        setisLoggedOut(false);
        navigate('/login')
      };
    return (

        <header id="header" class="header fixed-top d-flex align-items-center">

            <div class="d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt=""></img>
                    <span class="d-none d-lg-block">React</span>
                </a>
                <i class="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div class="search-bar">
                <form class="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
                </form>
            </div>
            <div class="header-nav ms-auto">
    

    
            {isLoggedOut? (
                <p onClick={logout} >
       <i class="bi bi-box-arrow-right"></i>
        <span >Sign Out</span><span>&nbsp;&nbsp;</span>
        </p>
            ):<span>&nbsp;&nbsp;</span>}


</div>

        </header>

    )
};

export default Header;
