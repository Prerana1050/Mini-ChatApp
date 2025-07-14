const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
}).catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=([{
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at:new Date(),
},
{
    from:"tiya",
    to:"riya",
    msg:"send me your note sheets",
    created_at:new Date(),
},
{
    from:"ruhi",
    to:"ali",
    msg:"send me your xerox sheets",
    created_at:new Date(),
},
{
    from:"tina",
    to:"rinki",
    msg:"send me your cheat sheets",
    created_at:new Date(),
}
]);

Chat.insertMany(allChats);
