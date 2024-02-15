import { setLocalStorage, getLocalStorage } from "./utils.mjs";

function makeupDetailsTemplate(makeup) {
    return `<section class="makeup-details">
    <img src="${makeup.api_featured_image}"
        alt="Image of ${makeup.name}">
    <h2 class="details-info">${makeup.brand} ${makeup.name}</h2
        <h3 class="details-info">${makeup.product_type}</h3>
        <p class="details-info">${makeup.description}</p>
        <a href="${makeup.product_link}">Website Link</a>
        <div class="product-like">
            <button id="addLike">💗 Like to save!</button>
        </div>
    </section> `
}

export default class MakeupDetails {
    constructor(productBrand, dataSource) {
        this.productBrand = productBrand;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productBrand);
        this.renderMakeupDetails("main");

        document
            .getElementById("addLike")
            .addEventListener("click", this.addLike.bind(this));

    } 

    saveLike() {
        let saveContents = getLocalStorage("jo-save");

        if(!saveContents) {
            saveContents= [];
        }
        saveContents.push(this.product);
        setLocalStorage("jo-save", saveContents);
        // add a comment that it has been saved? it should go here if so
    }

    renderMakeupDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", makeupDetailsTemplate(this.product));
    }
}