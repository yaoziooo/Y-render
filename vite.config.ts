/*
 * @Author: luyao
 * @Date: 2022-11-17 15:47:12
 * @LastEditTime: 2022-11-18 19:13:10
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /Y-render/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), commonjs({ requireReturnsDefault: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  base: "./",
});
