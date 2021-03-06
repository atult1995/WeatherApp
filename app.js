const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast')

const address=process.argv[2];
if(!address){
    console.log("Please provide address")
}else{
    geocode(address,(error,data)=>{
        if(error){
            return console.log(error)
        }
        forecast(data.lattitude,data.longitude,(error,data)=>{
            if(error){
                return console.log(error);
            }
            console.log("data:"+data)
        })
    })
}



