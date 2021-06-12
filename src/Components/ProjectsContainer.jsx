import React, { useState, useEffect } from 'react';

const ProjectsContainer = () => {
	const [repos, setRepos] = useState([]);
	const allowedRepos = [
		'135499205', '167870965', '254782224', '180878120', '250672542', '354959915', '354683493',
		'134996857', '293180850', '334528671', '135954430', '273995080', '330270023', '311838407',
		'286314536', '165301606', '231845007'
	];

	useEffect(() => {
		fetch('https://api.github.com/users/harsh-tuwar/repos')
			.then(async (data) => {
				const response = await data.json();

				if (response.lenght > 0) {
					setRepos(response); 
				} else {
					setRepos([]);
				}
			});
	}, []);

	const getLanguages = (repoName) => {
		fetch(`https://api.github.com/repos/Harsh-Tuwar/${repoName}/languages`)
			.then(async (data) => {
				const resp = await data.json();
				return Object.keys(resp);
			});
	}

	return (
		<div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly', margin: '20px 0', flexWrap: 'wrap' }} >
			{repos && repos.map((item) => {
				return <div className="repo-card" key={item.id}>
					<div><b>{item.name}</b></div>
					<div><b>Language(s) Used: </b>{getLanguages(item.name)}</div>
					<div>{item.description}</div>
				</div>
			})}
		</div>
	);
}
 
export default ProjectsContainer;