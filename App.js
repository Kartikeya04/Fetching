
import './App.css';
import ReactPaginate from 'react-paginate';
import React from 'react'
import { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const App=()=> {
  const [products, setproducts] = useState([]);


  const [currentPage, setCurrentPage] = useState(0); 

  

  
  const productsPerPage = 10;
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);





   
    // Temporary
  const getItems=()=>{
   
    fetch('https://dummyjson.com/products')
       .then(response=>response.json())
      .then( (data)=>setproducts((data.products)))
      // https://dummyjson.com/products
      

  }




  

  

    useEffect(()=>{
      getItems()            
    },[])

    

    // const handlePageClick = async (data) => {
      
    //   const selectedPage = data.selected ;
    //   const itemsPerPage = 10; // Number of items per page
    //   const startIndex =(( selectedPage ) * itemsPerPage);
    //   const lastIndex=(selectedPage+1)* itemsPerPage;
    //   const ar1=[];
    
    //   // Fetch data for the selected page
    //   const response = await fetch(`https://dummyjson.com/products?startIndex=${startIndex}&limit=${lastIndex}`);
    //   const newData = await response.json();

    
    //   // Update the products state with the new data
    //   setproducts(ar1);
    //   setproducts(newData.products);
    //   // setproducts((prevProducts) => [...prevProducts, ...newData.products]);
    // };
    











  return (


     <div className="App"> 

  {  productsToDisplay.map((product)=>{
          return (
            <div className="savee" key={product.id}>
            <ul>
              {
              <div class="card" >
              <div class="card-body">
                <h5 class="card-title"> {product.title} </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{product.description}</h6>
                
                <li>  <li>Discounted % : {product.discountPercentage} rating : {product.rating}</li>
            
             <li> brand : {product.brand} category : {product.category}
              </li>
              <li>Stock : {product.stock} ,  price : {product.price}</li>
              <li>Url : {product.thumbnail}</li>
              <img src={product.thumbnail} height="200px" width="300px" alt={product.id}/>
              
                        </li>
                <a href="#" class="card-link">{product.id}</a>+
                
              </div>
            </div>


              






            
                           
                           
                           }

              </ul> 
            
         
         </div>
          )   
  }) 
}

     
      {
      <ReactPaginate
      
       previousLabel={'previous'}
        nextLabel={'next'}
       pageCount={Math.ceil(products.length/productsPerPage)}
      // pageCount={3}
       onPageChange={(data) => setCurrentPage(data.selected)}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'}
      

      
       />
      }
    
    

        
    
           
            
   
       </div>
    
  );
}


export default App;
