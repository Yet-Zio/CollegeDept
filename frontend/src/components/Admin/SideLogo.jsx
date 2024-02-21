import React from 'react';
import logoImage from '../../assets/PineTools.com_logo.png';

export default function SideLogo() {
  return (
    <div className='logo w-10 h-10'>
      <img src={logoImage} alt='logo' />
    </div>
  );
}
