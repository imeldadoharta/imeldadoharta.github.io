import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { retrieveTutorials } from "../../Redux/Actions/tutorials";
import { MDBDataTableV5 } from 'mdbreact';

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

    const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Username',
        field: 'Username',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Username',
        },
      },
      {
        label: 'Password',
        field: 'Password',
        width: 270,
      }
    ],
    rows: [
      {users}
    ],
  });
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
                                    <Link to='/adduser' className="btn btn-sm btn-primary mr-1" >Add</Link>
                                </div>
                                {/* <table clas="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Aksi</th>
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
                                                        <div class="col-lg-4"><button className="btn btn-sm btn-primary mr-1" onClick={() => editdata(user.id)}>Edit</button></div>
                                                    </td>
                                                </tr>
                                               
                                            )
                                        })

                                    }
                                     </tbody>
                                </table> */}
                                 <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
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
