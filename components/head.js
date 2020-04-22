import Head from 'next/head';

export default function Nav() {
    return (
    <Head>
        <link rel="shortcut icon" href='favicon.ico' as={ process.env.BACKEND_URL + '/favicon.ico'} />
        <title>Nomi's Blog</title>
    </Head>
    )
  }