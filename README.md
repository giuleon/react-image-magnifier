# react-image-magnifier-lens
An image magnifier control built with [TypeScript](https://www.typescriptlang.org) for [React](https://facebook.github.io/react) based on [react-image-magnifier](https://github.com/lelandrichardson/react-image-magnifier).

![demo-gif](https://raw.githubusercontent.com/giuleon/react-image-magnifier/HEAD/assets/demo.gif)

[![npm version](https://badge.fury.io/js/react-image-magnifier-lens.svg)](https://badge.fury.io/js/react-image-magnifier-lens)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/giuleon/react-image-magnifier/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](Readme.md#want-to-contribute)

[![NPM](https://nodei.co/npm/react-image-magnifier-lens.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-image-magnifier-lens/)

## Features
- Allow to magnify an image through a lens.

## Installation
Steps to use react-image-magnifier-lens in your React project
### 1.Install from NPM
```
npm install --save react-image-magnifier-lens
```

### 2. Import and use in your application
```
import ImageMagnifierLens from "react-image-magnifier-lens";
```

### 3. Usage
```js
<ImageMagnifierLens
    image={{
        src: "./src/img/world-map-small.jpg",
        width: 400,
        height: 300
    }}
    zoomImage={{
        src: "./src/img/world-map-large.jpg",
        width: 1600,
        height: 1200
    }}
    cursorOffset={{ x: 80, y: -80 }}
    size={ 200 }
/>
```
## Properties

| Prop | Required | Default  | Type | Description |
| :------------ |:---:|:---------------:| :---------------| :-----|
| `image` | YES | | `{ src, width, height }` | the src, size of the non-zoomed-in image |
| `zoomImage` | YES | | `{ src, width, height }` | the src, size of the zoomed-in image |
| `cursorOffset` | NO | `{ x: 0, y: 0 }` | `{ x, y }` | the offset of the zoom bubble from the cursor |
| `size` | NO | `200` | `Number` | the size of the magnifier window |

## Want to contribute?
Anyone can help make this project better


## License
MIT License

Copyright (c) 2017 Giuliano De Luca (http://www.delucagiuliano.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.