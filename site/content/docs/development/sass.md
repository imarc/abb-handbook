---
title: 'Sass'
description: 'This is my sass description.'
date: 2020-07-22
group: 'development'
---

Sass Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.


{{< example lang="css" show_preview="false">}}
.nav-link.disabled {
    color: $nav-dark-disabled-color;
    @include media-breakpoint-up(lg) {
        color: #ff0000;
    }
}
{{< /example >}}

