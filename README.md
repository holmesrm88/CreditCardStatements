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
  name: 'Netflix',
  date: '2019/01/01',
  amount: 9.99,
  user: 'John Patterson'
},
// ...
{
  name: 'Spotify',
  date: '2019/12/01',
  amount: 12.99,
  user: 'John Patterson'
}]
```

#### Outputs
An object containing:
* Key - The name of the charge
* Value - The number of times a charge with the respective name showed up on the statement

*Example Format:*
```javascript
{
  Spotify: 12,
  Netflix: 4
}
```
