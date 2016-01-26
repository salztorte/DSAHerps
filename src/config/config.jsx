'use strict';

let storeName = 'herps';
let dbConfig = {
    'storeName': storeName,
    'schema': {
        autoSchema: false,
        'stores': [
            {
                'name': storeName,
                'keyPath': 'Name',
                'indexes': [{
                    'name': 'Typ',
                    'keyPath': 'Typ'
                }, {
                    'name': 'Using',
                    'keyPath': 'Using'
                }, {
                    'name': 'Occurrence',
                    'keyPath': 'Occurrence'
                }, {
                    'name': 'Effect',
                    'keyPath': 'Effect'
                }]
            }
        ]
    },
    'schemaTest': {
        'stores': [{
            'name': 'test',
            'keyPath': 'name'
        }]
    },
    'option': {
        mechanisms: ['indexeddb', 'websql', 'localstorage'], // default ordering
        size: 2 * 1024 * 1024, // 2 MB
    }
};

export { dbConfig };