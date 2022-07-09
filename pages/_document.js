import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<link rel="preload" href="_next/static/media/poppins-v20-latin-regular.916d3686.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="_next/static/media/poppins-v20-latin-500.7777133e.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="_next/static/media/poppins-v20-latin-700.9a881e2a.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="_next/static/media/titillium-web-v15-latin-600.3330fc68.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="_next/static/media/titillium-web-v15-latin-700.c546e3f4.woff2" as="font" type="font/woff" crossOrigin="anonymous" />

				<meta name="title" content="Juan Gabriel Mazzoleni - Full Stack Developer" />
				<meta name="description" content="I'm a passionate multi-skilled
developer and Information Systems Engineering student" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://gabmz.dev/" />
				<meta property="og:title" content="Juan Gabriel Mazzoleni - Full Stack Developer" />
				<meta property="og:description" content="I'm a passionate multi-skilled
developer and Information Systems Engineering student" />
				<meta property="og:image" content="https://gabmz.dev/image.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://gabmz.dev/" />
				<meta property="twitter:title" content="Juan Gabriel Mazzoleni - Full Stack Developer" />
				<meta property="twitter:description" content="I'm a passionate multi-skilled
developer and Information Systems Engineering student" />
				<meta property="twitter:image" content="https://gabmz.dev/image.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}