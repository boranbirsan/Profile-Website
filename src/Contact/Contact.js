import './Contact.css';
import Form from './Form';

import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <div className='contact-wrapper'>
            <div className='info'>
                <h2 className='font-5 contact'>CONTACT</h2>

                <p className='font-1' style={{fontSize: '15px'}}>
                    <span style={{fontSize: '15px'}}>
                        <span style={{fontWeight: 'bold'}}>Cell:</span>
                        &nbsp; 980-225-6050
                    </span>
                </p>
                <p className='font-1' style={{fontSize: '15px'}}>
                    <span style={{fontSize: '15px'}}>
                        <span style={{fontWeight: 'bold'}}>Email:</span>
                        &nbsp; boran.birsan@gmail.com
                    </span>
                </p>
                <p className='font-1' style={{paddingTop: '20px'}}>
                    <span style={{fontSize: '15px', fontWeight: 'bold'}}>
                        Follow:
                    </span>
                </p>
                <SocialIcon className="social-icon-lg" url="https://github.com/boranbirsan"/>
                <SocialIcon className="social-icon-lg" url="https://www.linkedin.com/in/boran-birsan-02641a169/"/>
                <SocialIcon className="social-icon-lg" url="https://twitter.com/Moran_with_a_B"/>
                <SocialIcon className="social-icon-lg" url="https://www.instagram.com/angrybacn/"/>
            </div>
            <Form/>
        </div>
    );
}

export default Contact;