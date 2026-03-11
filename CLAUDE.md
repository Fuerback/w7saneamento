# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

Single-page Next.js app (App Router) for W7 Saneamento, a Brazilian B2B distributor of sanitation materials.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4

**`app/page.tsx`** is the entire application — a client component (`"use client"`) using a single `activeTab` state to switch between two views: `"inicio"` (home) and `"catalogos"` (labeled "Catálogos" in the UI). All supplier/catalog data is hardcoded in this file.

**Layout (`app/layout.tsx`):** Sets metadata, Geist fonts, `lang="pt-BR"`.

**Static assets:** Logo and PDFs are served from `public/files/`. PDFs for download are hosted on Cloudflare R2 (`pub-8b048410db364e08a99484df0d21fd61.r2.dev`).

**Images:** `next.config.ts` sets `images.unoptimized: true` for static hosting compatibility.

**Colors:** Primary `#0D3280` (dark blue), background `#F4F7FC` (light blue), defined as CSS variables in `app/globals.css`.

## Key Notes

- No database, no API routes, no dynamic data fetching — fully static content
- WhatsApp CTA links to `wa.me/554892250207`
- Suppliers: ASPERBRAS, CIMFLEX, R2SAN — each with a collapsible card listing PDF catalogs
