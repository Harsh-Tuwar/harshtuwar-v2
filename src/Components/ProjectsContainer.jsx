import React from 'react';
import NameHeader from './NameHeader';
// import PageContainer from './PageContainer';

const ProjectsContainer = () => {
	// const [repos, setRepos] = useState([]);

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/harsh-tuwar/repos')
	// 		.then(async (data) => {
	// 			const response = await data.json();

	// 			setRepos(response);
	// 		});
	// }, []);

	// const getLanguages = (repoName) => {
	// 	fetch(`https://api.github.com/repos/Harsh-Tuwar/${repoName}/languages`)
	// 		.then(async (data) => {
	// 			const resp = await data.json();
	// 			return Object.keys(resp);
	// 		});
	// }

	return (
		<>
			<NameHeader />
		</>
		// <PageContainer 
		// <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly', margin: '20px 0', flexWrap: 'wrap' }} >
			// {/* {repos && repos.map((item) => {
				// return (allowedRepos.includes(String(item.id))) ? <div className="repo-card" key={item.id}>
				// 	<div><b>{item.name}</b></div>
				// 	<div><b>Language(s) Used: </b>{getLanguages(item.name)}</div>
				// 	<div>{item.description}</div>
				// </div> : null;
			// })} */}
		// </div>
	);
}
 
export default ProjectsContainer;

// const projects = [
// 	{
// 		"name": "Flutter News App",
// 		"langs": ["Dart", "Flutter"],
// 		"desc": "A simple news app with a minimalistic and modern UI that incorporates the newsapi.org api all built entirely with Flutter.",
// 		"git": "https://github.com/Harsh-Tuwar/flutter_news"
// 	}, {
// 		"name": "Expense Tracker App",
// 		"langs": ["JavaScript", "React", "ContextAPI", "Node JS", "Express", "MongoDB"],
// 		"desc": ""
// 	}`
// ]