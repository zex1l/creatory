export const countryCodeList = ['RU', 'TJ'] as const;

interface CountryName {
  [key: string]: string;
}

export interface ICountryData {
  currency: string[];
  callingCode: string[];
  region: string;
  subregion: string;
  flag: string;
  name: CountryName;
  mask: string;
  placeholder: string;
}

export type ICountryCode = (typeof countryCodeList)[number];

// Доп страны на https://github.com/xcarpentier/react-native-country-picker-modal/blob/master/data/countries.json
export const dataCountries: Record<ICountryCode, ICountryData> = {
  RU: {
    currency: ['RUB'],
    callingCode: ['7'],
    mask: '+7 (000) 000-00-00',
    placeholder: '+7 (901) 513-16-54',
    region: 'Europe',
    subregion: 'Eastern Europe',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAACpQTFRF/////v7+7u72EhKHAAB8AgJ/AQF+AgF9AAGAEgF17QEK/wEA/QEC/gEBEp+r8wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAABBSURBVCjPY2AYfEAQC8CuUgkLYDDGAhhcsACGUCyAIQ0LoFSwHAtg6MACGGZiAQyrsACG3VgAwxksgOEuFjCwggAMe/hdiobzpAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0wN1QxMzoxNDo1MiswMjowMEZJFHgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMTAtMDdUMTM6MTQ6NTIrMDI6MDA3FKzEAAAAAElFTkSuQmCC',
    name: {
      common: 'Russia',
      ces: 'Rusko',
      deu: 'Russland',
      fra: 'Russie',
      hrv: 'Rusija',
      ita: 'Russia',
      jpn: 'ロシア連邦',
      nld: 'Rusland',
      por: 'Rússia',
      rus: 'Россия',
      slk: 'Rusko',
      spa: 'Rusia',
      fin: 'Venäjä',
      est: 'Venemaa',
      zho: '俄罗斯',
      pol: 'Rosja',
      urd: 'روس',
      kor: '러시아',
    },
  },
  TJ: {
    currency: ['TJS'],
    callingCode: ['992'],
    mask: '+992 00 000-00-00',
    placeholder: '+992 (901) 513-16-54',
    region: 'Asia',
    subregion: 'Central Asia',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAWhQTFRFzRc4zRU2zRU0zRU1zRU39tbc9tba9tbb9tbo9tbl///////+//+7///P///9//39//37//3///2E//3L//2G//2o//2v//2Y//36//+V///V///8//+9//+m///3///d///c///l///6///f///U//9O///4///D//9a//9d///i///e//9L///x///u///o//9Z//9w///5///7///s///k//+E//+r//9V///H//+B//+q//+f//9v///p//+T//+g//+y//9W//9l//+///+P//+u///q//+v//9x//9i//9+//+d//+h//9z//93/f79/f78/f7//f7W/f5o/f5N/f6Q/f46/f5P/f6N/f5B/f6C/f7j/f77//+x//+W///C///X///B///A//+L///K1OzZ1Oza1OzY1Ozk1Ozt1Ozo1Ozl1OzgH508H509H506H504H507H505JJ9BI59AIp8/J6FD5kCDSwAAAAFiS0dECmjQ9FYAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAEdSURBVDjL7ZDHV8JAGMQ/G9GJrsauEURUUBRRsCEqKvYu9t6lRCXE9u+bI7t55OXmxd9hDzPzZt5+RP/YUWalvKLSKlKVgEuSqmskySXqBBEZtXVgFpnqORqUxialuUVpbVPaecfS2NEJpqLLLZbyQU+3bE57e8zH18tKBhn6+v0qAgODQWBoOGTGSzX6RmQZ4dGxCBAdZzbTEx4wPyanEGEIhW2C0zGwKGbiUFXMznH/ERrnkVhYXEour6wiuFa6Ucb6xuZWfHvHvZvci/EHov1iDlKHR8cnp2fnF5dXqWvO4qcZbm7vAt77h8enZ+Hi9FJMOpPNaVr2VdNyb5k0Z9E7R14v6Lph6B8FI8879OkQ+nLIXwa/HUI/DvkFp7PQDyhhj5YAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMDdUMTM6MTQ6MzMrMDI6MDAmURZLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTEwLTA3VDEzOjE0OjMzKzAyOjAwVwyu9wAAAABJRU5ErkJggg==',
    name: {
      common: 'Tajikistan',
      ces: 'Tádžikistán',
      deu: 'Tadschikistan',
      fra: 'Tadjikistan',
      hrv: 'Tađikistan',
      ita: 'Tagikistan',
      jpn: 'タジキスタン',
      nld: 'Tadzjikistan',
      por: 'Tajiquistão',
      rus: 'Таджикистан',
      slk: 'Taǆikistan',
      spa: 'Tayikistán',
      fin: 'Tadžikistan',
      est: 'Tadžikistan',
      zho: '塔吉克斯坦',
      pol: 'Tadżykistan',
      urd: 'تاجکستان',
      kor: '타지키스탄',
    },
  },
};
