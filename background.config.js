import { defineConfig } from 'vite'
import {fileURLToPath, URL} from "node:url";


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            // https://rollupjs.org/guide/en/#big-list-of-options
            input: 'src/background.js',
            output: {
                format: 'iife',
                dir: 'build',
                entryFileNames: 'background.js',
            },
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
