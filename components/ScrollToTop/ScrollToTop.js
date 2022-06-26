import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import css from './ScrollToTop.module.css'

const ScrollToTop = () => {
	const [visible, setVisible] = useState('')

	useEffect(() => {
		const toggleVisibility = () =>
			window.pageYOffset > 500 ? setVisible(css.visible) : setVisible('')

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<a href='#'>
			<div className={`${css.top} ${visible}`}>
				<ArrowUpwardIcon fontSize='large' />
			</div>
		</a>
	)
}

export default ScrollToTop
