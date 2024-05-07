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
    marketSegments: null,
    brands: null,
    applications: null,
    gradeS: null,
    packages: null,
    autoSparepartCategories: null,
    autoSparepartBrands: null,
    autoServiceCategories:null,
    autoServiceBrands:null
  });

  const [filterCriteriaAutoSparepart, setFilterCriteriaAutoSparepart] = useState({
    autoSparepartCategories: null,
    autoSparepartBrands: null,

  });

  const [filterCriteriaAutoService, setFilterCriteriaAutoService] = useState({
    autoServiceCategories: null,
    autoServiceBrands: null
  });


  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen text-secondary-100'>
        <ReactLoading type="spinningBubbles" color='rgb(228 157 91)' height={'200px'} width={'200px'} />
      </div>)
  }
  // Function to filter products based on specified criteria
  const filterProducts = (criteria) => {
    console.log(Object.keys(criteria))
    console.log(criteria)
    console.log(products.products.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      ))
    );

 

    return products.products.filter(product => product.productType == "Lubricant").filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      )
    );
  };

  const filterAutoSparepart = (criteria) => {
    console.log(Object.keys(criteria))
    console.log(criteria)
    console.log(products.products.filter(product => product.productType == "Auto_Spareparts").filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      ))
    );


    return products.products.filter(product => product.productType == "Auto_Spareparts").filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      )
    );
  };

  const filterAutoService = (criteria) => {
    console.log(Object.keys(criteria))
    console.log(criteria)
    console.log(products.products.filter(product => product.productType == "Auto_Service").filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      ))
    );



    return products.products.filter(product => product.productType == "Auto_Service").filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
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

  // Handle filter change
  const handleFilterChangeAutoService = (event) => {
    const { name, value } = event.target;
    setFilterCriteriaAutoService(prevCriteria => ({
      ...prevCriteria,
      [name]: value === "All" ? null : value
    }));
  };

  // Handle filter change
  const handleFilterChangeAutoSparepart = (event) => {
    const { name, value } = event.target;
    setFilterCriteriaAutoSparepart(prevCriteria => ({
      ...prevCriteria,
      [name]: value === "All" ? null : value
    }));
  };

  const filteredProducts = filterProducts(filterCriteria);
  const filteredProductsAutoSparepart = filterAutoSparepart(filterCriteriaAutoSparepart);
  const filteredProductsAutoService = filterAutoService(filterCriteriaAutoService);



  return (
    <div>
          <div className="relative w-fill">
              <img src="assets/NHheader.png" className='w-full' alt="" />

              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white outlines w-full flex justify-center">
                  <h1 className="text-white-100 text-4xl md:text-[55px] text-center justify-center slide-in flex flex-wrap gap-6 ">Our Products</h1>
              </div>
          </div>

          <div className='my-10 px-5'>
              <h2 className='text-center text-3xl font-medium'>Comprehensive Lubrication Solutions for <br /> Every Automotive and Industrial Need</h2>   
              <p className='text-center text-md mt-5'>Enhance Performance, Extend Lifespan, and Ensure Reliability <br /> with Our Range of Specialized Products</p>     
          </div>

          {/* Lubricant */}
      <div>
      <p className='text-center text-xl mb-4 mt-5 font-semibold'>Lubricant</p>
      <div className="flex flex-wrap space-x-9 mb-10 justify-center items-center px-2">
        {/* Market Segment Dropdown */}
        <Dropdown label="Market Segment"
        name="marketSegments"
        options={products.marketSegments?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.marketSegments}
          onChange={handleFilterChange} />

        <Dropdown label="Brand"
        name="brands"
          options={products.brands?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.brands}
          onChange={handleFilterChange} />

        <Dropdown label="Application"
        name="applications"
          options={products.applications?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.applications}
          onChange={handleFilterChange} />

        <Dropdown label="Grade"
        name="gradeS"
          options={products.gradeS?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.gradeS}
          onChange={handleFilterChange} />

        <Dropdown label="Package"
        name="packages"
          options={products.packages?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
          value={filterCriteria.packages}
          onChange={handleFilterChange} />

        {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
      </div>

          <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
        {filteredProducts.length == 0 ? "No Available Products" : filteredProducts.map(products =>(
          <ProductCards
          key={products.id}
            Name={products.productName}
            desc={products.productDescription}
            pic={products.productPicture.url}
            dataSheet={products.dataSheet?.url}
          />          
        ))}
          </div>
          {/* Lubricant end  */}

        {/* Auto Sparepart  */}
        <p className='text-center text-xl mb-4 mt-5 font-semibold'>Auto Spare Part</p>
        <div className="flex flex-wrap space-x-9 mb-10 justify-center items-center px-2">
          {/* Market Segment Dropdown */}
          <Dropdown label="Brand"
            name="autoSparepartBrands"
            options={products.autoSparepartBrands?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
            value={filterCriteriaAutoSparepart.autoSparepartBrands}
            onChange={handleFilterChangeAutoSparepart} />

          <Dropdown label="Category"
            name="autoSparepartCategories"
            options={products.autoSparepartCategories?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
            value={filterCriteriaAutoSparepart.autoSparepartCategories}
            onChange={handleFilterChangeAutoSparepart} />

          {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
        </div>

        <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
          {filteredProductsAutoSparepart.length == 0 ? "No Available Products" : filteredProductsAutoSparepart.map(products => (
            <ProductCards
              key={products.id}
              Name={products.productName}
              desc={products.productDescription}
              pic={products.productPicture.url}
              dataSheet={products.dataSheet?.url}
            />
          ))}
        </div>
        {/* Auto Sparepart end  */}



        {/* Auto Service  */}
        <p className='text-center text-xl mb-4 mt-5 font-semibold'>Auto Service</p>
        <div className="flex flex-wrap space-x-9 mb-10 justify-center items-center px-2">
          {/* Market Segment Dropdown */}
          <Dropdown label="Brand"
            name="autoServiceBrands"
            options={products.autoServiceBrands?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
            value={filterCriteriaAutoService.autoServiceBrands}
            onChange={handleFilterChangeAutoService} />

          <Dropdown label="Category"
            name="autoServiceCategories"
            options={products.autoServiceCategories?.map(product => product.name).filter((value, index, self) => self.indexOf(value) === index)}
            value={filterCriteriaAutoService.autoServiceCategories}
            onChange={handleFilterChangeAutoService} />

          {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
        </div>

        <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
          {filteredProductsAutoService.length == 0 ? "No Available Products" : filteredProductsAutoService.map(products => (
            <ProductCards
              key={products.id}
              Name={products.productName}
              desc={products.productDescription}
              pic={products.productPicture.url}
              dataSheet={products.dataSheet?.url}
            />
          ))}
        </div>
        {/* Auto Service end  */}


    </div>
    </div>
  )
}

export default Product