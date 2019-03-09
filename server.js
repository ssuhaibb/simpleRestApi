const express = require("express");
const app = express();
const customers = require("./customers");
const bodyParser = require("body-parser");
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json(customers);
});

app.get('/:id' , (req,res)=>{
    let customer = customers.find(c=>c.id === parseInt(req.params.id));
    res.json(customer);
})

app.post('/', (req,res)=>{
    console.log(req.body);
    res.json(req.body)
})


app.put('/:id', (req,res)=>{
    let customer = customers.find(item => item.id === parseInt(req.params.id));
    customer.firstname = req.body.firstname;
    customer.age = req.body.age;
    customer.lastname = req.body.lastname;
    res.json(customer);
    console.log(customer)
})


app.delete('/:id', (req,res)=>{
    let customer = customers.find(item => item.id === parseInt(req.body.id));
    let index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.json(customers);
})




app.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT}`);
});
