import React from "react"
import {  Routes, Route} from "react-router-dom";
import Calculator from "../Components/Calculator/calculator";
import Home from "../Components/home";
//import ReqLogin from "../Components/ReqLogin";
import ParentComponent from "../Components/ParentChild/ParentComponent";
//import ParentDataKaryawan from "../Components/ParentChild/parentData";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import SignIn from "../Components/signIn";
import UserRedux from "../Components/Pages/userRedux";
import AddUserRedux from "../Components/Pages/AdduserRedux";
import EditUserRedux from "../Components/Pages/EdituserRedux"
import { useNavigate } from "react-router-dom"
import TopSearch from "../datatables/dataTablesReact";



const RoutesPath = (props) => {

  return (
    <div>
        <Header/>
        <Sidebar/>
      <Routes>      
        <Route path='/login' element={<SignIn/>}/>      
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route path='/datatables' element={<PrivateRoute><TopSearch/></PrivateRoute>}/>
        <Route path='/user' element={<PrivateRoute><UserRedux/></PrivateRoute>}/>
       
        <Route path='/adduser' element={<PrivateRoute><AddUserRedux/></PrivateRoute>}/>
        <Route path='/edit' element={<PrivateRoute><EditUserRedux/></PrivateRoute>}/>
        <Route path='/calculator' element={<PrivateRoute><Calculator/></PrivateRoute>}/>
        <Route path='/parentchild' element={<PrivateRoute><ParentComponent/></PrivateRoute>}/>
       
    </Routes>
    </div>
  )
};
const PrivateRoute = (props) => {
  let navigate = useNavigate()
const token=localStorage.getItem('token')
if(!token) return navigate('/login')
return props.children


}
;

export default RoutesPath
