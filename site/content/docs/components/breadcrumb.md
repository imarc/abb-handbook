---
title: 'Breadcrumb'
description: 'Breadcrumbs are navigation links near the top of a page to help orient users.'
group: 'components'
bootstrapLink: true
bootstrapSection: 'components'
demoLink: false
---

Breadcrumb dividers can be modified via the `$breadcrumb-divider` variable in our Bootstrap variables file.

## Examples 

### Default

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
        <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>

### Dark

<div class="bg-dark px-3 pt-1">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-dark">
            <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
            <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
</div>

## Markup

{{< highlight html>}}
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
        <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>
{{< /highlight >}}

