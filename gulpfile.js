import gulp from 'gulp'

import {path} from './gulp/config/path.js'

global.app = {
    path: path,
    gulp: gulp,
}

//tasks import
import {copy} from './gulp/tasks/copy.js'

//Выполнение сценария по умолчанию
gulp.task('default', copy)