import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: true })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/mian.scss";'
      }
    }
  },
  base: './', // 打包路径
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    strictPort: true, // 如果端口已占用直接退出
    proxy: {} // 代理
  },
  build: {
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ['console.log'],
        drop_debugger: true
      }
    },
    // 指定生成静态资源的存放路径
    assetsDir: 'static/assets',
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
});
