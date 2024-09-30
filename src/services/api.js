const BASE_URL = "http://localhost:3000"


const authEndpoints = {
    LOGIN_API : BASE_URL + "/auth/login",
    SIGNUP_API : BASE_URL + "/auth/signup"
}

const categoryEndpoints = {
    CREATECATEGORY : BASE_URL + "/category/createcategory",
    GET_CATEGORY_BY_ID : (id) => BASE_URL + `/category/getcategorybyid/${id}`,
    GET_ALL_CATEGORY : BASE_URL + "/category/getallcategory"
}

const productsEndpoints = {
    CREATE_PRODUCT : BASE_URL + "/product/createproduct",
    GET_PRODUCT_BY_ID : (id) => BASE_URL + `/product/getproductbyid/${id}`,
    GET_ALL_PRODUCTS : (id) => BASE_URL + "/product/getallproducts",
    UPDATE_PRODUCTS_BY_ID : (id) => BASE_URL + `/product/updateproductbyid/${id}`,
    DELETE_BY_ID : (id) => BASE_URL + `/product/deleteproductbyid/${id}`
}

const searchEndpoints = {
    SEARCH_BY_FILTER : (q) => BASE_URL + `/search/searbyfilter?q=${q}`
}