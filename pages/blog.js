import Link from 'next/link';
import Nav from '../components/nav';
import Head from '../components/head';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head />
      <div className="column col-12">
        <Nav />
      </div>
      <div className="column col-4 col-md-12 mt-2 col-mx-auto">
        <ul>
          {allPostsData.map(({ id, content, date, title, coverImage }) => (
            <div className="card mt-2" key={id}>
              <div className="card-image">
                <img src={ process.env.BACKEND_URL + coverImage}  className="img-responsive" /> 
              </div>

              <div className="card-header">
                <div className="card-title h5">{title}</div>
                <div className="card-subtitle text-gray"><Date dateString={date} /></div>
              </div>
              <div className="card-body">
                {content}
            </div>
              <div className="card-footer">
                <Link href={ process.env.BACKEND_URL + '/posts/[id]'} as={ process.env.BACKEND_URL +`/posts/${id}`}>
                  <button className="btn btn-primary">see post</button>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  )
}


