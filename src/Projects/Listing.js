import React from 'react';
import './Listing.css';

// import testImg from '../Assets/Images/TestProjectImage.jpg';

export default function Listing(props) {
    const { repo } = props;

    const [languages, setLanguages] = React.useState({});
    const [total, setTotal] = React.useState(0);
    const [langArr, setLangArr] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        await fetch(repo.languages_url, {

        }).catch(err => {
            throw new Error(err);
        }).then(async response => {
            if (response.ok) {
                await response.json().then(async data => {
                    setLanguages(data);
                    let curr = 0;
                    await Object.keys(data).forEach(async key => {
                        await langArr.push(key);
                        curr += data[key];
                    });
                    setTotal(curr);
                });
                await setLoading(false);
            }
        });
    }, [])

    return (
        !loading && <div>
            <h2>Repository: {repo.name}</h2>
            <div className='listing-details'>
                <ul>
                    {langArr.map(lang => {
                        let per = (languages[lang]/total) * 100;
                        return <li>{lang}: {Math.round(per * 10) / 10}%</li>
                    })}
                </ul>
            </div>
        </div>
    );
}