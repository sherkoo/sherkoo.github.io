#!/bin/bash

# Check if a file name was provided
if [ -z "$1" ]
  then
    echo "No file name provided. Please specify a file name as the first argument."
    exit 1
fi

# Convert the file name to lowercase and remove spaces, replacing them with hyphens
filename="$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-').md"

# Create a new markdown file with the given name
touch "$filename"

# Add the markdown file extension to the file
echo "---" >> "$filename"
echo "layout: article" >> "$filename"
echo "title: \"$1\"" >> "$filename"
echo "date: $(date +'%Y-%m-%d %H:%M:%S %z')" >> "$filename"
echo "---" >> "$filename"

# Open the file in a text editor
open -a "Visual Studio Code" "$filename"
