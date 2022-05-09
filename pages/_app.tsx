import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
// import '../styles/Home.module.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
