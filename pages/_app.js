import '../styles/globals.css'
import '../styles/index.css'
import { ThemeProvider } from '../contexts/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
