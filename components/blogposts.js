import { getSortedPostsData } from '../lib/posts'



export default function Home({ allPostsData }) {
    return (
        <ul className='test'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='test' key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
    )
  }
  