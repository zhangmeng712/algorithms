/**
 * Created by zhangmeng on 14/11/28.
 * 测试Fib的两种算法效率
 */

describe('Fib algrithm performance',function () {


    it ('using recursion for 1*2.....10', function() {
        var begin = new Date().getTime();
        Fn.recurFib(10);
        var end = new Date().getTime();
        console.log('Fib(10) using recursion time is:' , end - begin, 'ms');
    });

    it ('using recursion for 1*2.....10', function() {
        var begin = new Date().getTime();
        Fn.dynFib(10);
        var end = new Date().getTime();
        console.log('Fib(10) using dyn algrithms time is:' , end - begin, 'ms');
    });



    it ('using recursion for 1*2.....100', function() {
        var begin = new Date().getTime();
        Fn.recurFib(40);
        var end = new Date().getTime();
        console.log('Fib(40) using recursion time is:' , end - begin, 'ms');
    });

    it ('using recursion for 1*2.....100', function() {
        var begin = new Date().getTime();
        Fn.dynFib(40);
        var end = new Date().getTime();
        console.log('Fib(40) using dyn algrithms time is:' , end - begin, 'ms');
    });


});

