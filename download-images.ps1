# PowerShell script for downloading car images

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public/images/cars" | Out-Null
New-Item -ItemType Directory -Force -Path "public/images/categories" | Out-Null
New-Item -ItemType Directory -Force -Path "public/images/testimonials" | Out-Null

# Function for downloading image
function Download-Image {
    param (
        [string]$url,
        [string]$path
    )
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $path
        Write-Host "Successfully downloaded: $path" -ForegroundColor Green
    }
    catch {
        Write-Host "Error downloading $url to $path" -ForegroundColor Red
    }
}

# Downloading car images
Write-Host "Downloading car images..." -ForegroundColor Cyan

# Sports cars
Download-Image -url "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e" -path "public/images/cars/ferrari-458.jpg"
Download-Image -url "https://images.unsplash.com/photo-1614023342667-9238d9d511c6" -path "public/images/cars/lamborghini-aventador.jpg"
Download-Image -url "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd" -path "public/images/cars/mclaren-720s.jpg"
Download-Image -url "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a" -path "public/images/cars/porsche-911.jpg"

# Luxury cars
Download-Image -url "https://images.unsplash.com/photo-1558419223-695df65c0c42" -path "public/images/cars/mercedes-s-class.jpg"
Download-Image -url "https://images.unsplash.com/photo-1635967200815-19c5db898d57" -path "public/images/cars/bmw-7-series.jpg"
Download-Image -url "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8" -path "public/images/cars/audi-a8.jpg"
Download-Image -url "https://images.unsplash.com/photo-1621975883762-53a3a8578da6" -path "public/images/cars/bentley-continental.jpg"

# SUVs
Download-Image -url "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd" -path "public/images/cars/range-rover.jpg"
Download-Image -url "https://images.unsplash.com/photo-1627839617881-463b2cbca2c6" -path "public/images/cars/lamborghini-urus.jpg"
Download-Image -url "https://images.unsplash.com/photo-1625895197185-efcec01cffe0" -path "public/images/cars/bentley-bentayga.jpg"
Download-Image -url "https://images.unsplash.com/photo-1617469767053-d3b523a0b982" -path "public/images/cars/mercedes-g-class.jpg"

# Downloading category images
Write-Host "Downloading category images..." -ForegroundColor Cyan
Download-Image -url "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4" -path "public/images/category-sport.jpg"
Download-Image -url "https://images.unsplash.com/photo-1563720223185-11003d516935" -path "public/images/category-luxury.jpg"
Download-Image -url "https://images.unsplash.com/photo-1595859531644-dfb01741e231" -path "public/images/category-suv.jpg"

# Downloading hero background image
Write-Host "Downloading hero background image..." -ForegroundColor Cyan
Download-Image -url "https://images.unsplash.com/photo-1542362567-b07e54358753" -path "public/images/hero-bg.jpg"

# Downloading testimonial images
Write-Host "Downloading testimonial images..." -ForegroundColor Cyan
Download-Image -url "https://images.unsplash.com/photo-1560250097-0b93528c311a" -path "public/images/testimonial-1.jpg"
Download-Image -url "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" -path "public/images/testimonial-2.jpg"
Download-Image -url "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" -path "public/images/testimonial-3.jpg"
Download-Image -url "https://images.unsplash.com/photo-1580489944761-15a19d654956" -path "public/images/testimonial-4.jpg"

Write-Host "All images successfully downloaded!" -ForegroundColor Green 