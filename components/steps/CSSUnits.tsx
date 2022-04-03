import { FunctionComponent } from 'react';

const CSSUnits: FunctionComponent = () => {
	return (
		<li>
			<h1> Step 5) Recap your CSS units </h1>
            <p> CSS units are all very different and its important to use the right tool for the job. As you may have learned, we have %, rem, em, px, vw, vh, which are either static or relative to the parent elements</p>
            <p> watch one of the videos. </p>

			<ul style={{margin: '2rem 0 0 0'}}>
				<li> <iframe src="https://www.youtube.com/embed/8UTMS3WTM0k" allowFullScreen></iframe> </li>
                <li> <iframe src="https://www.youtube.com/embed/-GR52czEd-0" allowFullScreen></iframe> </li>
            </ul>

			<h3>Make sure:</h3>

			<p> For Borders, always use px. For margin, paddings, and font-size, always use rem. </p>
		</li>
	)
}

export default CSSUnits;