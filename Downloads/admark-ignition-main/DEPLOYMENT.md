# Vercel Deployment Guide

This project is ready for deployment on Vercel.

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Login to Vercel
   - Link to existing project or create new
   - Confirm settings

## Configuration

The project includes:
- ✅ `vercel.json` - Vercel configuration for SPA routing
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ Build optimization for production

## Important Notes

### SPA Routing
The `vercel.json` includes rewrites to handle client-side routing. All routes will redirect to `index.html` to support React Router.

### Environment Variables
If you need environment variables:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Build Settings
- **Framework**: Vite
- **Node Version**: 18.x or higher (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Post-Deployment

After deployment:
1. ✅ Check your live URL
2. ✅ Test all routes (Home, Portfolio, etc.)
3. ✅ Verify loading screen works
4. ✅ Test PDF downloads
5. ✅ Check mobile responsiveness

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Run `npm install` locally to verify dependencies
- Check build logs in Vercel dashboard

### Routing Issues
- Ensure `vercel.json` is in root directory
- Verify rewrites configuration

### Assets Not Loading
- Check that assets are in `src/assets/` folder
- Verify build output includes assets in `dist/assets/`

## Support

For issues:
- Check Vercel deployment logs
- Review build output
- Verify all dependencies are in `package.json`

