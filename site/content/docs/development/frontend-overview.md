---
title: 'Frontend Overview'
description: 'How user interface components are conceptualized and implemented.'
date: 2020-07-22
group: 'development'
aliases: "/docs/development"
---

## Markup

Bootstrap’s components are largely built with a base-modifier nomenclature. They group as many shared properties as possible into a base class, like `.btn`, and then group individual styles for each variant into modifier classes, like `.btn-primary` or `.btn-success`.

There is no convention for modifiers or state-based classes, such as `block__elem` in BEM and `-accent` in ABEM.

We try to carry this over Bootstrap’s base-modifier approach as much as possible when creating our own components.

### Component example

{{< inprogress >}}

## Sass
Aatlantic Broadband uses Sass.

### Architecture

We organize our Sass architecture in a way that is similar to a [5-1](https://matthewelsom.com/blog/simple-scss-playbook.html) pattern.

The `main.scss` entry point file **should not be edited**.

{{< highlight html>}}
|- abstracts/                   
|	|- __abstracts-dir.scss     # Import all abstracts .scss files
|	|- *.scss                   # Lorem
|	|- *.scss                   # Lorem
|
|- vendor/
|	|- __vendor-dir.scss        # Import vendor folders
|	|- *.scss                   # Lorem
|
|- base/
|	|- __base-dir.scss          # Import all base .scss files
|	|- *.scss                   # Lorem
|
|- components/
|	|- __components-dir.scss    # Import all components .scss files
|	|- *.scss                   # Lorem
|
|- layouts/
|	|- __layouts-dir.scss       # Import all layouts .scss files
|	|- *.scss                   # Lorem
|
|- utilities/
|	|- __utilities-dir.scss     # Import all utilities .scss files
|	|- *.scss                   # Lorem
|
– main.scss                         # Main entrypoint (do not change)
|
– shame.scss                        # Code that you know is bad
{{< /highlight >}}
