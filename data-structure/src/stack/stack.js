/**
 * @fileOverView stack.js 栈
 * @author zhangmeng on 15/2/9
 * 栈可用链表实现 https://github.com/mauriciosantos/buckets/blob/master/buckets.js
 * 也可以用数组实现
 */
//使用方法
//http://jsfiddle.net/zhangmeng712/wdahytdc/2/
// var stack = new Stack();
//stack.push('11');
//stack.push('22');
//stack.push('33');
//console.log(stack.dataStore);
//console.log(stack.peek())
//console.log(stack.pop())
//console.log(stack.peek())
//console.log(stack)


(function (exports) {
    'use strict';

    exports.Stack = function () {
        this.dataStore = [];
        this.top = 0;
    };
    exports.Stack.prototype.push = function (elem) {
        this.dataStore[this.top++] = elem;
    };

    exports.Stack.prototype.pop = function () {
        if (this.top > 0) {
            var temp = this.dataStore[this.top-1];
            this.dataStore.pop();
            this.top--;
            return temp;
        } else {
            this.top = 0;
        }

    };
    exports.Stack.prototype.peek = function () {
        return this.dataStore[this.top-1];
    };
    exports.Stack.prototype.clear = function () {
        this.top = 0;
    };
    exports.Stack.prototype.length = function () {
        return this.top;
    }





})(typeof window === 'undefined' ? module.exports : window);