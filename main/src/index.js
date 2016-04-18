var context = require.context('..', false, /config\.json$/);
console.log(context.keys());
