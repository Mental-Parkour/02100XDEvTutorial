import type { NextPage } from 'next'
import Head from 'next/head'
import Two from '../components/steps/2';
import One from '../components/steps/1';
import styles from '../styles/Home.module.css'
import Three from '../components/steps/3';
import Four from '../components/steps/4';

const Home: NextPage = () => {
	const allSteps = [<One key={1}/>, <Two key={2}/>, <Three key={3}/>, <Four key={4}/>];

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
