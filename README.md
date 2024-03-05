# CFGAssignment1

JS Assignment for CFG Degree

[Live Preview](https://digimori.github.io/CFGFoundationData1/)

Technologies used:

- HTML
- CSS
- JavaScript

## Theory Questions:

### 2.1

1. Define unshift(), shift() and split().
2. Using the topic of “CFGdegree”, provide an example of unshift(), shift() and
   split(). (E.g.The theme could be the different CFGdegree streams.)

- unshift(): Adding elements to the front of an array, for example:

```

const dataStreams = ["Software", "Data", "Full-Stack"];

const unshifting = dataStreams.unshift('Product Management');
console.log(dataStreams);

The output for this array would now be: "Product Management", "Software", "Data", "Full-Stack"

```

- shift(): Removing an element from front of an array, for example:

```
const dataStreams = ["Product Management", "Software", "Data", "Full-Stack"];

const shifting = dataStreams.shift();
console.log(dataStreams);

The output for this array would now be: "Software", "Data", "Full-Stack"
If we were to also log the value of the 'shifting' variable, the value that was shifted off of the array is now stored:
console.log(shifting); // Output would be "Product Management"

```

- split(): Takes a pattern, ie an array and divides the string up into an ordered list of substrings by matching patterns.
  It then pushes these substrings onto an array and returns the array values. For example:

```
const cfgDegree = 'Your gateway to a career into tech';
const splitWords = cfgDegree.split(' ');
console.log(splitWords[4]);

// The expected output here would be: 'career';
// This is because it is looking for each instance in where there is a space in the string.
```

If you wanted to use the same method to find the index of say, a letter in the string:

```
const letters = cfgDegree.split('');
console.log(letters[10]);
// The output would be 'e' as that is at index 10 in the string and the pattern we are looking for is no spaces.
// Spaces will be skipped as if reading the string as 'Yourgatewaytoacareerintotech';
```

This can also be demonstrated as a straight copy by passing no parameters for a pattern at all. For example:

```
const cfgDegreeCopy = cfgDegree.split()
console.log(cefDegreeCopy);
// Expected output will state the datatype for this too so:
// Array: ["Your gateway to a career into tech"];
```

### 2.2.

1. Define object methods:
   A JavaScript method is an action that can be called on an object with a method being a property that contains a function definition. Everything in JavaScript is an object and as such means that almost everything can have a method called on it.

2. Using the topic of “Programming Languages”, create a new object and object
   methods.

```
const programmingLanguages = {
  type: 'Procedural',
  languages: ['BASIC', 'C', 'C++', 'Java', 'Pascal'],
}

// We can further expand this by turning it into an array of objects to store multiple versions with the same keys:

const programmingLanguagesArr = [{
  type: 'Functional',
  languages: ['Scala', 'F#', 'Haskell','Erlang', 'Elixir'],
},
{
  type: 'Object-oriented programming (OOP)',
  languages: ['Java', 'PHP', 'Python', 'C++', 'Ruby'],
},
{
  type: 'Scripting',
  languages: ['PHP', 'Ruby', 'Python', 'bash', 'Perl', 'Node.js'],
},
{
  type: 'Logic',
  languages: ['Prolog','Absys', 'Datalog', 'Alma-0'],
}]
```

[Lists above used for object example provided by Coursera](https://www.coursera.org/articles/types-programming-language)

Object methods are used to access the keys and their subsequent values in an object. This isn't limited to the examples above as technically everything in JavaScript is an object.
For example:

```
console.log(programmingLanguagesArr[0].type);
// The expected output for this would be 'Procedural' as we've accessed the programmingLanguagesArr

// We can update the value in this key-value pair by doing the following:
programmingLanguagesArr[0].type = 'Changed';
console.log(programmingLanguagesArr[0].type) // Expected output would now be 'Changed';

// We can also do the same with the arrays:
console.log(programmingLanguagesArr[2].languages);
// This will return the entire 3rd array with the key 'languages'.
// ["PHP","Ruby","Python","bash","Perl","Node.js"]

To update a value in this array:
programmingLanguagesArr[2].languages[1] = 'Dialogue';
console.log(programmingLanguagesArr[2].languages);
// The array output would now be:
// ["PHP","Dialogue","Python","bash","Perl","Node.js"]


```

2.3.

1. Explain the onmouseover event:

- A mouseover event is an event that triggers when a mouse enters an element, such as rolling the cursor over a box or image or text on a webpage.
- This can be anything from alerts, activating functions and/or event listeners.
  An example of this being written as code would be a JavaScript function being called upon scrolling over an element:

```
In HTML:
<button id="btn">Button for Test</button>

In JavaScript:
let buttonScroll = document.querySelector("#btn");

function functionName() {
  // Do something here
}

btn.addEventListener("mouseover", functionName);

```

- Upon scrolling over the button that has been targeted above, the function (the second parameter of the addEventListener method), will be called to do whatever it has been programmed to do.

2. Explain two other DOM events of your choosing:

- keydown: A keydown event is an event that triggers such as an alert or function upon a certain key being pressed. This will fire on any key event regardless of if it produces a character or not.
  As an example:

```
let keyDownEvent;

function functionToBeRun() {
  // Do something
}

keyDownEvent.addEventListener("keydown", functionToBeRun);

// This example is going to run the functionToBeRun function upon the user pressing any key on their keyboard.

```

- input: Slightly different to keydown is the input event.
  The input event is an event that triggers upon input being taken from a user action such as clicking on a textbox or a checkbox/radio button (This is what makes it different to keydown and is often used for elements directly using the <input> tag.).
  For example:

```
  HTML:
  <h1 id="heading"></h1>
  <input placeholder="Type some text here" name="name" id="inputValue" />

JavaScript:
const h1Selector = document.querySelector("h1");
const inputBox = document.querySelector("#inputValue");

inputBox.addEventListener("input", updateHeading);

function updateHeading(e) {
h1Selector.textContent = e.target.value;
}
```

// The above will update the h1 tag's value from being blank (Or whatever you have chosen to write there initially) to what the user inputs in the <input> element field.
