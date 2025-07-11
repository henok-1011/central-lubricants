import React, { useEffect, useState } from 'react'
import ProductCards from '../components/ProductCards'
import { QUERY_PRODUCTS, graphcms } from '../Graphql/Queries';
import ReactLoading from 'react-loading';
import Dropdown from '../components/Dropdown';

function Product() {

  const [products, setproducts] = useState();
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchAllProducts = async () => {
    let allProducts = [];
    let hasMore = true;
    let skip = 0;
    const limit = 100;

    while (hasMore) {
      try {
        const res = await graphcms.request(QUERY_PRODUCTS, { first: limit, skip });
        const pageProducts = res.products;

        allProducts = [...allProducts, ...pageProducts];
        skip += limit;

        hasMore = pageProducts?.length === limit;
      } catch (err) {
        console.error("Error fetching products:", err);
        break;
      }
    }

    console.log("Fetched products:", allProducts[102]);
    setproducts(allProducts);
    // console.log("Products fetched:", products?.length);

  };

  fetchAllProducts();
}, []);

  useEffect(() => {
    if (products?.length > 0) {
      // console.log("✅ Products updated in state:", products);
      setLoading(false);

    }else {
      console.log("❌ No products found or products not updated in state.");
    }
  }, [products]);

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
    autoSparepartCategory: null,
    autoSparepartBrand: null,
    autoServiceCategory:null,
    autoServiceBrand:null
  });

  const [filterCriteriaAutoSparepart, setFilterCriteriaAutoSparepart] = useState({
    autoSparepartCategory: null,
    autoSparepartBrand: null,

  });

  const [filterCriteriaAutoService, setFilterCriteriaAutoService] = useState({
    autoServiceCategory: null,
    autoServiceBrand: null
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
    console.log(products?.filter(name => name != null)?.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      ))
    );

 

    return products?.filter(name => name != null)?.filter(product => product.productType == "Lubricant")?.filter(name => name != null)?.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      )
    );
  };

  const filterAutoSparepart = (criteria) => {
    console.log(Object.keys(criteria))
    console.log(criteria)
    console.log(products?.filter(name => name != null)?.filter(product => product.productType == "Auto_Spareparts")?.filter(name => name != null)?.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      ))
    );


    return products?.filter(name => name != null)?.filter(product => product.productType == "Auto_Spareparts")?.filter(name => name != null)?.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      )
    );
  };

  const filterAutoService = (criteria) => {
    // console.log(Object.keys(criteria))
    // console.log("criteria" + criteria)
    console.log(products?.filter(name => name != null)?.filter(product => product.productType == "Auto_Service")?.filter(name => name != null)?.filter(product =>
      Object.keys(criteria).every(key =>
        criteria[key] == null || criteria[key] === product[key]?.name
      ))
    );



    return products?.filter(name => name != null)?.filter(product => product.productType == "Auto_Service")?.filter(name => name != null)?.filter(product =>
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
    setFilterCriteriaAutoService(prevCriteria => ({
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
            options={products?.map(product => product.marketSegments.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
          value={filterCriteria.marketSegments}
          onChange={handleFilterChange} />

        <Dropdown label="Brand"
        name="brands"
            options={products?.map(product => product.brands?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
          value={filterCriteria.brands}
          onChange={handleFilterChange} />

        <Dropdown label="Application"
        name="applications"
          options={products?.map(product => product.applications?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
          value={filterCriteria.applications}
          onChange={handleFilterChange} />

        <Dropdown label="Grade"
        name="gradeS"
            options={products?.map(product => product.gradeS?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
          value={filterCriteria.gradeS}
          onChange={handleFilterChange} />

        <Dropdown label="Package"
        name="packages"
            options={products?.map(product => product.packages?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
          value={filterCriteria.packages}
          onChange={handleFilterChange} />

        {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
      </div>

          <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
        {filteredProducts?.length == 0 ? "No Available Products" : filteredProducts?.map(products =>(
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
            name="autoSparepartBrand"
            options={products?.map(product => product.autoSparepartBrand?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
            value={filterCriteriaAutoSparepart.autoSparepartBrand}
            onChange={handleFilterChangeAutoSparepart} />

          <Dropdown label="Category"
            name="autoSparepartCategory"
            options={products?.map(product => product.autoSparepartCategory?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
            value={filterCriteriaAutoSparepart.autoSparepartCategory}
            onChange={handleFilterChangeAutoSparepart} />

          {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
        </div>

        <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
          {filteredProductsAutoSparepart?.length == 0 ? "No Available Products" : filteredProductsAutoSparepart?.map(products => (
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
            name="autoServiceBrand"
            options={products?.map(product => product.autoServiceBrand?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
            value={filterCriteriaAutoService.autoServiceBrand}
            onChange={handleFilterChangeAutoService} />

          <Dropdown label="Category"
            name="autoServiceCategory"
            options={products?.map(product => product.autoServiceCategory?.name)?.filter(name => name != null)?.filter((value, index, self) => self.indexOf(value) === index) ?? []}
            value={filterCriteriaAutoService.autoServiceCategory}
            onChange={handleFilterChangeAutoService} />

          {/* Repeat similar dropdowns for other criteria like brand, application, grade, and package */}
        </div>

        <div className='max-w-[1300px] mx-auto my-0 flex flex-wrap items-center justify-center md:justify-between gap-y-16 px-5'>
          {filteredProductsAutoService?.length == 0 ? "No Available Products" : filteredProductsAutoService?.map(products => (
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