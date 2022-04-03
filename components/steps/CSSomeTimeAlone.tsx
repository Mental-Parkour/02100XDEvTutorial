import styles from '../../styles/steps.module.css';
import { FunctionComponent, useState } from 'react';

const CSSomeTimeAlone: FunctionComponent = () => {
	const [showFullScreen, setshowFullScreen] = useState<boolean>(false);
	const [hint, sethint] = useState<boolean>(false);

	return (
		<li>
			<h1> Step 9) Some Time Alone. </h1>

			<p>Css is the most fundamental part of front end engeneering. Along with Javascript and HTML, it build the sexist fucking websites ever when crafted with care. It also avoids all complex backend logic that most people want to avoid as it gets very complicated past the walls, and involves minimal logic thinking skills and utilizes plenty of creative thinking skills, and allows for the developer to appreciate their work as quickly and graphically see beaitufl designs. </p>

			<h2>You always think you know how a car works until you need to build one. Where tf do you even start? </h2>
			<p> After those videos, I hope you are able to start some bigger project from scratch </p>

			<br/>
			<p>Starting from very shit, recreate this website using HTML & CSS. Make 2 files, one called index.html, and style.css. Link them together, and begin</p> 
			<p>Dont be afraid to google anything, use online CSS cheat sheets or your previous projects. Also recreate the hover animations, google when you need help and make sure you understand what your programming. </p> 
			<p> <a href='/CSSProject1/index.html' target='_blank' rel='noreferrer'> Recreate Me </a></p>
			<br/>

			<p> After the warm up, you will alone code the front page of <a rel='noreferrer' target='_blank' href='https://airbnb.com'> Airbnb.com</a> alone. </p>

			<h2> Here is a photo of the AIRBNB website. Recreate it.</h2>

			<img style={{display: showFullScreen?'block':'none'}} onClick={showFullScreen => setshowFullScreen(!showFullScreen)} className={styles.FullScreenImg} src='/css1.png' />
			<img className={styles.largeImg} onClick={showFullScreen => setshowFullScreen(true)} src='/css1.png' />

		</li>
	)
}

export default CSSomeTimeAlone;