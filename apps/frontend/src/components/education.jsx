import React from 'react'
import { educationList } from '@shared/constants.js'

export default function Education() {
  return (
    <section id="education" className='h-screen w-full px-10 pt-10 items-center'>
      <div className="flex flex-col gap-4">
        <h1 className='font-bold text-3xl text-foreground font-serif underline underline-offset-4 decoration-3 decoration-red-500 text-center'>Education</h1>

        {educationList.map((education) => {
          return (
            <div key={education.institution} className=" grid grid-cols-5 items-center justify-start border border-foreground rounded-sm gap-5 px-4 py-2 text-foreground">
              <img src={education.img} alt={education.institution} className="w-auto h-12 rounded-xs" />
              <h4 className="text-xl font-semibold">{education.course}</h4>
              <span className="text-xl font-semibold">{education.institution}</span>
              <span className="text-xl font-semibold">{education.address}</span>
              <span className="">
                <a href={education.url}  className=" cursor pointer text-blue-500 hover:underline  hover:underline-offset-3 hover:decoration-red-500"
                target="_blank">{education.institution}</a> </span>
            </div>
          )
        })}
      </div>
  </section>
  )
}
