/* eslint-disable no-shadow, no-use-before-define */
window.showLoader = function showLoader(status) {
    let container = document.getElementById("loader-container");

    // Create toast container if it does not exist
    if (container === null) {
        // create notification container
        container = document.createElement("div");
        container.id = "loader-container";
        document.body.appendChild(container);
    }

    function createLoader(status) {
        // Create loader
        const loader = document.createElement("div");
        loader.classList.add("col-12");
        loader.classList.add("loading");
        const el2 = document.createElement("div");
        el2.classList.add("text-center");
        el2.classList.add("align-self-center");
        el2.classList.add("loader");
        loader.appendChild(el2);
        return loader;
    }

    // Select and append toast
    const newLoader = createLoader(status);

    if (status) {
      container.appendChild(newLoader);
    } else {
      container.remove(container)
    }
    // only append toast if message is not undefined

};
