# CFGAssignment1

JS Assignment for CFG Degree

[Live Preview]()

Technologies used:

- HTML
- CSS
- JavaScript

Requirements:

- Use boolean values and if..else statements to branch logic of your program
- Use a data structure like an array to store values
- Use a loop or a while loop to reduce repetition
- Use functions to make code reusable
- Use console.log and alert to display messages
- Use some HTML and CSS to create a basic website. Use at least 4 different HTML tags
  and style at least 2 of them. This does not need to look good! It is just a demo of what is
  covered.
- Get input from the user on a web page
- Make changes to the HTML or CSS using JavaScript
- Use an event to trigger a change to a web page

Theory Questions:
2.1
○ Define unshift(), shift() and split().
○ Using the topic of “CFGdegree”, provide an example of unshift(), shift() and
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

2.2.
○ Define object methods:

○ Using the topic of “Programming Languages”, create a new object and object
methods.

```
const programmingLanguages = {
  type: 'Procedural',
  languages: ['BASIC', 'C', 'C++', 'Java', 'Pascal'],
}

// We can further expand this by turning it into an array of objects to store multiple versions with the same keys:

const programmingLanguagesArr = [{
  type: '',
  languages: [''],
},
{
  type: '',
  languages: [''],
},
{
  type: '',
  languages: [''],
},
{
  type: '',
  languages: [''],
},]
```

Object methods are used to access the keys and their subsequent values in an object. This isn't limited to the examples above as technically everything in JavaScript is an object.

2.3.
○ Explain the onmouseover event

○ Explain two other DOM events of your choosing
