exports.version = 3.1
exports.description = "Simple audio player"
exports.apiRequired = 8.1
exports.repo = "rejetto/simple-player"
exports.frontend_css = 'style.css'
exports.frontend_js = 'main.js'

exports.config = {
    position: {
        frontend: true, type: 'select', options: ['left', 'right'], defaultValue: 'left',
        helperText: "This applies only to larger screens"
    }
}