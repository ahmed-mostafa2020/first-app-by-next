import Head from "next/head"
import s from '../../styles/Detail.module.css'
import Image from "next/image";



export default function Details({product}) {

  <Head>
    <title>Product Detail |Basic E-commerce App</title>
  </Head>

  const {id , title, description, image, price}= product;


  return (
    <>
      <section className={s.detail}>
        <div className="container">
          <div className="row">

            <div className="col-sm-12 col-md-6 col-lg-6">
              <Image src={image}  alt={title} width='500' height='500' />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
              <h4 className="my-1">{title}</h4>
              <p className="my-1">{description}</p>
              <h2 className="my-1"> {price}$ </h2>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
export async  function getStaticPaths(){
  const req = await fetch('https://fakestoreapi.com/products');
  const product = await req.json();
  const paths = product.map((product) => {
    return {
      params: {id: product.id.toString()}
    };
  });

  return{
    paths, 
    fallback: false
  };
}

export  async function getStaticProps(context){
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await req.json();
  return{
    props:{product}
  }
}


