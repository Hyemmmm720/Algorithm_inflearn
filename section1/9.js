// A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 "A"를 모두 "#"으로 바꾸어 출력하는 프로그램을 작성하기

// 내풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

// 선생님 답안
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#"); // 정규표현식
  return answer;
}
