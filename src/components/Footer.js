import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '../images/social/phone.svg'
import MailIcon from '../images/social/mail.svg'
import LocationIcon from '../images/social/location.svg'
import InstagramLogo from '../images/social/instagram.svg'
import FacebookLogo from '../images/social/facebook.svg'
import TwitterLogo from '../images/social/twitter.svg'

const Footer = () => {
    return (
        <footer className='mt-4 py-6 bg-primary-300'>
            <div className='mx-auto w-5/6 grid grid-cols-1 sm:grid-cols-4 gap-12 mb-6'>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Contact</h2>
                    <ul className='list-none'>
                        <li className='pb-2 flex'>
                            <img src={PhoneIcon} alt='Phone icon'></img>
                            <a className='link-custom ml-2' href='tel:855-582-1038'>(855) 582-1038</a>
                        </li>
                        <li className='pb-2 flex'>
                            <img src={MailIcon} alt='Mail icon'></img>
                            <a className='link-custom ml-2' href='mailto:info@roboticsforall.net'>info@roboticsforall.net</a>
                        </li>
                        <li className='flex'>
                            <img src={LocationIcon} alt='Location icon'></img>
                            <span className='ml-2'>P.O. Box 56, Palo Alto, CA 94302</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Social</h2>
                    <ul className='list-none'>
                        <li className='pb-2 flex'>
                            <img src={InstagramLogo} alt='Instagram Logo'></img>
                            <a className='link-custom ml-2' href='https://roboticsforall.net'>Instagram</a>
                        </li>
                        <li className='pb-2 flex'>
                            <img src={FacebookLogo} alt='Facebook Logo'></img>
                            <a className='link-custom ml-2' href='https://tutoringforall.org'>Facebook</a>
                        </li>
                        <li className='flex'>
                            <img src={TwitterLogo} alt='Twitter Logo'></img>
                            <a className='link-custom ml-2' href='https://tutoringforall.org'>Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Legal</h2>
                    <ul className='list-none'>
                        <li className='pb-2'>
                            <Link className='link-custom' to='/legal/privacy'>Privacy Policy</Link>
                        </li>
                        <li className='pb-2'>
                            <Link className='link-custom' to='/legal/terms'>Terms of Use</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Organization</h2>
                    <ul className='list-none'>
                        <li className='pb-2'>
                            <a className='link-custom' href='https://roboticsforall.net'>Robotics for All</a>
                        </li>
                        <li className='pb-2'>
                            <a className='link-custom' href='https://tutoringforall.org'>Tutoring for All</a>
                        </li>
                        <li>
                            <a className='link-custom' href='https://tutoringforall.org'>Mentoring for All</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>© {(new Date()).getFullYear()} Tutoring for All</p>
        </footer>
    )
}

export default Footer
