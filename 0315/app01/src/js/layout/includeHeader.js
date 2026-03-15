//  layout/header.html 웹문서 요청 -> html 문구(텍스트 형식)
// fetch("요청할자원의주소")
fetch("/layout/header.html")
    .then((response) => response.text())
    .then((responseText) => {
        // console.log(responseText);
        document.querySelector('.container').insertAdjacentHTML("afterbegin", responseText);
    });
