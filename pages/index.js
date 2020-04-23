import Link from 'next/link';
import Head from '../components/head'
import Nav from '../components/nav';
import Layout from '../components/layout';
export default () => (
  <div>
    <Layout>
    <Head />
      <div className="column col-12">
        <Nav />
      </div>
      <div className="column col-6 col-mx-auto">
         Content goes here.
      </div>
    </Layout>
  </div>
);