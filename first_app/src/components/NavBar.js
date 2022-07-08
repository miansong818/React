/* eslint-disable react/prop-types */
import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav'>
      <a href="/" className='site-title'>Site name</a>
      <ul>
        <li> <a href="/Home" className='site-title'>Home</a></li>
        <li> <a href="/posts" className='site-title'>Posts</a></li>
        {/* <li> <a href="/jokes" className='site-title'>Jokes</a></li> */}
        <CustomLink href="/jokes">Jokes</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink =({href, children, ...props})=>{
  return (
    <li> <a href={href} className='site-title'>{children}</a></li>
  );
};
export default NavBar;
