// 프로그래머스 / 77886 / 110 옮기기
// https://school.programmers.co.kr/learn/courses/30/lessons/77886
// fail : 1시간 (코드가 저장되지 않았음..)
// solve : 30분 (다른분의 코드 풀이 참고)

function solution(s) {
  const answer = [];
  
  for (const element of s) {
      const num = element.split('');
      const stack = [];
      let count = 0;
      
      for (const digit of num) {
          if (digit === '0') {
              if (1 < stack.length) {
                  // 110인지 확인
                  const second = stack.pop();
                  const first = stack.pop();
                  
                  if (first + second + digit === '110') {
                      count += 1;
                      continue;
                  }
                  
                  stack.push(first);
                  stack.push(second);
              }
          }
          
          stack.push(digit);
      }
      
      const indexOfLastZero = stack.lastIndexOf('0');
      
      if (indexOfLastZero === -1) { // 남은 문자열에 0이 없는 경우
          answer.push('110'.repeat(count) + stack.join(''));
      } else { // 남은 문자열에 0이 있는 경우 : 마지막 0 다음에 110 반복하여 추가
          stack.splice(indexOfLastZero + 1, 0, '110'.repeat(count));
          answer.push(stack.join(''));
      }
  }
  
  return answer;
}
