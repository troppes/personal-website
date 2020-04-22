import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
export default () => (
  <div>
    <Nav />
  </div>

  //<Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>Blog</a></Link>
);