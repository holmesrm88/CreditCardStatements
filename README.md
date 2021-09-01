# Recurring Charges Exercise

## Summary

This application parses a list of charges on a credit card statement and returns which charges are recurring.

## Requirements
### Get Recurring Charges
* Return the number of charges for each merchant
  * Filter out one-time charges
* Return the charge amount of the recurring charge for each merchant

#### Inputs
An array of charges with the following attributes:
* `name` - A string that shows who the charge is coming from
* `date` - The date on which the charge occurred
* `amount` - The amount of money that the charge is for
* `user` - Who made the purchase

*Example Format:*

```javascript
[{
  name: 'Spotify',
  date: '2019/01/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2019/01/01',
  amount: 9.99,
  user: 'John Smith'
}, {
  name: 'Spotify',
  date: '2019/02/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2019/02/01',
  amount: 9.99,
  user: 'John Smith'
}, {
  name: 'Lou Malnati\'s',
  date: '2019/02/07',
  amount: 120.00,
  user: 'Tom Smith'
}, {
  name: 'Spotify',
  date: '2020/01/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2020/01/01',
  amount: 17.99,
  user: 'John Smith'
}, {
  name: 'HBO Max',
  date: '2020/01/01',
  amount: 7.99,
  user: 'Tom Smith'
}, {
  name: 'The New York Times Company',
  date: '2020/01/01',
  amount: 5.00,
  user: 'John Smith'
}, {
  name: 'Spotify',
  date: '2020/01/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2020/01/01',
  amount: 17.99,
  user: 'John Smith'
}, {
  name: 'HBO Max',
  date: '2020/01/01',
  amount: 7.99,
  user: 'Tom Smith'
}, {
  name: 'The New York Times Company',
  date: '2020/01/01',
  amount: 5.00,
  user: 'John Smith'
}]
```

#### Output
An object containing:
* Key - The name of the company
* Value - The number of times a charge from the company showed up on the statement

*Example Format:*
```javascript
{
  'Spotify': 4,
  'Netflix': 4,
  'HBO Max': 2,
  'The New York Times Company': 2
}
```

## JavaScript

[![Node Version](https://img.shields.io/badge/node-%3E%3D%2012.13.1-brightgreen)](https://nodejs.org/)


### Dependencies

* [NodeJS >= 12.13.1](https://nodejs.org/en/download/)
* [npm >=6.13.0](https://www.npmjs.com/get-npm)

### Setup

1. `cd javascript && npm install`

### Tests

Run `npm test` to run the test suite

## Java

### Dependencies

* Java 8
* [gradle](https://gradle.org/install/)

### Installation

* `cd java && gradle build`

### Tests

Run `gradle test` to run the test suite

## Python

### Dependencies

* Python 3
* [pip](https://pip.pypa.io/en/stable/installing/)

### Installation

* `pip install pipenv` (if you don't have pipenv)
* `cd python && pipenv install`

### Tests

Run `pipenv run python test.py` to run the test suite

## Ruby

### Installation

* `gem install bundler` (if you don't have bundler)
* `cd ruby && bundle install`

### Tests

Run `rspec` to run the test suite
