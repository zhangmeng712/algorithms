/**
 * @fileOverView single-linked-list 单链表
 * @author zhangmeng on 15/2/9
 */

/**
 *  用法：
    http://jsfiddle.net/zhangmeng712/n03d6mfa/1/
    var ll = new window.SingleLinkedList();
    ll.insert('zhangmeng', 'head');
    ll.insert('jiangyu', 'zhangmeng');
    ll.insert('yanhui', 'jiangyu');
    ll.insert('sifei', 'yanhui');
    ll.display();
    //console.log(ll.find('yanhui'));
    ll.remove('yanhui');
    ll.display();
 **/

(function (exports) {
    'use strict';

    exports.Node = function (data) {
        this.data = data;
        this.next = null;
    };
    exports.SingleLinkedList = function () {
        this.first = new exports.Node('head');
    };



    exports.SingleLinkedList.prototype.insert = function (newElement, item) {
        var newNode = new exports.Node(newElement);
        var curNode = this.find(item);
        if (curNode) {
            newNode.next = curNode.next;
            curNode.next = newNode;
        }
    };
    exports.SingleLinkedList.prototype.remove = function (item) {
        var preNode = this.findPrevious(item);
        if (preNode.next !== null) {
            preNode.next = preNode.next.next;
        }

    };

    exports.SingleLinkedList.prototype.display = function () {
        var curNode = this.first;
        while(curNode.next !== null) {
            console.log(curNode.next.data);
            curNode = curNode.next;
        }

    };

    exports.SingleLinkedList.prototype.find = function (item) {
        var curNode = this.first;
        while(curNode.data !== item) {
            if (curNode.next === null) {
                return false;
            }
            curNode = curNode.next;
        }
        return curNode;
    };

    //双向链表的时候不用使用
    exports.SingleLinkedList.prototype.findPrevious = function (item) {
        var curNode = this.first;
        while(curNode.next !== null && curNode.next.data != item) {
            curNode = curNode.next;
        }
        return curNode;

    };


})(typeof window === 'undefined' ? module.exports : window);
