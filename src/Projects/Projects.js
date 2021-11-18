import './Projects.css';
import React from 'react';

import Listing from './Listing';
import { WorkInProgress } from '../Shared';

export default function Projects() {

    const [state, setState] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        await fetch('https://api.github.com/users/boranbirsan/repos', {
        }).catch(err => {
            throw new Error(err);
        }).then(async response => {
            if (response.ok) {
                response.json().then(data => {
                    setState(data.filter(ele => !ele.fork));
                    setLoading(false);
                });
            }
        })
    }, []);

    return (
        <div>
            <div className='search-bar'>
                <form id='search-form'>
                    <input type='text' placeholder='Search...'></input>
                    <button>search</button>
                </form>
            </div>

            {!loading && <div style={{ width: '70%', margin: 'auto' }}>
                {
                    state.length ? (
                        state.map(repo => <Listing key={repo.name} repo={repo} />)
                    ) : <WorkInProgress title='UNDER CONSTRUCTION'><p>Until this is prepared, please feel free to view my publicly available projects on <a href='https://github.com/boranbirsan'>Github</a></p></ WorkInProgress>
                }
            </div>}
        </div>
    );
}