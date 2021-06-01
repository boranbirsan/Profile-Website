import './Form.css';

export default function Form(){
    return(
        <div className='form'>
            <p className='font-1' style={{marginTop: '20px'}}>Looking forward to answering your email</p>
            <input type='text' placeholder='Name *'></input>
            <input type='text' placeholder='E-mail *'></input>
            <input type='text' placeholder='Subject *'></input>
            <textarea type='text' placeholder='Message *' style={{height: '200px'}}></textarea>
        </div>
    );
}