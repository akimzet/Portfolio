import * as React from 'react';

import HololensImg from './Hololens.jpg';
import ProductManagerImg from './ProductManager.png';
import WeatherApplication from './WeatherApplication.png';

const Project: React.FC = () => {
    return (
        <section id="projects" className="projects-section bg-light">
            <div className="container" id="project">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="img-fluid mb-3 mb-lg-0" src={HololensImg} alt=""></img>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Computer Vision + Microsoft's Hololens Device</h4>
                            <p className="text-black-50 mb-0">
                                Project to understand how computer vision works and also to create an application with
                                an Augmented Reality Headset.
                            </p>
                            <hr></hr>
                            <a href="https://github.com/akimzet/FurstProject">Hololen's App</a>
                            <hr></hr>
                            <a href="https://github.com/akimzet/ImageSegmentation">Image Segmentation Assignment</a>
                            <hr></hr>
                            <a href="https://github.com/akimzet/ImageDetection">Image Detection</a>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={ProductManagerImg} alt=""></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Product Manager</h4>
                                    <p className="mb-0 text-white-50">
                                        Building an end to end project in docker. Learning the entire full stack
                                        development process.
                                    </p>
                                    <ul className="mb-0 text-white-50">
                                        <li>Frontend: React + Typescript</li>
                                        <li>Microservice: .NET Core Web 2 API + SQL</li>
                                    </ul>
                                    <hr className="d-none d-lg-block mb-0 ml-0"></hr>
                                    <a href="https://github.com/akimzet/ProductManager">Product Manager</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={WeatherApplication} alt=""></img>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Weather Application</h4>
                                    <p className="mb-0 text-white-50">
                                        Developing a frontend application with dynamic pages.
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"></hr>
                                    <a href="https://github.com/akimzet/weatherapp">Wealther Application</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
