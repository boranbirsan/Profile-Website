
import './CV.css';

import { NoteOutlined } from '@material-ui/icons';

function CV() {
	return(
		<div id='cv-wrapper' className='test'>
			<div id='main-panel'>
				<h2>RESUME</h2>
				<hr />

				<div className='main-section' >
					<div className='title-section'>
						<div className='text'>
							<h6>Professional Info</h6>
						</div>
					</div>
				</div>
			</div>
			<div id='side-panel'>
				<div className='icon'>
					<NoteOutlined className='pic'/>
				</div>
				<h6>Certificates</h6>
				<hr />
			</div>
		</div>
	);
}

export default CV;
