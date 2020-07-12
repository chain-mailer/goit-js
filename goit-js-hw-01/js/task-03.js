'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');

if (message === null) {
  message = alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  message = alert('Добро пожаловать!');
} else if (message != ADMIN_PASSWORD && message != null) {
  message = alert('Доступ запрещен, неверный пароль!');
}
