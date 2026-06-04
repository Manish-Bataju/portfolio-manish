import React from 'react'

export default function Techstack() {




  return (
    <section id='techstack' className='h-screen w-full px-10 pt-10 items-center'>
      <div className='flex flex-col justify-evenly h-full'>
      <h1 className='font-bold text-2xl text-foreground font-serif underline underline-offset-4 decoration-3 decoration-red-500 text-center'>TECHSTACK</h1>

      {/* Languages */}
      <div className='flex flex-col lp:gap-2 dp:gap-3 bg-amber-100 rounded-2xl px-10 drop-shadow-lg drop-shadow-black/20 lp:py-2 dp:py-5' >
        <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Languages</h1>

        <ul className='grid grid-cols-4 list-disc list-inside px-10 text-black font-serif'>
          <li className='font-semibold font-italic text-lg'>Javascript</li>
          <li className='font-semibold font-italic text-lg'>TypeScript</li>
          <li className='font-semibold font-italic text-lg'>Python... Learning</li>
          <li className='font-semibold font-italic text-lg'>HTML5 & CSS3</li>
        </ul>
      </div>
        
      {/* Libraries, UI & Styling, Backend & Security & Authentication */}
        <div className='grid grid-cols-4 gap-3 bg-red-100 rounded-2xl px-10 lp:py-2 dp:py-5 drop-shadow-lg drop-shadow-black/20'>

          {/* Frontend Information */}
          <div className='flex flex-col lp:gap-2 dp:gap-3 lp:py-2 dp:py-5'>
            <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Libraries</h1>
          <ul className='px-5 font-serif list-disc list-inside'>
            <li className='font-semibold font-italic text-lg font-serif'>React JS</li>
            <li className='font-semibold font-italic text-lg font-serif'>Redux/ Context API</li>
            <li className='font-semibold font-italic text-lg font-serif'>React Query</li>
            <li className='font-semibold font-italic text-lg font-serif'>Axios</li>
          </ul>
          </div>

          {/* UI & Styling */}
          <div className='flex flex-col lp:gap-2 dp:gap-3 lp:py-2 dp:py-5'>
            <h1 className='font-bold font-sans dp:text-3xl text-foreground'>UI & Styling</h1>
          <ul className='px-5 font-serif list-disc list-inside'>
            <li className='font-semibold font-italic text-lg font-serif'>Tailwind CSS</li>
            <li className='font-semibold font-italic text-lg font-serif'>Framer Motion</li>
            <li className='font-semibold font-italic text-lg font-serif'>Material UI</li>
            <li className='font-semibold font-italic text-lg font-serif'>Shadcn UI</li>
          </ul>
          </div>

      {/* Backend Information */}
          <div className='flex flex-col glp:gap-2 dp:gap-3 lp:py-2 dp:py-5'>
            <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Backend</h1>
            <ul className='px-5 font-serif list-disc list-inside'>
              <li className='font-semibold font-italic text-lg font-serif'>Node JS & Express JS</li>
              <li className='font-semibold font-italic text-lg font-serif'>RESTful API Design</li>
              <li className='font-semibold font-italic text-lg font-serif'>Middleware Development</li>
              <li className='font-semibold font-italic text-lg font-serif'>Error Handling</li>
            </ul>

          </div>

      {/* Security & Authenticationn */}
          <div className='flex flex-col lp:gap-2 dp:gap-3 lp:py-2 dp:py-5'>
            <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Security & Authentication</h1>
            <ul className='px-5 font-serif list-disc list-inside'> 
              <li className='font-semibold font-italic text-lg font-serif'>JWT Authentication</li>
              <li className='font-semibold font-italic text-lg font-serif'>Bcrypt</li>
              <li className='font-semibold font-italic text-lg font-serif'>Joi / Zod</li>
              <li className='font-semibold font-italic text-lg font-serif'>CORS & Security Headers</li>
            </ul>

          </div>

        </div>
      
      {/* Database */}
      <div className='flex flex-col gap-3 bg-green-100 rounded-2xl px-10 drop-shadow-lg drop-shadow-black/20 lp:py-2 dp:py-5'>
        <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Database</h1>

        <ul className='grid grid-cols-4 list-disc list-inside px-10'>
          <li className='font-semibold font-italic text-lg font-serif'>MongoDB</li>
          <li className='font-semibold font-italic text-lg font-serif'>PostgreSQL</li>
          <li className='font-semibold font-italic text-lg font-serif'>Cloudinary</li>
          <li className='font-semibold font-italic text-lg font-serif'>Redis Caching</li>
        </ul>
      </div>

      {/* Devops & Cloud */}
      <div className=' flex flex-col gap-3 bg-purple-100 rounded-2xl px-10 drop-shadow-lg drop-shadow-black/20 lp:py-2 dp:py-5' >
        <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Dev Ops </h1>

        <ul className='grid grid-cols-4 list-disc list-inside px-10'>
          <li className='font-semibold font-italic text-lg font-serif'>Github & Github Version</li>
          <li className='font-semibold font-italic text-lg font-serif'>Render & Vercel Deployment</li>
          <li className='font-semibold font-italic text-lg font-serif'>Docket (Containerization)</li>
          <li className='font-semibold font-italic text-lg font-serif'>POSTMAN API testing</li>
        </ul>
      </div>
      
      {/* Visual Design & ProtoTyping */}
      <div className='flex flex-col gap-3 bg-blue-100 rounded-2xl px-10 drop-shadow-lg drop-shadow-black/20 lp:py-2 dp:py-5'  >
        <h1 className='font-bold font-sans dp:text-3xl text-foreground'>Visual Design & Prototyping</h1>

        <ul className='grid grid-cols-4 list-disc list-inside px-10'>
          <li className='font-semibold font-italic text-lg font-serif'>Adobe Illustrator</li>
          <li className='font-semibold font-italic text-lg font-serif'>Photoshop</li>
          <li className='font-semibold font-italic text-lg font-serif'>Sketchup</li>
        </ul>
      </div>
      </div>
    </section>
  )
}
