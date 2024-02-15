import { getLocalStorage } from "./utils.mjs";

function saveTemplate(item) {
    const newItem = `<li class="save-template">
    <a href="#" class="makeup-image">
    <img src="${item.api_featured_image}"
        alt="Image of ${item.name}"></a>

    <a href="#">
        <h2>${item.brand} ${item.name}</h2> 
    </a>
    <p>qty: 1</p>
    <p>$ ${item.price}</p>
    </li>`;

    return newItem;
}

export default class ViewSaved {
    constructor(key, parentSelector) {
        this.key = key;
        this.parentSelector = parentSelector;
    }

    async init() {
        const list = getLocalStorage(this.key);
        this.renderSaveContents(list);
    } 

    renderSaveContents() {
        const saveItems = getLocalStorage(this.key);
        const htmlitems = saveItems.map((item) => saveTemplate(item));
        document.querySelector(this.parentSelector).innerHTML = htmlitems.join("");
    }
}