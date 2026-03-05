// 사용자가 입력한 숫자가 홀수인지 짝수인지 판별하는 함수를 작성하세요.
const user = 10;

if (user % 2 == 0) {
    console.log("짝수입니다.");
} else {
    console.log("홀수입니다.")
}

// 아래의 객체를 for in 반복문을 사용하여, 객체의 모든 키와 그에 해당하는 값을 출력하는 코드를 작성하세요.
var person = {
    firstName: 'GilDong',
    lastName: 'Hong',
    age: 20
};

for (var key in person) {
    console.log(`${key} : ${person[key]}`);
}

// 두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요.

function add(x, y) {
    return x + y;
}

console.log(add(10, 20));

// 아래의 함수들을 화살표 함수로 변환해보세요.

function greet() {
    return "Hello!";
}

greet = () => "Hello!";

function getInfo(name, age) {
    return `name: ${name}, age: ${age}`;
}

getInfo = (name, age) =>  `name: ${name}, age: ${age}`;