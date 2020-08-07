---
title: 'Colors'
description: 'Colors trickle down to the entire project.'
date: 2020-07-22
group: 'creative'
aliases: "/docs/creative/"
toc: false
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


## All Colors

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