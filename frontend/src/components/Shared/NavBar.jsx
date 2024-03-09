import './navbar.css'
import logo from '../../assets/collegelogo.png'
import colapse from '../../assets/collapse-xxl.png'
import search from '../../assets/search-icon-2044x2048-psdrpqwp.png'
function NavBar() {
  return (
    <>
      <nav className='custom-navigation'>
        <div className="custom-nav-container">
          <div className="nav-child custom-colapse align-start">
            <img className="nav-icons" src={colapse} alt="" />
          </div>
          <div className="nav-child custom-logo-name align-center">
            <img className="custom-logo" src={logo} alt="colledge-icon" />
            <div className='custom-logo-name d-flex flex-column ps-2'>
              <span>EMMANUEL</span>
              <span>COLLEGE</span>
            </div>
          </div>
          <div className="nav-child custom-search align-end">
             <img className="nav-icons"src={search} alt="" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar