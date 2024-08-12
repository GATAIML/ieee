import React from 'react';
import './Footer.css';
import Logo from '../assets/IEEE - LOGO.png';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={Logo} alt="Logo" className="footer-logo" />
                {/* <span className="footer-text">GAT AIML</span> */}
            </div>
            <div className="footer-table">
                <table>
                    <tbody>
                        <tr>
                            <td className="footer-column">
                                <div className="footer-social-icons">
                                    <h2>Follow us on</h2>
                                    <a href="https://www.instagram.com/ieee_computersociety_gat/"><i className="bx bxl-instagram"></i> /ieee_computersociety_gat</a>
                                </div>
                            </td>
                            <td className="footer-column">
                                <h2>Address</h2>
                                <address>
                                    Rajarajeshwarinagar,(off Mysore Road), Ideal Homes Township, Bangalore, Karnataka, India-560098
                                </address>
                                <div className="footer-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6931351957505!2d77.5243328741196!3d12.927433815846966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e51e9d44b57%3A0x7306c680a9673b5a!2sGlobal%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1721993470268!5m2!1sen!2sin"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Global Academy of Technology Map"
                                    ></iframe>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="footer-bottom">
                <p>©IEEE COMPUTER SOCIETY - GAT, Copyrights Reserved
                    <br></br>
                    <br></br>
                    <a href="#terms">Terms</a> |
                    <a href="#privacy">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;