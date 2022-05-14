import type { NextPage } from 'next';

const SignUp: NextPage = () => {
    return (
        <div className="register-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="register-left d-flex align-items-center align-self-center">
                            <div className="register-container">
                                <h1>Get more course</h1>
                                <h2>Register Now</h2>
                                <div className="row d-flex align-items-center align-self-center">
                                    <div className="registertime col-md-3 text-center">
                                        <p className="heading-colors">214
                                            <span className="days-text">Days</span>
                                        </p>
                                    </div>
                                    <div className="registertime col-md-3 text-center">
                                        <p className="heading-colors">214
                                            <span className="days-text">Days</span>
                                        </p>
                                    </div>
                                    <div className="registertime col-md-3 text-center">
                                        <p className="heading-colors">214
                                            <span className="days-text">Days</span>
                                        </p>
                                    </div>
                                    <div className="registertime col-md-3 text-center">
                                        <p className="heading-colors">214
                                            <span className="days-text">Days</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row login-box d-flex align-items-center justify-content-end">
                            <div className="innerbody col-md-10">
                                <h2 className="font-weight-light login-head text-center heading-colors">Create Account</h2>
                                <form className="mt-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control bio-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />

                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control bio-input" id="exampleInputPassword1" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control bio-input" id="exampleInputPassword1" placeholder="Phone Number" />
                                    </div>
                                    <button type="submit" className="btn btn-biolink btn-lg btn-block mt-3 common-btn">Submit</button>
                                    <hr className="mt-3 mb-3" />
                                    <div className="row">
                                        <div className="col-md-4">
                                            <button type="submit" className="btn facebook btn-lg btn-block mt-3 common-btn social-icons">
                                                <i className="bi bi-facebook"></i> Facebook</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" className="btn google btn-lg btn-block mt-3 common-btn social-icons">
                                                <i className="bi bi-google"></i> Google</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" className="btn linkedin btn-lg btn-block mt-3 common-btn social-icons">
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

export default SignUp;