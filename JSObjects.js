var obj1 = new Object(); 
//Duck-Typing 
obj1.Id = 100; 
console.log(`Obj.Id: ${obj1.Id}` )
console.log(`Obj.id: ${obj1.id}` )
obj1.Name ="ABB"; 
obj1.Location="Bangalore"; 
console.log("Object details: ", obj1)
console.log("Using array notation: ")
obj1["last seen"] = new Date(2020, 0, 1); 
console.log(obj1["last seen"]);
//get a list of properties on an object
for(let prop in obj1) {
    console.log(`obj1["${prop}"] == ${obj1[prop]}`)
}
var obj2 = { 
    id: 10, 
    name: 'Sample', 
    location: 'Mumbai'
}; 
obj2.state = 'MAH';
console.log(obj2)
var obj3 = {
    id: 10, 
    name: 'Sample', 
    show: function() { console.log(this.id, this.name);}
}
obj3.show();

//ES5 
//Constructor function
function Product(productId, productName) { 
    this.productId = productId; 
    this.productName = productName; 
}
Product.prototype = { 
    getProductId: function() { return this.productId;},
    setProductId: function(value) { this.productId=value},
    getProductName: function() { return this.productName;},
    setProductName: function(value) { this.productName=value},
    showDetails: function() { 
        console.log(`Product Id: ${this.productId}, Name: ${this.productName}`);
    }
}
var p1 = new Product(101, 'White boards');
console.log(p1.productId, p1.productName)
var p2 = new Product(102, "Whiteboard Markers");
console.log(p2)
p2.setProductId(100); 
p2.setProductName("New Value assigned"); 
p2.showDetails();

//ES6 
class Author {
    //only one constructor allowed per class 
    constructor(authorId, firstName, lastName) {
        this.authorId=authorId; 
        this.firstName=firstName;
        this.lastName = lastName;
    }
    address = ""; 
    //Properties 
    get Address() { return this.address; }
    set Address(value) { this.address=value};
    show() { 
        console.log(`Id:${this.authorId}, Name: ${this.firstName} ${this.lastName}`)
        console.log(`Address: ${this.address}`);
    }
}
var author1 = new Author(1, 'FirstName', 'LastName'); 
author1.Address = "New Address"; 
author1.show();

// JSON - JavaScript Object Notation
var jsonString = JSON.stringify(author1); 
console.log(jsonString)
var newAuthor = JSON.parse(jsonString);
author1.Address = 'Address changed';
console.log(author1);
console.log(newAuthor);


