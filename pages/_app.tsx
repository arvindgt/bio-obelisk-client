import 'bootstrap/scss/bootstrap.scss';
import "bootstrap-icons/font/bootstrap-icons.scss";
import '../styles/globals.scss';
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
