const baseURL = 'https://makeup-api.herokuapp.com/api/v1/products.json';
async function convertToJson(res) {
    const data = await res.json();
    if(res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data};
    }
}

export async function findProductType(product) {
    const response = await fetch(baseURL + `?product_type={product}`);
    const data = await convertToJson(response);
    return data.Result;
    
}

export async function findBrand(brand) {
    const response = await fetch(baseURL + `?brand={brand}`);
    const data = await convertToJson(response);
    return data.Result;
}

export async function brandProduct(brand, product) {
    const response = await fetch(baseURL + `?brand={brand}&product_type={product}`);
    const data = await convertToJson(response);
    return data.Result;
}

// not callable with id?
export async function makeupId(id) {
    const response = await fetch(baseURL + `?`)

}