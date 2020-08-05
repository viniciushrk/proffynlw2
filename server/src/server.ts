import express from 'express';

const app = express();

app.use(express.json());

app.get('/',(request,response)=>{
    console.log('acessou'); 
    return response.json({msg:"top"})
});

app.post('/users',(request,response)=>{
    console.log(request.body)
    console.log('acessou'); 
    return response.json({'msg':"top"})
});

app.listen(3333);

