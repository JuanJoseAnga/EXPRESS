
const express=require('express');
const app=express();
const port = 3005;

app.use(express.json());

app.get('', (req,res)=>{

    res.send('HELLOW'+
    '<br>'+
    '<a href=about><h1>WELCOME</h1></a>'
    +'<br>'+
    '<a href=gastos><h1>Gastos</h1></a>');

})


app.listen(port, ()=>{
console.log('Servidor escuchando en el puerto ' + port);
})


app.get('/about', (req,res)=>{
    res.send('<h1>WELCOME</h1>');
});
   

app.get('/gastos', (req,res)=>{
    res.json(
    {
        gasto:'EDUCACION',
        monto:14575.60,
        informacion:'Corresponde a los gastos de pensiones en instituciones educativas, '
    }
    );
});


app.post('/calculo', (req,res)=>{
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});


app.post('/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});


app.put('/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos modificados del usuario: '+req.params.id);
});


app.delete('/usuarios/:id',(req, res)=>{
    res.send('Usuario '+ req.params.id +' borrado');
});

app.get('/usuarios', (req,res)=>{
    res.json(
        [{
            nombre:"Edgar",
            ci:1001515848001,
            apellido:"Angamarca"
        },
        {
            nombre:"Danilo",
            ci:1751065754001,
            apellido:"Casa"
        }
        ]
        );
});

app.put('/gastos/:id', (req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos modificados de los gastos: '+req.params.id);
});

app.delete('/gastos/:id', (req,res)=>{
    res.send('Datos eliminados de los gastos: '+req.params.id);
});
       
   
  