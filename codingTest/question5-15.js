// 두 수의 곱 구하기
const solution = (num1, num2) => num1 * num2;

// 두 수의 나눗셈
const solution2 = (num1, num2) => Math.floor(num1 / num2 *1000);

// 숫자 비교하기
const solution3 = (num1, num2) => num1 === num2 ? 1 : -1;

// 나머지 구하기
const solution4 = (num1, num2) => num1&num2;

// 나이 출력
const solution5 = age => 2022-(age-1);

// 두 수의 차 구하기
const solution6 = (num1, num2) => num1 - num2

// 머쓱이보다 키 큰 사람
const soultion7 = (array, height) =>  {
    let hap = 0;
    for(let i=0; i<array.length; i++) {
        return array[i] > height ? hap+=1 : hap; 
    }
    return hap
}

// 두 수의 합 구하기
const solution8 = (num1, num2) => num1 + num2

// 배열 두배 만들기
const solution9 = numbers => {
    for(let i=0; i<numbers.length; i++) {
        numbers[i] = numbers[i]*2;
    }
    return numbers
}

// 몫 구하기
const solution10 = (num1, num2) => Math.floor(num1/num2); 