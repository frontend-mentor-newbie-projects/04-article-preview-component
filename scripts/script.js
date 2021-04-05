function swapContent (first, second) {
    console.log("Here");

    let firstElement = document.getElementById(first);
    let secondElement = document.getElementById(second);

    firstElement.classList.add("hidden");
    secondElement.classList.remove("hidden");
}

