// 프로그래머스 / 60059 / 자물쇠와 열쇠 (Lv3 2020 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/60059
// solve: 60분

function solution(key, lock) {
  const M = key.length;
  const N = lock.length;
  const K = M - 1;
  const board = Array.from({ length: 2 * K + N }, () =>
    Array.from({ length: 2 * K + N }, () => 0)
  );
  const count = lock.flat().filter((value) => value === 0).length;

  lock.forEach((row, rowIndex) =>
    row.forEach(
      (column, columnIndex) => (board[K + rowIndex][K + columnIndex] = column)
    )
  );

  const spinnedKey = (originalKey) => {
    const spinned = Array.from({ length: M }, () =>
      Array.from({ length: M }, () => 0)
    );
    originalKey.forEach((arr, row) =>
      arr.forEach(
        (value, column) =>
          (spinned[column][M - 1 - row] = originalKey[row][column])
      )
    );
    return spinned;
  };

  const check = (target, moveRow, moveColumn) => {
    let lockCount = 0;

    for (let row = 0; row < M; row++) {
      for (let column = 0; column < M; column++) {
        if (
          K <= row + moveRow &&
          row + moveRow < K + N &&
          K <= column + moveColumn &&
          column + moveColumn < K + N
        ) {
          const keyValue = target[row][column];
          const lockValue = board[row + moveRow][column + moveColumn];

          if (keyValue === 1 && lockValue === 0) {
            lockCount += 1;
          }
          if (keyValue === 1 && lockValue === 1) {
            return false;
          }
        }
      }
    }

    if (lockCount === count) {
      return true;
    }
    return false;
  };

  for (let row = 0; row < K + N; row++) {
    for (let column = 0; column < K + N; column++) {
      let target = key;
      for (let i = 0; i < 4; i++) {
        if (check(target, row, column)) {
          return true;
        }
        target = spinnedKey(target);
      }
    }
  }

  return false;
}
