import { div } from 'framer-motion/client';
import React from 'react';


export const AwsLogo = () => (
  <div className="flex items-center justify-center w-20 h-16 mx-auto mb-4">
    <img
      src={process.env.PUBLIC_URL + '/cloud101.png'}
      alt="Cloud 101 Logo"
      className="max-w-full max-h-full object-contain"
      style={{ background: 'none' }}
    />
  </div>
);


export const UdemyLogo = () => (
    <div className="flex items-center justify-center w-20 h-16 mx-auto mb-4">
      <img
        src={process.env.PUBLIC_URL + '/udemy.png'}
        alt="Udemy Logo"
        className="max-w-full max-h-full object-contain"
        style={{ background: 'none' }}
      />
    </div>
);

export const IbmLogo = () => (
    <div className="flex items-center justify-center w-20 h-16 mx-auto mb-4">
      <img
        src={process.env.PUBLIC_URL + '/ibm.png'}
        alt="Udemy Logo"
        className="max-w-full max-h-full object-contain"
        style={{ background: 'none' }}
      />
    </div>
);



export const UcscLogo = () => (
  <img
    src={process.env.PUBLIC_URL + '/ucsc.png'}
    alt="UCSC Logo"
    className="w-20 h-18 flex-shrink-0 mr-4 object-contain"
    style={{ background: 'none' }}
  />
);



export const SackLogo = () => (
  <img
    src={process.env.PUBLIC_URL + '/sack.png'}
    alt="Sack Logo"
    className="w-20 h-18 flex-shrink-0 mr-4 object-contain"
    style={{ background: 'none' }}
  />
);