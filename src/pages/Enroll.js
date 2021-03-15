import React from 'react'

const Enroll = () => {
    const cardsList = [{ category: 'Computer Science', subjects: ['AP Computer Science A (Java)'] }, { category: 'Natural Sciences', subjects: ['Regular/AP Biology', 'Regular/AP Chemistry', 'Regular/AP Physics 1/2 (Algebra-Based)', 'Regular/AP Physics C (Calculus-Based)'] }, { category: 'Mathematics', subjects: ['Regular/Honors Algebra 1 and Below (Elementary School Math)', 'Regular/Honors Geometry', 'Regular/Honors Algebra 2 and Trigonometry', 'Regular/Honors Precalculus', 'Regular/AP Calculus (AB + BC)'] }, { category: 'English', subjects: ['Elementary and Middle School English'] }, { category: 'Social Sciences', subjects: ['Regular/AP Microeconomics', 'Regular/AP Macroeconomics'] }, { category: 'College Preparation', subjects: ['SAT/ACT English', 'College Application Essay Writing', 'SAT Math (Standardized Test)'] }];
    return (
        <>
            <div className='bg-image-enroll bg-cover bg-center h-adjust'>
                <div className='relative h-adjust w-full bg-black bg-opacity-80'>
                </div>
                <div className='absolute top-36 left-1/2 transform -translate-x-1/2 w-full h-1/2 p-6 lg:px-40 text-center'>
                    <div className='text-3xl md:text-4xl lg:text-5xl'>
                        <h1 className='tracking-wide font-bold text-white mb-10 leading-relaxed md:leading-loose'>Enroll Now</h1>
                    </div>
                </div>
                <div className='absolute bottom-10 w-full text-center'>
                    <h2 className='text-white italic text-2xl md:text-3xl w-11/12 md:w-3/4 lg:w-1/2 mx-auto leading-relaxed tracking-wide pb-20'>Let us forge your academic success together!</h2>
                </div>
            </div>
            <div className='h-full py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Tutoring service</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                        <p className='leading-loose'>
                            We offer tutoring services for k-12 students. Our service focuses on helping students with any academic questions relating to a variety of school subjects.
                        </p>
                        <p className='leading-loose mt-6'>
                            This service is offered in a form of one-to-one appointment with a tutor for one hour. Students may deliver their questions at their convenience during the tutoring hour. Tutoring times are flexible.
                        </p>
                        <p className='leading-loose mt-6'>
                            All volunteers have to be in high school to apply for a tutor. Most of our volunteers are upperclassman in high school who have finished related courses and are passionate about their tutoring subjects. Admission test and interview process has to be completed to volunteer with us. Around 30% of all candidates who apply to volunteer get accepted.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-full py-12 bg-white'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Subjects</h1>
                    <p className='mt-4 text-base'>If you want to schedule for a subject that is not available or not displayed, please email <a className='link-custom' href='mailto:info@tutoringforall.org' target='_blank' rel='noreferrer'>info@tutoringforall.org</a>.</p>
                    <div className='text-lg sm:text-xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {cardsList.map((card, cardIndex) =>
                            <div className='bg-primary-100 shadow p-4 rounded-lg'>
                                <h2 className='font-bold mb-3'>{card.category}</h2>
                                <ul className='list-disc pl-10'>
                                    {card.subjects.map((subject, subjectIndex) =>
                                        <li key={`${cardIndex}-${subjectIndex}`}>{subject}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='h-full py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Instructions</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                        <p className='leading-loose'>
                            To schedule your session, go to our scheduling platform at <a className='link-custom' href='https://cal.tutoringforall.org' target='_blank' rel='noreferrer'>cal.tutoringforall.org</a>.
                        </p>
                        <p className='leading-loose mt-6'>
                            Enter your name, your email, and create a password. When registering as a student, enter your account code <strong>6VcVV</strong>.
                        </p>
                        <p className='leading-loose mt-6'>
                            If you have any questions when registering, email us at <a className='link-custom' href='mailto:info@tutoringforall.org' target='_blank' rel='noreferrer'>info@tutoringforall.org</a> or call us at <a className='link-custom' href='tel:855-582-1038' target='_blank' rel='noreferrer'>(855) 582-1038</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-full py-12 bg-white'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Policies</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                    <p className='leading-loose'>
                            <span className='font-bold text-xl sm:text-2xl border-yellow-300 border-4 p-1 rounded-md shadow mr-4 uppercase'>Cancellation</span>You can cancel your session 2 hours in advance without penalty. Any late cancellation/no show up for 3 times will result in the withholding of the tutoring privilege for 7 days.
                        </p>
                        <p className='leading-loose mt-6'>
                            <span className='font-bold text-xl sm:text-2xl border-yellow-300 border-4 p-1 rounded-md shadow mr-4 uppercase'>Long term</span>To have a long-term tutoring session with the same tutor, please check the box “this is a long-term tutoring session (6 sessions max)” when you schedule your session here.

                            Please keep in mind that 1 long-term tutoring service consists of 6 individual one-hour sessions maximum. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enroll
