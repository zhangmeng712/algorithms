/**
 * Created by zhangmeng on 14/11/23.
 * Test Class List
 */
describe('List Tests', function () {

    var list = null;
    beforeEach(function(){
        list = new JDS.List();
        for (var i = 0; i < 10; i++) {
            list.append(i);
        }
    });

    it('append 0,1,2....9 element to list', function () {
        expect(list.listSize).toEqual(10);
        expect(list.toString()).toEqual('0,1,2,3,4,5,6,7,8,9');

    });


    it('find element in list', function () {
         expect(list.find(8)).toEqual(8);
         expect(list.find(3)).toEqual(3);
         expect(list.find(0)).toEqual(0);
         expect(list.find(110)).toEqual(-1);
    });


    it('insert element xx into list', function () {
        var pos = list.insert('xx', 3);
        var pos1 = list.insert('yy',10);
        var pos2 = list.insert('zz',0);
        expect(list.dataStore).toEqual([0,'zz',1,2,3,'xx',4,5,6,7,8,9, 'yy']);
    });

    it('remove element', function() {
        list.remove(3);
        expect(list.dataStore).toEqual([0,1,2,4,5,6,7,8,9]);
        expect(list.length()).toEqual(9);
    });

    it('get the front end element', function () {
        list.front();
        expect(list.getElement()).toEqual(0);
        list.end();
        expect(list.getElement()).toEqual(9);
        list.moveTo(4);
        expect(list.getElement()).toEqual(4);
    });


    it('contains or not in list', function () {
        expect(list.contains(4)).toEqual(true);
        expect(list.contains(100)).toEqual(false);
    });


    it('test iterator for the list', function () {
        var listNew = new JDS.List();
        for (list.front(); list.curPos() < list.length(); list.next()) {
            listNew.append(list.getElement() + 1);
        }
        expect(listNew.dataStore).toEqual([1,2,3,4,5,6,7,8,9,10]);

    });

});