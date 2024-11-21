import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
const robot=Roboto({
    subsets: ['latin-ext'],
    weight: '100'
})

const hero = () => {
  return (
    <div className='w-[1280px] h-[800px] flex  justify-end float-end items-end'>
        {/* text */}
        <div>
            <div className='h-[239px] w-[580px] pb-10'><h1 className={`${robot} font-[700] text-[56px]`}>Learn new skills online with ease</h1>
            <p></p></div>
        </div>
        {/* image */}
        <div className='h-[720px]'>
<Image src={'/image/pic2.jpeg'} alt='Hero' height={800} width={640}/>
        </div>

    </div>
  )
}

export default hero