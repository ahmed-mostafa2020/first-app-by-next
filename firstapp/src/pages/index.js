import Head from 'next/head'
import s from '../styles/Home.module.css'
import Products from '../components/Products'

export default function Home({products}) {

  const renderedProducts = products.map((product) => {
    return <Products key={product.id} product={product} />
  });


  return (
    <>
    <Head>
      <title>
        Home | Basic E-commerce App
      </title>
    </Head>

    <section className={s.home}>
      <div className='container'>
        <div className='row'>
          <h2 className={s.title}>products:</h2>
        {renderedProducts}
        </div>
      </div>
    </section>
    </>
  )
}
export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: { products },
  };
}