const baseURL = 'https://api.publicapis.org/entries';
async function convertToJson(res) {
    const data = await res.json();
    if(res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data};
    }
}

export default class ExternalServices {
    constructor() {
        // this.brand = brand;
    }

    async findCategory(category) {
        const response = await fetch(baseURL + `?Category=${category}`);
        const data = await convertToJson(response);
        return data.Result;
    }


}


// not callable with id?
// export async function makeupId(id) {
//     const response = await fetch(baseURL + `?`)

// }