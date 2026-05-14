/**
 * Next.js configuration file.
 *
 * We enable the experimental App Router (appDir) and server actions to take
 * advantage of server components. The configuration can be further
 * customized if necessary. See the Next.js documentation for more options.
 */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true
  }
}

export default nextConfig