const client=require('mongodb').MongoClient;
client.connect('mongodb://localhost:27017/todo',(err,cl)=>{
  var db=cl.db('todo');
  if(err)
    return console.log('Unable to connect');
  console.log('connected To server');

db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch todos',err);
});
   cl.close();
})
