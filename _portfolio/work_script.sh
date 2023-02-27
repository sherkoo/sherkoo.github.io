#!/bin/bash

# Check if a file name was provided
if [ -z "$1" ]
  then
    echo "No file name provided. Please specify a file name as the first argument."
    exit 1
fi

# Create a new markdown file with the given name
# Convert the file name to lowercase and remove spaces, replacing them with hyphens
filename="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-').md"
permalink="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')"

touch "$filename"

# Add the markdown file extension to the file
echo "---" >> "$filename"
echo "layout: work" >> "$filename"
echo "title: \"$1\"" >> "$filename"
echo "date: $(date +'%Y-%m-%d %H:%M:%S %z')" >> "$filename"
echo "duration: "7 months"" >> "$filename"
echo "thumbnail: /images/thumbnail.png" >> "$filename"
echo "permalink: \"$permalink\"" >> "$filename"
echo "team: ["Product strategy", "Project lead", "UX Design", "Research"]" >> "$filename"
echo "description: \"$1\"" >> "$filename"
echo "teamSize:
  ["14 Engineers", "2 UX designers", "3 Product owners", "5 Data scientists"]" >> "$filename"
echo "---" >> "$filename"

# Open the file in a text editor
open -a "Visual Studio Code" "$filename"
