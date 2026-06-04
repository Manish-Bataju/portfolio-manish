import NavBar from './navBar.jsx'
import hero from '../assets/hero.jpg'
import profile from '../assets/profile_pic_new.png'
import { HashLink } from 'react-router-hash-link'

export default function Hero() {
  return (
    <section id='home' className='flex justify-center relative h-screen w-full overflow-hidden'>
      <div className='grid grid-cols-2 h-screen items-center justify-center gap-20 relative'>

        {/* information */}
        <div className='flex flex-col justify-end gap-5 max-tls:gap-3 lp:gap-5 dp:gap-7 ml-10'>
          <div className='flex flex-col items-start justify-center '>
            <h3 id="banner_heading" >Hello I'm</h3>
            <h1 className='text-red-600 font-semibold max-tls:text-3xl lp:text-4xl dp:text-5xl'>Manish Kumar Bataju</h1>
          </div>

          <div className='flex flex-col items-start max-tls:gap-1 lp:gap-2 dp:gap-3'  >
            {/* highlights */}
            <div className='flex items-center gap-3'>
              <span className=" rounded-l-xs font-semibold text-xl text-amber-200 bg-[#023047] drop-shadow-xl px-3 py-1">Full Stack Developer</span>
              <span>|</span>
              <span className="text-amber-200 font-semibold text-xl bg-[#023047] shadow-red-500 px-3 py-1"> Solutions Architect</span>
              <span>|</span>
              <span className="text-amber-200 rounded-r-xs font-semibold text-xl bg-[#023047] drop-shadow-xl px-3 py-1"> Business Automation</span>
            </div>

            {/* the P- tag */}
            <p className='text-lg text-foreground'>Bridging 13 years of industry leadership with modern MERN stack precision</p>
          </div>

          <HashLink type="button"
            className="inline-flex items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-md uppercase  
             text-white bg-blue-700 rounded-xs shadow-md 
             hover:bg-blue-600 active:bg-blue-700 active:scale-95 
             transition-colors duration-200"
            to="#projects">
            View My Projects
          </HashLink>


        </div>
        <div className='flex justify-center items-center'>
          <img src={profile} alt="profile"
          className="absolute bottom-0 h-[90vh] items-start w-auto rounded-md "
          style={{ filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.5))" }}
          />
        </div>



      </div>
      <img src={hero} alt="Hero Image" className="absolute object-cover top-0 left-0 -z-10"
      />

    </section>
  )
}
