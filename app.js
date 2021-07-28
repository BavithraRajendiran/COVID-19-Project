require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//mongoose.connect("mongodb://localhost:27017/expoDB" , {useNewUrlParser:true , useUnifiedTopology:true});
mongoose.connect('mongodb+srv://admin-anvitha:test@123@cluster0.dwxvq.mongodb.net/ExposysDB' , {useNewUrlParser:true , useUnifiedTopology:true});

const expoSchema = new mongoose.Schema({
    userName:String,
    fatherName:String,
    email:String,
    phoneNo:Number,
    district:String,
    pinCode:Number,
    gender:String,
    aadharNo: {
        type:String,
        max:12
    }
});

const expoUser = mongoose.model("expoUser",expoSchema);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/',function(req,res){
    res.sendFile(__dirname + '/cor1.htm')
});


app.get("/LiveTracker",function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/globalCases',function(req,res){
    res.sendFile(__dirname + '/public/Cases.htm')
});

// Requests for Chennai

app.get('/Chennai' , function(req,res){
    res.sendFile(__dirname + '/public/cor4.htm')
});

app.get('/Royapuram',function(req,res){
    res.sendFile(__dirname  + '/public/c015.htm')
});

app.get('/AnnaNagar' , function(req,res){
    res.sendFile(__dirname + '/public/ch2.htm')
});

app.get('/Teynampet' , function(req,res){
    res.sendFile(__dirname + '/public/ch3.htm')
});

app.get('/Amimjikarai' , function(req,res){
    res.sendFile(__dirname + '/public/ch4.htm')
});

app.get('/Alandur' , function(req,res){
    res.sendFile(__dirname + '/public/ch5.htm')
});


// Requests for Coimbatore


app.get('/Coimbatore',function(req,res){
    res.sendFile(__dirname + '/public/cor10.htm')
});;

app.get('/Pollachi',function(req,res){
    res.sendFile(__dirname + '/public/coi1.htm')
});

app.get('/Ramanathapuram',function(req,res){
    res.sendFile(__dirname + '/public/coi2.htm')
});

app.get('/Vadamadurai',function(req,res){
    res.sendFile(__dirname + '/public/coi3.htm')
});

app.get('/Chinnayampalayam',function(req,res){
    res.sendFile(__dirname + '/public/coi4.htm')
});

app.get('/SaiBaba',function(req,res){
    res.sendFile(__dirname + '/public/coi5.htm')
});


// Requests for Trichy

app.get('/Trichy',function(req,res){
    res.sendFile(__dirname + '/public/cor12.htm')
});

app.get('/ThillaiNagar' , function(req,res){
    res.sendFile(__dirname + '/public/tri1.htm')
});

app.get('/Ariyamangalam' , function(req,res){
    res.sendFile(__dirname + '/public/tri2.htm')
});

app.get('/Devathanam' , function(req,res){
    res.sendFile(__dirname + '/public/tri3.htm')
});

app.get('/Manaparai' , function(req,res){
    res.sendFile(__dirname + '/public/tri4.htm')
});

app.get('/Pudur' , function(req,res){
    res.sendFile(__dirname + '/public/tri5.htm')
});


//Requests for Tuticorin


app.get('/Tuticorin' , function(req,res){
    res.sendFile(__dirname + '/public/cor8.htm')
});

app.get('/Kovilpatti' , function(req,res){
    res.sendFile(__dirname + '/public/tut1.htm')
});

app.get('/Millerpuram' , function(req,res){
    res.sendFile(__dirname + '/public/tut2.htm')
});

app.get('/Authoor' , function(req,res){
    res.sendFile(__dirname + '/public/tut3.htm')
});

app.get('/KandhasamyPuram' , function(req,res){
    res.sendFile(__dirname + '/public/tut4.htm')
});

app.get('/Periyanayagapuram' , function(req,res){
    res.sendFile(__dirname + '/public/tut5.htm')
});


// Requests for Madurai


app.get('/Madurai' , function(req,res){
    res.sendFile(__dirname + '/public/cor6.htm')
});

app.get('/Melamadai' , function(req,res){
    res.sendFile(__dirname + '/public/mad1.htm')
});

app.get('/AKPudur' , function(req,res){
    res.sendFile(__dirname + '/public/mad2.htm')
});

app.get('/Bharathipuram' , function(req,res){
    res.sendFile(__dirname + '/public/mad3.htm')
});

app.get('/Mattuthavani' , function(req,res){
    res.sendFile(__dirname + '/public/mad4.htm')
});

app.get('/Vaithiyanathapuram' , function(req,res){
    res.sendFile(__dirname + '/public/mad5.htm')
});



// Requests for Karnataka

// Requests for Bengaluru

app.get('/Bengaluru' , function(req,res){
    res.sendFile(__dirname + '/public/cor14.htm')
});

app.get('/Vishweshwarapura' , function(req,res){
    res.sendFile(__dirname + '/public/ba1.htm')
});

app.get('/Mathikere' , function(req,res){
    res.sendFile(__dirname + '/public/ba2.htm')
});

app.get('/Kambipura' , function(req,res){
    res.sendFile(__dirname + '/public/ba3.htm')
});

app.get('/Bommanahalli' , function(req,res){
    res.sendFile(__dirname + '/public/ba4.htm')
});

app.get('/WhiteField' , function(req,res){
    res.sendFile(__dirname + '/public/ba5.htm')
});


// Requests for KGF

app.get('/KGF' , function(req,res){
    res.sendFile(__dirname + '/public/cor16.htm')
});

app.get('/KuvempuNagar' , function(req,res){
    res.sendFile(__dirname + '/public/k1.htm')
});

app.get('/Tamaka' , function(req,res){
    res.sendFile(__dirname + '/public/k2.htm')
});

app.get('/Chaitanyapuram' , function(req,res){
    res.sendFile(__dirname + '/public/k3.htm')
});

app.get('/Malur' , function(req,res){
    res.sendFile(__dirname + '/public/k4.htm')
});

app.get('/FortArea' , function(req,res){
    res.sendFile(__dirname + '/public/k5.htm')
});


// Requests for Mysur


app.get('/Mysore' , function(req,res){
    res.sendFile(__dirname + '/public/cor18.htm')
});

app.get('/Chamarajapuram' , function(req,res){
    res.sendFile(__dirname + '/public/my.htm')
});

app.get('/Ashokapuram' , function(req,res){
    res.sendFile(__dirname + '/public/my2.htm')
});

app.get('/VaniVillasMohala' , function(req,res){
    res.sendFile(__dirname + '/public/my3.htm')
});

app.get('/SidharthaLayout' , function(req,res){
    res.sendFile(__dirname + '/public/my4.htm')
});

app.get('/Bannimantap' , function(req,res){
    res.sendFile(__dirname + '/public/my5.htm')
});


// Requests for Davanagree


app.get('/Devanagiri' , function(req,res){
    res.sendFile(__dirname + '/public/cor22.htm')
});

app.get('/Malebennur' , function(req,res){
    res.sendFile(__dirname + '/public/dev1.htm')
});

app.get('/Davanagere' , function(req,res){
    res.sendFile(__dirname + '/public/dev2.htm')
});

app.get('/ShriRamanagara' , function(req,res){
    res.sendFile(__dirname + '/public/dev3.htm')
});

app.get('/Davanagere1' , function(req,res){
    res.sendFile(__dirname + '/public/dev4.htm')
});

app.get('/JayachamarajaWodeyar' , function(req,res){
    res.sendFile(__dirname + '/public/dev5.htm')
});


// Requests for Udupi


app.get('/Udupi' , function(req,res){
    res.sendFile(__dirname + '/public/cor20.htm')
});

app.get('/Brahmagiri' , function(req,res){
    res.sendFile(__dirname + '/public/ud1.htm')
});

app.get('/Ambalpadi' , function(req,res){
    res.sendFile(__dirname + '/public/ud2.htm')
});

app.get('/Manipal' , function(req,res){
    res.sendFile(__dirname + '/public/ud3.htm')
});

app.get('/Bramavara' , function(req,res){
    res.sendFile(__dirname + '/public/ud4.htm')
});

app.get('/Chitpady' , function(req,res){
    res.sendFile(__dirname + '/public/ud5.htm')
});










app.post('/register',function(req,res){
    
    const newExpoUser = new expoUser({
        userName:req.body.uname,
        fatherName:req.body.fname,
        email:req.body.email,
        phoneNo:req.body.phone,
        district:req.body.district,
        pinCode:req.body.pincode,
        gender:req.body.gender,
        aadharNo:req.body.aadhar

    });

    newExpoUser.save(function(err){
        if(err){
            console.log(err)
            res.sendFile(__dirname + '/failure.html')
        }else{
            res.sendFile(__dirname + '/success.html')
            
        }
    });
});

app.post('/success', function(req,res){
    res.redirect('/');
});

app.post('/failure',function(req,res){
    res.redirect('/')
});

let port = process.env.PORT;
if(port == null | port == ""){
    port = 8000;
}

app.listen(port,function(){
    console.log("Port has started Corona Final!!")
})
