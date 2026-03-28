import { IoCartOutline } from 'react-icons/io5';
import logoImage from '../assets/images/logo.png'
const Navbar = () => {
  return (

      <nav className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  font-medium">
     <li><a href="">Home</a></li>
     <li><a href="">About</a></li>
     <li><a href="">Service</a></li>
     <li><a href="">Contact</a></li>
      </ul>
    </div>
   <div className='flex gap-2.5 items-center'>
    <img src={logoImage} alt="AI Subscriptions logo" className='w-10 h-10' />
    <h2 className='text-sm sm:text-xl lg:text-2xl font-bold'>AI MODEL</h2>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-medium">
     <li><a href="">Home</a></li>
     <li><a href="">About</a></li>
     <li><a href="">Service</a></li>
     <li><a href="">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
 <button className='btn btn-circle'> <IoCartOutline style={{fontSize:'20px',color:'var(--aiPrimary)'}}/></button>
    <a className="btn bg-(--aiPrimary) text-white rounded-full">Get Started</a>
  </div>
</nav>

  );
};

export default Navbar;