#!/bin/bash

echo "Building static files for Coolify deployment..."

# Clean previous build
rm -rf dist

# Build the application
npm run build

# Copy .htaccess to dist directory
cp public/.htaccess dist/

echo "Build complete! The dist folder is ready for static deployment."
echo "Make sure to deploy the contents of the 'dist' folder to Coolify."