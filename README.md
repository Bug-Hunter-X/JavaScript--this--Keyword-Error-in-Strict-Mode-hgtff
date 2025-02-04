# JavaScript 'this' Keyword Bug

This repository demonstrates a common error related to the `this` keyword in JavaScript, particularly when using strict mode.

The `bug.js` file contains code that incorrectly uses `this` within a function that's not part of an object. In strict mode, `this` is undefined in such contexts, resulting in a runtime error.

The `bugSolution.js` file provides a corrected version, showcasing how to properly handle the `this` keyword to avoid this error.