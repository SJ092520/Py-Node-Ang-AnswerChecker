const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');


const userRouter = require("./routes/user.routes");
const departmentRouter = require("./routes/department.routes");
const studentRouter = require("./routes/student.routes");
const managementRouter = require("./routes/management.routes");
const courseRoutes = require("./routes/course.routes");

const errorLogger = require("./utils/errorLogger");

const app = express();

const MAX_UPLOAD_SIZE = '10mb';
app.use(cors());

app.use(bodyParser.json({limit:MAX_UPLOAD_SIZE}));
app.use(bodyParser.urlencoded({extended:true, limit:MAX_UPLOAD_SIZE}))
app.use('/user',userRouter);
app.use('/department',departmentRouter);
app.use('/student',studentRouter);
app.use('/course',courseRoutes);
app.use('/management',managementRouter);
app.use(errorLogger);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

