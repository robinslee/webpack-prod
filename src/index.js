"use strict";

import "./style.css";
import _ from "lodash";
import Icon from "./mmgdg.jpg";
import fnPrint from "./print.js";

console.log(process.env.NODE_ENV);

function component() {
    let container = document.createElement("div");
    let button = document.createElement("button");

    container.innerHTML = _.join(["Hello", "World", "!"], " ");
    container.classList.add("hello-world");

    button.innerHTML = "Click me";
    button.onclick = fnPrint;
    
    container.appendChild(button);

    return container;
}

let div = component();
document.body.appendChild(div);

if (module.hot) {
    module.hot.accept("./print.js", function() {
        console.log("Accepting the updated print module!");
        document.body.removeChild(div);
        document.body.appendChild(component());
    });
}