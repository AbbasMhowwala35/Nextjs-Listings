import Link from 'next/link';
import data from '../public/data.json';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <h2>Listing</h2>
      <div className={styles.grid}>
        {data.map(item => (
          <div key={item.id} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={`/details/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
