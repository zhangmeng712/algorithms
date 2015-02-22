/**
 * @fileOverView josephus.js
 * 使用循环链表解决约瑟夫斯问题
 * require(../circular)
 * @author zhangmeng on 15/2/11
 */
(function (exports) {
    'use strict';
     exports.Josephus = function (m) {
         this.cll = new cicularLinkedList();
     };
    exports.Josephus.prototype.init = function (m) {
        var i;
        this.cll.insert(1, 'head');//头结点不参与删除
        for (i = 1; i < m; i++) {
            this.cll.insert(i+1, i);
        }

        this.cll.display();
        //console.log(this.cll)

    };

    exports.Josephus.prototype.kill = function (n) {
         var current = this.cll.head;
         var arr = [];
         while(true) {
             if (this.cll.length < n) {
                 this.cll.display();
                 console.log(arr);
                 break
             }
                //将头结点隔过去
             for (var i = 0; i < n-1  ; i++) {
                 if(current.next == this.cll.head) {
                     current = this.cll.head.next;
                 } else {
                     current = current.next;
                 }
                 console.log('save:',current.data);
             }


             var toDelete = current.next;
             if(toDelete == this.cll.head) {
                 arr.push(this.cll.head.next.data);
                 console.log('delete:', this.cll.head.next.data);
                 this.cll.remove(this.cll.head.next.data);
                 current.next  = this.cll.head;
             } else {
                 arr.push(toDelete.data)
                 console.log('delete:', toDelete.data);
                 this.cll.remove(toDelete.data);
                 current.next = toDelete.next;

             }
         }

    }





})(typeof window === 'undefined' ? module.exports : window);