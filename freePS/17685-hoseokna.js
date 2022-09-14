// 프로그래머스 / 17685 / 자동완성
// https://school.programmers.co.kr/learn/courses/30/lessons/17685
// add: 참고 https://maruzzing.github.io/study/algorithm/LEVEL4_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4_%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1/

function solution(words) {
  const trie = new Map()

  words.forEach((word) => {
    let currentTrie = trie

    for (const char of word) {
      if (currentTrie.has(char)) {
        const { count, trie } = currentTrie.get(char)

        currentTrie.set(char, { count: count + 1, trie })
      } else {
        currentTrie.set(char, { count: 1, trie: new Map() })
      }

      currentTrie = currentTrie.get(char).trie
    }
  })

  return words.reduce((acc, cur) => {
    let currentTrie = trie
    let count = 0

    for (const char of cur) {
      count++

      if (currentTrie.get(char).count === 1) {
        break
      }

      currentTrie = currentTrie.get(char).trie
    }

    return (acc += count)
  }, 0)
}
