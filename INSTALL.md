# Installation Instructions

The packages need to be installed manually. Please run these commands in your terminal:

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or install the specific packages:

```bash
npm install @tanstack/react-table@^8.20.5 react-window@^1.8.10
```

## Step 2: Verify Installation

After installation, verify the packages are installed:

```bash
npm list @tanstack/react-table react-window
```

## Step 3: Start Dev Server

Once packages are installed, start the development server:

```bash
npm run dev
```

## Troubleshooting

If you encounter issues:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check npm registry:**
   ```bash
   npm config get registry
   ```
   Should show: `https://registry.npmjs.org/`

4. **Try with different registry:**
   ```bash
   npm install --registry https://registry.npmjs.org/
   ```

## Current Status

✅ `package.json` has the correct dependencies:
- `@tanstack/react-table: ^8.20.5`
- `react-window: ^1.8.10`

❌ Packages need to be installed in `node_modules`

