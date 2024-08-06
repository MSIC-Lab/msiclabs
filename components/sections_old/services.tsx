import React from 'react'
import ProjectCard from '@/components/ui/ProjectsCard'

const services = () => {
  return (
    <>
   <main className="w-screen h-[calc(100vh-4rem)]  flex justify-center items-start ">

    <div className=''>services</div>
    <div className='flex gap-5 m-10 p-20'>
      <ProjectCard /> 
    </div>
    </main>
    </>
  )
}

export default services