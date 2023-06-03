#!/bin/bash

# Unzip the the RESUME_LucasBorges.zip and CV_LucasBorges.zip files and remove the zip files
unzip -o RESUME_LucasBorges.zip && rm RESUME_LucasBorges.zip && unzip -o CV_LucasBorges.zip && rm CV_LucasBorges.zip

# HTML file paths
html_files=("RESUME_LucasBorges.html" "CV_LucasBorges.html")

for file in "${html_files[@]}"; do
  # Remove the <img> tag and its surrounding <span> element using sed
  sed -i -E "s/(<span[^>]+><img[^>]*src=\"images\/image4\.png\"[^>]*><\/span>)//g" "$file"
done

# Delete the images/image4.png file
rm "images/image4.png"

