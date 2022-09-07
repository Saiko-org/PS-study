// 프로그래머스 / 81302 / 거리두기 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/81302
// solve: 1시간

// 상 하 좌 우 컨트롤러
const controlRow = [1, -1, 0, 0];
const controlColumn = [0, 0, -1, 1];

function solution(places) {
  const answer = [1, 1, 1, 1, 1];
  const visited = Array.from({length: 5}, () => Array.from({length: 5}, () => false));
  let currentRoom = 0;

  // [아이디어]
  // 각 P에서 2만큼 뻗어나가본다
  // X를 만나면 더 뻗어나가지않는다
  // 만약 P를 만나면 거리두기 지키지 않는것으로 판단
  // 모든 P에서 뻗어나갔을때 P를 못만난다면 거리두기 지키는 것으로 판단

  for (const place of places) {
    const locationOfP = [];

    // 모든 P의 위치 구하기
    for (let row = 0; row < 5; row++) {
      for (let column = 0; column < 5; column++) {
        if (place[row][column] === 'P') {
          locationOfP.push([row, column]);
        }
      }
    }

    // 해당 대기실에 P가 없을 수도 있는 경우 확인해야함
    if (0 < locationOfP.length) {
      for (let index = 0; index < locationOfP.length; index++) {
        const [rowOfP, columnOfP] = locationOfP[index];

        visited[rowOfP][columnOfP] = true;
        dfs(rowOfP, columnOfP, 0);
        visited[rowOfP][columnOfP] = false;
      }
    }
    currentRoom += 1;
  }

  // 5by5 행렬 밖에 나가는 지 확인
  function validation (row, column) {
    if (row < 0 || 4 < row || column < 0 || 4 < column) {
      return false;
    }

    return true;
  }

  // 2거리까지 확인하는 DFS
  // 현재 위치에서 다음 위치를 확인하고 진입을 하는 흐름
  function dfs (row, column, depths) {
    if (2 === depths) { // 2까지 거리의 위치까지 확인했음 (왜냐하면 진입 전에 확인하기 때문)
      return ;
    }

    // 다음 위치 확인
    for (let controlIndex = 0; controlIndex < 4; controlIndex++) {
      const nextRow = row + controlRow[controlIndex];
      const nextColumn = column + controlColumn[controlIndex];

      // 범위 밖 아님 + 미방문
      if (validation(nextRow, nextColumn) && visited[nextRow][nextColumn] === false) {
        const nextValue = places[currentRoom][nextRow][nextColumn];

        if (nextValue === 'P') {
            answer[currentRoom] = 0;
            return;
        } else if (nextValue === 'O') {
            visited[nextRow][nextColumn] = true;
            dfs(nextRow, nextColumn, depths + 1);
            visited[nextRow][nextColumn] = false;
        }
      }
    }
  }

  return answer;
}
