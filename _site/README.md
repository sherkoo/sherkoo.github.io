# Personal Portfolio

## Development environment

```bash
jekyll serve --force-polling
# this no longer works
jekyll server --watch
```

## Making a new blog post & custom scripting

```bash
cd _posts
sh post_script.sh "<<filename>>"
# (don't forget to put the quotes around the filename)
```

## File structure

```yaml
| ./
| - layouts:
| - portfolio: holds portfolio case studies
| - posts: blog articles
| - pages: all static pages
```

Setting the Permalink and Folder for Portfolio Work

When creating a new portfolio case study, it's important to set the permalink and folder for the work. The permalink determines the URL where the portfolio case study will be accessible, while the folder is where you should place any images or other assets related to the work.

To set the permalink for your portfolio work, simply open the front matter block in the portfolio case study file and set the permalink property to the desired URL. For example:

```yaml
---
layout: portfolio
title: My New Portfolio Work
permalink: /portfolio/my-new-work/
---
```

In this example, the portfolio case study will be accessible at http://your-site.com/portfolio/my-new-work/.

It's also a good idea to place any images or other assets related to the work in a folder. You can create a new folder for each portfolio case study and give it a descriptive name. For example:

```yaml
- portfolio
  - my-new-work
    - image-1.jpg
    - image-2.jpg
    - ...
```

In this example, the my-new-work folder contains all the images and assets related to the portfolio case study. Make sure to reference these assets using the correct relative paths in your portfolio case study file.

Remember to update the permalink and folder for each new portfolio case study you create. This will ensure that your portfolio is organized and easy to navigate.