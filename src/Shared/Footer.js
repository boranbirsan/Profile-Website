import './Footer.css';

import { Phone, MailOutline, AddCircleOutline, Copyright } from '@material-ui/icons';
import { SocialIcon } from 'react-social-icons';

function Footer() {
	return (
		<footer id='footer'>
			<div className='footer-contact-container'>
				<FooterContact icon={<Phone fontSize="large" />}>
					<p className='font-1'>Call</p>
					<p className='font-1' style={{ fontSize: '12px' }}>980 225 6050</p>
				</FooterContact >
				<FooterContact icon={<MailOutline fontSize="large" />}>
					<p className='font-1'>Email</p>
					<p className='font-1' style={{ fontSize: '12px' }}>boran.birsan@gmail.com</p>
				</FooterContact >
				<FooterContact icon={<AddCircleOutline fontSize="large" />}>
					<p className='font-1'>Follow Me:</p>
					<SocialIcon className="social-icon"
						style={{ width: '30px', height: '30px' }}
						url="https://github.com/boranbirsan"
						bgColor='white' />
					<SocialIcon className="social-icon"
						style={{ width: '30px', height: '30px' }}
						url="https://www.linkedin.com/in/boran-birsan-02641a169/"
						bgColor='white' />
					<SocialIcon className="social-icon"
						style={{ width: '30px', height: '30px' }}
						url="https://twitter.com/Moran_with_a_B"
						bgColor='white' />
					<SocialIcon className="social-icon"
						style={{ width: '30px', height: '30px' }}
						url="https://www.instagram.com/angrybacn/"
						bgColor='white' />
				</FooterContact >
				<FooterContact icon={<Copyright fontSize="large" />}>
					<p className='font-1'>© 2021 by Boran Birsan</p>
					{/* <p className='font-1' style={{fontSize: '12px'}}>Proudly createed by hand</p> */}
				</FooterContact >
			</div>
			<div id='bottom'></div>
		</footer>);
}

export default Footer;

function FooterContact({ children, icon }) {
	return (
		<div className='contact-box'>
			<div className='icon-box'>
				{icon}
			</div>
			<div className='contact-box-content' style={{ paddingLeft: '15px' }}>
				{children}
			</div>
		</div>
	);
}
