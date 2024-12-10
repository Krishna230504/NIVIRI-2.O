const exp = require('express')
const app = exp()
const mysql = require('mysql');
const CORS = require('cors')

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Replace with your MySQL username
    password: 'root',       // Replace with your MySQL password
    database: 'test'    // Replace with your database name
  });
  
  // Connect to MySQL
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database.');
  });


app.use(exp.json())
app.use(CORS())

app.get('/',(req,res)=>{
    res.send("hi i am server.")
})

const locations = ['Hyderabad' , 'Banglore' , 'Kolkata' , 'Pune']

app.get('/locations',(req,res)=>{
    res.send(locations)
})

let appliances = ['TV', 'Refrigerator', 'Washing Machine', 'Heater'];

app.get('/appliances', (req, res) => {
    const queryName = req.query.name;
    console.log(queryName, appliances);

    if(!queryName)
    {
        res.send(appliances)
    }
    else
    {
        // Filter appliances based on the query.name
        let filteredAppliances = appliances.filter(appliance =>
            appliance.toLowerCase().startsWith(queryName?.toLowerCase())
        );

        res.send(filteredAppliances);
    }
});

users = []
technicitians = []

// Route to Create a User
app.post('/user-register', (req, res) => {
    const { userId, emailId, password } = req.body;
  
    if (!userId || !emailId || !password) {
      return res.status(400).send('Please provide userId, emailId, and password');
    }
  
    const query = 'INSERT INTO users (userId, emailId, password) VALUES (?, ?, ?)';
    db.query(query, [userId, emailId, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Failed to create user');
      }
      res.status(201).send('User created successfully');
    });
  });

// user login
app.post('/technicitian-register' , (req,res)=>{
    technicitians.push(req.body)
    res.send({"message":"user created" , success:true})
})

app.post('/user-login', (req, res) => {
    const { emailId, password } = req.body;

    if (!emailId) {
        return res.send({ message: 'Please send your emailId' });
    }

    if (!password) {
        return res.send({ message: 'Please send your password' });
    }

    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send({ message: 'Failed to fetch users' });
        }

        const user = results.find(user => user.emailId === emailId);

        if (!user) {
            return res.send({ message: 'Email ID does not exist' });
        }

        if (user.password === password) {
            return res.send({ message: 'Login success', success: true });
        } else {
            return res.send({ message: 'Invalid password' });
        }
    });
});


// technicitian login
app.post('/technicitian-register' , (req,res)=>{
    technicitians.push(req.body)
    res.send({"message":"user created" , success:true})
})

app.post('/technician-login', (req, res) => {
    const { emailId, password } = req.body;
    console.log(emailId,password)

    if (!emailId) {
        return res.send({ message: 'Please send your emailId' });
    }

    if (!password) {
        return res.send({ message: 'Please send your password' });
    }

    const query = 'SELECT * FROM technicians_login';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching technicians:', err);
            return res.status(500).send({ message: 'Failed to fetch users' });
        }

        const user = results.find(user => user.emailId === emailId);

        if (!user) {
            return res.send({ message: 'Email ID does not exist' });
        }

        if (user.password === password) {
            return res.send({ message: 'Login success', success: true });
        } else {
            return res.send({ message: 'Invalid password' });
        }
    });
});


//technician signup



app.listen(4000 , ()=>{console.log("Server running on PORT 4000 ...")})