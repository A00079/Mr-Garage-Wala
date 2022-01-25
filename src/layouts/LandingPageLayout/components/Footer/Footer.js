import React from "react";
import logo from '../../../../assets/images/logo.png';
import { withRouter } from "react-router";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  const handleGoto = (url) => {
    props.history.push('/' + url);
  }
  return (
    <React.Fragment>
      <footer className="bg-gray-800 text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden w-14"
                  src={logo}
                  alt="SaveLifeFoundation"
                />
                <img
                  className="hidden bg-white p-1 rounded-md lg:block w-10"
                  src={logo}
                  alt="SaveLifeFoundation"
                />
              </div>
              <span className="ml-3 text-xl text-white">Mr. Garage Wala</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">“Your Vehicle Needs @ Your Fingertips”</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">Phone No.</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-100 text-sm hover:text-gray-600">+91 777-0000-368</a>
                </li>
                {/* <li>
                  <a className="text-gray-200 text-xs hover:text-gray-600">7715972439</a>
                </li>
                <li>
                  <a className="text-gray-200 text-xs hover:text-gray-600">9892302407</a>
                </li> */}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">Email ID</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-100 hover:text-gray-600">contact@mrgaragewala.com</a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-gray-600">www.mrgaragewala.com</a>
                </li>
              </nav>
            </div>
            {/* <div className="ml-10 lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">Office Address</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-200 hover:text-gray-600">Office Number 11, 1st Floor Asmita Orient CHS, near cafe coffee day, opposite aritel gallery, Mira Road (E) , Thane - 401107.</a>
                </li>
              </nav>
            </div> */}

            <div className="lg:w-1/4 md:w-1/2 w-full px-5 sm:ml-20 cursor-pointer">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={'section2'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                    <a className="text-gray-200 hover:text-gray-500">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'section3'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                    <a className="text-gray-200 hover:text-gray-500">Mission & Vission</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'section4'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                    <a className="text-gray-200 hover:text-gray-500">Our Services</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'section5'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                    <a className="text-gray-200 hover:text-gray-500">Pricing</a>
                  </Link>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4 cursor-pointer">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={'section4'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                    <a className="text-gray-200 hover:text-gray-500">Our Services</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'section5'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                    <a className="text-gray-200 hover:text-gray-500">Pricing</a>
                  </Link>
                </li>
              </nav>
            </div> */}
          </div>
        </div>

        {/* <div className="border-t border-gray-200">
          <div className="container px-5 py-2 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>

              <a onClick={() =>handleGoto('privacy-policy')} className="cursor-pointer ml-3 text-gray-500">
                Privacy Policy
              </a>
              <a  onClick={() =>handleGoto('terms-conditions')}  className="cursor-pointer ml-3 text-gray-500">
                Terms And Condition
              </a>
              <a  onClick={() =>handleGoto('refund-policy')}  className="cursor-pointer ml-3 text-gray-500">
                Refund Policy
              </a>
            </span>
          </div>
        </div> */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2018 Mr. Garage Wala
              <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer"></a>
            </p>
            {/* <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span> */}
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default withRouter(Footer);
