import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLink = ( {children , ...props} ) => (
  <NavLink exact={true} className="mr-6 text-gray-600 hover:text-gray-800" activeClassName="text-lg font-bold" {...props}>
    {children}
  </NavLink>
);

export const Navigation = () => {
  return (
    <nav className="flex flex-wrap items-center px-6 py-3 bg-gray-300">
      <HeaderLink to={`/`}>
        Home
      </HeaderLink>
      <HeaderLink to={`/loss_landscape`}>
        Loss Landscape
      </HeaderLink>
    </nav>
  );
};
