import * as React from 'react';
import { Button } from 'react-bootstrap';

const Contact: React.FC = () => {
    return (
        <section className="contact-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fab fa-linkedin text-primary mb-2" />
                                <h4 className="text-uppercase m-0">Linkedin</h4>
                                <hr className="my-4"></hr>
                                <div className="small text-black-50">
                                    <a href="https://www.linkedin.com/in/kim-andrew/">Andrew Kim</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2" />
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4"></hr>
                                <div className="small text-black-50">
                                    <a href="mailto:akimzet@gmail.com">akimzet@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-file text-primary mb-2" />
                                <h4 className="text-uppercase m-0">Resume</h4>
                                <hr className="my-4"></hr>
                                <Button className="contact-btn-primary">
                                    <a
                                        className="contact-btn-text"
                                        download="Resume-AK"
                                        target="_blank"
                                        href="../src/components/contact/Resume-AK.pdf"
                                    >
                                        Download
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
