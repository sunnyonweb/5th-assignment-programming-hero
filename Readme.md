1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer : getElementById is used for selecting a single element by 'id' id can only use one time same id can`t use multiple times.

getElementsByClassName is used for selecting multiple elements by giving them class name. and Multiple elements can have the same class.

querySelector is select the first elements that come first and it can select by id, class,tags,etc. And querySelectorAll is select all elements that math .


2. How do you **create and insert a new element into the DOM**?

Answer : const newElement = document.createElement('p');
newElement.innerText = "assignment is very hard";
container.appendChild(newElement);


3. What is **Event Bubbling** and how does it work?

Answer : When a event happen on a element and it first trigger the target elements then it bubbles up to its parent elements all the way up to doc.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer : Event Delegation is attach listener on a parent not on the children and use event bubbling to detect which child was clicked.and it help the code dynamic, clear and efficient.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer : Stops the default action of an element from happening like form submission button if you click on form button it will reload default and it stop it.