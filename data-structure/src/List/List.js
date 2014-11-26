/**
 * A List Class Implement
 */
window.JDS = window.JDS || {};
(function () {
    JDS.List = function () {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];

        this.append = append;
        this.insert = insert;
        this.clear = clear;
        this.remove = remove;
        this.find = find;
        this.toString = toString;
        this.length = length;
        this.getElement = getElement;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.curPos = curPos;
        this.moveTo = moveTo;
        this.contains = contains;


    };

    /********************** Mutator Method **********************/
    /**
     * Add elements to List
     */
    function append(elem) {
        this.dataStore.push(elem);
        this.listSize++;
    }

    /**
     * Insert elem to particular pos
     * @param elem
     * @param pos 0 - x
     */
    function insert(elem, pos) {
        if (pos >= 0) {
            this.dataStore.splice(pos + 1, 0, elem);
            this.listSize++;
            this.pos = pos;
            return pos;
        } else {
            return false;
        }

    }


    /**
     * find elem and return pos
     */
    function find(elem) {
        if (this.dataStore.indexOf) {
            return this.dataStore.indexOf(elem);
        } else {
            for (var i = 0, l = this.dataStore.length; i < l; i++) {
                if (this.dataStore[i] === elem) {
                    return i;
                }
            }
            return -1;
        }
    }


    /**
     * Remove elem in Arr
     * @param elem
     */
    function remove(elem) {
        var pos = this.find(elem);
        if (pos) {
            this.splice(pos, 1);
            this.listSize--;
        }
    }

    /**
     * Remove all the elem in arr
     */
    function clear() {
        this.dataStore = [];
        this.listSize = 0;
    }

    /**
     * toString
     */
    function toString() {
        return this.dataStore.toString();
    }

    /**
     * move to the first
     */
    function front() {
        this.pos = 0;
    }

    /**
     * move to the end
     */
    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        if (this.pos > 0) {
            this.pos = this.pos - 1;
        }
    }

    function next() {
        if (this.pos < this.listSize - 1) {
            this.pos = this.pos + 1;
        }
    }

    function curPos() {
        return this.pos;
    }

    function moveTo(pos) {
        this.pos = pos;
    }

    function length() {
        return this.listSize;
    }


    function getElement() {
        return this.dataStore[this.pos];
    }

    function contains(elem) {
        if (this.dataStore.indexOf) {
            return this.dataStore.indexOf(elem) > -1;
        } else {
            for (var i = 0, l = this.dataStore.length; i < l; i++) {
                if (this.dataStore[i] === elem) {
                    return true;
                }
            }
            return false;
        }
    }


})();









