// 봉우리
// 지도 정보가 N*N 격자판에 주어지고 각 격자에는 그 지역의 높이가 쓰여있다
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성해보자
// 격자의 가장자리는 0으로 초기화 되었다고 가정

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 행 좌표
        let ny = j + dy[k]; // 열 좌표

        if (nx >= 0 && nx < n && ny >= 0 && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
