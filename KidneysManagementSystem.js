const express = require("express");
const app = express();
const port = 3010;
const users = [{
name: "John",
age: "32",
kidneys: [{position: "Left", Health: false}, {position: "", Health: true}]
}]


app.get("/", function(req, res){
console.log("This is a hospital management app");
const JohnKidneys = users[0].kidneys;
const NumberOfKidneys = JohnKidneys.length;
let NumberOfHealthyKidneysOfJohn = 0;
for(let i = 0; i<NumberOfKidneys; i++){
let kids = JohnKidneys[i].Health;
if(kids ){NumberOfHealthyKidneysOfJohn=NumberOfHealthyKidneysOfJohn+1;}
}
let badkidneys = NumberOfKidneys-NumberOfHealthyKidneysOfJohn;
res.json({
a: NumberOfKidneys,
b: NumberOfHealthyKidneysOfJohn,
numberOfBadKidneyssss : badkidneys,
c: users[0].name
});
});

//Next line is for using the body in the post request
app.use(express.json());


app.post("/", function (req,res){
const ThingToDo = req.body.isHealthy;
users[0].kidneys.push({
position: "Middle lol",
Health: ThingToDo
});
res.send("New Kidney ++++");
});

app.put("/", function(req, res){
const JohnKidneys2 = users[0].kidneys;
const NumberOfKidneys1 = JohnKidneys2.length;
for(let i = 0; i<NumberOfKidneys1; i++){
JohnKidneys2[i].Health = true;
}
res.json();
});


app.delete("/", function(req,res){
    const newkeineys= [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].Health){
            newkeineys.push(users[0].kidneys[i]);
        }
    }
    users[0].kidneys=newkeineys;
    res.send("Bad Kidneys Removed");
})
app.listen(port);
