# Create the examples directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public\examples"

# Save the first image (beauty product)
$image1 = @'
[Your first image data here]
'@
[System.IO.File]::WriteAllBytes("public\examples\example1.jpg", [Convert]::FromBase64String($image1))

# Save the second image (fitness supplement)
$image2 = @'
[Your second image data here]
'@
[System.IO.File]::WriteAllBytes("public\examples\example2.jpg", [Convert]::FromBase64String($image2))

# Save the third image (camera product)
$image3 = @'
[Your third image data here]
'@
[System.IO.File]::WriteAllBytes("public\examples\example3.jpg", [Convert]::FromBase64String($image3))

Write-Host "Example images copied successfully!"
