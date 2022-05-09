import type { NextPage } from 'next';

const SignIn: NextPage = () => {
    return (
        <div className="register-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="register-left d-flex align-items-center align-self-center">
                            <div className="inside-container text-center heading-colors">
                                <h1>Welcome To</h1>
                                <h2>Bio Obelisk</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row login-box d-flex align-items-center justify-content-end">
                            <div className="innerbody col-md-10">
                                <h2 className="font-weight-light login-head text-center heading-colors">Sign into your account</h2>
                                <form className="mt-4">
                                    <div className="form-group">
                                        <input type="email" className="form-control bio-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control bio-input" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-check text-uppercase">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <a href="#" className="text-uppercase forgot-password">Forgot password</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-biolink btn-lg btn-block mt-3 common-btn">Submit</button>
                                    <hr className="mt-3 mb-3" />
                                    <div className="row">
                                        <div className="col-md-4">
                                            <button type="submit" className="btn facebook btn-lg btn-block mt-3 common-btn">
                                                <i className="bi bi-facebook"></i> Facebook</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" className="btn google btn-lg btn-block mt-3 common-btn">
                                                <i className="bi bi-google"></i> Google</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" className="btn linkedin btn-lg btn-block mt-3 common-btn">
                                                <i className="bi bi-linkedin"></i> Linkedin</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;