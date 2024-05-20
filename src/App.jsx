import Header from './components/header/header';
import AboutMe from './components/sectionAbout/about';
import PresentationCard from '@components/header/presentationCard';

function App() {
	return (
		<div className="min-h-screen">
			<Header />
			<main className='flex flex-col items-center'>
				<PresentationCard />
				<AboutMe />
			</main>
		</div>
	);
}

export default App;
