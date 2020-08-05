---
title: 'Color'
description: 'This is my color description.'
date: 2020-07-22
group: 'development'
---

Bootstrap provides some Sass-based color functions.

# Color Contrast

`color-contrast()` returns light or dark colored text depending on its arguments. We can use `color-contrast()` in our components to output a color that satisfies WCAG’s color contrast ratio.

For example, our [hero component](/docs/components/hero) has a `.hero-primary` modifier which sets its background-color to be Atlantic Broadband’s primary blue color. Using `color-contrast()` properly returns a light (`$color-contrast-light`) or dark (`$color-contrast-dark`) text color depending on the argument passed. These variables are set in our Bootstrap variables file.

{{< highlight css>}}
.hero-primary {
    background-color: $primary;
    color: color-contrast($primary); // light color as background is dark
}
{{< /highlight >}}


{{< highlight css>}}
.hero-light {
    background-color: $gray-100;
    color: color-contrast($gray-100); // dark color as background is light
}
{{< /highlight >}}
