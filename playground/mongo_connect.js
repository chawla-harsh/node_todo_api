const client=require('mongodb').MongoClient;
client.connect('mongodb://localhost:27017/todo',(err,cl)=>{
  var db=cl.db('todo');
  if(err)
    return console.log('Unable to connect');
  console.log('connected To server');
  // db.collection('Todos').insertOne({
  //   text:'Do something',
  //   completed:false
  // },(err,res)=>{
  //   if(err)
  //     return console.log('Unable to Insert',err)
  //   console.log('Successfully Inserted')
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name:'Harsh',
    age:21,
    location:'Noida'
  },(err,res)=>{
    if(err)
        return console.log('Unable to Insert',err)
      console.log('Successfully Inserted')
      console.log(JSON.stringify(res.ops,undefined,2));
    })

   cl.close();
})
