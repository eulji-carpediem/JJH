// 아래의 코드를 실행했을 때 출력결과가 나오도록 Person 생성자 함수를 정의하세요.

// ------- 출력 결과 --------
// 안녕하세요, 제 이름은 홍길동 이고 나이는 20세입니다.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return console.log(`안녕하세요, 제 이름은 ${this.name} 이고 나이는 ${this.age}입니다.`);
    };
};

const person = new Person("홍길동", 20);
person.sayHello();

// (1) user 객체에 email 프로퍼티를 추가하고 "hong@gmail.com" 값을 넣으세요.
// (2) age 값을 21로 수정하세요.
// (3) name 값을 삭제하세요.

const user = {
   name : "gildong",
   age : 20
};

user.email = "hong@gmail.com";
user.age = 21;
delete user.name;
console.log(user);

// car 객체와 fireCar 객체 정의하기
// -------------------------------------------------------------------------------
// - car 객체는 brand 프로퍼티를 갖고있다.
// - fireCar 객체는 brand, color 프로퍼티를 갖고 있고 car객체를 상속받는다.
// - fireCar 객체에서 brand는 상속받은 프로퍼티이고, color는 자기 자신의 프로퍼티이다.
// -------------------------------------------------------------------------------
// 위의 예제에서 자기 자신의 프로퍼티와 상속된 프로퍼티를 구분하세요.

const car = {
    brand : '페라리' 
};

const fireCar = {
    color : '연보라'
}

Object.setPrototypeOf(fireCar, car);

for (let prop in fireCar) {

    let Maybe = fireCar.hasOwnProperty(prop);
    if (Maybe) {
        console.log(`자기 자신의 프로퍼티는 ${prop} `);
    } else {
        console.log(`상속된 프로퍼티는 ${prop}`);
    }
}