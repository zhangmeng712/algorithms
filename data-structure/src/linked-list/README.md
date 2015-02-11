链表
==========

## 定义

链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而顺序表相应的时间复杂度分别是O(logn)和O(1)。

## 单链表

链表中最简单的一种是单向链表，它包含两个域，一个信息域和一个指针域。这个链接指向列表中的下一个节点，而最后一个节点则指向一个空值。

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/816px-Singly-linked-list.svg.png" width="328" height="35" >

## 双向链表

一种更复杂的链表是“双向链表”或“双面链表”。每个节点有两个连接：一个指向前一个节点，（当此“连接”为第一个“连接”时，指向空值或者空列表）；而另一个指向下一个节点，（当此“连接”为最后一个“连接”时，指向空值或者空列表）

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1220px-Doubly-linked-list.svg.png" width="438" height="35" >



## 循环链表
在一个 循环链表中, 首节点和末节点被连接在一起。这种方式在单向和双向链表中皆可实现。要转换一个循环链表，你开始于任意一个节点然后沿着列表的任一方向直到返回开始的节点。再来看另一种方法，循环链表可以被视为“无头无尾”。这种列表很利于节约数据存储缓存， 假定你在一个列表中有一个对象并且希望所有其他对象迭代在一个非特殊的排列下。

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Circularly-linked-list.svg/700px-Circularly-linked-list.svg.png" width="238" height="45" >





## API

- 插入 insert(newElem,elem)
- 删除 remove(elem)
- 遍历 display()
- 反向遍历 reverseDisplay()
- 辅助方法 find(elem) findPrev(elem) (O(n)) findLast()

## 应用

- 链表用来构建许多其它数据结构，如堆栈，队列和他们的派生。（一维数组可以处理的问题）
- 经典问题：约瑟夫斯问题 参见[josephus](josephus.js) 


## 参考
- http://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8
- http://rosettacode.org/wiki/Josephus_problem
- https://rawgit.com/mauriciosantos/buckets/master/doc/symbols/buckets.LinkedList.html
