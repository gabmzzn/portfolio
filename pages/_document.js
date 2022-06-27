import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<link rel="preload" href="_next/static/media/poppins-v20-latin-regular.916d3686.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="_next/static/media/poppins-v20-latin-500.7777133e.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="_next/static/media/poppins-v20-latin-700.9a881e2a.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}