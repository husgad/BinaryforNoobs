/* Generated by Babel */
'use strict';

(function () {
    /* Decimals hide */
    // DOM cache
    var hideCheckbox = document.getElementById('hide');
    var index = document.getElementsByClassName('ind');

    //Event listeners
    hideCheckbox.addEventListener('change', hideDecimals);

    // Checkbox checking
    function hideDecimals() {
        for (i = 0; i < index.length; i++) {
            if (hideCheckbox.checked) {
                index[i].style.visibility = 'hidden';
            } else {
                index[i].style.visibility = 'visible';
            }
        }
    }

    module.exports = {
        sup: 'sup'
    };
})();