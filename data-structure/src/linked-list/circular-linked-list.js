/**
 * @fileOverView circular-linked-list 循环链表
 * 循环链表相比双向链表会节省存储空间
 * 同单链表不同点：this.head.next = this.head;
 * 循环终止条件增加限制curNode.next.data !== "head" 结束循环
 * @author zhangmeng on 15/2/9
 */

//var ll = new window.cicularLinkedList();
//ll.insert('zhangmeng', 'head');
//ll.insert('jiangyu', 'zhangmeng');
//ll.insert('yanhui', 'jiangyu');
//ll.insert('sifei', 'yanhui');
//ll.display();
//console.log(ll.find('yanhui'));
//var curNode = ll.head;
//while(curNode.next != ll.head) {
//    ll.remove(curNode.data);
//    curNode = curNode.next;
//}
//ll.display();

(function (exports) {
    'use strict';

    exports.Node = function (data) {
        this.data = data;
        this.next = null;
    };
    exports.cicularLinkedList = function () {
        this.head = new exports.Node('head');
        this.head.next = this.head;
        this.length = 0;

    };



    exports.cicularLinkedList.prototype.insert = function (newElement, item) {
        var newNode = new exports.Node(newElement);
        var curNode = this.find(item);
        if (curNode) {
            newNode.next = curNode.next;
            curNode.next = newNode;
            this.length += 1;
        }
    };
    exports.cicularLinkedList.prototype.remove = function (item) {
        var preNode = this.findPrevious(item);
        preNode.next = preNode.next.next;
        this.length -= 1;
    };

    exports.cicularLinkedList.prototype.display = function () {
        var curNode = this.head;
        while(curNode.next != this.head ) {
            console.log(curNode.next.data);
            curNode = curNode.next;
        }

    };

    exports.cicularLinkedList.prototype.find = function (item) {
        var curNode = this.head;
        while(curNode.data !== item && (curNode.next != this.head)) {
            curNode = curNode.next;
        }
        return curNode;
    };

    exports.cicularLinkedList.prototype.findPrevious = function (item) {
        var curNode = this.head;
        while(curNode.next.data != item && (curNode.next != this.head)) {
            curNode = curNode.next;
        }
        return curNode;

    };



})(typeof window === 'undefined' ? module.exports : window);
