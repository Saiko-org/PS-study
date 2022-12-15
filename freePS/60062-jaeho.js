// 프로그래머스 / 60062 / 외벽 점검 (Lv3 2020 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/60062
// solve: 60분
// https://ryulurala.tistory.com/214

function solution(n, weak, dist) {
  let answer = Infinity;
  const newWeak = [...weak, ...weak.map((value) => value + n)];

  const getPermutation = (arr) => {
    if (arr.length === 1) {
      return [arr];
    }
    const result = [];
    for (let index = 0; index < arr.length; index++) {
      const front = arr.slice(0, index);
      const target = arr[index];
      const back = arr.slice(index + 1);
      result.push(
        ...getPermutation(front.concat(back)).map((v) => [target, ...v])
      );
    }
    return result;
  };

  const permutation = getPermutation(dist);

  // [1,5,6,10] [5,6,10,1] [6,10,1,5] [10,1,5,6] 돌기 위해서
  // [1, 5, 6, 10, 13, 17, 18, 22]를 4길이 만큼씩 1~10까지만 순회
  for (let start = 0; start < weak.length; start++) {
    // p는 dist(친구)의 순열의 1가지 경우 (배열)
    for (const p of permutation) {
      let startWeak = start;

      // 친구들이 하나씩 나와서 모두 커버 가능한지 확인
      for (let friend = 0; friend < p.length; friend++) {
        // 한 친구의 최대치
        const endWeak = newWeak[startWeak] + p[friend];

        // 해당 친구가 커버할 수 있는 곳까지 startWeak 올리기
        while (startWeak < start + weak.length) {
          if (endWeak < newWeak[startWeak]) {
            break;
          }
          startWeak += 1;
        }

        // 해당 친구가 커버 마무리했다면 친구 수 저장
        if (startWeak === start + weak.length) {
          answer = Math.min(answer, friend + 1);
        }
      }
    }
  }

  return answer === Infinity ? -1 : answer;
}
