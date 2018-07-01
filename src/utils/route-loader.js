const loaderUtils = require('loader-utils');

function asyncRequire(page, chunk) {
    console.log(4);
    console.log('hello!~~~~~~~~');
}

console.log('hello ~~~~~~~~~~~~');

module.exports = routeLoader;