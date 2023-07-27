// 대문자로 통일
const solution = (s) => {
  console.log(s.toUpperCase());
};

solution("ItisTimeToStudy");

// 선생님 답안
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}
