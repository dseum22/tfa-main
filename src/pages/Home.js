import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='bg-landing-image bg-cover clean-height'>
                <div className='relative clean-height w-full bg-black bg-opacity-70'>
                </div>
                <div className='absolute top-36 left-1/2 transform -translate-x-1/2 w-full h-1/2 p-6 lg:px-40'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl tracking-wide font-bold text-white leading-relaxed md:leading-loose'><mark className='rounded-lg px-3'>Free&nbsp;tutoring</mark> for K-12th graders across <mark className='rounded-lg px-3'>16&nbsp;different&nbsp;subjects</mark></h1>
                    <h2 className='text-white italic text-xl md:text-3xl mt-5 leading-relaxed tracking-wide'>We believe every student deserves quality tutoring service to forge their academic success. </h2>
                    <div className='mx-auto mt-5 text-center p-6'>
                        <Link className='text-lg md:text-xl uppercase px-6 py-5 bg-yellow-400 font-bold rounded-lg transition duration-500 ease-in-out transform hover:scale-110 tracking-wide btn-arrow' to='/enroll'>Enroll now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

/* 
<div className='container'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                            <div className='mt-6 w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-lg'>

                            </div>
                            <div className='mt-6 w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-lg'>

                            </div>
                            <div className='mt-6 w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-lg'>

                            </div>
                        </div>
                    </div>
*/
export default Home
