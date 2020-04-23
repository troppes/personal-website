import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import Nav from '../../components/nav'
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="column col-12">
        <Nav />
      </div>
      <div className="column col-6 mt-2 col-mx-auto">
        <ul>

          <div className="card" key={postData.id}>
            <div className="card-image">
              <img src={process.env.BACKEND_URL + postData.coverImage} className="img-responsive" />
            </div>

            <div className="card-header">
              <div className="card-title h5">{postData.title}</div>
              <div className="card-subtitle text-gray"><Date dateString={postData.date} /></div>
            </div>
            <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
            <div className="card-footer">
              <Link href="/blog" as={process.env.BACKEND_URL + '/blog'}>
                <button className="btn btn-primary">back to all posts</button>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </Layout>
  )
}

