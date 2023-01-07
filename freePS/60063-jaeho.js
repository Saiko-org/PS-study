// 프로그래머스 / 60063 / 블록 이동하기 (Lv3 2020 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/60063
// solve: 60분
// https://velog.io/@longroadhome/프로그래머스-LV.3-블록-이동하기-JS

function solution(board) {
  const nextPosition = (left, right, newBoard) => {
    const result = [];

    // [상 하 좌 우] 이동
    const move = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const R = 0;
    const C = 1;

    for (const [r, c] of move) {
      const nextLeft = [left[R] + r, left[C] + c];
      const nextRight = [right[R] + r, right[C] + c];

      if (
        newBoard[nextLeft[R]][nextLeft[C]] === 0 &&
        newBoard[nextRight[R]][nextRight[C]] === 0
      ) {
        result.push([nextLeft, nextRight]);
      }
    }

    // [좌 기준 위로 아래로, 우 기준 위로 아래로] 회전
    const spin = [-1, 1];

    // 가로
    if (left[R] === right[R]) {
      for (const r of spin) {
        if (
          newBoard[left[R] + r][left[C]] === 0 &&
          newBoard[right[R] + r][right[C]] === 0
        ) {
          result.push([left, [left[R] + r, left[C]]]);
          result.push([[right[R] + r, right[C]], right]);
        }
      }
    }
    // 세로
    if (left[C] === right[C]) {
      for (const c of spin) {
        if (
          newBoard[left[R]][left[C] + c] === 0 &&
          newBoard[right[R]][right[C] + c] === 0
        ) {
          result.push([[left[R], left[C] + c], left]);
          result.push([right, [right[R], right[C] + c]]);
        }
      }
    }
    return result;
  };

  const bfs = () => {
    const N = board.length;
    const OUTLINE = Array.from({ length: N + 2 }, () => 1);
    const queue = [[[1, 1], [1, 2], 0]];
    const newBoard = [OUTLINE, ...board.map((v) => [1, ...v, 1]), OUTLINE];
    const visited = new Set(["1112"]);
    const destination = N + "" + N;

    while (queue.length) {
      const [left, right, count] = queue.shift();

      if (left.join("") === destination || right.join("") === destination) {
        return count;
      }

      const np = nextPosition(left, right, newBoard);

      for (const [nextLeft, nextRight] of np) {
        const key = nextLeft.join("") + nextRight.join("");

        if (!visited.has(key)) {
          queue.push([nextLeft, nextRight, count + 1]);
          visited.add(key);
        }
      }
    }
  };

  return bfs();
}
