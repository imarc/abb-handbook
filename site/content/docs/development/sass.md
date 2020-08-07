---
title: 'Sass'
description: 'The pre-processer for CSS.'
date: 2020-07-22
group: 'development'
---

{< inprogress >}}

{{< example lang="css" show_preview="false">}}
.nav-link.disabled {
    color: $nav-dark-disabled-color;
    @include media-breakpoint-up(lg) {
        color: #333;
    }
}
{{< /example >}}

