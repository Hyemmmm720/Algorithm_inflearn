// 보이는 학생
// 선생님이 N명의 학생을 일렬로 세웠다. 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에 서있는 선생님이 볼 수 있는 학생의 수를 구하기(앞에 서있는 사람보다 크면 보이고, 작거나 같으면 안 보임)

// 내 풀이
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
