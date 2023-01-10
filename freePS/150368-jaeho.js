// 프로그래머스 / 150368 / 이모티콘 할인 행사 (Lv2 2023 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/150368
// solve: 45분

function solution(users, emoticons) {
  const result = [0, 0];
  const SALES = [10, 20, 30, 40];
  const N = users.length;
  const M = emoticons.length;
  const getPrices = (selectedSales) => {
    const result = [];
    for (let i = 0; i < M; i++) {
      const emoticon = emoticons[i];
      const value = (emoticon * (100 - selectedSales[i])) / 100;
      result.push(value);
    }
    return result;
  };
  const dfs = (current, selectedSales) => {
    if (selectedSales[M - 1] !== 0) {
      const prices = getPrices(selectedSales);
      const totalPrices = [];
      for (let index = 0; index < N; index++) {
        const [saleCriteria] = users[index];
        let totalPrice = 0;
        for (let i = 0; i < M; i++) {
          const price = prices[i];
          if (saleCriteria <= selectedSales[i]) {
            totalPrice += price;
          }
        }
        totalPrices.push(totalPrice);
      }

      let count = 0;
      let total = 0;

      for (let i = 0; i < N; i++) {
        const totalPrice = totalPrices[i];
        if (users[i][1] <= totalPrice) {
          count += 1;
        } else {
          total += totalPrice;
        }
      }

      if (result[0] < count) {
        result[0] = count;
        result[1] = total;
      } else if (result[0] === count && result[1] < total) {
        result[1] = total;
      }

      return;
    }

    for (const sale of SALES) {
      selectedSales[current] = sale;
      dfs(current + 1, selectedSales);
      selectedSales[current] = 0;
    }
  };

  dfs(
    0,
    Array.from({ length: M }, () => 0)
  );

  return result;
}
