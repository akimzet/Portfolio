import * as React from 'react';
import { Button } from 'react-bootstrap';

import ResumeFile from './Resume-AK.pdf';

const Contact: React.FC = () => {
    return (
        <section className="contact-section bg-black">
            <div className="container" id="contact">
                <div className="row">
                    <div className="col-md-3 mb-3 mb-md-0">
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
                    <div className="col-md-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fab fa-github text-primary mb-2" />
                                <h4 className="text-uppercase m-0">Github</h4>
                                <hr className="my-4"></hr>
                                <div className="small text-black-50">
                                    <a href="https://github.com/akimzet/">https://github.com/akimzet/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
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
                    <div className="col-md-3 mb-3 mb-md-0">
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
                                        href={ResumeFile}
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
