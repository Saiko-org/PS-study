// 프로그래머스 / 77886 / 110 옮기기
// https://school.programmers.co.kr/learn/courses/30/lessons/77886
// fail: 스터디 시작 전, 시간 X

const solution = (s) => {
  const ans = [];
  s.forEach((str) => {
    let insertStr = '';
    let binaryStr = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      if (binaryStr.length >= 2) {
        const b = binaryStr.pop();
        const a = binaryStr.pop();
        if (a === '1' && b === '1' && c === '0') {
          insertStr += '110';
          continue;
        }

        binaryStr.push(a);
        binaryStr.push(b);
      }
      binaryStr.push(c);
    }

    if (insertStr === '') ans.push(str);
    else {
      const tempStr = binaryStr.join('');
      const idx = tempStr.lastIndexOf('0') + 1;
      ans.push(tempStr.substring(0, idx) + insertStr + tempStr.substring(idx));
    }
  });
  return ans;
};

console.log(solution(['1110', '100111100', '0111111010']));

// 출처 [프로그래머스] LV.3 110 옮기기 (JS) https://joojaewoo.github.io/posts/110/
