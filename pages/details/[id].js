import { useRouter } from 'next/router';
import data from '../../public/data.json';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const item = data.find(item => item.id === parseInt(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{item.title}</h1>
      <p>{item.details}</p>
    </div>
  );
}
