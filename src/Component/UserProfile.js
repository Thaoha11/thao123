import React, { Component } from 'react';
import './admin.css';
import './userProfile.css';
class UserProfile extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" style={{ display: 'flex' }}>

                    {/* ========== Left Sidebar Start ========== */}
                    <div className="left-side-menu">
                        <div className="slimscroll-menu" style={{ width: '260px' }}>
                            {/*- Sidemenu */}
                            <div id="sidebar-menu" >
                                <ul className="metismenu" id="side-menu">
                                    <li>
                                        <h2>Menu</h2>
                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-th-list" style={{ marginRight: '10px' }}></i>
                                            <span>Dashboard</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-users" style={{ marginRight: '10px' }}></i>
                                            <span>user profile</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-map" style={{ marginRight: '10px' }}></i>
                                            <span>map</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-bell" style={{ marginRight: '10px' }}></i>
                                            <span>notification</span>
                                        </a>


                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-leaf" style={{ marginRight: '10px' }}></i>
                                            <span>Icon</span>
                                        </a>

                                    </li>
                                    <li>
                                        <a className='menu-left' href=''>
                                            <i class="fa fa-rocket" style={{ marginRight: '10px' }}></i>
                                            <span>UI Elements</span>
                                        </a>


                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar */}
                            <div className="clearfix" />
                        </div>
                        {/* Sidebar -left */}
                    </div>

                    <div className="content-page">
                        <div className="content">

                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-12">
                                        <div className="page-title-box">
                                            <div className="page-title-right">
                                                <ol className="breadcrumb m-0">
                                                    <li className="breadcrumb-item"><a href="">FB</a></li>
                                                    <li className="breadcrumb-item active">User Profile</li>
                                                </ol>
                                            </div>
                                            <h4 className="page-title">User Profile</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4 mx-3">
                                    <table id="customers">
                                        <tbody><tr>
                                            <th>Email</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Actions</th>
                                        </tr>
                                            <tr>
                                                <td>Alfreds Futterkiste</td>
                                                <td>Maria Anders</td>
                                                <td>Germany</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Ernst Handel</td>
                                                <td>Roland Mendel</td>
                                                <td>Austria</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Island Trading</td>
                                                <td>Helen Bennett</td>
                                                <td>UK</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Königlich Essen</td>
                                                <td>Philip Cramer</td>
                                                <td>Germany</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Laughing Bacchus Winecellars</td>
                                                <td>Yoshi Tannamuri</td>
                                                <td>Canada</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Magazzini Alimentari Riuniti</td>
                                                <td>Giovanni Rovelli</td>
                                                <td>Italy</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>North/South</td>
                                                <td>Simon Crowther</td>
                                                <td>UK</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Paris spécialités</td>
                                                <td>Marie Bertrand</td>
                                                <td>France</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Paris spécialités</td>
                                                <td>Marie Bertrand</td>
                                                <td>France</td>
                                                <td>
                                                    <button className='btn-edit'><i class="far fa-edit"></i></button>
                                                    <button className='btn-delete'><i class="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                        </tbody></table>


                                </div>





                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
export default UserProfile;