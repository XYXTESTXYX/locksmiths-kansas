# Vercel Deployment Guide for LocksmithsKansas.com

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Visit Vercel**: Go to [vercel.com](https://vercel.com)
2. **Sign Up/Login**: Create account or login with GitHub/GitLab/Bitbucket
3. **Import Project**: Click "Add New" → "Project"
4. **Upload Files**: Drag and drop the `locksmiths-kansas` folder
5. **Deploy**: Click "Deploy" - Done! ✅

Your site will be live at: `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd locksmiths-kansas

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Custom Domain Setup

After deployment, add your custom domain:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add `locksmithskansas.com`
4. Follow DNS configuration instructions
5. Update nameservers at your domain registrar

## Environment Variables (Optional)

If you need to add analytics or tracking:

1. Go to "Settings" → "Environment Variables"
2. Add variables like:
   - `GOOGLE_ANALYTICS_ID`
   - `FACEBOOK_PIXEL_ID`
   - etc.

## Automatic Deployments

### With Git Integration:

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect repository in Vercel dashboard
3. Every push to `main` branch auto-deploys! 🚀

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Compression (Gzip/Brotli)
- ✅ Edge caching
- ✅ 99.99% uptime

## Monitoring

View analytics in Vercel dashboard:
- Page views
- Load times
- Geographic distribution
- Error tracking

## Troubleshooting

### Build Fails
- Check `vercel.json` configuration
- Ensure all files are present
- Review build logs in dashboard

### 404 Errors
- Verify `vercel.json` routes configuration
- Check file paths are correct

### Slow Loading
- Optimize images (already done)
- Enable Vercel Analytics
- Check CDN distribution

## Cost

- **Free Tier**: Perfect for this landing page
  - Unlimited bandwidth
  - 100 GB-hours compute
  - Automatic SSL
  - Custom domains

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Post-Deployment Checklist

- [ ] Test all city links
- [ ] Verify phone number clicks work
- [ ] Check mobile responsiveness
- [ ] Test FAQ accordion
- [ ] Verify Schema.org markup (Google Rich Results Test)
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed (PageSpeed Insights)

## Update Deployment

To update your live site:

```bash
# Make changes to files
# Then redeploy
vercel --prod
```

Or simply push to your connected Git repository!

---

**Ready to deploy?** Just run: `vercel --prod` 🚀
