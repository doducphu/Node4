// const express = require('express');
// const app = express();

// app.get('/', (req, res)=>{
//     res.send({
//         name: 'Phú',
//         age: '21'
//     });
// });
// app.listen(3000,(req, res)=>{
//     console.log("listening on port 3000");
// }); //localhost:3000|| 127.0.0.1:3000
book = [
    {id:"96xx123",name:"x1023", price: 12},
    {id:"96xx133",name:"y314", price: 16},
    {id:"96xx143",name:"c32124", price: 10},
    {id:"96xx135",name:"x645223", price: 16},
    {id:"96xx146",name:"d84231", price: 13}
]
function findbookflprice(a,b){
    for(var i = 0; i <= book.length; i++){
        if(book[i].price>=a && book[i].price<=b){
            console.log(book[i]) ;
        }
        else 
            continue ;
    }
}
function sortname(){
    for(var i = 0; i <= book.length; i++){
        var namelength = 0; 
            if(book[i].name.length > namelength){
                book[i].name.length = namelength;
                console.log(book[i].name.length)
            
        
    }
}
}
function findsimilarname(){
    for(var i = 0; i <= book.length; i++){
        if(book[i].name.toLowerCase()==a.toLowerCase() || book[i].name.trim()==a.trim() ){
            console.log(book[i]) ;
        }
        else 
            continue ;
    }
}
function findbestprice(){
    var maxprice = 0;
    for(var i = 0; i <= book.length; i++){
        if(book[i].price<maxprice){
            maxprice = book[i].price;
        }
        else return book[i].id;
    }
}
console.log(findbestprice());
sortname();
// findsimilarname("     d84");
// findbookflprice(15,20);
