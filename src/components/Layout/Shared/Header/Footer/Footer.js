import React from 'react';
import logo from '../default.png'

const Footer = () => {
    return (
        <div className='mt-52'>
<footer className="footer p-10 bg-base-200 text-base-content  ">
  <div>
    <img src={logo} className=" w-32" alt="" />
    <p>GLOBALDESK  Ltd.<br/>Providing reliable IMMGIGRANT service since 1992 <br /> Developed by <a href="https://samiul.dev"><span className='text-primary'>Samiul Alim</span></a></p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a  href={ `/`} className="link link-hover">Immigrant</a> 
    <a  href={ `/`} className="link link-hover">Design</a> 
    <a  href={ `/`} className="link link-hover">Marketing</a> 
    <a  href={ `/`} className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a  href={ `/`} className="link link-hover">About us</a> 
    <a  href={ `/`} className="link link-hover">Contact</a> 
    <a  href={ `/`} className="link link-hover">Jobs</a> 
    <a  href={ `/`} className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a  href={ `/`} className="link link-hover">Terms of use</a> 
    <a  href={ `/`} className="link link-hover">Privacy policy</a> 
    <a  href={ `/`} className="link link-hover">Cookie policy</a>
  </div>
</footer>        </div>
    );
};

export default Footer;