
import Link from 'next/link'

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <header class="navbar">
    <section class="navbar-section">
        <Link href='/' as={ process.env.BACKEND_URL + '/'}><a class="btn btn-link">Home</a></Link>
        <Link href='/blog' as={ process.env.BACKEND_URL + '/blog'}><a class="btn btn-link">Blog</a></Link>
    </section>
    <section class="navbar-center">
      <Link href='/' as={ process.env.BACKEND_URL + '/'}><a class="btn btn-link">Nomi's Blog</a></Link>
    </section>
    <section class="navbar-section">
        <a href="#" class="btn btn-link">Twitter</a>
        <a href="#" class="btn btn-link">GitHub</a>
    </section>
    </header>

  )
}