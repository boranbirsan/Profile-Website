import './MainSection.css';

export default function MainSection({ title, children, styleName}) {
    return (
        <div className={`main-section ${styleName}`} >
            <div className='title-section'>
                <div className='text'>
                    <h6>{title}</h6>
                </div>
            </div>
            <div className='body-section'>
                {children}
            </div>
        </div>
    )
}