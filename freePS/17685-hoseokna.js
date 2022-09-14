// 프로그래머스 / 17685 / 자동완성
// https://school.programmers.co.kr/learn/courses/30/lessons/17685
// fail: 1시간

function Node(data = '') {
  this.data = data
  this.children = new Map()
}

function Trie() {
  const head = new Node()

  this.insert = (word) => {
    let currentNode = head

    for (const char of word) {
      const node = new Node(word)
      const prevValue = currentNode.children.get(char) || []

      prevValue.push(node)
      currentNode.children.set(char, prevValue)

      currentNode = node
    }
  }

  this.getCountFindingWord = (word) => {
    let count = 0
    let currentNode = head
    let currentWord = ''

    console.log('???', word)

    for (const char of word) {
      count++
      currentWord += char

      const children = currentNode.children
      console.log(char, children, children.get(char).length)

      const filtered = children
        .get(char)
        .filter(({ data }) => data.includes(currentWord))

      if (filtered.length === 1) {
        console.log('count1', count, currentWord, filtered)
        return count + 1
      }

      currentNode = filtered.filter(({ data }) => data === word)[0]
    }

    console.log('count2', count)
    return count
  }
}

function solution(words) {
  const trie = new Trie()

  words.forEach((word) => trie.insert(word))

  return words.reduce((acc, cur) => (acc += trie.getCountFindingWord(cur)), 0)
}
