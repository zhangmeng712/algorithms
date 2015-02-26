/**
 * @fileOverView maze.js
 * 实现迷宫问题
 * @author zhangmeng on 15/2/25
 */
(function () {
    /**
     * 迷宫的构造函数
     * @param x 横轴
     * @param y 纵轴
     */
    var Maze = function (x, y) {
        this.rows = y;//行
        this.cols = x;//列
        this.totals = x*y;
        this.path = new Stack();//使用栈
        this.cells = [];
        this.checks = [];//用于装载要检测的点
        this._init();

    };
    Maze.prototype._init = function () {
        for (var i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            this.checks[i] = [];
            for (var j = 0; j < this.cols; j++) {
                this.cells[i][j] = [0,0,0,0]; //生成这种结构 maze[0][0][0,0,0,0]
                this.checks[i][j] = true;
            }
        }
    };
    Maze.prototype.generate = function () {
        var current =  [Math.floor(Math.random()*this.rows), Math.floor(Math.random()*this.cols)];//随机找到一个点
        this.path.push(current);
        this.checks[current[0]][current[1]] = false;
        var visited = 1;
        var next;
        while (visited < this.totals) {
            //检测4个周围的顶点
            var arounds = [
                [current[0]-1, current[1], 0, 2], //上
                [current[0], current[1] + 1, 1, 3], //右
                [current[0]+1, current[1], 2, 0],//下
                [current[0], current[1]-1, 3, 1]//左
            ];
            var neighbors = [];
            for (var x = 0; x < 4; x++) {
                //在边界之内以及没有被访问过
                if (arounds[x][0] > -1 && arounds[x][0] < this.rows && arounds[x][1] > -1 && arounds[x][1] < this.cols && this.checks[arounds[x][0]][arounds[x][1]]) {
                    neighbors.push(arounds[x]);
                }
            }

            if (neighbors.length) {
                next = neighbors[Math.floor(Math.random()*neighbors.length)];//随机取得一个相邻节点作为下一个
                this.cells[current[0]][current[1]][next[2]] = 1;
                this.cells[next[0]][next[1]][next[3]] = 1;
                this.checks[next[0]][next[1]] = false;
                visited++;
                current = [next[0], next[1]];
                this.path.push(current);

            } else {
                current = this.path.pop();
            }

        }
        return this.cells;

    };
    Maze.prototype.draw = function (selector) {
        var cells = this.generate();
        var holder = $(selector);
        holder.append('<table id="maze" style="border-collapse: collapse;"><tbody></tbody></table>');
        var tbody = $('#maze > tbody');

        for (var i = 0; i < cells.length; i++) {
            tbody.append("<tr>");
            for (var j = 0; j < cells[i].length; j++) {
                var selector = i+"-"+j;
                $('#maze > tbody').append("<td id='"+selector+"'>&nbsp;</td>");
                var td = $('#'+selector);
                td.css({
                    width: '20px',
                    height: '20px'
                });
                if (cells[i][j][0] == 0) { td.css('border-top', '2px solid black'); }
                if (cells[i][j][1] == 0) { td.css('border-right', '2px solid black'); }
                if (cells[i][j][2] == 0) { td.css('border-bottom', '2px solid black'); }
                if (cells[i][j][3] == 0) { td.css('border-left', '2px solid black'); }
            }
            tbody.append("</tr>");
        }

    };
    //将path显示出来
    Maze.prototype.showPath = function () {
        var path = this.path;
        var pathList = path.dataStore;
        var count = 1;
        for (var i = 0; i < pathList.length; i++) {
            var row = pathList[i][0];
            var col = pathList[i][1];
            var sel = $('#' + row + '-' + col);
            console.log(sel, row, col, count);
            sel.html(count).css({
                backgroundColor: '#ff0000'
            });
            count++;

        }


    };
    window.Maze = Maze;
})();