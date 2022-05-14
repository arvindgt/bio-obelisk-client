import { NextPage } from "next";
import Link from 'next/link';
import Image from 'next/image';

const Header: NextPage = () => {
    return (
        <header id="masthead" className="site-header sticky-header header_default header_v1 affix-top">
            <div id="toolbar" className="toolbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="toolbar-container">
                                <aside id="text-2" className="widget widget_text">
                                    <div className="textwidget">
                                        <div className="thim-have-any-question">
                                            <div className="mobile">
                                                <i className="fa fa-phone"></i>
                                                <a href="tel:00123456789" className="value">(00) 123 456 789</a>
                                            </div>
                                            <div className="email">
                                                <i className="fa fa-envelope"></i>
                                                <a href="mailto:bioobelisk@abc.com">bioobelisk@abc.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                <aside id="login-popup-2" className="widget widget_login-popup">
                                    <div className="thim-widget-login-popup thim-widget-login-popup-base template-base">
                                        <div className="thim-link-login thim-login-popup">
                                            <Link href="/sign-up">
                                                <a className="register js-show-popup">
                                                    Register
                                                </a>
                                            </Link>
                                            <Link href="/sign-in">
                                                <a className="login js-show-popup">Login</a>
                                            </Link>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thim-nav-wrapper container">
                <div className="row">
                    <div className="navigation col-sm-12">
                        <div className="tm-table">
                            <div className="width-logo table-cell sm-logo">
                                <Link href="/">
                                    <a title="Education WP - Demo 2 - Education WordPress Theme" rel="home" className="thim-logo">
                                        <Image src="/images/logo.png" className="brand-logo logo-icon" alt="Bioobelisk logo" width="150" height="150" />
                                    </a>
                                </Link>
                            </div>
                            <nav className="width-navigation table-cell table-right">
                                <ul className="nav navbar-nav menu-main-menu">
                                    <li className="menu-item tc-menu-depth-0">
                                        <Link href="/">
                                            <a className="tc-menu-inner">Home</a>
                                        </Link>
                                    </li>
                                    <li className="menu-item tc-menu-depth-0">
                                        <a href="#" className="tc-menu-inner">About</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children tc-menu-depth-0 tc-menu-layout-column tc-menu-column-hide-title">
                                        <span className="tc-menu-inner">Courses</span>
                                        <div className="tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu tc-columns-4">
                                            <ul className="row">
                                                <li className="menu-item menu-item-has-children col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 1</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item   menu-item-3407  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Main Demo</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-home menu-item-3405  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Course Era</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-3406  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Online School</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-5799  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Languages School</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-6946  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Crypto</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item   menu-item-has-children menu-item-5808    col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 2</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item   menu-item-5810  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Courses Hub</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-4028  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Classic University</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-4202  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Modern University</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-3435  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Ivy League</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-6947  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo New Art</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item   menu-item-has-children menu-item-5809    col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 3</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item   menu-item-3898  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo New Edu</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-5941  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Stanford</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-5843  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Kindergarten</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-3899  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo One Instructor</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-6948  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Kid Art</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item   menu-item-has-children menu-item-6597    col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 4</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item   menu-item-3436  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo New Instructor</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-6598  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo React</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-5943  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Edtech</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-5942  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Grad School</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-6949  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Tech Camp</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-item menu-item-has-children tc-menu-depth-0 tc-menu-layout-column tc-menu-column-hide-title">
                                        <span className="tc-menu-inner">Long duration</span>
                                        <div className="tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu tc-columns-4">
                                            <ul className="row">
                                                <li className="menu-item menu-item-has-children col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 1</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item   menu-item-3407  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Main Demo</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-home menu-item-3405  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Course Era</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-3406  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Online School</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-5799  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Languages School</a>
                                                        </li>
                                                        <li className="menu-item   menu-item-6946  tc-menu-depth-2 ">
                                                            <a href="#" className="tc-menu-inner">Demo Crypto</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item   menu-item-has-children menu-item-5808    col-md-3 col-sm-12">


                                                </li>
                                                <li className="menu-item   menu-item-has-children menu-item-5809    col-md-3 col-sm-12">


                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-item   menu-item-has-children menu-item-95  tc-menu-depth-0  ">
                                        <span className="tc-menu-inner">Technical</span>
                                        <span className="icon-toggle">
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                        <ul className="sub-menu">
                                            <li className="menu-item   menu-item-5840   ">
                                                <a href="#" className="tc-menu-inner tc-megamenu-title">Membership</a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4451   ">
                                                <a href="#" className="tc-menu-inner tc-megamenu-title">Portfolio</a>
                                            </li>
                                            <li className="menu-item  menu-item-object-forum menu-item-3437   ">
                                                <a href="#" className="tc-menu-inner tc-megamenu-title">Forums</a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924   ">
                                                <a href="#" className="tc-menu-inner tc-megamenu-title">About Us</a>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96   ">
                                                <a href="#" className="tc-menu-inner tc-megamenu-title">FAQs</a>
                                            </li>
                                            <li className="menu-item   menu-item-5830   ">
                                                <a href="#" className="tc-menu-inner tc-megamenu-title">Sidebar Shop</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4528  tc-menu-depth-0  ">
                                        <a href="#" className="tc-menu-inner">Blog</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-127  tc-menu-depth-0  ">
                                        <a href="#" className="tc-menu-inner">Comment</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
