import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import css from './ScrollToTop.module.css'

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState('')

	useEffect(() => {
		const toggleVisibility = () =>
			window.pageYOffset > 500 ? setIsVisible('') : setIsVisible(css.visible)

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<a href='#'>
			<div className={`${css.top} ${isVisible}`}>
				<ArrowUpwardIcon fontSize='large' />
			</div>
		</a>
	)
}

export default ScrollToTop
