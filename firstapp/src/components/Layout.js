import Footer from "./Footer"
import Navbar from "./Navbar"
import s from '../styles/Layout.module.css'
export default function Layout({children}) {
  return (
    <>
    <section className={s.layout}>
      <Navbar />
        {children}

        <Footer />
    </section>
    </>
  )
}