// 프로그래머스 / 42627 / 디스크 컨트롤러 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/42627
// solve: 1시간

function solution(jobs) {
  if (jobs.length === 1) {
    return jobs[0][1];
  }

  const answer = [];
  const LEN = jobs.length;

  function Heap() {
    const heap = [];

    this.push = (newTask) => {
      const [start, time] = newTask;
      let index = 0;
      for (; index < heap.length; index++) {
        const [startTarget, timeTarget] = heap[index];
        if (time < timeTarget) {
          break;
        }
      }
      heap.splice(index, 0, newTask);
    };
    this.pop = () => {
      return heap.shift();
    };
    this.isEmpty = () => {
      return heap.length === 0 ? true : false;
    };
    this.length = () => {
      return heap.length;
    };
  }

  const heap = new Heap();
  jobs.sort((a, b) => a[0] - b[0]);

  let clock = 0;
  while (jobs.length || !heap.isEmpty()) {
    while (jobs.length && jobs[0][0] <= clock) {
      heap.push(jobs.shift());
    }

    if (!heap.length()) {
      clock = jobs[0][0];
    } else {
      const [start, time] = heap.pop();
      answer.push(clock - start + time);
      clock += time;
    }
  }

  return Math.floor(answer.reduce((prev, curr) => prev + curr, 0) / LEN);
}
