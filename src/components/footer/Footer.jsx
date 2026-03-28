import logoFoter from '../../assets/images/logo.png'
const Footer = () => {
  return (
 
<footer className=" bg-neutral-950 pt-20">
  <div className='max-w-7xl mx-auto w-[90%] space-y-20'>

  <div className="footer sm:footer-horizontal  text-base-200 ">
  <aside>
<div className='flex items-center gap-5 '>   <img src={logoFoter} alt="" className='w-16 h-16 animate-pulse'/> <h6 className='text-2xl font-bold text-gray-400'>AI MODEL</h6></div>
    <p className='text-lg max-w-lg text-gray-200'>
 One subscription. Access to all frontier AI models in a single powerful platform.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</div>  


<div className='py-10 border-t border-gray-800 flex justify-between text-base-300'>
  <p>&copy; {new Date().getFullYear()} AI Hub. All rights reserved.</p> <p>Made with ❤️ for AI enthusiasts</p>
</div>
  </div>



</footer>

  );
};

export default Footer;