
### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

### Answer:

`getElementById()`: selects a single element using its unique ID and returns one element. On the other hand,

`getElementsByClassName()`: selects multiple elements with the same class name and returns a live HTMLCollection.

`querySelector()`: selects the first element that matches a CSS selector. On the other hand,

`querySelectorAll()`: selects all matching elements and returns a static NodeList. The main difference is that query selectors are more flexible because they support full CSS selector syntax.

---

### 2. How do you create and insert a new element into the DOM?

### Answer:

I can create a new element using `document.createElement()`. After creating it, I can add content using `innerText` or `innerHTML`, and then insert it into the DOM using methods like `appendChild()`, `append()`, or `prepend()`. For example, create a `div`, set its text, and append it to a container element. This allows dynamic content updates without reloading the page.

---

### 3. What is Event Bubbling? And how does it work?

### Answer:

Event bubbling is a behavior in JavaScript where an event starts from the target element and bubbles up to its parent elements in the DOM hierarchy. For example, if I click a button inside a div, the click event first triggers on the button and then on the div. This continues up to the document level unless stopped. It allows parent elements to respond to events triggered by their children.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

### Answer:

Event delegation is a technique where I attach a single event listener to a parent element instead of adding listeners to multiple child elements. It works because of event bubbling, allowing the parent to detect events from its children. This way improves performance and reduces memory usage. It is especially useful when dynamically adding elements to the DOM.

---

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

### Answer:

`preventDefault()`: It stops the browser’s default behavior for an event, such as preventing a form from submitting or a link from navigating.

`stopPropagation()`: It prevents the event from bubbling up to parent elements.

So the main difference is, `preventDefault()` controls browser behavior, while `stopPropagation()` controls event flow in the DOM. They are often used together when handling events.
