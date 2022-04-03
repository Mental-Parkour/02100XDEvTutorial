import styles from '../../styles/steps.module.css';
import { FunctionComponent, useState } from 'react';

const HTMLAlone: FunctionComponent= () => {
	const [showFullScreen, setshowFullScreen] = useState<boolean>(false);
	const [hint, sethint] = useState<boolean>(false);

	return (
		<li>
			<h1> Step 4)</h1>
			<h1> Make your own Tick Tack Toe Game! </h1>
			<p> Feel free to use your old code, google when you need help. </p>

			<img style={{display: showFullScreen?'block':'none'}} onClick={showFullScreen => setshowFullScreen(!showFullScreen)} className={styles.FullScreenImg} src='/HTML1.png' />
			<img className={styles.largeImg} onClick={showFullScreen => setshowFullScreen(true)} src='/HTML1.png' />	
			<p onClick={() => sethint(!hint)}>Hint</p> 
			{hint && <p> Use A HTML Table, then every TR will be a tick tack toe Row, And inside every TD make an input type text so players can write X or O, no label required. Using 3Trs and 9TDs in total, youll have a board. Dont use THead. </p>}
		</li>
	)
}

export default HTMLAlone;