const express = require('express');
const port = 3000;
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: 'Divyalok Jaiswal',
        number: '9999999999'
    },
    {
        name: 'Uday Jaiswal',
        number: '5555555555'
    },
    {
        name: 'Luffy',
        number: '4204204201'
    }
];

app.get('/', function(req, res){
    return res.render('home', {
        contact_list: contactList
    });
});


app.post('/create-contact', function(req,res){
    contactList.push(req.body);
    return res.redirect('back');
});

app.get('/delete-contact/:number', function(req,res){
    console.log(req.params);
    let number = req.params.number;

    let contactIndex = contactList.findIndex(contact => contact.number == number);
    contactList.splice(contactIndex, 1);
    return res.redirect('back');
});

app.listen(port, function(err) {
    if(err)
    {
        console.log("Error Occured!");
        return;
    }
    console.log("Server is running @ port: ", port);
});
