import {fileURLToPath, URL} from 'node:url'

import {viteStaticCopy} from 'vite-plugin-static-copy'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config'

// require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig((mode) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return {
        plugins: [
            vue(),
            viteStaticCopy({
                targets: [
                    {src: 'src/manifest.json', dest: ''},
                    {src: 'src/assets/icons/', dest: ''},
                    {src: 'build/background.js', dest: 'js'},
                    {src: 'src/content.js', dest: 'js'},
                ]
            }),
        ],
        define: {
            ...Object.keys(process.env).reduce((prev, key) => {
                prev[`process.env.${key}`] = JSON.stringify(process.env[key])
                return prev
            }, {}),
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
    }
})
