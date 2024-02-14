export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

// get local storage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// save to local storage

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));

}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

export function renderListWithTemplate( templateFn, parentElement, list, position = "afterbegin", clear = false ) {
    const htmlString = list.map(templateFn);
    if(clear) {
        parentElement.innerHTML = "";

    }
    parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if(callback) {
        callback(data);
    }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

// do i want to load header and footer via js? probably...but that can be 
// something I can decide later

export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener("click", callback)
}
