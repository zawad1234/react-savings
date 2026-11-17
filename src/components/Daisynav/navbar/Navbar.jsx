import React from 'react';
import Link from './link/Link';

const Navbar = () => {


const navData = [
  {
    id: 1,
    name: "Home",
    description: "Welcome to our website",
    url: "https://www.google.com"
  },
  {
    id: 2,
    name: "About",
    description: "Learn about our company",
    url: "https://www.wikipedia.org"
  },
  {
    id: 3,
    name: "Services",
    description: "Explore our services",
    url: "https://www.github.com"
  },
  {
    id: 4,
    name: "Products",
    description: "Discover our products",
    url: "https://www.amazon.com"
  },
  {
    id: 5,
    name: "Contact",
    description: "Get in touch with us",
    url: "https://www.linkedin.com"
  },
  {
    id: 6,
    name: "Blog",
    description: "Read our latest articles",
    url: "https://dev.to"
  },
  {
    id: 7,
    name: "Portfolio",
    description: "Explore our projects",
    url: "https://www.behance.net"
  },
  {
    id: 8,
    name: "Documentation",
    description: "Read technical documentation",
    url: "https://developer.mozilla.org"
  },
  {
    id: 9,
    name: "Tutorials",
    description: "Learn web development",
    url: "https://www.freecodecamp.org"
  },
  {
    id: 10,
    name: "Community",
    description: "Join developer discussions",
    url: "https://stackoverflow.com"
  }
];





    return (
        <nav> 
           <ul className='flex gap-9'>

             {
                navData.map(navs=> <Link props={navs}></Link>)
            }

           </ul>
        </nav>
    );
};

export default Navbar;