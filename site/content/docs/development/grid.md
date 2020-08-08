---
title: 'Grid'
description: 'Bootstrap’s grid provides massive power and flexibility.'
date: 2020-07-22
group: 'development'
bootstrapLink: true
bootstrapSection: 'layout'
toc: true
---

## How it works

Bootstrap’s grid is powered by flexbox, and we use it to its full extent.

## Our grid

<div class="table-responsive">
    <table class="table mb-4">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">
                    xs<br>
                    <span class="font-weight-normal">&lt;576px</span>
                </th>
                <th scope="col">
                    sm<br>
                    <span class="font-weight-normal">&ge;576px</span>
                </th>
                <th scope="col">
                    md<br>
                    <span class="font-weight-normal">&ge;768px</span>
                </th>
                <th scope="col">
                    lg<br>
                    <span class="font-weight-normal">&ge;992px</span>
                </th>
                <th scope="col">
                    xl<br>
                    <span class="font-weight-normal">&ge;1200px</span>
                </th>
                <th scope="col">
                    xxl<br>
                    <span class="font-weight-normal">&ge;1400px</span>
                </th>
            </tr>
        </thead>
    <tbody>
        <tr class="text-decoration-line-through">
            <th class="text-nowrap" scope="row">Container max-width</th>
            <td>None (auto)</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1156px</td>
            <td>1344px</td>
        </tr>
        <tr>
            <td class="text-center" colspan="7"><div class="mb-2"><i class="fas fa-sm fa-arrow-up"></i> We don’t use Bootstrap’s max-width per-breakpoint containers (<code>.container</code>).</div> <div>We leverage the fluid-until-breakpoint containers (<code>.container-xxl</code>) <i class="fas fa-sm fa-arrow-down"></i></div></td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Container-<code class="font-weight-normal">{breakpoint}</code> max-width</th>
            <td>None (auto)</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>1344px</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Class prefix</th>
            <td><code>.col-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
            <td><code>.col-xxl-</code></td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row"># of columns</th>
            <td colspan="6">12</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Gutter width</th>
            <td colspan="6">4rem – this is 2rem (32px) of left/right padding</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Custom gutters</th>
            <td colspan="6">Yes</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Nestable</th>
            <td colspan="6">Yes</td>
        </tr>
        <tr>
            <th class="text-nowrap" scope="row">Column ordering</th>
            <td colspan="6">Yes</td>
        </tr>
    </tbody>
    </table>
</div>

## Examples

- align bottom product boxes
- generic grid with bg-colors
- gutter mod examples
- using grid for other things one might not expect

{{< inprogress >}}
