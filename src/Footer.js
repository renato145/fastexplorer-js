import React from 'react';

export const Footer = ({ url }) => {
  const mail = 'renato.hermoza@pucp.edu.pe';
  const social = 'renato145';

  return (
    <footer className="w-full mt-10">
      <p className="text-gray-600 pl-4 mb-0 text-sm">
        Made by: Renato Hermoza, check the{' '}
        <a href={`https://github.com/renato145/${url}`} target="_black">
          source code
        </a>
        .
      </p>
      <hr className="m-2" />
      <div className="flex flex-wrap justify-center">
        <div className="px-4">
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <div className="px-4">
          <a href={`https://twitter.com/${social.twitter}`} target="_black">
            Twitter
          </a>
        </div>
        <div className="px-4">
          <a href={`https://github.com/${social.github}`} target="_black">
            GitHub
          </a>
        </div>
        <div className="px-4">
          <a href={`https://${social}.github.io`} target="_black">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};
