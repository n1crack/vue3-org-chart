import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
        copy({
            targets: [
                {src: 'src/locales/*', dest: 'dist/locales'},
                {src: 'src/features.js', dest: 'dist'},
            ],
            hook: "writeBundle",
        })
    ],
 
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            formats: ['es', 'cjs'],
            name: 'Vue3 Org Chart',
            // the proper extensions will be added
            fileName: 'vue3-org-chart',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                'vue',
                'lodash',
            ],
            output: {

                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
});


