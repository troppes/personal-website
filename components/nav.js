
import Link from 'next/link'

export default function Nav() {
  return (
    <header className="navbar">
    <section className="navbar-section">
        <Link href='/' as={ process.env.BACKEND_URL + '/'}><a className="btn btn-link">Home</a></Link>
        <Link href='/blog' as={ process.env.BACKEND_URL + '/blog'}><a className="btn btn-link">Blog</a></Link>
    </section>
    <section className="navbar-center">
      <Link href='/' as={ process.env.BACKEND_URL + '/'}><a className="btn btn-link">Nomi's Blog</a></Link>
    </section>
    <section className="navbar-section">
        <a href="#" className="btn btn-link">Twitter</a>
        <a href="https://github.com/Nomi-1/" target='_blank'className="btn btn-link">GitHub</a>
    </section>
    </header>
  )
}