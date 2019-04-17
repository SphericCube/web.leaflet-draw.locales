(function (window, document, undefined) {
    L._locals = {};
    L._local = 'en';

    let defaultLocale = {};
    Object.assign(defaultLocale, L.drawLocal);

    L._locals.default = defaultLocale;

    /**
     * Set local
     *
     * @param local
     * @returns {{}}
     */
    L.setLocal = (local = 'default') => {
        if (L._locals[local]) {
            L._local = '' + local;
        } else {
            L._local = 'default';
        }

        L.drawLocal = L._locals[L._local];

        return this;
    };

    /**
     * Get current local
     *
     * @returns {string}
     */
    L.getCurrentLocal = () => L._local;

    /**
     * Create local
     *
     * @param {string} name
     * @param {{}} local
     * @returns {*}
     */
    L.createLocal = (name, local = {}) => {
        let _local = {};

        Object.assign(_local, local);

        L._locals[name] = _local;

        return L._locals[name];
    };
}(window, document));
