const express =require("express");
const path =require("path");
const app =express();
const port =3000;
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
//import loginRoute from routes
app.use("/Login",require("./Routes/LoginRoute"));
app.use("/register",require("./Routes/RegisterRoute"));
app.use("/style",require("./Routes/styleRoute"));
app.listen(port,()=>{console.log(`server running at http://localhost:${port}`);});