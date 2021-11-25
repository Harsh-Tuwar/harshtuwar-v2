import Landing from './Pages/Landing';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

export const scrollToTop = () => {
	window.scrollTo(0, 0);
}

export const Routes = [
	{ path: '/', component: Landing, name: 'Home 🏡' },
	{ path: '/contact', component: Contact, name: 'Projects ☎️' },
	{ path: '/projects', component: Projects, name: 'My Resume 💼' },
]
