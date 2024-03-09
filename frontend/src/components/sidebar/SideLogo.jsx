import React from 'react';
import logoImage from '../../assets/collegelogo.png';

export default function SideLogo() {
  return (
    <div className='logo w-10 h-10'>
      <img src={logoImage} alt='logo' />
    </div>
  );
}
