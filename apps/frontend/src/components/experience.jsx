import { projectList } from '@shared/constants.js'
import { useState } from 'react';
import { CircleArrowDown } from 'lucide-react';


export default function Experience() {

  const [extendedProject, setExtendedProject] = useState(false);

  const handleProject = (projectTitle) => {
    setExtendedProject(extendedProject === projectTitle ? null : projectTitle);
  };

  return (
    <section id='experience' className='h-screen w-full px-10 pt-10 items-center'>


      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-2xl text-foreground uppercase underline underline-thickness-4 underline-offset-5 decoration-2 decoration-red-600 text-center'>Experience</h1>

        <p>Versatile professional with a strong foundation in product development and manufacturing leadership, now transitioning into full-stack web development.
          Completed a 3-month intensive MERN course, gaining hands-on experience in building scalable applications using MongoDB, Express.js, React.js, and Node.js. Passionate about
          combining creative design, technical precision, and business insight to deliver impactful digital solutions.</p>


        <div className='flex flex-col gap-5 mt-2'>
          {projectList.map((project) => (
            <div
              key={project.title}
              className='flex flex-col items-center border border-foreground rounded-lg bg-background/50 shadow-md'
              onClick={() => handleProject(project.title)}
            >
            <div className={`flex items-center justify-center gap-1 w-full rounded-lg ${extendedProject === project.title ? ' bg-amber-100 rounded-t-lg' : ''}`}>
                <div className='flex flex-col gap-1 w-full px-6'>
                  <span className='text-lg font-medium'><strong>{project.title}</strong> -{project.tag}</span>
                  <span className='text-md text-foreground italic'>{project.description} </span>
                </div>

                <CircleArrowDown size={30} className={`w-5 h-5 mr-6 text-black transition-all duration-300 ${extendedProject === project.title ? 'transition-all duration-300 rotate-90' : ''}`} />
              </div>

              <div className={`flex flex-col gap-2 transition-max-height duration-500 ease-in-out overflow-hidden w-full  ${extendedProject === project.title ? 'max-h-screen' : 'max-h-0'}`}>

                <hr></hr>
                <div className="px-6 py-2">
                  <h3 className='text-md font-medium '><em>Key Highlights</em></h3>

                <ul className='pl-5 list-disc list-inside flex flex-col gap-1 w-full '>
                  {project.highlights?.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                </div>

                
              </div>



            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
