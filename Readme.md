## Answer to the Question No. 1

getElementById : it selects a single element that matches the id and return a the single element if found and if it is not found then it returns null.<br>

getElementsByClassName: it selects all the element at once that matches the class and return a html collection and if it is not found, it returns an empty html collection

querySelector: it selects the first element in the document that matches with the provided CSS Selector and returns the html element and if it is not found, it returns null.

querySelectorAll: it selects the all element in the document that matches with the provided CSS Selector and returns a nodelist and if it is not found, it returns an empty nodelist.

## Answer to the Question No. 2

first create the element we want to insert like I want to insert a div into the body <br>
const text = document.createElement("p");

then add content if needed<br>
text.innerText = "Hello this is Farhan"; 

then insert into the body<br>
document.body.appendChild(text);

