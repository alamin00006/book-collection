import React, { useState } from 'react';
import Product3Summary from './Product3Summary';
import Product3Specification from './Product3Specification';
import Product3Author from './Product3Author';
const Product3ToggleButton = () => {
    const [showSummary, setShowSummary]= useState(true);
    const [showSpecification, setShowSpecification]= useState(false);
    const [showAuthor, setShowAuthor]= useState(false);
    const [isActive1, setIsActive1]= useState(true);
    const [isActive2, setIsActive2]= useState(false);
    const [isActive3, setIsActive3]= useState(false);

    let toggleClassCheck1 = isActive1 ?'active':'';
    let toggleClassCheck2 = isActive2 ?'active':'';
    let toggleClassCheck3 = isActive3 ?'active':'';

    return (
        <div>
        <button className={`summary ${toggleClassCheck1}`} onClick={() =>{
          return(
            setShowSummary(true),
            setShowSpecification(false),
            setShowAuthor(false),
            setIsActive1(true),
            setIsActive2(false),
            setIsActive3(false)
          )
        }} 
         style={{
          border:'none'
         }} >Summary</button>
        <button className={`specification ${toggleClassCheck2}`} onClick={() =>{
          return(
            setShowSummary(false),
            setShowSpecification(true),
            setShowAuthor(false),
            setIsActive1(false),
            setIsActive2(true),
            setIsActive3(false)
         
          )
        }}
        style={{
          border:'none'
         }} >Specification</button>
        <button className={`author ${toggleClassCheck3}`} onClick={() =>{
          return(
            setShowSummary(false),
            setShowSpecification(false),
            setShowAuthor(true),
            setIsActive1(false),
            setIsActive2(false),
            setIsActive3(true)
            
          )
        }} 
        style={{
          border:'none'
         }}
         
          >Author</button>
        {showSummary?<Product3Summary></Product3Summary>:null}
        {showSpecification?<Product3Specification></Product3Specification> :null}
        {showAuthor?<Product3Author></Product3Author>:null}
      </div>
    );
};

export default Product3ToggleButton;