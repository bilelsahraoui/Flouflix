import React from 'react'
import './assets/footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_social">
                <a className='footer_link'>
                    <FacebookIcon />
                </a>
                <a className='footer_link'>
                    <InstagramIcon />
                </a>
                <a className='footer_link'>
                    <TwitterIcon />
                </a>
                <a className='footer_link'>
                    <YouTubeIcon />
                </a>
            </div>
            <ul className="footer_nav">
                <li className='footer_navlink'>
                    <a href="/">Audio et sous-titres</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Centre d'aide</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Presse</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Audiodescription</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Recrutement</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Confidentialité</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Préferences des cookies</a>
                </li>
                <li className='footer_navlink'>
                    <a href="/">Nous contacter</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer