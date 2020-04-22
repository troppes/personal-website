import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
export default () => (
  <div>
    <Head>
        <link rel="shortcut icon" href='favicon.ico' as={ process.env.BACKEND_URL + '/favicon.ico'} />
        <title>Nomi's Blog</title>
    </Head>
    <Nav />
  </div>

  //<Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>Blog</a></Link>
);