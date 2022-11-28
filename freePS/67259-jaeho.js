// 프로그래머스 / 67259 / 경주로 건설 (Lv3 2020 카카오 인턴십)
// https://school.programmers.co.kr/learn/courses/30/lessons/67259
// solve: 60분
// 최소힙 없이 일반 배열 자료구조를 이용하였을 경우 테스트케이스 11에서 시간초과 발생

function solution(board) {
  function MinHeap() {
    const arr = [];
    this.push = ([row, column, direction, cost]) => {
      let element = [row, column, direction, cost];

      arr.push(element);

      let pointer = arr.length - 1;
      let parentPointer = Math.floor((pointer - 1) / 2);
      while (0 < pointer && arr[pointer][3] < arr[parentPointer][3]) {
        [element, arr[pointer]] = [arr[pointer], element];
        pointer = parentPointer;
        parentPointer = Math.floor((pointer - 1) / 2);
      }
    };
    this.pop = () => {
      if (arr.length === 1) {
        return arr.pop();
      }
      const answer = arr[0];

      arr[0] = arr.pop();

      let pointer = 0;
      let leftChild = pointer * 2 + 1;
      let rightChild = pointer * 2 + 2;
      while (leftChild < arr.length && arr[leftChild][3] < arr[pointer][3]) {
        if (rightChild < arr.length && arr[rightChild][3] < arr[leftChild][3]) {
          [arr[rightChild], arr[pointer]] = [arr[pointer], arr[rightChild]];
          pointer = rightChild;
          leftChild = pointer * 2 + 1;
          rightChild = pointer * 2 + 2;
          continue;
        }
        [arr[leftChild], arr[pointer]] = [arr[pointer], arr[leftChild]];
        pointer = leftChild;
        leftChild = pointer * 2 + 1;
        rightChild = pointer * 2 + 2;
      }

      return answer;
    };
    this.empty = () => {
      if (arr.length === 0) {
        return true;
      }
      return false;
    };
    this.print = () => {
      return arr;
    };
  }

  const controlRow = [-1, 0, 1, 0];
  const controlColumn = [0, 1, 0, -1];
  const N = board.length;
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array.from({ length: 4 }, () => Infinity))
  );
  visited[0][0][0] = 0;
  visited[0][0][1] = 0;
  visited[0][0][2] = 0;
  visited[0][0][3] = 0;

  const validation = (row, column) => {
    if (row < 0 || N <= row) {
      return false;
    }
    if (column < 0 || N <= column) {
      return false;
    }
    if (board[row][column] === 1) {
      return false;
    }
    return true;
  };

  const bfs = () => {
    const heap = new MinHeap();
    heap.push([0, 0, 1, 0]);
    heap.push([0, 0, 2, 0]);

    while (!heap.empty()) {
      const [currentRow, currentColumn, direction, cost] = heap.pop();

      if (visited[currentRow][currentColumn][direction] < cost) {
        continue;
      }

      for (let d = 0; d < 4; d++) {
        const nextDirectionRow = controlRow[d];
        const nextDirectionColumn = controlColumn[d];
        const nextRow = currentRow + nextDirectionRow;
        const nextColumn = currentColumn + nextDirectionColumn;
        if (!validation(nextRow, nextColumn)) {
          continue;
        }

        const fee = direction === d ? 100 : 600;

        if (
          visited[nextRow][nextColumn][d] === Infinity ||
          visited[currentRow][currentColumn][direction] + fee <=
            visited[nextRow][nextColumn][d]
        ) {
          visited[nextRow][nextColumn][d] =
            visited[currentRow][currentColumn][direction] + fee;
          heap.push([
            nextRow,
            nextColumn,
            d,
            visited[currentRow][currentColumn][direction] + fee,
          ]);
        }
      }
    }
  };

  bfs();

  return Math.min(...visited[N - 1][N - 1]);
}
