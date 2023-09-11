// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하기

// 내 풀이
function solution(s, t) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      answer.push(0);
    } else {
      // 각 문자를 기준으로 왼쪽, 오른쪽을 나눠서 검사
      const left = i === 0 ? 1000 : i - s.slice(0, i).lastIndexOf(t);
      const right = i === s.length - 1 ? 1000 : s.slice(i + 1).indexOf(t) + 1;

      answer.push(Math.min(left, right));
    }
  }

  return answer.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e"));

// 선생님 풀이
function solution(s, t) {
  let answer = [];
  let p = 1000;

  // 문자 t가 왼쪽에 있는 경우
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) p = 0;
    else p++;

    answer.push(p);
  }

  p = 1000;

  // 문자 t가 오른쪽에 있는 경우
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else p++;

    answer[i] = Math.min(answer[i], p);
  }

  return answer;
}
