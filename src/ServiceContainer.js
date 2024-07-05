import {version} from './../package.json';

export default (props, options) => {

    return reactive({
        /** 
        * Core properties
        * */

        // app version
        version: version,
    });
}
