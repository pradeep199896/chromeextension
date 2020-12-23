const fetch=require("node-fetch")
async function Cut()
{
    var result=await fetch("https://api.covid19api.com/summary")
    var data=await result.json()
    return data.Countries.length
   
}
Cut().then((data)=>{
    console.log( data)
}
)
//console.log(Cut())
module.exports={Cut}
