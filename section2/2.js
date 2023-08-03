// 보이는 학생
function solution(arr) {
  let answer = 1,
    max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i + 1]) {
      max = arr[i + 1];
      answer++;
    }
  }
  return answer;
}

// 선생님 풀이
function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}
