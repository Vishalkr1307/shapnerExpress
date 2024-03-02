const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(t) {
    this.product = t;
  }
  save() {
    const newPath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "product.json"
    );
    fs.readFile(newPath, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      let product = [];
      try {
        product = JSON.parse(data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
      product.push(this);
      fs.writeFile(newPath, JSON.stringify(product), (err) => {
        if (err) {
          console.error("Error writing file:", err);
        } else {
          console.log("Product saved successfully.");
        }
      });
    });
  }
  static fetchAll(cb) {
    const newPath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "product.json"
    );
    fs.readFile(newPath, (err, data) => {
      if (err) {
        cb([]);
        return;
      }
      try {
        const products = JSON.parse(data);
        cb(products);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        cb([]);
      }
    });
  }
};
