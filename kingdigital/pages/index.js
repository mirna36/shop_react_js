import React from 'react';

import { client} from '../lib/client';
import { Product, FooterBanner, HeroBanner} from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className="products-heading">
      <h2>Meilleur Vendeur de Produits Hi-Tech!</h2>
      <p>Un grand catalogue de modèles des derniers produits digitaux</p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product Key={product.id} product={product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
  </div>
);

  export const getServerSideProps = async() =>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{ products, bannerData }
  }
}


export default Home;