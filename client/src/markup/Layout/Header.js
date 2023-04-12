import {userActions} from 'actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


// import {} from 'react-router-dom'

function Header(props) {

    const [sticky, setSticky] = useState("");

    useEffect(() => {
        const isSticky = (e) => {
            const scrollTop = window.scrollY;
            scrollTop >= 25 ? setSticky("sticky") : setSticky("");
        };
        // sidebar open/close
        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () {
                checkLi(this)
            });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

        window.addEventListener('scroll', isSticky);
        return () => window.removeEventListener('scroll', isSticky);

    }, [])
    const headerClass = "site-header mo-left header " + sticky;

    const dispatch = useDispatch();

    const {user, loggedIn} = useSelector(state => state.authentication);

    function handleLogout() {
        dispatch(userActions.logout());
    }

    return (
        <header className={headerClass}>
            <div className="top-bar bg-dark">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="dlab-topbar-left">
                            <ul>
                                <li>
                                    <Link to={'/hotel'} className="site-button-link"> Hotels </Link>
                                </li>
                                <li>
                                    <Link className="site-button-link" to={'/place'}>Places</Link>
                                </li>
                                <li><Link className="site-button-link" to={'/packages'}>Packages</Link></li>
                            </ul>
                        </div>
                        <div className="dlab-topbar-right top-login">
                            {!loggedIn &&
                                <ul>
                                    <li><Link to={'/login'} className="site-button-link">Login</Link></li>
                                    <li><Link to={'/register'} className="site-button-link">Register</Link></li>
                                </ul>
                            }
                            {loggedIn &&
                                <ul>
                                    {user.role === 'ADMIN' &&
                                       <>
                                        <li><Link to={'/admin/rooms-manager'} className="site-button-link">Admin
                                            Room</Link></li>

                                        <li><Link to={'/admin/users-manager'} className="site-button-link">Admin
                                        User</Link></li>

                                           <li><Link to={'/admin/orders-manager'} className="site-button-link">Admin
                                               Order</Link></li>
                                       </>
                                    }
                                    <li><Link to={'/profile'} className="site-button-link">{user.fullName}</Link></li>
                                    <li><Link to={'/'} onClick={() => handleLogout()}
                                              className="site-button-link">Logout</Link></li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky-header navbar-expand-lg">
                <div className="main-bar clearfix onepage">
                    <div className="container clearfix">
                        <div className="logo-header mostion">
                            <Link to={'./'}><img src={require('./../../images/logo.png')} alt=""/></Link>
                        </div>
                        <button className="navbar-toggler collapsed navicon justify-content-end" type="button"
                                data-toggle="collapse" data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="header-nav navbar-collapse collapse navbar myNavbar justify-content-end"
                             id="navbarNavDropdown">
                            <ul className="nav navbar-nav">
                                <li><Link to={'/home'}>Home</Link>
                                </li>
                                <li><Link to={'/about'}> About Us</Link>
                                </li>
                                <li><Link to='/accommodation'>Accommodation</Link>
                                </li>
                                <li><Link to='/blogleftsidebar'>Blog </Link>
                                </li>
                                <li><Link to={'/contact'} className="dez-page">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;