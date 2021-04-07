import './shared.css';

import { Grid } from '@material-ui/core';

import HeaderLink from './HeaderLink';

function Header({path}){
	return (
		<div id='header'>
			<Grid container spacing={3} justify='center' alignItems='flex-end'>
				<Grid item id="name-title">
					<h1>Boran Birsan</h1>
					<p>Software Developer</p>
				</Grid>
				<Grid item id="links">
					<HeaderLink link='/' path={path} >Home</HeaderLink>
					<HeaderLink link='/resume' path={path} >Resume</HeaderLink>
					<HeaderLink link='/projects' path={path} >Projects</HeaderLink>
					<HeaderLink link='/contact' path={path} >Contact</HeaderLink>
				</Grid>
			</Grid>
		</div>
	);
}

export default Header;
