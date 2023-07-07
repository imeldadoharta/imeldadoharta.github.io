import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import TutorialDataService from "../../Redux/services/TutorialService";
import { updateTutorial } from "../../Redux/Actions/tutorials";
import { useLocation } from 'react-router-dom';



const EditUserRedux = () => {

    const { state } = useLocation();
    const { id } = state || {};

    let navigate = useNavigate()

    const dispatch = useDispatch();
    const [dataUser, setdataUser] = useState({
        id: 0,
        username: '',
        password: ''
    })

    useEffect(() => {
        TutorialDataService.get(id)
            .then(res => {
                setdataUser({
                    ...dataUser,
                    id: res.data.id,
                    username: res.data.username,
                    password: res.data.password,
                })
            })
            .catch(error => alert(error))
    }, [])


    const eventHandler = nama => event => {
        setdataUser({ ...dataUser, [nama]: event.target.value })
    }


    const updateContent = (e) => {
        e.preventDefault();
        dispatch(updateTutorial(dataUser.id, dataUser))
            .then(() => {
                navigate('/user');
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (


        <main id="main" class="main">

            <div class="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <section class="section dashboard">
                <div class="row">


                    <div class="col-lg-5">
                        <div class="row">
                        <form class="row g-3">
                    <div class="col-12">
                        <label for="inputNanme4" class="form-label">Username</label>
                        <input value={dataUser.username} onChange={eventHandler('username')} type="text" class="form-control" id="inputNanme4" />
                    </div>
                    <div class="col-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input value={dataUser.password} onChange={eventHandler('password')} type="password" class="form-control" id="inputPassword4"/>
                    </div>
                  
                    <div >                       
                        <button onClick={updateContent} class="btn btn-primary">Save </button>
                        
                    </div>
                </form>
                            {/* <input value={dataUser.username} onChange={eventHandler('username')} type='text' placeholder="username" />
                            <input value={dataUser.password} onChange={eventHandler('password')} type='password' placeholder="password" />
                            <button onClick={updateContent}>Save Edit User</button> */}
                        </div>
                    </div>



                </div>
    

            </section>

        </main>


    )
};

// export default productRedux



export default EditUserRedux
