import './Listing.css';

import testImg from '../Assets/Images/TestProjectImage.jpg';

export default function Listing() {
    return (
        <div>
            <img style={{ width: '50%', height: 'auto' }} src={testImg} />

            <div className='listing-details'>

            </div>
        </div>
    );
}