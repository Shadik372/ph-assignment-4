console.log('Connected');
document.getElementById("interview-filter").addEventListener("click", function(){
    window.location.href = "interview.html";
});
document.getElementById("rejected-filter").addEventListener("click", function(){
    window.location.href = "rejected.html";
});
document.getElementById("all-filter").addEventListener("click", function(){
    window.location.href = "index.html";
});
