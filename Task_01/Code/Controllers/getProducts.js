const axios = require('axios');

const urlBase = 'http://20.244.56.144/test/companies';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Nzc5Njg3LCJpYXQiOjE3MTg3NzkzODcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc5YWI2ZmQ2LWM2ZGItNDFiMi1iYmM5LWE4MThhOWY0MzhlYiIsInN1YiI6IjIxMDMwMzEwODI4NEBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJQYXJ1bCBVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiI3OWFiNmZkNi1jNmRiLTQxYjItYmJjOS1hODE4YTlmNDM4ZWIiLCJjbGllbnRTZWNyZXQiOiJPRWhVSll6aEZJc0xpaEh6Iiwib3duZXJOYW1lIjoiUGF0ZWwga3VsZGlwa3VtYXIgQXJ1bmJoYWkiLCJvd25lckVtYWlsIjoiMjEwMzAzMTA4Mjg0QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsInJvbGxObyI6IjIxMDMwMzEwODI4NCJ9.coVtGbZf5jWraa8-kPlQQfkEKUhivyzFZd_mTV7hCf4';
const headers = {
  Authorization: `Bearer ${token}`,
};

// Controller function to getProduct and sort based on Price products
const getProduct = async (req, res) => {
    try {
        const {companyname,categoriesname,top, minimumPrice, maximumPrice } = req.body;
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoriesname}/products?top=${top}&minPrice=${minimumPrice}&maxPrice=${maximumPrice}`, { headers });
        const products = response.data;
        // Sort products by price 
        products.sort((a, b) => a.price - b.price);
        res.json(products);
       
      } catch (error) {
        if (error.response) {
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(500).json({ error: error.message });
        }
      }
};


module.exports = {
  getProduct
};
