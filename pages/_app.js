import "../styles/globals.css";
import Layout from './Layout';

export default function App({ Component }) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
