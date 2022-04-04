localScope();

if (typeof myVariable != "undefined") {

    console.log('outside localScope', myVariable)
} else {

    console.log('outside localScope UNDEFINED!!!')
    }


function localScope(){

    var myVariable = "I am here!";
    console.log(myVariable);
    
}

module.exports = localScope;
