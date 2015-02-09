/**
 * @fileOverView double-linked-list双向链表
 * @author zhangmeng on 15/2/10
 */
(function (exports) {
    'use strict';

    exports.Node = function (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    };


})(typeof window === 'undefined' ? module.exports : window);
