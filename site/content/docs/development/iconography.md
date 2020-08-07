---
title: 'Iconography'
description: 'Font Awesome (v5) powers Atlantic Broadband typography.'
date: 2020-07-22
group: 'development'
bootstrapLink: false
bootstrapSection: ''
toc: false
---

## Overview

Font Awesome is included as an NPM package giving us access to all of Font Awesome native source files e.g. Sass mixins and functions. We take advantage of the webfont implementation (non-SVG).

### Declaring icons for use

In order to keep file bloat down, only icons we declare in our `_iconography.scss` file, are loaded into the CSS and thus the website. To add new icons, reference `_iconography.scss`.

{{< inprogress >}}
