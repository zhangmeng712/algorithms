/**
 * @fileOverView double-linked-list双向链表
 * 删除操作去掉查询前面节点
 * 空间换时间
 * @author zhangmeng on 15/2/10
 */

/**
 * 用法：
 *   http://jsfiddle.net/zhangmeng712/9dz8we75/4/
 *   var dll = new window.DoubleLinkedList();
     dll.insert('France','head');
     dll.insert('German', 'France');
     dll.insert('Denmark', 'German');
     console.log(dll.find('France').next);
     dll.insert('Finland', 'Denmark');
     dll.remove('German');
     console.log('the last one is:' ,dll.findLast());
     console.log(dll.display());
     console.log(dll.reverseDisplay());
 */
(function (exports) {
    'use strict';

    exports.Node = function (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    };
    exports.DoubleLinkedList = function () {
        this.head = new exports.Node('head');
    };
    exports.DoubleLinkedList.prototype.insert = function (newNode, item) {
        var newNode = new exports.Node(newNode);
        var curNode = this.find(item);
        newNode.next = curNode.next;
        newNode.prev = curNode;
        curNode.next = newNode;
    };
    //比单链表要方便 因为存储了前置节点
    exports.DoubleLinkedList.prototype.remove = function (item) {
        var curNode= this.find(item);
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
        curNode.next = null;
        curNode.prev = null;
    };

    //反向遍历
    exports.DoubleLinkedList.prototype.reverseDisplay = function (node) {
        var curNode = this.findLast();
        while(curNode.prev !== null) {
            console.log(curNode.data);
            curNode = curNode.prev;
        }

    };

    exports.DoubleLinkedList.prototype.display = function () {
        var curNode = this.head;
        while(curNode.next !== null) {
            console.log(curNode.next.data);
            curNode = curNode.next;
        }

    };

    exports.DoubleLinkedList.prototype.findLast = function () {
        var curNode = this.head;
        while(curNode.next !== null) {
            curNode = curNode.next;
        }
        return curNode;
    };


    //find方法同单链表
    exports.DoubleLinkedList.prototype.find = function (item) {
        var curNode = this.head;
        while(curNode.data !== item) {
            if (curNode.next === null) {
                return false;
            }
            curNode = curNode.next;
        }
        return curNode;
    };


})(typeof window === 'undefined' ? module.exports : window);
