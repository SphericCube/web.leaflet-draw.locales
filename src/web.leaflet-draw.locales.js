(function(window,document,undefined){
    L._locals = {};
    L._local = 'en';

    /**
     * Set local
     *
     * @param local
     * @returns {{}}
     */
    L.setLocal = (local) => (L._local = local) && (Object.assign(L.drawLocal, L._locals[L._local] || {}));

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
    L.createLocal = ( name , local = {}) => {
        let _local = {};

        Object.assign(_local, local);

        L._locals[ name ] = _local;

        return L._locals[ name ];
    };
}(window,document));
