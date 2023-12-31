// 큰 수 출력하기
// n개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하기(이때 첫번째 수는 무조건 출력)

// 내 풀이
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

// 다른 풀이
function solution(n, s) {
  let answer;
  return (answer = s.filter((item) => {
    if (item >= n) {
      return item;
    }
  }));
}
