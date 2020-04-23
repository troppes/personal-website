export default function Layout({ children }) {
  return (
    <div className='container'>
      <div className='columns'>
        {children}
      </div>
    </div>
  )
}