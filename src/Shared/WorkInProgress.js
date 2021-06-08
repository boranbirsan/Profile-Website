import './WorkInProgress.css';

export default function WorkInProgress(props){
    return (
        <div className='construction-wrapper'>
            <h1 style={{fontSize: '43px'}}>{props.title}</h1>
            {props.children}
        </div>
    );
}