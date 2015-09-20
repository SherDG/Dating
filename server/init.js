var nano = require('nano')('http://localhost:5984');

nano.db.create('test');

var db = nano.db.use('test');
// PROFILE
var users = {_id:'123456',
	users:[
{
name: 'Katia',
gender: 'F',
hobby: 'books',
avatar: 'images/avatar1.jpg',
},
{
name: 'Gena',
gender: 'M',
hobby: 'job',
avatar: 'images/avatar2.jpg',
},
{
name: 'Dima',
gender: 'M',
hobby: 'music',
avatar: 'images/avatar.jpg',
}
]};
db.insert(users, function(err, body){console.log(err)});

 db.insert(
  { "views": 
    { "by_name_and_city": 
      { "map": function(doc) { emit([doc.name, doc.city], doc._id); } } 
    }
  }, '_design/people', function (error, response) {
    console.log("yay");
  });

 db.insert({ name: 'Dima', cuty: 'Dnepr' }, function(err, body, header) {

 });