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

# Unzip the RESUME_LucasBorges.zip file if it exists and remove the zip file
if file_exists "RESUME_LucasBorges.zip"; then
  unzip -o "RESUME_LucasBorges.zip" && rm "RESUME_LucasBorges.zip"
  # Append the HTML file to the list
  html_files+=("RESUME_LucasBorges.html")
fi

# Unzip the CV_LucasBorges.zip file if it exists and remove the zip file
if file_exists "CV_LucasBorges.zip"; then
  unzip -o "CV_LucasBorges.zip" && rm "CV_LucasBorges.zip"
  # Append the HTML file to the list
  html_files+=("CV_LucasBorges.html")
fi

for file in "${html_files[@]}"; do
  # Remove the <img> tag and its surrounding <span> element using sed
  sed -i -E "s/(<span[^>]+><img[^>]*src=\"images\/image4\.png\"[^>]*><\/span>)//g" "$file"
  # Check if the images/image4.png file exists before attempting to delete it
  if file_exists "images/image4.png"; then
    rm "images/image4.png"
  fi
done

