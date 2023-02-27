#!/bin/bash

# Check if a string was provided
if [ -z "$1" ]
  then
    echo "No string provided. Please specify a string as the first argument."
    exit 1
fi

# Replace spaces in the string with hyphens
output="$(echo "$1" | tr ' ' '-')"

# Print the result
echo "$output"
