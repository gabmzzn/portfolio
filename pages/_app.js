import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }) {

	return <>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Juan Gabriel Mazzoleni - Full Stack Developer</title>
		</Head>
		<Component {...pageProps} />
	</>
}

export default MyApp
