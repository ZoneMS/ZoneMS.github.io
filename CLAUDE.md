# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages repository (ZoneMS.github.io) that appears to be set up for a Next.js-based website. The repository is currently in its initial state with minimal configuration.
Next.jsを用いてWebサイトを構築し、gh-pagesとしてホストする予定である。

## Project Structure

- Currently contains only basic repository setup files
- `.gitignore` is configured for Next.js development with standard exclusions for:
  - Node.js dependencies (`/node_modules`)
  - Next.js build artifacts (`/.next/`, `/out/`, `/build`)
  - Environment files (`.env*.local`, `.env`)
  - TypeScript build info (`*.tsbuildinfo`, `next-env.d.ts`)

## Development Setup

Since this appears to be intended as a Next.js project based on the `.gitignore`, typical Next.js commands would apply once the project is properly initialized:

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linting (if configured)
```

## Notes

- The repository is currently minimal and doesn't contain actual Next.js project files yet
- GitHub Pages deployment would typically use the built output from the `/out` directory for static export
- No package.json or other configuration files are present yet