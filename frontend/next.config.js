/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {  NEXT_PUBLIC_OPEN_AI_KEY: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
            NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST
    }
}
  
module.exports = nextConfig