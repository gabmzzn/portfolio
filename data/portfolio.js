const header = {
	// homepage: 'https://rajshekhar26.github.io/cleanfolio',
	// title: 'JS.',
}

const about = {
	name: 'Juan Gabriel Mazzoleni',
	role: 'Full Stack Developer',
	description:
		'I live in Cordoba, Argentina, and I\'m a passionate multi-skilled developer and an information systems engineer student',
	resume: '/CV - Juan Gabriel Mazzoleni.pdf',
	social: {
		linkedin: 'https://www.linkedin.com/in/juan-gabriel-mazzoleni/',
		github: 'https://github.com/gabmzzn',
	},
}

const projects = [
	{
		name: 'Cinema React',
		description:
			'Developer of a movie theatre-like portal to show different popular avaible movies with detailed information pages with search functionality, powered by TheMovieDB API',
		stack: ['React', 'TypeScript', 'REST APIs', 'Material UI'],
		sourceCode: 'https://github.com/gabmzzn/cinema-react',
		livePreview: 'https://cinemareact.vercel.app/discover',
	},
	{
		name: 'CryptoCat',
		description:
			'Developer of a web portal crypto where it shows fluctuant live market data in real-time, statistical data about specific currencies, news feed, general information and top exchanges',
		stack: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'WebSocket', 'Material UI'],
		sourceCode: 'https://github.com/gabmzzn/cryptocat',
		livePreview: 'https://cryptovcat.vercel.app/market',
	},
	{
		name: 'Zoom to Fill',
		description:
			'Developer of a Google Chrome extension for an advertising company with an initial floor of 30.000 users taken successfully to +70.000 users',
		stack: ['Javascript', 'HTML', 'CSS', 'Chrome API', 'Adobe Photoshop'],
		sourceCode: 'https://github.com/gabmzzn/zoomtofill',
		livePreview: 'https://zoomtofill.vercel.app/',
	},
	{
		name: 'Next Events',
		description:
			'Developer of a React & Next.js project where you can see and filter events fetched from a realtime database experimenting with Static Site Generation (SSG)',
		stack: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'Firebase', 'Material UI'],
	},
	{
		name: 'React Food App',
		description:
			'Developer of a React project where you can see a menu list where you can order and manage a cart of orders which are fetched and store on a realtime database',
		stack: ['React', 'JavaScript', 'REST APIs', 'Firebase', 'Material UI'],
	},
	{
		name: 'Investraining',
		description:
			'Developer of a web portal crypto where it shows fluctuant live market data in real-time and statistical data about specific currencies',
		stack: ['Angular', 'TypeScript', 'Material', 'REST APIs', 'WebSocket'],
		sourceCode: 'https://github.com/gabmzzn/investraining',
		livePreview: 'https://investraining.vercel.app/market',
	},
	{
		name: 'Angular CRUD',
		description:
			'Web app made with NodeJS and Express.js as backend for experimenting different aspects of a API made with Node connected with a MySQL database and a frontend made on Angular.',
		stack: ['Angular', 'Node.js', 'TypeScript', 'MySQL', 'Material', 'Bootstrap', 'REST APIs'],
		sourceCode: 'https://github.com/gabmzzn/angularCRUD',
		livePreview: 'https://angular-crud-sigma.vercel.app/',
	},
	{
		name: 'Business System Manager',
		description:
			'Develop and maintenance of sales system, invoice, price list management and client management of a distributor of hardware products. General optimization of the business process, achieving a 60-80% reduction in working hours for specific tasks',
		stack: ['Microsoft Excel', 'SQL']
	},
]

const skills = [
	{
		name: 'Development',
		skills: [
			'React', 'Redux', 'Next.js', 'TypeScript', 'JavaScript', 'HTML CSS', 'Material UI', 'Node.js', 'Express.js', 'SQL', 'REST APIs', 'WebSocket']
	},
	{
		name: 'Soft Skills',
		skills: [
			'Proactivity',
			'Communication',
			'Teamwork',
			'Empathy',
			'Openness to criticism',
			'Attention to detail',
			'Creativity'
		]
	}
]

const education = [
	{
		title: 'Information Systems Engineering',
		subtitle: 'Universidad Tecnológica Nacional',
		description: [
			'Unified Software Development Process',
			'Algorithm Complexity Analysis',
			'Software Design Patterns',
			'Oriented Object Design',
			'Database Design',
			'Data Structure and Algorithms'
		],
		info: '2022>',
		img: '/utn.png'
	},
	{
		title: 'Bachelor on Programming',
		subtitle: 'Instituto José Peña',
		description: ['Scholar Website Project', 'General Systems Theory', 'Python language', 'Visual Basic .NET'],
		info: '2012',
		img: '/graduate.png'
	}
]

const certificates = [
	{
		title: 'Next.js & React',
		subtitle: 'The Complete Guide',
		description:
			'Pages and File-based Routing, Pre-Rendering and Data Fetching, App deployment',
		link: 'https://www.udemy.com/certificate/UC-ce912e31-f313-4f16-ad54-c34de50b9f95/',
		info: 'UDEMY - ACADEMIND - 2022'
	},
	{
		title: 'React',
		subtitle: 'The Complete Guide',
		description: 'React Hooks, React Router, Redux, Optimization Techniques, Custom Hooks, App Deployment',
		link: 'https://www.udemy.com/certificate/UC-e0dc8ff4-3547-4806-9325-a17fd01fd0a4/',
		info: 'UDEMY - ACADEMIND - 2022'
	},
	{
		title: 'Node.js',
		subtitle: 'The Complete Guide',
		description: 'Express.js, MVC, Dynamic Routes & Advanced Models, Sequelize, NoSQL, REST APIs, GraphQL',
		link: 'https://www.udemy.com/certificate/UC-e0dc8ff4-3547-4806-9325-a17fd01fd0a4/',
		info: 'UDEMY - ACADEMIND - 2022>'
	},
	{
		title: 'MongoDB',
		subtitle: 'The Complete Guide',
		description: 'MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework',
		link: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
		info: 'UDEMY - ACADEMIND - 2022>'
	},
	{
		title: 'EF STANDARD ENGLISH TEST',
		subtitle: 'English Certificate',
		description: 'Listening Section 80/100, Reading Section 88/100, Total Score 84/100 (C2 Proficient)',
		link: 'https://www.efset.org/cert/wxiedj',
		info: 'EF SET - 2021'
	},
]

const languages = [
	{
		title: 'English',
		subtitle: 'Advanced Level',
		description: ['Very good writing, reading,', 'listening, and verbal skill'],
		img: './gb.svg'
	},
	{
		title: 'Spanish',
		subtitle: 'Native Speaker',
		description: ['With an Argentinian accent 🧉'],
		img: '/es.svg'
	}
]

const testimonials = [
	{
		title: 'Anastasiia',
	},
	{
		title: 'Gonzalo',
	},
	{
		title: 'Jony',
	},
]

const contact = {
	email: 'gabmzzn@gmail.com',
}

export { header, about, projects, education, certificates, skills, languages, testimonials, contact }
