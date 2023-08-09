const lang = prompt('What is your language?');

switch(lang) {
    case 'en':
        console.log('Good morning!');
        break;
    case 'de':
        console.log('Gutten tan!');
        break;
    case 'ru':
        console.log('Доброе утро!');
        break;
    default:
        console.log('Unknown language!')
}