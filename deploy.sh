#!/bin/bash

# LocksmithsKansas.com - Quick Deploy Script
# This script helps you deploy to Vercel in one command

echo "🔐 LocksmithsKansas.com - Deployment Script"
echo "==========================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
else
    echo "✅ Vercel CLI already installed"
fi

echo ""
echo "📦 Preparing deployment..."
echo ""

# Show project files
echo "📁 Project files:"
ls -lh

echo ""
echo "🚀 Deploying to Vercel..."
echo ""

# Deploy to production
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Visit your deployment URL"
echo "  2. Test all functionality"
echo "  3. Set up custom domain (optional)"
echo "  4. Add to Google Search Console"
echo ""
echo "🎉 Your landing page is now live!"
