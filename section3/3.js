// 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출해 그 순서대로 자연수를 만드는 함수를 작성하기

// 내 풀이
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

// 다른 풀이
function solution(s) {
  let answer;
  let s2 = s.replace(/[^0-9]/g, "").split("");

  s2.filter((item) => item > 0);
  return (answer = Number(s2.join("")));
}
