#!/usr/bin/env pwsh

# Yazolle Development Server Start Script
# This script starts the Next.js development server for the Yazolle interest-free mortgage platform

Write-Host "🏠 Starting Yazolle Interest-Free Mortgage Platform..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Make sure you're in the project root directory." -ForegroundColor Red
    exit 1
}

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Check if database exists
if (-not (Test-Path ".data")) {
    Write-Host "🗄️  Initializing database..." -ForegroundColor Yellow
    npx drizzle-kit push
}

# Start the development server
Write-Host "🚀 Starting Next.js development server..." -ForegroundColor Green
Write-Host "📍 Application will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔧 Database studio available at: npm run db:studio" -ForegroundColor Cyan
Write-Host "" 
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev