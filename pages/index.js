import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam error sed, deleniti eos nemo quas eius veritatis voluptas maxime necessitatibus doloribus. Eius magni aperiam tenetur id odio nostrum sed iure?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatem provident, quis nesciunt incidunt natus omnis cum illo. Corrupti minus porro accusantium veniam nisi, inventore eveniet magni pariatur a. Quaerat!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja listing</a>
        </Link>
      </div>
    </>
  )
}
