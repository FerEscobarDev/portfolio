import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@babel/core';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      async transform(code, id) {
        if (!/\.jsx?$/.test(id)) return;

        const { code: transformedCode } = await babel.transformAsync(code, {
          filename: id,
          configFile: false,
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-class-properties',
          ],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
                bugfixes: true,
                modules: false,
              },
            ],
            '@babel/preset-react',
          ],
        });

        return {
          code: transformedCode,
          map: null,
        };
      },
    },
  ],
});

