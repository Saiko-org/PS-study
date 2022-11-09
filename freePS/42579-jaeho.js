// 프로그래머스 / 42579 / 베스트앨범 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/42579
// solve: 30분

function solution(genres, plays) {
  const genresMap = new Map();
  const playsMap = new Map();

  for (let index = 0; index < genres.length; index++) {
    const genre = genres[index];
    const play = plays[index];

    if (genresMap.has(genre)) {
      genresMap.get(genre).push([index, play]);
      const total = playsMap.get(genre) + play;
      playsMap.set(genre, total);
    } else {
      genresMap.set(genre, [[index, play]]);
      playsMap.set(genre, play);
    }
  }
  const sortedPlays = [...playsMap].sort((a, b) => b[1] - a[1]);

  for (const [genre, playList] of genresMap) {
    playList.sort((a, b) => b[1] - a[1]);
  }

  return sortedPlays
    .map((value) => {
      const key = value[0];
      return genresMap
        .get(key)
        .slice(0, 2)
        .map((value) => value[0]);
    })
    .flat();
}
