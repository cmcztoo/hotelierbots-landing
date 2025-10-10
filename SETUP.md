# HotelierBots Landing Page

A modern Next.js 15 landing page for HotelierBots with a waitlist signup form.

## Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling
- **Supabase** integration for waitlist data storage
- **Zod** validation for form data
- **React Hook Form** for form handling
- **React Hot Toast** for notifications
- **ESLint & Prettier** for code quality

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create a new Supabase project
   - Create a `waitlist` table with the following columns:
     - `id` (uuid, primary key, default: gen_random_uuid())
     - `name` (text)
     - `email` (text)
     - `created_at` (timestamptz, default: now())

3. **Environment variables:**
   Create a `.env.local` file in the root directory with:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Pages

- `/` - Main landing page
- `/waitlist` - Waitlist signup form

## Database Schema

The waitlist table should have the following structure:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
