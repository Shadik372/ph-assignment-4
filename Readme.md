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

## Answer to the Question No. 3

When an event happens on an element, it first runs there, then moves up to its parent, then to parent's parent, and continues to go upward until it reaches top of the document

## Answer to the Question No. 4

Event delegation means adding one event listener to a parent element instead of adding many listeners to each child element. It is useful because it makes code simpler, and easier to understand.

## Answer to the Question No. 5
We use stopPropagation() to stop the event from moving upward to parent elements.

And, stop the browser’s default action for an event, we use preventDefault()

