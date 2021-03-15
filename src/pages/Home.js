import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const Home = () => {
    const thisRef = useRef(null);
    useEffect(() => {
        let counter = true;
        document.addEventListener('scroll', () => checkView());
        const isInView = () => {
            if (thisRef.current) {
                const rect = thisRef.current.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        }
        const checkView = () => {
            if (counter && isInView()) {
                for (let element of document.getElementsByClassName('count-up')) {
                    element.click();
                }
                counter = false;
            }
        }
        return () => {document.removeEventListener('scroll', () => checkView());};
    });
    return (
        <>
            <div className='bg-image-home bg-cover bg-center h-adjust'>
                <div className='relative h-adjust w-full bg-black bg-opacity-80'>
                </div>
                <div className='absolute top-36 left-1/2 transform -translate-x-1/2 w-full h-1/2 p-6 lg:px-40 text-center'>
                    <div className='text-3xl md:text-4xl lg:text-5xl'>
                        <h1 className='tracking-wide font-bold text-white mb-10 leading-relaxed md:leading-loose'><mark className='rounded-lg px-3'>Free&nbsp;tutoring</mark> for students across <mark className='rounded-lg px-3'>16&nbsp;different&nbsp;subjects</mark></h1>
                    </div>
                </div>
                <div className='absolute bottom-10 w-full text-center'>
                    <h2 className='text-white italic text-2xl md:text-3xl w-11/12 md:w-3/4 lg:w-1/2 mx-auto leading-relaxed tracking-wide'>We believe every student deserves quality tutoring service to forge their academic success.</h2>
                    <div className='mx-auto mt-10 text-center p-6'>
                        <Link className='text-lg md:text-xl uppercase px-6 py-5 bg-yellow-400 font-bold rounded-lg transition duration-500 ease-in-out transform hover:scale-110 tracking-wide btn-arrow' to='/enroll'>Enroll now</Link>
                    </div>
                </div>
            </div>
            <div className='h-full py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Who we are...</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                        <p className='leading-loose'>
                            Tutoring for All is a student-run non-profit service that provides FREE tutoring services to K-12th grade students across 16 different subjects. Our goal is to help students achieve academic success by helping them with specific academic related questions. View a full list of subjects we tutor here.
                        </p>
                        <p className='leading-loose mt-6'>
                            We are a branch of a student-run 501 (c)(3) non-profit organization Robotics for All, which provides free STEM education to students of all backgrounds across the nation, particularly students from underserved communities.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-full bg-white py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4' ref={thisRef}>
                    <div className='bg-primary-100 p-4 rounded-lg shadow'>
                        <CountUp start={0} end={33} duration={0.75}>
                            {({ countUpRef, start }) => (
                                <>
                                    <h1 className='text-center text-5xl mb-3' ref={countUpRef}>0</h1>
                                    <button className='hidden count-up' type='button' onClick={start}></button>
                                </>
                            )}
                        </CountUp>
                        <p className='text-xl text-center'>Tutoring sessions last two weeks</p>
                    </div>
                    <div className='bg-primary-100 p-4 rounded-lg shadow'>
                        <CountUp start={0} end={56} duration={0.75}>
                            {({ countUpRef, start }) => (
                                <>
                                    <h1 className='text-center text-5xl mb-3' ref={countUpRef}>0</h1>
                                    <button className='hidden count-up' type='button' onClick={start}></button>
                                </>
                            )}
                        </CountUp>
                        <p className='text-xl text-center'>Currently active volunteers</p>
                    </div>
                    <div className='bg-primary-100 p-4 rounded-lg shadow'>
                        <CountUp start={0} end={16} duration={0.75}>
                            {({ countUpRef, start }) => (
                                <>
                                    <h1 className='text-center text-5xl mb-3' ref={countUpRef}>0</h1>
                                    <button className='hidden count-up' type='button' onClick={start}></button>
                                </>
                            )}
                        </CountUp>
                        <p className='text-xl text-center'>Different subjects offered</p>
                    </div>
                </div>
            </div>
            <div className='h-full py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Why choose us...</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                        <p className='leading-loose'>
                            <span className='font-bold text-xl sm:text-2xl border-yellow-300 border-4 p-1 rounded-md shadow mr-4 uppercase'>Equity</span>Our service is <strong>completely free</strong> to bridge the educational opportunity gap between students. Tutoring service is free for both partnering schools as well as individuals seeking for tutoring.
                        </p>
                        <p className='leading-loose mt-6'>
                            <span className='font-bold text-xl sm:text-2xl border-yellow-300 border-4 p-1 rounded-md shadow mr-4 uppercase'>Quality</span>We carefully select our tutors to ensure our tutoring quality. Most of our tutors are upperclassman in high school or college. Each volunteer who applied to be a tutor has to achieve more than <strong>80%</strong> of the score in the admission test. We accepted approximately <strong>50%</strong> of the applicants who made it to the interview round.

                            In addtion, <strong>all volunteers over the age of 18 must pass a detailed background check</strong> run by our contractor <a className='link-custom' href='https://www.sterlingvolunteers.com/' target='_blank' rel='noreferrer'>Sterling Volunteers</a>.
                        </p>
                        <p className='leading-loose mt-6'>
                            <span className='font-bold text-xl sm:text-2xl border-yellow-300 border-4 p-1 rounded-md shadow mr-4 uppercase'>Fast</span> Through our online scheduling system, it is easy to schedule a free session with us. All you need is to create an account with a name and password. Learn how to schedule a session <Link className='link-custom' to='/enroll'>here</Link>.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-full bg-white py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 rounded-lg bg-primary-100 shadow h-full mb-10'>
                    <div className='text-8xl text-yellow-500 pt-2 pl-3'>“</div>
                    <blockquote className='relative -top-14 text-xl px-12 sm:px-20'>Me ha gustado mucho la manera en que han trabajado con mi hijo, él se ha sentido muy cómodo con ellos son muy amables y son muy abiertos para ayudarme sobre lo que necesita mi hijo.</blockquote>
                    <div className='text-8xl text-yellow-500 float-right relative bottom-20 mr-3'>”</div>
                    <p className='relative bottom-14 px-12 sm:px-20 italic text-lg'>(I really liked the way they have worked with my son, he felt very comfortable with them, they are very kind and they are very open to helping me with what my son needs.)</p>
                    <div className='text-center px-12 md:text-right md:px-0 pb-6 md:-mt-8'>
                        <span className='font-bold text-xl sm:text-2xl p-1 rounded-md'>Parent with a student in Elementary English Tutoring Session</span>
                    </div>
                </div>
                <div className='mx-auto w-5/6 md:w-3/4 rounded-lg bg-primary-100 shadow h-full'>
                    <div className='text-8xl text-yellow-500 pt-2 pl-3'>“</div>
                    <blockquote className='relative -top-14 text-xl px-12 sm:px-20'>The Tutoring for all [tutors] are experts! Thank You!</blockquote>
                    <div className='text-8xl text-yellow-500 float-right relative bottom-20 mr-3'>”</div>
                    <div className='text-center px-12 md:text-right md:px-0 pb-6 md:-mt-4'>
                        <span className='font-bold text-xl sm:text-2xl p-1 rounded-md'>Parent with a student in Computer Science Tutoring Session</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
