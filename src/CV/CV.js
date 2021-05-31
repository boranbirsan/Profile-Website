import './CV.css';

import { Language, PowerSettingsNew, Build } from '@material-ui/icons';

import MainSection from './MainSection';
import Listing from './Listing';

function CV() {
	return (
		<div id='cv-wrapper'>
			<div id='main-panel'>
				<h2>RESUME</h2>
				<MainSection title='Professional Info'>
					<p className='font-1'>My years of experience paving my own path starts pretty early in my life, before high school even ended. During high school, I very quickly became bored of the education that they were providing and by 11th grade decided that it was not worth my efforts. I dropped out of high school and started making money on my own working a few entry level jobs around town. I received my GED, worked and rented a place of my own with a few friends, and I quickly learned what it means to make it in the real world. I focused on these experiences to learn what it means to work in teams, how to work in a corporate setting, how to manage a household, pay bills and taxes, and generally function as an adult all within the ages of 17-20 years old. I got my taste of the working/real life very early on and I would consider myself very experienced in dealing with adversity. Around the age of 20, I realized that making it on my own was a long and pain staking process and eventually my life began to stagnate in the last few months. Before I let my life stagnate, i decided that it was in my best interest to use my GED to earn a degree, as just a high school diploma will not grant me the respect that I desired. After 20, i spent the next few years getting my diploma in computer science, working at places like AirTies, and start-ups like Flank Esports. The information and experienced I've gained before, during and after university have been greatly invaluable. And even things that most people might consider mistakes or bad decisions have provided my with extremely useful experiences that one could not achieve through conventional methods. </p>
				</MainSection>
				<MainSection title='Work Experience'>
					<Listing
						title='Doğuş Techonology - Front-end Developer'
						location='Istanbul, Turkey'
						dates="August 2020 - January 2021"
					>
						<p className='font-1 no-margin'>test</p>
					</Listing>
					<Listing
						title='Flank Esports - Intern Web Developer'
						location='Istanbul, Turkey'
						dates="​July 2017 - September 2017"
					>
						<p className='font-1 no-margin'>I got the pleasure of working at this Start-up, during its early inception. I learned a lot of what makes a company tick, and what it takes to run a simple start-up with only a 5-person team. Since then it has grown significantly, but I'm fortunate enough to have seen the methods a company might use to grow to that level. Plus I had the pleasure of learning a lot about client-side and server-side web development using JavaScript, HTML and database systems like SQL. </p>
					</Listing>
					<Listing
						title='AirTies - Intern Program: SummerSeed2016'
						location='Istanbul, Turkey'
						dates="​July 2016 - August 2016"
					>
						<p className='font-1 no-margin'>AirTies holds a summer internship program called SummerSeed. I was fortunate enough to intern during SummerSeed 2016, and got the pleasure of learning about computer networks and the steps of project development.</p>
					</Listing>
				</MainSection>
				<MainSection title="Education" styleName='bottom'>
					<Listing
						title='Özyeğin University - B.S. in Computer Science'
						location='Istanbul, Turkey'
						dates='09/2015 - 01/2020'
					>
						<p className='font-1 no-margin'>Focuses of study:</p>
						<ul style={{ paddingLeft: '25px' }}>
							<li>Analysis of Algorithms</li>
							<p className='listing-text' style={{ paddingLeft: '10px' }}>
								Study of algorithms, what makes algorithms effective and in what situations and the computational cost/time of different  algorithms
							</p>
							<li>Data Science and Databases</li>
							<p className='listing-text' style={{ paddingLeft: '10px' }}>
								Study of machine learning algorithms for big-data analysis, as well as database management systems and design using SQL.
							</p>
							<li>Deep Reinforcement learning</li>
							<p className='listing-text' style={{ paddingLeft: '10px' }}>
								Study of off-model machine learning algorithms used to learn specific tasks. ​Use and study of algorithms and methods such as Q-learning, SARSA, Deep Q-Network, etc.
							</p>
						</ul>
					</Listing>
				</MainSection>
			</div>
			<div id='side-panel'>
				<div className='icon'>
					<Language className='pic' />
				</div>
				<h6>Certificates</h6>
				<p>English (Native)</p>
				<p style={{ paddingBottom: '15px' }}>Turkish (Native)</p>
				<h6>Nationality</h6>
				<p style={{ paddingBottom: '25px' }}>Turkish-American</p>
				<div className='icon'>
					<PowerSettingsNew className='pic' />
				</div>
				<h6>Programming Languages</h6>
				<div style={{ paddingBottom: '25px' }}>
					<p style={{ fontWeight: 'bold' }}>Best:</p>
					<ul className='no-margin' style={{ paddingLeft: '25px', paddingBottom: '13px' }}>
						<li>Java</li>
						<li>Python</li>
						<li>JavaScript</li>
						<li>Html</li>
						<li>CSS</li>
					</ul>
					<p style={{ fontWeight: 'bold' }}>Intermediate:</p>
					<ul className='no-margin' style={{ paddingLeft: '25px' }}>
						<li>C++</li>
						<li>C#</li>
					</ul>
				</div>
				<div className='icon'>
					<Build className='pic' />
				</div>
				<h6>Tools and Skills</h6>
				{/* <p className='sub-text'>click on a tag to find projects using that tag</p> */}
				<div>
					<p>Web Development</p>
					<p>Node.JS</p>
					<p>Frontend</p>
					<ul className='no-margin' style={{ paddingLeft: '15px' }}>
						<p>React</p>
						<p>Angular</p>
					</ul>
					<p>Backend</p>

					<p>Database Design</p>
					<p>NoSQL - MongoDB</p>
					<p>Reinforcement Learning</p>
					<p>Game Development</p>
					<ul className='no-margin' style={{ paddingLeft: '15px' }}>
						<p>Unity</p>
						<p>Unreal Engine</p>
						<p>Engine Development</p>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CV;
