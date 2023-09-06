import Layout from '../components/Layout/Layout';

export default function StaticPage() {
  const texts = ['Oh Noo!!', 'You lost!', 'Try a next time!!', 'Hooray!'];
  const text = texts[Math.floor(Math.random() * texts.length)];

  return (
    <Layout>
      <h1>Static page with generated content by JS</h1>
      <br />
      <h3>{text}</h3>
    </Layout>
  );
}
