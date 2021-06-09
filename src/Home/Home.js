import './Home.css';

import profile from '../Assets/Images/Best_sq_sm.jpg';

function Home() {
	return (
		<div className='wrapper'>
			<div id='container'>
				<div>
					<img id='profile' src={profile} alt='' />
				</div>
				<div>
					<div className='noticia-font'>
						<h3 className='font_3'>
							<span>Hello,</span>
						</h3>
						<h4 className='font_4'>
							a bit about me:
						</h4>
					</div>
					<div id='intro-text'>
						<p className='noticia-font'>I am an ambitious, software developer with a focus on web development. 
						With a collective several years of experience working on professional and personal projects, I have become a "Jack of all Trades".
						Having some experience in many fields such as, <strong>Machine Learning</strong>, <strong>Video Game Development</strong>, <strong>Data Science</strong>, etc, 
						allows me to fit comfortable into any necessary mold or position. That being said, I believe the best quality of a developer is the ability to work,
						get along, and communicate with fellow colleagues. 
						</p>
					</div>
					<div className='link-circles'>
						<div className='circle grey-link'>
							<a className='circle' href='/resume'>MY SKILLS</a>
						</div>
						<div className='circle green-link'>
							<a className='circle' href='/projects'>MY WORK</a>
						</div>
						<div className='circle red-link'>
							<a className='circle' href='/contact'>MY CONTACT</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
