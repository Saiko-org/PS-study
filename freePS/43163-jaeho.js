// 프로그래머스 / 43163 / 단어 변환 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/43163
// solve: 20분

function solution(begin, target, words) {
  const board = new Map();
  const map = new Map();

  const compareWord = (word1, word2) => {
    if (word1.length !== word2.length) {
      return false;
    }

    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        count += 1;
      }
    }

    if (count === 1) {
      return true;
    }
    return false;
  };

  const bfs = (start) => {
    const queue = [start];

    while (queue.length !== 0) {
      const [current, count] = queue.shift();

      for (const word of map.get(current)) {
        if (board.has(word)) {
          if (count + 1 < board.get(word)) {
            board.set(word, count + 1);
            queue.push([word, count + 1]);
          }
        } else {
          board.set(word, count + 1);
          queue.push([word, count + 1]);
        }
        if (word === target) {
          return;
        }
      }
    }
  };

  board.set(begin, 0);
  map.set(begin, []);
  words.forEach((key) => {
    words.forEach((value) => {
      if (compareWord(key, value)) {
        if (map.has(key)) {
          map.get(key).push(value);
        } else {
          map.set(key, [value]);
        }
      }
    });
    if (compareWord(begin, key)) {
      map.get(begin).push(key);
    }
  });

  bfs([begin, 0]);

  if (board.has(target)) {
    return board.get(target);
  }
  return 0;
}
