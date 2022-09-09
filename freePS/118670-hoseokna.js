// 프로그래머스 / 118670 / 행렬과 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/118670
// fail: 1시간

function Node(data) {
  this.data = data
  this.prev = null
  this.next = null
}

function Queue() {
  this.head = null
  this.tail = null
  this.size = 0

  this.insertHead = (data) => {
    const node = new Node(data)

    this.size++

    if (this.head === null) {
      this.head = node
      this.tail = node

      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  this.insertTail = (data) => {
    const node = new Node(data)

    this.size++

    if (this.tail === null) {
      this.head = node
      this.tail = node

      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  this.popHead = () => {
    const popped = this.head.data

    if (this.head === this.tail) {
      this.tail = null
    }

    this.head = this.head.next
    if (this.head) {
      this.head.prev = null
    }
    this.size--

    return popped
  }

  this.popTail = () => {
    const popped = this.tail.data

    if (this.tail === this.head) {
      this.head = null
    }

    this.tail = this.tail.prev
    if (this.tail) {
      this.tail.next = null
    }
    this.size--

    return popped
  }
}

function solution(rc, operations) {
  const COMMAND = Object.freeze({
    SHIFT_ROW: 'ShiftRow',
    ROTATE: 'Rotate',
  })
  const Y_LENGTH = rc.length
  const X_LENGTH = rc[0].length

  const rows = new Queue()
  const firstColumns = new Queue()
  const lastColumns = new Queue()

  rc.forEach((columns) => {
    const queue = new Queue()

    columns.slice(1, -1).forEach((column) => queue.insertTail(column))
    rows.insertTail(queue)
  })

  for (let y = 0; y < Y_LENGTH; y++) {
    firstColumns.insertTail(rc[y][0])
    lastColumns.insertTail(rc[y][X_LENGTH - 1])
  }

  const shiftRow = () => {
    rows.insertHead(rows.popTail())
    firstColumns.insertHead(firstColumns.popTail())
    lastColumns.insertHead(lastColumns.popTail())
  }

  const rotate = () => {
    rows.tail.data.insertTail(lastColumns.popTail())
    firstColumns.insertTail(rows.tail.data.popHead())
    rows.head.data.insertHead(firstColumns.popHead())
    lastColumns.insertHead(rows.head.data.popTail())
  }

  operations.forEach((operation) => {
    if (operation === COMMAND.SHIFT_ROW) {
      shiftRow()

      return
    }

    rotate()
  })

  const answer = []

  for (let y = 0; y < Y_LENGTH; y++) {
    const row = []

    row.push(firstColumns.popHead())

    const rowsQueue = rows.popHead()
    let head = rowsQueue.head

    while (head) {
      row.push(head.data)
      head = head.next
    }

    row.push(lastColumns.popHead())
    answer.push(row)
  }

  return answer
}
