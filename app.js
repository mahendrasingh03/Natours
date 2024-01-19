const express = require('express');
const morgan = require('morgan');
const app = express();

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

// MiddleWares
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req,res,next)=>{
    console.log('Hello From the middleWare👋');
    next();
});
app.use((req,res,next)=>{
    // console.log('Hello From the middleWare👋');
    req.requestTime = new Date().toISOString();
    next();
});


// 2) Route Handlers


// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id',getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

// 3) Routes



    app.use('/api/v1/tours',tourRouter);
    app.use('/api/v1/users',userRouter);


  // 4) Start the Server
module.exports = app;