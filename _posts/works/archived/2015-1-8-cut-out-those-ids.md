---
layout: post
title:  "Cut Out Those ID's"
date:   2015-1-8 18:12:48
categories:
  - blog
description: "Should you use ID's or classes in CSS? I believe they shouldn’t be used or very very sparingly. CSS should be thought of in an object oriented manner."
thumbnail: code
---

ID's are considered "non-reusable" code. It has weight, it makes a statement that this block of code is so important it shouldn't appear more than once on the page. It certain cases it makes sense. For example a #page-header or a #logo, why would you use those more than once? But, is it even necessary?

##Object Oriented
Lets put aside the argument that you should or shouldn't use ID's as CSS selectors. I believe that only using classes in your css makes you think about your architecture in a totally different light. It keeps your mind more in the sense that your code is (or should be) object oriented. It eliminates the thinking that you’re styling one block of code per page when you could be writing reusable code that can be easily adapted to other parts of the site’s design as many times as it needs to be. It’s much easier to think in terms of modules and components.

##Is it necessary for CSS?
Going back to #page-header and #logo, would it be so bad if it was .page-header or .logo? Or how about thinking about more in the sense of a framework like .navbar and .navbar-branding.

##So just remove ID’s?
In some situations only an ID will suffice. For example when using javascript’s getElementById or a classic “skip to navigation” link. Using it as a CSS selector is a different story. It’s totally  up to the developer and should be used if necessary. I believe they shouldn’t be used or very very sparingly.