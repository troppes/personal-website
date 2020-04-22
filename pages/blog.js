import Link from 'next/link';
import Nav from '../components/nav';
import Head from '../components/head';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <div>
      <Head />
      <Nav />
      <ul className='test'>
        {allPostsData.map(({ id, date, title }) => (
          <li className='' key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  )
}


