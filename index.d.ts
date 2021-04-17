import type{ Plugin } from 'vite'

declare function createPlugin(options?: {pragma?: string, include?: RegExp[]}): Plugin

export default createPlugin
