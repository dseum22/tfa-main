import React from 'react'

const About = () => {
    const cardsList = [{ category: 'Computer Science', subjects: ['AP Computer Science A (Java)'] }, { category: 'Natural Sciences', subjects: ['Regular/AP Biology', 'Regular/AP Chemistry', 'Regular/AP Physics 1/2 (Algebra-Based)', 'Regular/AP Physics C (Calculus-Based)'] }, { category: 'Mathematics', subjects: ['Regular/Honors Algebra 1 and Below (Elementary School Math)', 'Regular/Honors Geometry', 'Regular/Honors Algebra 2 and Trigonometry', 'Regular/Honors Precalculus', 'Regular/AP Calculus (AB + BC)'] }, { category: 'English', subjects: ['Elementary and Middle School English'] }, { category: 'Social Sciences', subjects: ['Regular/AP Microeconomics', 'Regular/AP Macroeconomics'] }, { category: 'College Preparation', subjects: ['SAT/ACT English', 'College Application Essay Writing', 'SAT Math (Standardized Test)'] }];
    return (
        <>
            <div className='bg-image-about bg-cover bg-center h-adjust'>
                <div className='relative h-adjust w-full bg-black bg-opacity-80'>
                </div>
                <div className='absolute top-36 left-1/2 transform -translate-x-1/2 w-full h-1/2 p-6 lg:px-40 text-center'>
                    <div className='text-3xl md:text-4xl lg:text-5xl'>
                        <h1 className='tracking-wide font-bold text-white mb-10 leading-relaxed md:leading-loose'>About Tutoring for All</h1>
                    </div>
                </div>
                <div className='absolute bottom-10 w-full text-center'>
                    <h2 className='text-white italic text-2xl md:text-3xl w-11/12 md:w-3/4 lg:w-1/2 mx-auto leading-relaxed tracking-wide pb-20'>We provide an engaging environment for students to deliver their academic questions and concerns.</h2>
                </div>
            </div>
            <div className='h-full py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>General information</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                        <p className='leading-loose'>
                            Tutoring for All aims to bring impactful learning experiences for K-12th graders, especially those who are under-resourced. Our tutors are well-selected and are pleased to share their knowledge with students.
                        </p>
                        <p className='leading-loose mt-6'>
                            We are a part of a larger organization, <a className='link-custom' href='https://roboticsforall.net' target='_blank' rel='noreferrer'>Robotics for All</a>, a 501 (c)(3) nonprofit organization that provides free STEM education to students of all backgrounds across the nation.
                        </p>
                        <p className='leading-loose mt-6'>
                            All volunteers are carefully screened through a comprehensive written application and interview before being accepted. All volunteers over the age of 18 must pass a detailed background check run by our contractor <a className='link-custom' href='https://www.sterlingvolunteers.com/' target='_blank' rel='noreferrer'>Sterling Volunteers</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-full py-12 bg-white'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Non-discrimination policy</h1>
                    <div className='text-lg sm:text-xl mt-6'>
                        <p className='leading-loose'>
                            Tutoring for All has and will never discriminate against a student or a volunteer on any basis, including gender (Tutoring for All accepts volunteers and students of all gender, including the non-binary), race, sexual orientation, or any other factor that can be discriminated against.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-full py-12'>
                <div className='mx-auto w-5/6 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Subjects</h1>
                    <div className='text-lg sm:text-xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {cardsList.map((card, cardIndex) =>
                            <div className='bg-white shadow p-4 rounded-lg'>
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
        </>
    )
}

export default About
