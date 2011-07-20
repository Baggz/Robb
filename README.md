# Robb

Robb is simple type checker in JavaScript. It was originally designed for use with [Node.js](http://nodejs.org/), but you can use it also in the browser.

## Example

```javascript
Robb.isNuber( 123 ); // => true
Robb.isArray( [1, 2, 3] ); // => true
Robb.isBoolean( false ); // => true
Robb.isEmail( 'hello@example.com' ); // => true
Robb.isEmail( 'hello1@example.com', 'hello2@example.com' ); // => true
```

## Download

To install **Robb**, use [NPM](http://npmjs.org/).

```
$ npm install robb
```

Releases are available for download from GitHub.

* [**Development** (10 KB uncompressed)](https://github.com/downloads/Baggz/Robb/robb.js)
* [**Production** (1.27 KB compressed and gzipped)](https://github.com/downloads/Baggz/Robb/robb.min.js)

# Methods

* isAlpha
* isAlphanumeric
* isArguments
* isArray
* isBoolean
* isDate
* isDecimal
* isDefined
* isElement
* isEmail
* isEmpty
* isEven
* isFunction
* isInt
* isIp
* isLowercase
* isNegative
* isNull
* isNumber
* isObject
* isOdd
* isPercentage
* isPositive
* isPrime
* isRegExp
* isString
* isUndefined
* isUnsignedInt
* isUppercase
* isUrl
* isWindow

# Running Tests

```
$ nodeunit tests/
```

# License

(The MIT License)

Copyright (c) 2011 František Hába &lt;hello@frantisekhaba.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.