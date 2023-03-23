const ans = prompt('Сколько будет 7 + или - 15?');

switch(ans) {
    case '7':
    case '8':
    case 'Я не робот':
        console.log('Успех');
        break;
    default:
        console.log('Вы робот!')
}
