import React from 'react'

const TopSection = () => {
  return (
   <>
   <div className='grid gap-8 md:grid-cols-2 md:items-center md:text-center sm:items-center sm:text-center items-center text-center'>
    <div>
   <h1 className='text-4xl'>Be Your Best Self</h1>
   <p className='text-lg'>I offer an exciting range of hairstyles combining the newest trends with care! </p>

    </div>
   <img className="w-full md:w-2/3 md:h-2/3 rounded-full overflow-hidden shadow-2xl" src='../images/DarelieImg.jpg'/>
   </div>
   </>
  )
}

export default TopSection