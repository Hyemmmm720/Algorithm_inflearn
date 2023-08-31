// 일곱난장이
// 9개의 인자를 전달받고 그 중 7개 숫자의 합이 100이 되는 조합 찾기
function solution(arr) {
  const targetSum = 100;
  let selectedNumbers = [];

  // 두 요소를 선택하여 합이 100이 되는 조합을 찾기
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        selectedNumbers = [arr[i], arr[j]];
        break;
      }
    }
    if (selectedNumbers.length > 0) {
      break;
    }
  }

  // 선택한 요소들을 제외한 결과 배열 생성
  const answer = arr.filter((num) => !selectedNumbers.includes(num));

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr)); // [20, 7, 23, 19, 10, 8, 13]

// 선생님 답안
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
