import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                demo1: resolve(__dirname, 'src/mockups/demo1/index.html'),
                demo2: resolve(__dirname, 'src/mockups/demo2/index.html'),
                demo3: resolve(__dirname, 'src/mockups/demo3/index.html'),
            },
        },
    },
});
