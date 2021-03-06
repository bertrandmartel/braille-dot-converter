# Braille Dot Converter

[![Build Status](https://travis-ci.org/bertrandmartel/braille-dot-converter.svg?branch=master)](https://travis-ci.org/bertrandmartel/braille-dot-converter)
[![License](http://img.shields.io/:license-mit-blue.svg)](LICENSE.md)

React application converting braille pattern to binary/hex easily, bit index is also configurable

### [Live Application](https://bertrandmartel.github.io/braille-dot-converter)

[![screenshot](https://user-images.githubusercontent.com/5183022/46512525-b8eabe00-c854-11e8-985a-124f45a4853e.png)](http://bertrandmartel.github.io/braille-dot-converter)

This project was initially created to easily find all [Braille unicode pattern](http://www.unicode.org/charts/PDF/U2800.pdf) to use for [Metec Braille line 20 cell](http://web.metec-ag.de/downloads/braille-line-20cell.pdf). This device uses piezo actuators technology to display Braille pattern. The official pin order 123456 is according to : 

![braille offical](https://user-images.githubusercontent.com/5183022/46512526-bbe5ae80-c854-11e8-90ef-85628c578fa5.png)

The bit order to command the Braille cell is not the same as the pin above, so bit index need to be changed. Also some Braille cell panels sometimes need to invert bits or XOR the bit sequence. This tool provide a graphical way to test each Braille pattern.

This project is using :

* [React](https://github.com/facebook/react)
* [Material UI](https://github.com/callemall/material-ui)

This project has been created using [create-react-app](https://github.com/facebookincubator/create-react-app)

## License

The MIT License (MIT) Copyright (c) 2018 Bertrand Martel