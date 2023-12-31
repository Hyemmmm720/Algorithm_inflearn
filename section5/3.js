// 연속 부분 수열
// N개의 수로 이루어진 수열이 주어진다. 이 수열에서 연속 부분 수열의 합이 특정 숫자 M이 되는 경우가 몇 번 있는지 구하시오

function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
