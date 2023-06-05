#!/bin/bash

# Function to check if a file exists
file_exists() {
  if [[ -f "$1" ]]; then
    return 0
  else
    return 1
  fi
}

# HTML file paths
html_files=()

# Unzip the CV_LucasBorgesVieira.zip file if it exists and remove the zip file
if file_exists "CV_LucasBorgesVieira.zip"; then
  unzip -o "CV_LucasBorgesVieira.zip" && rm "CV_LucasBorgesVieira.zip"
  # Append the HTML file to the list
  html_files+=("CV_LucasBorgesVieira.html")
fi

for file in "${html_files[@]}"; do
  # Remove the <img> tag and its surrounding <span> element using sed
  sed -i -E "s/(<span[^>]+><img[^>]*src=\"images\/image1\.png\"[^>]*><\/span>)//g" "$file"
  # Check if the images/image1.png file exists before attempting to delete it
  if file_exists "images/image1.png"; then
    rm "images/image1.png"
  fi
done
