function getNumbers(str) {
  let numbers = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers.push(parseInt(str[i]));
    }
  }
  return numbers;
}

function findTypes(...args) {
  let result = {};
  for (let i = 0; i < args.length; i++) {
    switch (typeof args[i]) {
      case 'number':
        if ('number' in result) {
          result.number++;
        } else {
          result.number = 1;
        }
        break;
      case 'string':
        if ('string' in result) {
          result.string++;
        } else {
          result.string = 1;
        }
        break;
      case 'boolean':
        if ('string' in result) {
          result.boolean++;
        } else {
          result.boolean = 1;
        }
        break;
      case 'function':
        if ('function' in result) {
          result.function++;
        } else {
          result.function = 1;
        }
        break;
      case 'object':
        if ('object' in result) {
          result.object++;
        } else {
          result.object = 1;
        }
        break;
      case 'symbol':
        if ('symbol' in result) {
          result.symbol++;
        } else {
          result.symbol = 1;
        }
        break;
      case 'undefined':
        if ('undefined' in result) {
          result.undefined++;
        } else {
          result.undefined = 1;
        }
        break;
      default:
        break;
    }
  }
  return result;
}

function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function mapArray(arr, func) {
  let result = [];
  executeforEach(arr, function(el) {
    result.push(func(el));
  });
  return result;
}

function filterArray(arr, func) {
  let result = [];
  executeforEach(arr, function(el) {
    if (func(el)) {
      result.push(el);
    }
  });
  return result;
}

function showFormattedDate(inputDate) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  let year = inputDate.getFullYear();
  let month = months[inputDate.getMonth()];
  let date = inputDate.getDate();
  return `Date: ${month} ${date} ${year}`;
}

function canConvertToDate(inputDate) {
  return !isNaN(Date.parse(new Date(inputDate)));
}

function daysBetween(firstDate, secondDate) {
  let miliseconds = 1000;
  let seconds = 60;
  let minutes = 60;
  let hours = 24;
  return Math.round(
    Math.abs(firstDate - secondDate) / (miliseconds * seconds * minutes * hours)
  );
}

let peopleData = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    ' birthday ': '2016-03-18T00:00:00',
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple'
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    ' birthday ': '1991-02-11T00:00:00',
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry'
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    ' birthday ': '1984-04-17T00:00:00',
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple'
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    ' birthday ': '1994-04-17T00:00:00',
    eyeColor: 'green',
    name: 'George',
    favoriteFruit: 'banana'
  }
];

function getAmountOfAdultPeople(data) {
  let years = 18;
  let days = 365;
  let adults = filterArray(data, function(key) {
    if (daysBetween(Date.now(), new Date(key[' birthday '])) > days * years) {
      return true;
    }
  });
  return adults.length;
}

function keys(obj) {
  let result = [];
  for (let key in obj) {
    if (key) {
      result.push(key);
    }
  }
  return result;
}

function values(obj) {
  let result = [];
  for (let key in obj) {
    if (key) {
      result.push(obj[key]);
    }
  }
  return result;
}
