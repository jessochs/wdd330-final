import { renderListWithTemplate } from "./utils.mjs";

function makeupCardTemplate(makeup) {
    return `<li class="makeup-card">
    <img src="${makeup.api_featured_image}"
         alt="Image of ${makeup.name}"/>
    
         <h2 class="card-info">${makeup.brand} ${makeup.name}</h2>
         <p class="card-info">$ ${makeup.price}</p>
     </li>`;
}

export default class MakeupList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.getData(this.category);
        this.renderList(list);

        document.querySelector(".title").innerHTML = this.category;

    }
    renderList(list) {
        renderListWithTemplate(makeupCardTemplate, this.listElement, list);
    }
}