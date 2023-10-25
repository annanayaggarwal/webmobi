const qr = require('qrcode');
let data = {
     "name":"annanay aggrwal",
     "email": "anni.agg2003@gmail.com",
     "gender": "male",
     "id":123456789
};
let stJson = JSON.stringify(data);

// SHOW QR CODE IN TERMINAL
// qr.toString(stJson,{type: "terminal"},function(err,code){
//     if(err){
//         console.log(err)
//     }
//     console.log(code)
// })



// SHOW THE DATA OF QRCODE IN BASE64 STRING
// qr.toDataURL(stJson,function(err,code){
//     if(err){
//         console.log(err)
//     }
//     console.log(code)
// });

qr.toFile("qr.png",stJson,function(err){
    if(err){
        console.log(err)
    }
   
});
