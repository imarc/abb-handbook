---
title: 'Colors'
description: 'Colors trickle down to the entire project.'
date: 2020-07-22
group: 'creative'
aliases: "/docs/creative/"
toc: true
---

## Theme colors

<div class="row g-5">
    {{< theme-colors.inline >}}
    {{ range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
        <div class="p-3 bg-{{ .name }} {{ if or (eq .name "light") (eq .name "warning") }}text-dark{{ else if or (eq .name "info") (eq .name "secondary") (eq .name "success")}}text-body{{ else }}text-white{{ end }}">
            {{ .name | title }}
        </div>
    </div>
    {{ end }}
    {{< /theme-colors.inline >}}
</div>


## All colors

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
    {{< theme-colors.inline >}}
    {{ range $color := $.Site.Data.colors }}
        {{ if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark"))) }}
        <div class="col">
            <div class="card">
                <div class="p-3 position-relative swatch-{{ $color.name }}">
                    <div class="row">
                        <div class="col-auto">
                            <dl class="m-0">
                                <dt class="font-weight-normal">Name</dt>
                                <dd class="m-0 font-weight-bold">${{ $color.name }}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <dl>
                        <dt class="text-muted font-weight-normal">HEX</dt>
                        <dd>{{ $color.hex }}</dd>
                        <dt class="text-muted font-weight-normal">HSL</dt>
                        <dd>{{ $color.hsl }}</dd>
                    </dl>
                </div>
            </div>
        </div>
        {{ end }}
    {{ end }}
    {{< /theme-colors.inline >}}
</div>

## Customization and tooling

Bootstrap provides multiple Sass-based color functions.

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
