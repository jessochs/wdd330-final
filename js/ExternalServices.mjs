const baseURL = 'https://makeup-api.herokuapp.com/api/v1/products.json';
async function convertToJson(res) {
    const data = await res.json();
    if(res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data};
    }
}

export default class ExternalServices {
    constructor(category) {
        // this.brand = brand;
    }

    async findBrand(category) {
        const response = await fetch(baseURL + `?brand={category}`);
        const data = await convertToJson(response);
        return data.Result;
    }
    
     async findProductType(product) {
        const response = await fetch(baseURL + `?product_type={product}`);
        const data = await convertToJson(response);
        return data.Result;
    }
    async brandProduct(brand, product) {
        const response = await fetch(baseURL + `?brand={brand}&product_type={product}`);
        const data = await convertToJson(response);
        return data.Result;
    }


}


// not callable with id?
// export async function makeupId(id) {
//     const response = await fetch(baseURL + `?`)

// }