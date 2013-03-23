
# for-in

  Iterate an object

## Installation

    $ component install kewah/for-in

## API

```javascript
var forIn = require('for-in');

var lang = {
  fr: 'bonjour',
  en: 'hello',
  se: 'hej',
  de: 'hallo'
};

forIn(lang, function(value, key) {
  console.log(key, ':', value);

  if ('se' === key) {
    return false;
  }
});

>> fr : bonjour
>> en : hello
>> se : hej
```

## License

  MIT
