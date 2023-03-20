import Link from 'next/link'
import s from '../styles/Navbar.module.css'
export default function Navbar() {
  return (
    <>
      <section className={s.nav}>
        <div className='container'>

          <div className={s.box}>
            <div className={s.left}>
              <Link href='/'><h1>This is logo</h1></Link>
            </div>
              
            <div className={s.right}>
              <ul>
                <li> <Link href='/'> Home </Link> </li>
                <li> <Link href='/about'> About </Link> </li>
                <li> <Link href='/cart'> Cart </Link> </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
