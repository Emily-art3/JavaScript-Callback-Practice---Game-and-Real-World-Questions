function trackInteraction(action, callback){
    setTimeout(()=>{
let u = `user has ${action}`
callback(u)
}, 3000)
}

trackInteraction("clicked", function(data) {
    console.log(data); // Expected: "User clicked on button"
});
trackInteraction("viewed page", function(data) {
    console.log(data); // Expected: "User viewed the page"
});
    
trackInteraction("clicked", function(data) {
    console.log(data); // Expected: "User clicked on button"
});
trackInteraction("viewed page", function(data) {
    console.log(data); // Expected: "User viewed the page"
});