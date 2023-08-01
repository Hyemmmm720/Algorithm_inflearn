//가운데 문자 출력
function solution(s) {
  let answer;

  if (s.length % 2 !== 0) {
    // 홀수 길이인 경우
    answer = s.slice(Math.ceil(s.length / 2) - 1, Math.ceil(s.length / 2));
  } else {
    // 짝수 길이인 경우
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }

  return answer;
}

// 선생님 풀이
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}
