import { renderListWithTemplate } from "./utils.mjs";

function entryCardTemplate(entry) {
    return `<li class="api-card"
    
        
         <h3>${entry.Description}</h3>
         <p>$ ${entry.Link}</p>
     </li>`;
}

export default class MakeupList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.findCategory(this.category);
        this.renderList(list);

        document.querySelector(".title").innerHTML = this.category;

    }
    renderList(list) {
        renderListWithTemplate(entryCardTemplate(), this.listElement, list, 'afterbegin', true);
    }
}

//  <h2>${entry.API}</h2>