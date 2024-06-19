const express = require('express');
const productRoutes = require('./Routes/productRoute');
const app = express();

// Middleware setup
app.use(express.json());


// product routes
app.use('/api', productRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
