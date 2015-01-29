KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('sicon', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/sicon/0.0.1/']});