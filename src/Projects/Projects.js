import './Projects.css';

import React from 'react';
import { Octokit } from "@octokit/core";

import Listing from './Listing';
import { WorkInProgress } from '../Shared';

export default function Projects() {

    const [state, ] = React.useState([]);

    const something = {
        title: 'Dogtionary',
        repo_name: 'Dogtionary',
        description: '',
        tags: ['web development', 'React', 'Html', 'CSS'],
        media: [],
        languages: ['Html', 'CSS', 'Javascript'],
        tools: [
            {
                name: 'React',
                url: 'https://reactjs.org',
            },
            {
                name: 'Material-UI',
                url: 'https://material-ui.com'
            }
        ],
        patterns: [],
    }

    return (
        <div>
            <div className='search-bar'>
                <form id='search-form'>
                    <input type='text' placeholder='Search...'></input>
                    <button>search</button>
                </form>
            </div>

            <div style={{ width: '70%', margin: 'auto' }}>
                {
                    state.length ? (
                        state.map(ele => <Listing props={ele} />)
                    ) : <WorkInProgress title='UNDER CONSTRUCTION'><p>Until this is prepared, please feel free to view my publicly available projects on <a href='https://github.com/boranbirsan'>Github</a></p></ WorkInProgress>
                }
            </div>
        </div>
    );
}