// import { fileURLToPath, URL } from 'node:url'
//
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import laravel from 'laravel-vite-plugin';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     laravel([
//       'dist/css/app.css',
//       'dist/js/app.js',
//     ]),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'src/main.js',
                app: 'src/luxury.js',
                // utils: 'src/utils.js',
            },
        },
    },
});
