import replace from 'gulp-replace' //поиск и замена
import notify from 'gulp-notify' //сообщения подсказки
import plumber from 'gulp-plumber' //обработка ошибок
import browsersync from 'browser-sync' //локальный сервер

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}