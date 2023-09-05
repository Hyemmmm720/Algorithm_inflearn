// 가위바위보
// A, B 두 사람이 가위바위보 게임을 한다. 총 n번의 게임을 해서 A가 이기면 A를 출력하고 B가 이기면 B를 출력하고 비길 경우 D를 출력한다.(1:가위 2:바위 3:보)

// 내 풀이
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < 5; i++) {
    if (a[i] > b[i]) {
      //a가 이기는 경우
      if (a[i] === 3 && b[i] === 1) {
        answer += "B";
      } else answer += "A";
    } else if (a[i] < b[i]) {
      // b가 이기는 경우
      if (a[i] === 1 && b[i] === 3) {
        answer += "A";
      } else answer += "B";
    } else {
      // 비겼을 때
      answer += "D";
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

// 선생님 답안
function solution(A, B) {
  let answet = "";
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer = "D";
    // A가 이길 때
    else if (A[i] === 1 && B[i] === 3) answer += "A";
    else if (A[i] === 2 && B[i] === 1) answer += "A";
    else if (A[i] === 3 && B[i] === 2) answer += "A";
    else answer += "B";
  }
  return answer;
}

let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
console.log(solution(A, B));
