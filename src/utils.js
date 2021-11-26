import Landing from './Pages/Landing';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

export const scrollToTop = () => {
	window.scrollTo(0, 0);
}

export const Routes = [
	{ path: '/', component: Landing, name: 'Home 🏡', isNavItem: true },
	{ path: '/projects', component: Projects, name: 'Projects ☎️', isNavItem: true },
	{ path: '/contact', component: Contact, name: 'Contact 📧', isNavItem: false },
	{ path: '/experience', component: Experience, name: 'Experience 💼', isNavItem: true },
]
