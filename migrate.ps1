# Create necessary directories
New-Item -ItemType Directory -Path "temp-next/src/components" -Force

# Copy components
Copy-Item "src/components/*" -Destination "temp-next/src/components/" -Force

# Copy example images
Copy-Item "public/examples/*" -Destination "temp-next/public/examples/" -Force -Recurse
