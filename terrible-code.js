// Intentionally bad code for testing code review agents

function calculateStuff(a,b,c) {
    var result = a+b*c;  // No spaces around operators, var instead of const/let
    return result
}

// Unused variable
let unusedVariable = "I serve no purpose";

// Function with inconsistent naming
function DoSomethingWeird(input) {
    if(input == "5") {  // Using == instead of ===
        return true
    }
    else {
        return false;  // Could just return input === "5"
    }
}

// Memory leak potential - no cleanup
let intervals = [];
function startTimers() {
    for(var i=0;i<10;i++) {  // var in loop creates closure issues
        intervals.push(setInterval(function() {
            console.log(i);  // Will always log 10
        }, 1000));
    }
}

// SQL injection vulnerability
function getUser(userId) {
    const query = "SELECT * FROM users WHERE id = " + userId;  // Direct concatenation
    // database.query(query);
    return query;
}

// Deeply nested code
function processData(data) {
    if (data) {
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == 'important') {
                    if (data[i].value) {
                        if (data[i].value > 100) {
                            console.log("Found it!");
                            return data[i];
                        }
                    }
                }
            }
        }
    }
}

// Magic numbers everywhere
function calculatePrice(quantity) {
    if (quantity > 50) {
        return quantity * 9.99 * 0.85;  // What are these numbers?
    } else if (quantity > 20) {
        return quantity * 9.99 * 0.92;
    }
    return quantity * 9.99;
}

// No error handling
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();  // What if response isn't OK?
    return data;
}

// Global variable pollution
globalConfig = {  // No var/let/const
    apiKey: "sk-12345678",  // Hardcoded sensitive data
    password: "admin123"
};

// Confusing function that does too many things
function doEverything(user, product, order) {
    // Update user
    user.lastActive = new Date();
    user.purchases++;
    
    // Calculate discount
    let discount = 0;
    if (user.purchases > 10) discount = 0.1;
    if (user.purchases > 50) discount = 0.2;
    
    // Process order
    order.total = product.price * order.quantity;
    order.discount = discount;
    order.finalPrice = order.total * (1 - discount);
    
    // Log everything
    console.log(user);
    console.log(product);
    console.log(order);
    
    // Send email (fake)
    // sendEmail(user.email, "Order confirmed");
    
    return true;  // What does true mean here?
}

// Race condition potential
let counter = 0;
async function incrementCounter() {
    const current = counter;
    await new Promise(resolve => setTimeout(resolve, 10));
    counter = current + 1;  // Race condition if called multiple times
}

// Inconsistent code style
function   badFormatting(  param1,param2   )
{
if(param1>param2)
return param1
else
    return param2
}

module.exports = { calculateStuff, DoSomethingWeird };  // Inconsistent exports