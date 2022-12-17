// 프로그래머스 / 60061 / 기둥과 보 설치 (Lv3 2020 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/60061
// solve: 60분

function solution(n, build_frame) {
  const answer = [];

  for (const frame of build_frame) {
    const [x, y, fr, isInstall] = frame;

    if (isInstall) buildFrame(answer, x, y, fr);
    else destroyFrame(answer, x, y, fr);
  }

  return answer.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}

const checkPillar = (ans, x, y) => {
  if (y === 0) {
    return true;
  } else if (ans.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)) {
    return true;
  } else if (ans.find(([a, b, fr]) => a === x && b === y && fr === 1)) {
    return true;
  } else if (ans.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1)) {
    return true;
  }
  return false;
};

const checkPlate = (ans, x, y) => {
  if (ans.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)) {
    return true;
  } else if (ans.find(([a, b, fr]) => a === x + 1 && b === y - 1 && fr === 0)) {
    return true;
  } else if (
    ans.find(([a, b, fr]) => a === x + 1 && b === y && fr === 1) &&
    ans.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1)
  ) {
    return true;
  }
  return false;
};

const buildFrame = (ans, x, y, frame) => {
  if (frame === 1 && checkPlate(ans, x, y)) {
    ans.push([x, y, frame]);
  }
  if (frame === 0 && checkPillar(ans, x, y)) {
    ans.push([x, y, frame]);
  }
};

const destroyFrame = (ans, x, y, frame) => {
  const copy = ans.slice();
  const idx = ans.findIndex(([a, b, fr]) => a === x && b === y && fr === frame);

  copy.splice(idx, 1);

  for (const frs of copy) {
    const [xpos, ypos, fr] = frs;

    if (fr === 1 && !checkPlate(copy, xpos, ypos)) {
      return;
    }
    if (fr === 0 && !checkPillar(copy, xpos, ypos)) {
      return;
    }
  }

  ans.splice(idx, 1);
};
