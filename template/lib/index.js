
/**
 * Dependencies.
 */



/**
 * Expose `{{titlecase name}}`.
 */

module.exports = {{titlecase name}};

/**
 * {{titlecase name}}.
 * {{#options}}
 * @param {Object} opts{{/options}}
 */

function {{titlecase name}}({{#options}}opts{{/options}}) {
  if (!(this instanceof {{titlecase name}})) return new {{titlecase name}}({{#options}}opts{{/options}});
  {{#options}}
  this.opts = opts || {};
  {{/options}}
}
