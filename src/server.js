
const app=require("./index");
const connect=require("./configs/db")

app.listen(5000,async()=>{
    try {
        await connect();
        
    } catch (error) {
        console.log(error.message);
    }
    console.log("Listening at port 5000")
})