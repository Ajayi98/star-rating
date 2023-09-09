// import { range } from './utils';


function StarRating({ rating }) {
  
  const stars = [];

    for (let i = 1; i<= rating; i ++){

      stars.push(
<img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
     />
      )
     
    }
    
    
  
  

  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
