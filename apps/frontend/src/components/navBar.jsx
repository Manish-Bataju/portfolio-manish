import { HashLink } from 'react-router-hash-link'
import logo from '../assets/logo.svg'
import { useState } from 'react'


export default function NavBar() {

    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'techstack', label: 'TechStack' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contacts', label: 'Contacts' }
    ]

    const whenActive = `font-semibold font-sans lp:text-[18px] dp:text-[22px] underline-drop-shadow-lg underline underline-offset-10 underline-thickness-6 decoration-red-600 text-foreground leading-relaxed transition-all duration-300 ease-in-out drop-shadow-lg`
    const notActive = `text-foreground font-sans lp:text-[16px] dp:text-[20px]  hover:scale-110 hover:underline hover:underline-offset-4 hover:underline-thickness-2 hover:drop-shadow-lg transition-all duration-300 ease-in-out`
    const handleClick = (id) => {
        setActiveSection(id)
    };
    return (

        <div className='fixed z-10 w-full lp:px-12 dp:px-10'>
            <div className="flex justify-between items-center gap-5 h-10 pt-5 ">
                <HashLink to="/">
                    <img src={logo} alt={logo} className="w-auto lp:h-15 dp:h-20" />
                </HashLink>

                <div className='flex gap-10'>
                    {navItems.map((e) => (
                        <HashLink
                            smooth
                            key={e.id}
                            to={`#${e.id}`}
                            onClick={() => { handleClick(e.id) }}
                            className={activeSection === e.id ? whenActive : notActive}>
                            {e.label}
                        </HashLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
