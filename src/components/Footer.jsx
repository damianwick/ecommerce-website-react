import './Footer.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer id='footer-section'>
            <p>Project by <strong>Damian Wiecek</strong></p>
            <div className='footer-icons-container'>
                <a href="https://github.com/damianwick" target='_blank' type='button'><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/damianwiecek/" target='_blank' type='button'><AiFillLinkedin /></a>
            </div>
        </footer>
    )
}