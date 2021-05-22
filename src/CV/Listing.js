import './Listing.css'

export default function Listing({title, dates, location, children}) {
    return (
        <div className='body-listing' style={{paddingBottom: '20px'}}>
            <h5 className='font-4 no-margin' style={{fontWeight: 'bold'}}>{title}</h5>
            <h6 className='font-3 no-margin'>{location}</h6>
            <p className='font-2 no-margin'style={{paddingBottom: '13px'}}>{dates}</p>
            {children}
        </div>
    );
}