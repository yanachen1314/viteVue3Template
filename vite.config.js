import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementUiResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  server: {
    port: 8070
  },
  plugins: [
    vue(),
    // 配置自动导入 Vue API（如 ref, reactive, computed 等）
    AutoImport({
      imports: [
        'vue', // 自动导入 Vue API
        'vue-router', // 自动导入 vue-router API
      ],
      //dts: 'src/auto-imports.d.ts', // 可选，如果你使用 TypeScript，可以生成类型声明文件
    }),

    // 配置自动导入组件（如 Element UI 组件）
    Components({
      // 自动注册的组件库，可以根据需要调整
      dirs: ['src/components'], // 自动导入的组件目录
      extensions: ['vue'], // 自动导入的文件类型
      deep: true, // 支持子目录
      resolvers: [
        ElementUiResolver({
          importStyle: true, // 自动导入样式
        }), // 如果使用 Element UI，可以自动导入组件
      ],
      //dts: 'src/components.d.ts', // 如果使用 TypeScript，生成类型声明文件
    }),
  ],
  resolve: {
    alias: {
      // @ 符号指向 src 目录
      "@": resolve(__dirname, "src"),
    }
  }
})
