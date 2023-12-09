function debounce(fc, ms) {
    let timeOut;
    function wrapper() {
        const fncCall = () => fc.apply(this, arguments);
        clearTimeout(timeOut);
        timeOut = setTimeout(fncCall, ms);
    }
    return wrapper;
}