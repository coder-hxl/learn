const {src, dest, series} = require('gulp')

const node_env = process.env.node_env
console.log(node_env);

function scripts() {
    return src('./03.script/app.js', { sourcemaps: true })
      .pipe(dest('./03.script/dist/'));
}

let build = series(scripts)

exports.default = build