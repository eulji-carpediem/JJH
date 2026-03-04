// 연산자 연습
console.log("123" == 123); //true
console.log("123" === 123); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log("" || "값"); //"값"
console.log("" ?? "값"); //""
console.log(0 || 42); // 42
console.log(0 ?? 42); // 0

// 제어문 연습
// [if] 사용자명 미입력 체크
// username이 비어있을 때만 경고 문구를 출력하도록 if의 조건식을 채우세요.
const username = "";
if (username == false) { // 빈칸
    console.log("사용자명을 입력하세요");
}


// [if-else] 짝수/홀수 판별
// num이 짝수면 even, 아니면 odd가 출력되도록 if의 조건식을 채우세요.
const num = 11;
if (num % 2 === 0) { // 빈칸
    console.log("even");
} else {
    console.log("odd");
}


// [다중조건-1칸] 무더위 조건만 채우기
// 온도 분기(30 이상 무더위 / 10~29 보통 / 0~9 쌀쌀 / 0 미만 한파)에서 첫 조건(무더위)에 들어갈 식만 채우세요.
const temp = 8;
if (temp >= 30) { // 빈칸
    console.log("무더위")
} else if (temp >= 10) {
    console.log("보통");
} else if (temp >= 0) {
    console.log("쌀쌀")
} else {
    console.log("한파");
}


// [중첩 if] 비밀번호 길이 체크
// pwd가 존재한다면 길이가 8 미만일 때만 '너무 짧음'이 출력되도록 안쪽 if의 조건식을 채우세요.
const pwd = 'abc123';
if (!pwd) {
    console.log("비밀번호 없음")
} else {
    if (pwd.length < 8) { // 빈칸
        console.log("너무 짧음");
    } else {
        console.log("사용 가능");
    }
}


// [switch] 교통 신호
// 각 신호(red/yellow/green)에서 다음 case로 넘어가지 않도록 필요한 제어 구문을 채우세요.
const signal = "yellow";
switch (signal) {
    case "red":
        console.log("정지");
        break; // 빈칸 
    case "yellow":
        console.log("주의");
        break;
    case "green":
        console.log("진행");
        break;
    default:
        console.log("알 수 없음");
}


// [switch] 월→계절 (봄 케이스 채우기)
// 3~5는 봄입니다. 봄 구간의 누락된 case 값을 채우세요.
const month = 4;
let season = "";
switch (month) {
    case 12:
    case 1:
    case 2:
        season = "겨울"; break;
    case 3: // 빈칸
    case 4:
    case 5:
        season = "봄"; break;
    case 6:
    case 7:
    case 8:
        season = "여름"; break;
    default:
        season = "가을";
}

console.log(season);


// [삼항] 로그인 메시지
// isLoggedIn이 false일 때 "로그인이 필요합니다"이 출력될 수 있도록 작성하세요.
const isLoggedIn = false;
const msg = isLoggedIn ? "환영합니다" : "로그인이 필요합니다" // 빈칸
console.log(msg);


// [배송비 조건] 경계값 처리
// 50000 이상은 무료, 30000~49999는 2500원, 그 외는 3000원이 되도록 else if 조건식을 채우세요.
const price = 42000;
let fee = "";
if (price >= 50000) {
    fee = "무료배송";
} else if (price >= 30000) { // 빈칸
    fee = "배송비 2500원";
} else {
    fee = "배송비 3000원";
}
console.log(fee);


// [while] 3회 출력 조건
// '학습중...'이 정확히 3번 출력되도록 while의 조건식을 채우세요.
let i = 0;
while (i < 3) { // 빈칸
    console.log("학습중...");
    i++;
}


// [while] 카운트다운
// n이 5에서 1까지 출력되도록 while의 조건식을 채우세요.
let n = 5;
while (n > 0) { // 빈칸
    console.log(n);
    n--;
}


// [for] 3의 배수 출력 (1~15)
// 1부터 15까지 중 3의 배수만 출력되도록 if의 조건식을 채우세요.
for (let k = 1; k <= 15; k++) {
    if (k % 3 === 0) { // 빈칸
        console.log(k);
    }
}


// [문자열 순회] 각 문자 출력
// word의 각 문자를 한 줄에 하나씩 출력하도록 출력 식을 채우세요.
const word = "mango";
for (let x = 0; x < word.length; x++) {
    console.log(word.charAt(x)); // 빈칸
}


// [누적 합] 1~10 합
// sum에 1부터 10까지 누적되도록 for 블록 안의 한 줄을 채우세요.
let sum = 0;
for (let t = 1; t <= 10; t++) {
    sum += t; // 빈칸
}
console.log(sum);


// [중첩 반복] 별 계단 (증감식 채우기)
// 각 줄 번호 r만큼 별이 찍히도록 안쪽 for의 조건식을 채우세요.
for (let r = 1; r <= 4; r++) {
    let stars = "";
    for (let c = 1; r >= c; c++) { // 빈칸
        stars += "*";
    }
    console.log(stars);
}


// [break] 첫 9의 배수
// 1부터 증가하며 처음 만나는 9의 배수를 출력한 뒤 반복을 즉시 종료하도록 빈칸을 채우세요.

for (let i = 1; i <= 100; i++) {
    if (i % 9 === 0) {
        console.log(i);
        break; // 빈칸
    }
}


// [continue] 1~30 합(4의 배수 제외)
// 4의 배수는 더하지 않도록 해당 회차를 건너뛰는 제어 구문을 채우세요.
let total = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        continue; // 빈칸
    }
    total += i;
}
console.log(total);