# input-brick

  [Brick](https://github.com/bredele/brick) plugin to set model values on input.
  
## Installation

with [component](http://github.com/component/component):

    $ component install bredele/input-brick

with [nodejs](http://nodejs.org):

    $ component install input-brick

## Usage

First, add the plugin to your view (see [brick](https://github.com/bredele/brick) to know more about views):

```js
view.add('model', require('input-brick'));
```

## Basic


```html
<input type="text" model="name">
```

  Set `name` (```view.get('name')```) on input.

see [live example](https://github.com/bredele/input-brick/tree/master/example)


## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

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