import React, { useEffect, useState } from 'react'
import ProductCards from '../components/ProductCards'
import { QUERY_PRODUCTS, graphcms } from '../Graphql/Queries';
import ReactLoading from 'react-loading';
import Dropdown from '../components/Dropdown';

function Product() {

  const [products, setproducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    graphcms.request(QUERY_PRODUCTS)
      .then(data => {
        setproducts(data)
        console.log(data)
        setLoading(false);
      }).catch(err => console.log(err));
  }, [])

  // if (loading) {
  //   return (
  //     <div className='flex items-center justify-center h-screen text-secondary-100'>
  //       <ReactLoading type="spin" color='red' height={'50px'} width={'50px'} />
  //     </div>)
  // }

  const [filterCriteria, setFilterCriteria] = useState({
    marketSegment: null,
    brand: null,
    application: null,
    grade: null,
    package: null
  });


  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen text-secondary-100'>
        <ReactLoading type="spinningBubbles" color='rgb(228 157 91)' height={'200px'} width={'200px'} />
      </div>)
  }
  // Function to filter products based on specified criteria
  const filterProducts = (criteria) => {
    return products.products.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] === null || criteria[key] === product[key].name
      )
    );
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: value === "All" ? null : value
    }));
  };

  const filteredProducts = filterProducts(filterCriteria);



  return (
    <div>
          <div className="relative w-fill">
              <img src="assets/NHheader.png" className='w-full' alt="" />

              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white outlines w-full flex justify-center">
                  <h1 className="text-white-100 text-4xl md:text-[55px] text-center justify-center slide-in flex flex-wrap gap-6 ">Our Products</h1>
              </div>
          </div>

          <div className='my-10'>
              <h2 className='text-center text-3xl font-medium'>Comprehensive Lubrication Solutions for <br /> Every Automotive Need</h2>   
              <p className='text-center text-md mt-5'>Enhance Performance, Extend Lifespan, and Ensure Reliability <br /> with Our Range of Specialized Products</p>     
          </div>

      <div className="flex flex-wrap space-x-9 mb-10 justify-center items-center">
        {/* Market Segment Dropdown */}
        
        <Dropdown label="Market Segment"
          options={products.marketSegments.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.marketSegment}
          onChange={handleFilterChange} />

        <Dropdown label="Brand"
          options={products.brands.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.brand}
          onChange={handleFilterChange} />

        <Dropdown label="Application"
          options={products.applications.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.application}
          onChange={handleFilterChange} />

        <Dropdown label="Grade"
          options={products.gradeS.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.grade}
          onChange={handleFilterChange} />

        <Dropdown label="Package"
          options={products.packages.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.package}
          onChange={handleFilterChange} />

        {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
      </div>

          <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
        {filteredProducts.map(products =>(
          <ProductCards
          key={products.id}
            Name={products.productName}
            desc={products.productDescription}
            pic={products.productPicture.url}
            dataSheet={products.dataSheet?.url}
          />          
        ))}
          </div>
    
    </div>
  )
}

export default Product