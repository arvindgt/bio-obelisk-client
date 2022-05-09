import { NextPage } from "next";


const Footer: NextPage = () => {
    return (
        <section className="footer pt-5 pb-5 mt-5">
            <div className="container pt-5 pb-5">
                <footer>
                    <div className="row">
                        <div className="col-12 col-md">
                            {/* <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"> */}
                            <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-uppercase text-white">our adress</h5>
                            <ul className="list-unstyled text-small">
                                <li>
                                    <a className="text-white " href="#">Cool stuff</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Random feature</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Team feature</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Stuff for developers</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Another one</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Last time</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-uppercase text-white">Quick links</h5>
                            <ul className="list-unstyled text-small">
                                <li>
                                    <a className="text-white " href="#">Resource</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Resource name</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Another resource</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Final resource</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-uppercase text-white">News letter</h5>
                            <ul className="list-unstyled text-small">
                                <li>
                                    <a className="text-white " href="#">Team</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Locations</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Privacy</a>
                                </li>
                                <li>
                                    <a className="text-white " href="#">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer;
