import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div>
            <footer class="site-footer bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6 className="text-dark">About</h6>
                            <p class="text-justify text-dark">
                                Welcome to NourishNet, where we are dedicated to providing fresh, high-quality
                                poultry products to our community. With years of experience in the industry, we pride
                                ourselves on raising healthy, free-range chickens in a sustainable and ethical
                                environment. Our farm is built on the values of hard work, transparency, and respect for
                                animals, ensuring that every bird is raised with the utmost care. From farm to table, we
                                guarantee the finest poultry products, delivering taste and nutrition you can trust.
                                Thank you for choosing NourishNet, where quality and care come together.
                            </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <ul class="footer-links">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6 className="text-dark">Quick Links</h6>
                            <ul class="footer-links text-dark">
                                <li>
                                    <Link className="text-dark text-decoration-none">About Us</Link>
                                </li>
                                <li>
                                    <Link className="text-dark text-decoration-none">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="text-dark text-decoration-none">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by NourishNet</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
