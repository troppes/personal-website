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
      <div className="column col-12 mt-2 col-mx-auto">
        <div className="columns">
          <div className="column col-3 col-sm-6 mt-2 col-ml-auto">
            <h2>Florian Reitz</h2>
            <p>Hello, my name is Florian. I currently study computer science at HTW Berlin. For more information see my LinkedIn.
          </p>
          </div>
          <div className="column col-2 col-sm-6 mt-2 col-mr-auto">
            <img src={process.env.BACKEND_URL + '/img/me.png'} alt='logo' className='img-responsive' style={{'border-radius': 50 + '%'}}/>
          </div>
        </div>
      </div>
      <div className="column col-12 col-mx-auto">
        <div className="column col-5 col-sm-12 mt-2 col-mx-auto">
          <table role="table" className='table'>
            <thead>
              <tr>
                <th role="columnheader">Skill</th>
                <th role="columnheader">Level</th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell">Spanish</td>
                <td role="cell"><p>Beginner</p>
                </td>
              </tr>
              <tr role="row">
                <td role="cell">English</td>
                <td role="cell"><p>Expert</p>
                </td>
              </tr>
              <tr role="row">
                <td role="cell">DevOps</td>
                <td role="cell"><p>Proficient</p>
                </td>
              </tr>
              <tr role="row">
                <td role="cell">HTML, CSS, PHP, Javascript, NodeJS, Symfony</td>
                <td role="cell"><p>Proficient</p>
                </td>
              </tr>
              <tr role="row">
                <td role="cell">Java</td>
                <td role="cell"><p>Proficient</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  </div>
);