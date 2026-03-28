
import { TiTick } from 'react-icons/ti';
import bannerImg from '../../assets/images/banner.png'
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
  return (
    <header className="max-w-7xl mx-auto w-[90%]">
   
  <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between ">
    <img
      src={bannerImg}
      className=" lg:max-w-sm rounded-lg animate-pulse"
    />
    <div  className=' lg:max-w-lg space-y-7'>
<div className='py-2 px-4 max-w-max border rounded-full border-error bg-red-100 font-bold text-error'>✨ <span>Frontier AI Models</span></div>
  <div className='space-y-2'>
        <h1 className="text-5xl font-bold text-(--aiPrimary)">One Subscription.</h1>
      <h1 className="text-5xl font-bold bg-[linear-gradient(90deg,#ff6661,#ffa600)] max-w-max bg-clip-text text-transparent">All the AIs You Need</h1>
  </div>
      <p className="text-lg">
        Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.
      </p>
      <button className="btn border-0 py-5 px-5 shadow-lg rounded-xl shadow-red-300" id='heroBtn'><span>Get Unlimited Access </span> <span className='mt-1' id='heroBtn-arrow'><FaArrowRightLong style={{fontSize:'20px',}}/> </span></button>
      <div className='flex gap-5 text-neutral-500 py-4 flex-wrap'>
        <p className='flex items-center gap-0.5'><TiTick  style={{fontSize:'20px'}}/> 50+ Frontier Models</p>
        <p className='flex items-center gap-0.5'><TiTick  style={{fontSize:'20px'}}/> No Usage Limits</p>
        <p className='flex items-center gap-0.5'><TiTick  style={{fontSize:'20px'}}/> Cancel Anytime</p>
      </div>
    </div>
  </div>

    </header>
  );
};

export default Hero;