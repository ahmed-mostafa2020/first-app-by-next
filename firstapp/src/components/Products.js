import s from '../styles/Products.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Products( {product} ) {

  const{id,title, description, image, price} = product;

  return (
    <>
      <div className='col-sm-12 col-md-6 col-lg-3'>
        <section className={s.product}>
          <div className="card" >
            <Image src={image} className="card-img-top" alt={title} width='200' height='300'  />
              <div className="card-body">
                <h5 className="card-title">{title.slice(0,20)}</h5>
                <p className="card-text"> {description.slice(0,60) + '...'} </p>
                <h2>{price}$</h2>
                <Link href={`/products/${id}`} className="btn btn-primary">More Details</Link>
              </div>
          </div>
        </section>
      </div>
        
        

    </>
  )
}