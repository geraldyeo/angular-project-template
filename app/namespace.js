/**
 * Define nested namespaces under a global variable.
 * Adapted from Addy Osmani & Stoyan Stefanov's solutions.
 * <http://addyosmani.com/blog/essential-js-namespacing/>
 *
 * @param  {[String]} package [package in dot notation]
 * @return {[Object]}         [Namespace]
 */
function CCNamespace(package) {
    var parts = package.split('.'),
        parent = window[parts[0]] || {},
        pl, i;
    parts = parts.slice(1);
    pl = parts.length;
    for (i = 0; i < pl; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
    }
    return parent;
}
