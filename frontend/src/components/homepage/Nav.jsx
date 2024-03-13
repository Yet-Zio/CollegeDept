import { useEffect, useState } from 'react';
import './nav.css'
import search from '../../assets/search-icon-2044x2048-psdrpqwp.png'
import { Link } from 'react-router-dom';
import logo from '../../assets/collegedepticon.png'
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 5;
      setIsScrolled(scrolled);
      console.log('Scroll position:', window.scrollY); // Log the scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`c-nav ${isScrolled ? 'scrolled' : 'notscrolled'}`}>
        <div className={`${isScrolled ? 'dissapearonscroll' : 'line'}`}></div>
        <div className="c-container">
          <Link to={'/menu'} className="colapse-btn c-border">
              <span></span>
              <span></span>
              <span></span>
          </Link>
          <div className="c-logo" >
            <img src={logo} alt="" className={` ${isScrolled ? 'logo-scrolled' : 'logo'}`}/>
           <span className={`usemario ${isScrolled ? 'title-scrolled' : ''}`}>DEPT OF C.S</span>
          </div>
          <div className="search c-border">
            <img src={search}/>
          </div>
        </div>
      </div>
    </>
  )
}