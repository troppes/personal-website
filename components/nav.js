
import Link from 'next/link'

export default function Nav() {
  return (
    <header className="navbar mt-2">
    <section className="navbar-section">
        <Link href='/' as={ process.env.BACKEND_URL + '/'}><a className="btn btn-link">Home</a></Link>
        <Link href='/blog' as={ process.env.BACKEND_URL + '/blog'}><a className="btn btn-link">Blog</a></Link>
    </section>
    <section className="navbar-center">
      <img src={ process.env.BACKEND_URL + '/img/logo_dark.svg'}  alt='logo'width='50px' height='50px' /> 
    </section>
    <section className="navbar-section">
        <a href="https://www.linkedin.com/in/florian-reitz-16a10b150/" className="btn btn-link">LinkedIn</a>
        <a href="https://github.com/troppes" target='_blank'className="btn btn-link">GitHub</a>
    </section>
    </header>
  )
}