import gulp from 'gulp'

import {path} from './gulp/config/path.js'

global.app = {
    path: path,
    gulp: gulp,
}

//tasks import
import {copy} from './gulp/tasks/copy.js'
import {reset} from './gulp/tasks/reset.js'

//наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
}

//Построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher)

//Выполнение сценария по умолчанию
gulp.task('default', dev)