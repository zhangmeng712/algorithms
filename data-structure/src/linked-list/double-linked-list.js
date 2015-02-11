/**
 * @fileOverView double-linked-list双向链表
 * 删除操作去掉查询前面节点
 * 空间换时间
 * @author zhangmeng on 15/2/10
 */
(function (exports) {
    'use strict';

    exports.Node = function (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    };
    exports.DoubleLinkedList = function () {
        this.head = new Node('head');

    }





})(typeof window === 'undefined' ? module.exports : window);
