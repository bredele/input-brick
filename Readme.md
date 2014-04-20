# wired

  Double way node element binding.

  Wired is a standalong library that works with **[brick](http://github.com/bredele/brickjs)** and **[wall](http://github.com/bredele/wall)** as well.
  
## Installation

with [component](http://github.com/component/component):

    $ component install bredele/wired

with [browserify](http://browserify.org):

    $ component install wired

## Standalone

```html
<input type="text" name="label">
```

  wired takes at least a node element and return a **[store](http://github.com/bredele/datastore)**:

```js
var live = wired(input);
live.on('change label', function() {
  // do something
});
```

  you can also choose wich store attribute will be updated on input:

```js
var live = wired(input, 'name');
live.on('change name', function() {
  // do something
});
```

 or inverse the control over your data (plain javascript object or [store](http://github.com/bredele/datastore)):

```js
var store = new Store({
  city: 'calgary'
});

wired(input, 'city', store);

input.value;
// => calgary

store.on('change city', function() {
  // do something
});
```
<!--  
## Brick
## Wal -->

## License

  The MIT License (MIT)

  Copyright (c) 2014 <olivier.wietrich@gmail.com> Olivier Wietrich

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.