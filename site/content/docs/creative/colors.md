---
title: 'Colors'
description: 'This is my color description.'
date: 2020-07-22
group: 'creative'
aliases: "/docs/creative/"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio. Nisi erat porttitor ligula, eget lacinia odio.

## Theme colors

<div class="row">
    {{< theme-colors.inline >}}
    {{ range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
        <div class="p-3 bg-{{ .name }} {{ if or (eq .name "light") (eq .name "warning") }}text-dark{{ else if (eq .name "info")}}text-body{{ else }}text-white{{ end }}">
            {{ .name | title }}
        </div>
    </div>
    {{ end }}
    {{< /theme-colors.inline >}}
</div>


## All Colors

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio. Nisi erat porttitor ligula, eget lacinia odio.

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
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
