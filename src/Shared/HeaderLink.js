import './shared.css';

export default function HeaderLink({children, link, path}) {
	return (
		path === link
			? <a className='link current' href={link}>{children}</a>
			:
			<a className='link' href={link}>{children}</a>
	);
}
