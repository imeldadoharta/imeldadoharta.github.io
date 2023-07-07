import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { retrieveTutorials, deleteTutorial } from "../../Redux/Actions/tutorials";

const UserRedux = () => {
    let navigate = useNavigate()

    let users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(retrieveTutorials());
    }, [dispatch]);


    const editdata = (id) => {
        navigate('/edit', { state: { id } })
    }

    const deletedata = (id) => {
        dispatch(deleteTutorial(id))

    }

    return (
        <div>
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div class="row">


                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-4">
                                    <Link to='/adduser' className="btn btn-sm btn-primary mr-1" >Add Data</Link>

                                    {/* <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                                        Add Data
                                    </button>
                                    <div class="modal fade" id="basicModal" tabindex="-1">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Basic Modal</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">

                                                    <form class="row g-3">
                                                        <div class="col-12">
                                                            <label for="inputNanme4" class="form-label">Username</label>
                                                            <input value={dataUser.username} onChange={eventHandler('username')} type="text" class="form-control" id="inputNanme4" />
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputPassword4" class="form-label">Password</label>
                                                            <input value={dataUser.password} onChange={eventHandler('password')} type="password" class="form-control" id="inputPassword4" />
                                                        </div>

                                                        <div >
                                                            <button onClick={addData} class="btn btn-primary">Save User</button>

                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                                <table clas="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Username</th>
                                            <th >Password</th>
                                            <th width="250px">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users && users.map((user, i) => {
                                                return (

                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.password}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-primary mr-1" onClick={() => editdata(user.id)}>Edit</button>
                                                            &nbsp;<button className="btn btn-sm btn-primary mr-1" onClick={() => deletedata(user.id)}>Delete</button>
                                                        </td>
                                                    </tr>

                                                )
                                            })

                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>

                </section>

            </main>





        </div>
    )
};

// export default productRedux



// const mapdispatchToProps = (dispatch) => {
//     return {
//         onGetUser: payload => dispatch(doGetUser(payload)),
//         onAddProduct: payload => dispatch(doAddUser(payload)),
//         onEditProduct: payload => dispatch(doUpdateUser(payload)),

//     }
// }



// export default connect(null, mapdispatchToProps)(UserRedux)
export default UserRedux
