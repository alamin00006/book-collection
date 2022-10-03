import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';
import './Product3AllDetails.css'

const Product3Details = () => {
    // const [user] = useAuthState(auth);
    const {details3Id} = useParams()
    const [singleProduct3, setSingleProduct3] = useState({});
    // const [error, setError] = useState('');
    //  const [reload, ] = useState(true);


 useEffect( () =>{
     const url = `https://book-collection-zs5k.onrender.com/product3Details/${details3Id}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct3(data))
    
 }, [])

    return (
      <div class="container">
      <div class="card">
        <div class="container-fliud">
          <div class="wrapper row">
            <div class="preview col-md-6">
              
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1"><img src={singleProduct3.picture} alt="" /></div>
                <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" alt=""  /></div>
                <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" alt=""  /></div>
                <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" alt=""  /></div>
                <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" alt=""  /></div>
              </div>
              <ul class="preview-thumbnail nav nav-tabs">
                <li class="active"><a href='..' data-target="#pic-1" data-toggle="tab"><img src={singleProduct3.picture} alt=""  /></a></li>
                <li><a href='..'  data-target="#pic-2" data-toggle="tab"><img src={singleProduct3.picture} alt=""  /></a></li>
                <li><a href='..'  data-target="#pic-3" data-toggle="tab"><img src={singleProduct3.picture} alt=""  /></a></li>
                <li><a href='..'  data-target="#pic-4" data-toggle="tab"><img src={singleProduct3.picture} alt=""  /></a></li>
                <li><a href='..'  data-target="#pic-5" data-toggle="tab"><img src={singleProduct3.picture} alt=""  /></a></li>
              </ul>
              
            </div>
            <div class="details col-md-6">
              <h3 class="product-title">men's shoes fashion</h3>
              <div class="rating">
                <div class="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <span class="review-no">41 reviews</span>
              </div>
              <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
              <h4 class="price">current price: <span>$180</span></h4>
              <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
              <h5 class="sizes">sizes:
                <span class="size" data-toggle="tooltip" title="small">s</span>
                <span class="size" data-toggle="tooltip" title="medium">m</span>
                <span class="size" data-toggle="tooltip" title="large">l</span>
                <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
              </h5>
              <h5 class="colors">colors:
                <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                <span class="color green"></span>
                <span class="color blue"></span>
              </h5>
              <div class="action">
                <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    );
};
   
export default Product3Details;