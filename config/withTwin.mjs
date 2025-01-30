import babelPluginTypescript from '@babel/plugin-syntax-typescript'
import babelPluginMacros from 'babel-plugin-macros'
import babelPluginTwin from 'babel-plugin-twin'
import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(process.cwd(), 'src')]

/** @returns {import('next').NextConfig} */
export default function withTwin(
  /** @type {import('next').NextConfig} */
  nextConfig,
) {
  return {
    ...nextConfig,
    compiler: {
      ...nextConfig.compiler,
      styledComponents: true,
    },
    webpack(
      /** @type {import('webpack').Configuration} */
      config,
      options,
    ) {
      config.module = config.module || {}
      config.module.rules = config.module.rules || []

      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: options.dev,
              plugins: [
                babelPluginTwin,
                babelPluginMacros,
                [babelPluginTypescript, { isTSX: true }],
              ],
            },
          },
        ],
      })

      if (!options.isServer) {
        // Unset client-side javascript that only works server-side
        config.resolve.fallback.fs = false
      }

      if (typeof nextConfig.webpack === 'function')
        return nextConfig.webpack(config, options)

      return config
    },
  }
}
