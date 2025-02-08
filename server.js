const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('/Users/soham/Desktop/Time Pass/hospital_management/routes/patients');
const doctorsRouter = require('/Users/soham/Desktop/Time Pass/hospital_management/routes/doctors.js');
const appointmentsRouter = require('/Users/soham/Desktop/Time Pass/hospital_management/routes/appointments'); // Fixed variable name

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    'mongodb://localhost:27017/hospital',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const connection = mongoose.connection;
connection.once('open', () => {  // Fixed arrow function syntax
    console.log('MongoDB database connection established successfully');
});

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter); // Fixed variable name

app.listen(PORT, () => {  // Fixed arrow function syntax
    console.log(`Server is running on port ${PORT}`);
});
