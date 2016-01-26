/**
 * Thanks to https://github.com/phorust/phorust.github.io/
 */

var _modules = {};

function exports(moduleName, props) {
  _modules[moduleName] = props;
}

window.module = {
  exports
};
window.modules = _modules;
