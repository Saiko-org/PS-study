// 프로그래머스 / 42628 / 이중우선순위큐 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/42628
// solve: 20분

function solution(operations) {
  function PriorityQueue() {
    this.queue = [];
    this.enqueue = (newElement) => {
      let index = 0;
      for (; index < this.queue.length; index++) {
        if (this.queue[index] < newElement) {
          break;
        }
      }
      this.queue.splice(index, 0, newElement);
    };
    this.dequeueMax = () => {
      return this.queue.shift();
    };
    this.dequeueMin = () => {
      return this.queue.pop();
    };
    this.front = () => {
      return this.queue[0];
    };
    this.back = () => {
      return this.queue[this.queue.length - 1];
    };
    this.isEmpty = () => {
      return this.queue.length === 0 ? true : false;
    };
  }

  const pq = new PriorityQueue();

  operations.forEach((operation) => {
    const [command, num] = operation.split(" ");
    if (command === "I") {
      pq.enqueue(parseInt(num));
    }
    if (command === "D") {
      if (pq.isEmpty() === false) {
        if (parseInt(num) === 1) {
          pq.dequeueMax();
        }
        if (parseInt(num) === -1) {
          pq.dequeueMin();
        }
      }
    }
  });

  if (pq.isEmpty()) {
    return [0, 0];
  }

  return [pq.front(), pq.back()];
}
