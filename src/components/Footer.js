import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '../images/social/phone.svg'
import MailIcon from '../images/social/mail.svg'
import LocationIcon from '../images/social/location.svg'
import InstagramLogo from '../images/social/instagram.svg'
import FacebookLogo from '../images/social/facebook.svg'
import TwitterLogo from '../images/social/twitter.svg'
import logoDesktop from '../images/logo-desktop.png'

const Footer = () => {
    return (
        <footer className='py-6 bg-primary-300'>
            <div className='mx-auto w-5/6 grid grid-cols-1 sm:grid-cols-5 gap-12 mb-6'>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Contact</h2>
                    <ul className='list-none'>
                        <li className='pb-2 flex'>
                            <img src={PhoneIcon} alt='Phone icon'></img>
                            <a className='link-custom ml-2' href='tel:855-582-1038' target='_blank' rel='noreferrer'>(855) 582-1038</a>
                        </li>
                        <li className='pb-2 flex'>
                            <img src={MailIcon} alt='Mail icon'></img>
                            <a className='link-custom ml-2' href='mailto:info@tutoringforall.org' target='_blank' rel='noreferrer'>info@tutoringforall.org</a>
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
                            <a className='link-custom ml-2' href='https://roboticsforall.net' target='_blank' rel='noreferrer'>Instagram</a>
                        </li>
                        <li className='pb-2 flex'>
                            <img src={FacebookLogo} alt='Facebook Logo'></img>
                            <a className='link-custom ml-2' href='https://tutoringforall.org' target='_blank' rel='noreferrer'>Facebook</a>
                        </li>
                        <li className='flex'>
                            <img src={TwitterLogo} alt='Twitter Logo'></img>
                            <a className='link-custom ml-2' href='https://tutoringforall.org' target='_blank' rel='noreferrer'>Twitter</a>
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
                            <a className='link-custom' href='https://roboticsforall.net' target='_blank' rel='noreferrer'>Robotics for All</a>
                        </li>
                        <li className='pb-2'>
                            <a className='link-custom' href='https://tutoringforall.org' target='_blank' rel='noreferrer'>Tutoring for All</a>
                        </li>
                        <li>
                            <a className='link-custom' href='https://tutoringforall.org' target='_blank' rel='noreferrer'>Mentoring for All</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <img className='w-full pb-2' src={logoDesktop} alt='Tutoring for All logo'></img>
                    <p className='text-base pb-2'>Tutoring for All is a branch of the 501 (c)(3) non-profit organization Robotics for All.</p>
                    <p className='text-base'>&copy; {(new Date()).getFullYear()} Tutoring for All</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
