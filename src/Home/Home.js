import './Home.css';

import profile from '../Images/Best_sq.JPG';
import { Grid } from '@material-ui/core';

function Home() {
	return (
		<div className='wrapper'>
			<Grid container spacing={3} justify='center'>
				<Grid item>
					<img id='profile' src={profile} alt=''/>
				</Grid>
				<Grid item>
					<div className='noticia-font'>
						<h3 className='font_3'>
							<span>Hello,</span>
						</h3>
						<h4 className='font_4'>
							a bit about me:
						</h4>
					</div>
					<div className='link-circles'>
						<Grid container spacing={3} >
							<Grid item sx={12} sm={4}>
								<div className='circle grey-link'>
									<a className='circle' href='/resume'>MY SKILLS</a>
								</div>
							</Grid>
							<Grid item sx={12} sm={4}>
								<div className='circle green-link'>
									<a className='circle' href='/projects'>MY WORK</a>
								</div>
							</Grid>
							<Grid item sx={12} sm={4}>
								<div className='circle red-link'>
									<a className='circle' href='/contact'>MY CONTACT</a>
								</div>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
