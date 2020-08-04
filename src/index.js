import './scss/main.scss'


/**
 * Dependencies
 */
import 'popper.js/dist/popper.min.js'
import bootstrap from 'bootstrap'
import 'mmenu-js/dist/mmenu.js'
import 'mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js'
import 'mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation.js'


document.addEventListener(
    'DOMContentLoaded', () => {
        // eslint-disable-next-line no-undef
        const menu = new Mmenu('#nav-mobile', {
            onClick: true,
            extensions: [
                'border-full',
                'pagedim-black',
                'position-back',
                'position-left',
                'shadow-page',
                'theme-dark',
            ],
            navbars: [
                {
                    position: 'top',
                    content: [
                        `'<div class="mm-navbar-sm d-block text-left">
                            <a href="">
                                <div class="d-flex">
                                    <span><i class="fas fa-map-marker-alt"></i> Miami Beach, FL</span>
                                    <span class="font-weight-normal ml-auto">Change?</span>
                                </div>
                             </a>
                        </div>'`,
                    ],
                },
                {
                    position: 'bottom',
                    content: [
                        `'<div class="mm-selector d-block text-left">
                            <label class="text-uppercase" for="mm-selector-select">Select a site</label>
                            <select class="form-control form-control-sm" id="mm-selector-select">
                                <option selected>Residential</option>
                                <option>Business</option>
                                <option>Carrier</option>
                                <option>Agent</option>
                                <option>Select Communities</option>
                            </select>
                        </div>'`,
                    ],
                },
                {
                    position: 'top',
                    content: [
                        'prev',
                        'breadcrumbs',
                    ],
                },
            ],
        }, {
            // configuration
        })

        const api = menu.API

        document.querySelector('#nav-mobile-toggle')
            .addEventListener(
                'click', (e) => {
                    e.preventDefault()
                    api.open()
                }
            )
    }
)
