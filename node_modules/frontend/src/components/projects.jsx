import { useState } from 'react'
import { ImageCarousel } from './imageCarousel.jsx'
import { projectList } from '@shared/constants.js'

export default function Projects() {

  const [activeProject, setActiveProject] = useState(projectList[0]);

  const handleClick = (project) => {
    setActiveProject(project);
  }


  return (
    <section id='projects' className='h-screen w-full px-10 pt-15 items-center'>
      <div className='flex flex-col gap-10 h-full w-full items-center justify-center'>
        <div className='grid grid-cols-4 gap-4 h-[25vh]'>

          {projectList
          .filter(project => project.category === "project")
          .map((project, index) => {

            const isActive = activeProject?.title === project.title;
            
            const active = "border-foreground rounded-2xl bg-blue-300/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.3),0_0_20px_rgba(59,130,246,0.2)] translate-y-1 scale-[0.98]"
            const inActive = "border-foreground bg-yellow-400/10 hover:bg-blue-300/20 shadow-md rounded-2xl"
            return (
              <button
                key={index}
                onClick={() => { handleClick(project) }}
                className={isActive ? active : inActive}>
                {/* REMOVED the extra inner <div> that was blocking the color */}
                <div className='border border-blue-300 flex flex-col items-start gap-2 p-5 rounded-2xl overflow-clip bg-yellow-400/10 hover:bg-blue-300/30 drop-shadow-foreground'>
                  <h1 className='font-serif text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-foreground to-foreground/60'>
                    {project.title}</h1>
                  <h3 className='font-sans text-sm uppercase text-blue-500 bg-yellow-200 px-3 py-1 rounded-full overflow-hidden'> <em>{project.tag} </em></h3>
                  <a href={project.liveURL} target='blank' className='text-lg gap-2 px-2 py-1 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform duration-300'><span>Live Url</span></a>
                  <p className='text-foreground text-lg leading-normal font-medium text-justify'>
                    {project.description}</p>
                </div>
              </button>
            )
          })}
        </div>
        <ImageCarousel images={activeProject.imageList} className='w-full'/>
      </div>
    </section>
  )
}
