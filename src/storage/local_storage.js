export default {
    get(name, options) {
        if (options && options.json) {
            return JSON.parse(localStorage.getItem(name));
        }
        return localStorage.getItem(name);
    },
    set(name, value) {
        let item = value;
        if (typeof value === 'object') {
            item = JSON.stringify(value);
        }
        localStorage.setItem(name, item);
    },
    remove(name) {
        localStorage.removeItem(name);
    },
};