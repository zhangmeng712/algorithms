/**
 * @fileOverView josephus.js
 * 使用循环链表解决约瑟夫斯问题
 * require(../circular)
 * 头结点存储数据的时候
 * @author zhangmeng on 15/2/11
 */
(function (exports) {
    'use strict';
    exports.Josephus = function (m) {
        this.cll = new cicularLinkedList();
    };
    exports.Josephus.prototype.init = function (m) {
        var i;
        this.cll.head.data = 1;
        this.cll.length +=1;
        //this.cll.insert(1, 'head');
        for (i = 1; i < m; i++) {
            this.cll.insert(i+1, i);
        }

    };
    var xx = [];
    exports.Josephus.prototype.kill = function (n) {
        var current = this.cll.head;
        while(true) {
            if (this.cll.length < n) {
                console.log(this.cll);
                break
            }

            for (var i = 0; i < n-1  ; i++) {
                console.log("save", current)
                current = current.next;

            }

            if(current == this.cll.head) {
                console.log('delete head', current.data, xx);
                xx.push(this.cll.head.data);
                this.cll.remove(this.cll.head.data);
                this.cll.head.data = current.next.data;
                this.cll.head = current.next;
                current = current.next;

             //   this.cll.head.next = this.cll.head.next.next;

            } else {
                console.log('delete', current.data, xx);
                this.cll.remove(current.data);
                xx.push(current.data);
                current = current.next;
            }
        }

    }





})(typeof window === 'undefined' ? module.exports : window);