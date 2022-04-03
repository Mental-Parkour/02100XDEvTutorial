import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Programs from '../components/steps/Programs';
import FireShip from '../components/steps/FireShip';
import HTMLTime from '../components/steps/HTMLTime';
import CssTime from '../components/steps/CssTime';
import Content from '../components/steps/content';
import CSSUnits from '../components/steps/CSSUnits';
import FlexBox from '../components/steps/FlexBox';
import BestFriends from '../components/steps/BestFriends';
import CodeAlongCss from '../components/steps/CodeAlongCss';
import SomeTimeAloneCSS from '../components/steps/CSSomeTimeAlone';
import HTMLAlone from '../components/steps/HTMLAlone';

const Home: NextPage = () => {
	const allSteps = [<Content key={'content'}/>, <FireShip key={'FireShip'}/>, <Programs key={'Programs'}/>, <HTMLTime key={'HTMLTime'}/>, <HTMLAlone key={'HTMLAlone'}/>,<CssTime key={'CssTime'}/>, <CSSUnits key={'CSSUnits'}/>, <FlexBox key={'FlexBox'}/>, <BestFriends key={'BestFriends'}/>, <CodeAlongCss key={'CodeAlongCss'}/>, <SomeTimeAloneCSS key={'SomeTimeAlone'}/>];

	return (
		<div className={styles.container}>
			<Head>
				<title>How to become a 0 2 100X Dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.start}>

					<p className={styles.description}> How to become a </p>
					<h1 className={styles.title}> 0 2 100X Developer </h1>
					<p className={styles.description}> & Start Making 💰💰💰</p>
					<hr/>

					<p> Created By: Erik Odman </p>
				</div>
				<div>
					<ul className={styles.tutorial}>
						{allSteps}
					</ul>
				</div>
			</main>
		</div>
	)
}

export default Home
