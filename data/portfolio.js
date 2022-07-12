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


const experience = [
	{
		name: 'JavaScript Developer',
		where: 'Zoom to Fill - Admitad',
		time: 'Contract - Sept 2021 · Present',
		description:
			'Developer of a Google Chrome extension in partnership with an advertising company with an initial floor of 30.000 users taken successfully to +70.000 users.',
		stack: ['Javascript', 'Chrome API', 'HTML', 'CSS/SASS'],
		livePreview: 'https://zoomtofill.web.app/',
	},
	{
		name: 'Frontend Developer',
		where: 'CryptoCat - ASD Studios',
		time: 'Contract - Feb 2022 · Present',
		description:
			'Developer of a web portal crypto where it shows fluctuant live market data in real-time, statistical data about specific currencies, news feed, general information and exchanges.',
		stack: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'WebSocket', 'Material UI'],
		livePreview: 'https://cryptovcat.vercel.app/market',
	},
	{
		name: 'Software Developer',
		where: 'DIMAMCOR SRL',
		time: 'Part Time - Apr 2019 · Aug 2021',
		description:
			'Develop and maintenance of sales, invoice, price list management on advanced spreadsheets/database of hardware products distributor. General optimization of the business process, achieving a 60-80% reduction in working hours for specific tasks.',
		stack: ['Power Query', 'SQL']
	},
]

const projects = [
	{
		name: 'Cinema React',
		description:
			'Movie theatre-like portal to show different popular avaible movies with detailed information pages with search functionality, powered by TheMovieDB API.',
		stack: ['React', 'TypeScript', 'REST APIs', 'Material UI'],
		sourceCode: 'https://github.com/gabmzzn/cinema-react',
		livePreview: 'https://cinemareact.vercel.app/discover',
	},
	{
		name: 'Next Events',
		description:
			'React & Next.js project where you can see and filter events fetched from a realtime database experimenting with Static Site Generation (SSG).',
		stack: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'Material UI'],
	},
	{
		name: 'Investraining',
		description:
			'Portal crypto where it shows fluctuant live market data in real-time and statistical data about specific currencies.',
		stack: ['Angular', 'TypeScript', 'REST APIs', 'WebSocket'],
		sourceCode: 'https://github.com/gabmzzn/investraining',
		livePreview: 'https://investraining.vercel.app/market',
	},
	{
		name: 'React Food App',
		description:
			'React project where you can see a menu list where you can order and manage a cart of orders which are fetched and store on a realtime database.',
		stack: ['React', 'JavaScript', 'REST APIs', 'Material UI'],
	},
	{
		name: 'Angular CRUD',
		description:
			'Web app made with NodeJS and Express.js as backend for experimenting different aspects of a API made with Node connected with a MySQL database and a frontend made on Angular.',
		stack: ['Angular', 'Node.js', 'TypeScript', 'MySQL', 'REST APIs'],
		sourceCode: 'https://github.com/gabmzzn/angularCRUD',
		livePreview: 'https://angular-crud-sigma.vercel.app/',
	}
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
			'Software Design Patterns',
			'Agile Methodology',
			'Algorithm Complexity Analysis',
			'Unified Software Development Process',
			'Data Structure and Algorithms',
			'Oriented Object Design',
			'Database Design'
		],
		info: '2022>',
		img: '/utn.png'
	},
	{
		title: 'Bachelor on Programming',
		subtitle: 'Instituto José Peña',
		description: ['General Systems Theory', 'Python language', 'Visual Basic .NET', 'Scholar Website Project',],
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
		description: ['Writing', 'Reading', 'Listening', 'Verbal skills'],
		img: './gb.svg'
	},
	{
		title: 'Spanish',
		subtitle: 'Native Speaker',
		description: ['With argentinian accent 🧉'],
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

export { header, about, experience, projects, education, certificates, skills, languages, testimonials, contact }
