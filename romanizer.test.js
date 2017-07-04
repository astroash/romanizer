var test =  require ('tape');
var romanizer = require ('./romanizer.js')

test('Tape runs okay', function (t){
    t.equal(1,1,'one should equal one');
    t.end();
});

test ('Return strings', function(t){
  var actual = typeof romanizer(1);
  var expected = 'string';
  t.equal(actual,expected,'romanizer should return a string');
  t.end();

});

test('Romanizer returns a value', function(t){
  var actual = romanizer(1);
  var expected ='I';
  t.equal(actual,expected,'1 should output I');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(2);
  var expected ='II';
  t.equal(actual,expected,'2 should output II');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(3);
  var expected ='III';
  t.equal(actual,expected,'3 should output III');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(4);
  var expected ='IV';
  t.equal(actual,expected,'4 should output IV');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(5);
  var expected ='V';
  t.equal(actual,expected,'5 should output V');
  t.end();
});


test('Romanizer returns a value', function(t){
  var actual = romanizer(6);
  var expected ='VI';
  t.equal(actual,expected,'6 should output VI');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(9);
  var expected ='IX';
  t.equal(actual,expected,'9 should output IX');
  t.end();
});


test('Romanizer returns a value', function(t){
  var actual = romanizer(10);
  var expected ='X';
  t.equal(actual,expected,'10 should output X');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(20);
  var expected ='XX';
  t.equal(actual,expected,'20 should output XX');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(40);
  var expected ='XL';
  t.equal(actual,expected,'40 should output XL');
  t.end();
});

test('Romanizer returns a value', function(t){
  var actual = romanizer(102);
  var expected ='CII';
  t.equal(actual,expected,'102 should output CII');
  t.end();
});

test('Romans couldnt count past 5000', function(t){
  var actual = romanizer(5000);
  var expected ='Sorry the Roman\'s didn\'t count that well';
  t.equal(actual,expected,'Over 5000 should give an error message');
  t.end();
});

test('Romans couldnt count below 0', function(t){
  var actual = romanizer(-1);
  var expected ='Sorry the Roman\'s didn\'t count that well';
  t.equal(actual,expected,'-1 should give an error message');
  t.end();
});
