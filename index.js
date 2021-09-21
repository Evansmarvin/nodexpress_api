import express  from "express";
import bodyParser from 'body-parser';
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

//app.use(bodyParser.json());
app.use(express.json());

app.use('/users',usersRoutes);

//app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) =>{
    console.log('[TEST]!');
    res.send('Hello from homepage.');
});

//nodemon is a package used to make sure on automatic save , the server run happens rather than CTRL+C all the time to start/stop 
//the request sent to server

app.listen(PORT , () => console.log(`Server Running on port :http://localhost:${PORT}`));