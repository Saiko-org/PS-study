// 프로그래머스 / 72412 / 순위 검색
// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// solve: 1시간 30분.. 풀 수 있을 것 같아서 시간 더 투자하였습니다

const combination = (combinationMap, count, key, elements, score) => {
  if (count === 4) {
    if (!combinationMap[key]) {
      combinationMap[key] = [score];
    } else {
      combinationMap[key].push(score);
    }
    return;
  }

  combination(combinationMap, count + 1, key + elements[count], elements, score);
  combination(combinationMap, count + 1, key + '-', elements, score);
};

const sortCombinationMap = (combinationMap) => {
  for (let key in combinationMap) {
    combinationMap[key] = combinationMap[key].sort((a, b) => a - b);
  }
};

function solution(infos, queries) {
  const combinationMap = new Map();

  infos.forEach((info) => {
    const elements = info.split(' ');
    const score = parseInt(elements.pop());
    combination(combinationMap, 0, '', elements, score);
  });

  sortCombinationMap(combinationMap);

  return queries.map((query) => {
    const elements = query.replace(/ and /g, ' ').split(' ');
    const score = parseInt(elements.pop());

    const key = elements.join('');
    const scores = combinationMap[key];

    if (scores) {
      let left = 0;
      let right = scores.length;

      while (left < right) {
        const mid = parseInt((left + right) / 2);
        if (scores[mid] >= score) {
          right = mid;
        } else if (scores[mid] < score) {
          left = mid + 1;
        }
      }
      return scores.length - left;
    } else {
      return 0;
    }
  });
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
);
