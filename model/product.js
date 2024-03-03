const path = require("path");
const fs = require("fs");
function getData(cb){
    const rootPath=path.join(path.dirname(process.mainModule.filename),'data','product.json');
    fs.readFile(rootPath, 'utf8',(err,data)=>{
        if(err){
            alert("Error reading")
        }
        try{
            const product = JSON.parse(data);
            cb(product)

        }
        catch(err){
            console.log('Error reading',err)
        }
    })

}
// getData()

module.exports = class Product {
  constructor(t) {
    this.product = t;
    this.id=Math.floor(Math.random()*1000+9000).toString();
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
  static fidById(id,cb){
    getData((item)=>{
        const serchItem=item.find((item)=>item.id==id)
        cb(serchItem)

    })

  }
};
