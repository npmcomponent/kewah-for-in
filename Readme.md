*This repository is a mirror of the [component](http://component.io) module [kewah/for-in](http://github.com/kewah/for-in). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kewah-for-in`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# for-in

  Iterates an object

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
