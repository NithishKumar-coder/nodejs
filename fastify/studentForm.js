 const path=require('path');
 const fastify=require('fastify')();
 const ejs = require('ejs');
const jsonParser=require('fast-json-body')
const qs=require('qs')
const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'nithishNK@86808',
    database:"node_crud"
});
con.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
    }); 

    
    fastify.register(require('point-of-view'), {
        engine: {
          ejs: require('ejs')
        }
        
      })
       
      fastify.get('/', (req, reply) => {
        reply.view('ex.ejs')
      })
 
       
      
fastify.addContentTypeParser('application/jsoff',(req,done)=>{
  jsonParser(req,(err,body)=>{
    done(err,body)
  })
})  
fastify.addContentTypeParser('application/x-www-form-urlencoded',(req,done)=>{
  var body=''
  req.on('data',function(data){
    body+=data
  })
  req.on('end',function(){
    try{
      const parsed=qs.parse(body)
      done(null,parsed)
    }catch(e){
      done(e)
    }
    })
    req.on('error',done)
  })

fastify.post('/save',(req,res)=>{
  let data = {name: req.body.name, email: req.body.email, phone_no: req.body.phone_no};
  let sql="INSERT INTO users SET ?";
  let query=con.query(sql,data,(err,results)=>{
    if (err) throw err;
    res.redirect('/')
  })
})
fastify.get('/view',(req,res)=>{
  let sql = "SELECT * FROM users";
  let query = con.query(sql, (err, rows) => {
  if(err) throw err;
  res.view('ex1.ejs', {
  title : 'STUDENT FORM',
  users : rows
  });
  });
  });

  fastify.listen(3000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
  })
