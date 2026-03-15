// layout.sidebar.html
fetch("/layout/sidebar.html")
    .then((response) => response.text())
    .then((responseText) => {
        // console.log(responseText);
        document.querySelector('.main-container').insertAdjacentHTML("afterbegin", responseText);
    });