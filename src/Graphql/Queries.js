import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsa32dvi1z0l01uq4rnu0tc0/master')
    // graphcms.setHeaders({
    //     authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    // });

const category = `
     id,
    name,
    products {code}
`

export const QUERY_Home = gql `
    query {
        heroSections {
    backgroundPicture {
      url
    }
    frontpicture {
      url
    }
    frontText {
      text
    }
  }
  homePageNotices {
    notice {
      text
    }
  }
  whoWeAreImages {
    picture {
      url
    }
  }
  homepagecertificates {
    certificatePicture {
      url
    }
  }
  partnersPictures {
    partnersPicture {
      url
    }
  }
    }
`

export const QUERY_PRODUCTS = gql `
    query {

    products(first: 500) {
    id
    productDescription
    productName
    productType
    productPicture {
      url
    }
    applications {
      name
    }
    brands {
      name
    }
    dataSheet {
      url
    }
    gradeS {
      name
    }
    marketSegments {
      name
    }
    packages {
      name
    }
    autoServiceBrand{
        name
    }
    autoServiceCategory{
        name
    }
    autoSparepartBrand{
        name
    }
    autoSparepartCategory{
        name
    }
  }



  applications {
      name
    }

    brands {
      name
    }
   
    gradeS {
      name
    }

    marketSegments {
      name
    }

    packages {
      name
    }
     autoServiceBrands{
        name
    }
    autoServiceCategories{
        name
    }
    autoSparepartBrands{
        name
    }
    autoSparepartCategories{
        name
    }

}
`

export const QUERY_INSIGHTS = gql `
    query Insights {
        insights {
        content{
          raw
        }
        coverPicture {
        url
        }
        postDate
        insightTitle
        description
        slug
        }
    }`

export const QUERY_PROJECTS = gql ` 
    query {
    projects(first: 500) {
        id
        createdAt
        name
        projectPicture {
            url
        }
        projectCatagory {
            categoryName
        }
        location
    }

    
}
`

export const QUERY_CATAGORY = gql ` {
    projectCatagories(first: 500) {
        id
        categoryName
        categoryPicture {
            url
        }
        projects {
            id
            name
            location
        }
    }
}
`

export const QUERY_DESIGNTIP = gql ` {
    designTips() {
        tip
    }
}
`
export const QUERY_BESTSELLER = gql ` {
    bestSellers() {
        description,
        picture {
            url
        }
    }
}
`

export const QUERY_NEWDESIGN = gql ` {
    newDesigns() {
        description,
        picture { url }
    }
}
`
export const QUERY_ALL_HOME = gql `
query {
    newDesigns {
        description,
        picture { url }
    }

    bestSellers {
        description,
        picture {
            url
        }
    }

    designTips {
        tip
    }
}
`

export const QUERY_ALL_Event = gql `
query {
    events(first: 500) {
        id,
        publishedAt,
        publishedBy {
            name
        },
        coverPicture {
            url
        },
        description,
        title
    }
}
`

export const QUERY_ALL_PRODUCT = gql `
query {
    products(first: 500) {
        id,
        code,
        price,
        category {
            name
        },
        productColors {
            color,
            colorPicture { url }
        },
        size,
        stock,
        picture { url },
        detail
    }

    productColors(first: 500) {
        color,
        colorPicture {
            url
        },
        id
    }

    categories(first: 500) {
        id,
        name,
        products { code },
    }

}
`