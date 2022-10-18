const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    res.send("<h1>carrito</h1><br><h1>te dejo un genial y fabuloso 404.    Denada bebe</h1>");
  });

  router.get("/:productoId", (req, res) => {
  
  });
  
  router.post("/", (req, res) => {
  
  });
  
  router.put("/:productoId", (req, res) => {
  
  });
  
  router.delete("/:productoId", (req, res) => {
      
  });

module.exports = router;

