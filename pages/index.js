import Link from 'next/link';
import Head from '../components/head'
import Nav from '../components/nav';
export default () => (
  <div>
    <Head />
    <Nav />
  </div>

  //<Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>Blog</a></Link>
);