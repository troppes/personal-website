import Link from 'next/link'
export default () => (
  <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About (Test)</a></Link></div>
)