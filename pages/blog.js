import Link from 'next/link';
import Nav from '../components/nav';
import Head from '../components/head';
import { getSortedPostsData } from '../lib/posts'
export default () => (
  <div>
    <Head />
    <Nav />
    Here is the blog.
  </div>
)