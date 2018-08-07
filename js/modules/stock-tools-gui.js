/**
 * GUI generator for Stock tools
 *
 * (c) 2009-2017 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../parts/Globals.js';

// TODO:
// + submenu
// + use createElement from HC ?
// +- refactoring
// - prototypes
// - icons
// - remove extra buttons

var addEvent = H.addEvent,
    createElement = H.createElement,
    doc = H.doc,
    each = H.each,
    fireEvent = H.fireEvent,
    getStyle = H.getStyle,
    css = H.css,
    DIV = 'div',
    SPAN = 'span',
    UL = 'ul',
    PREFIX = 'highcharts-',
    activeClass = PREFIX + 'active';

H.setOptions({
    stockTools: {
        gui: {
            enabled: true,
            className: 'stocktools-wrapper',
            toolbarClassName: 'stocktools-toolbar',
            buttons: [
                'fullScreen',
                'simpleShapes',
                'lines',
                'crookedLines',
                'measure',
                'advanced',
                'toggleAnnotations',
                'separator',
                'verticalLabels',
                'flags',
                'separator',
                'zoomChange',
                'typeChange',
                'separator',
                'indicators',
                'currentPriceIndicator'
            ],
            definitions: {
                simpleShapes: {
                    items: ['circle', 'rectangle', 'label'],
                    circle: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/text.svg)'
                    },
                    rectangle: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/text.svg)'
                    },
                    label: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/text.svg)'
                    }
                },
                flags: {
                    items: [
                        'circlepin',
                        'diamondpin',
                        'squarepin',
                        'simplepin'
                    ],
                    simplepin: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/flag-flag.svg)'
                    },
                    diamondpin: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/flag-diamondpin.svg)'
                    },
                    squarepin: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/flag-squarepin.svg)'
                    },
                    circlepin: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/flag-circlepin.svg)'
                    }
                },
                lines: {
                    items: [
                        'segment',
                        'arrowSegment',
                        'ray',
                        'arrowRay',
                        'line',
                        'arrowLine',
                        'horizontalLine',
                        'verticalLine'
                    ],
                    symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)',
                    segment: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    arrowSegment: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    ray: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    arrowRay: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    line: {
                        type: 'aaa',
                        label: 'bbb',
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    arrowLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    verticalLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    },
                    horizontalLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/line.svg)'
                    }
                },
                crookedLines: {
                    items: ['crooked3', 'crooked5', 'elliott3', 'elliott5'],
                    crooked3: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    },
                    crooked5: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    },
                    elliott3: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    },
                    elliott5: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                    }
                },
                verticalLabels: {
                    items: [
                        'verticalCounter',
                        'verticalLabel',
                        'verticalArrow',
                        'verticalDoubleArrow'
                    ],
                    verticalCounter: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    verticalLabel: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    verticalArrow: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    verticalDoubleArrow: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    }
                },
                advanced: {
                    items: ['fibonacci', 'pitchfork', 'parallel-channel'],
                    pitchfork: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    fibonacci: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/fibonacci.svg)'
                    },
                    'parallel-channel': {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    }
                },
                measure: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                },
                toggleAnnotations: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/cursor.svg)'
                },
                currentPriceIndicator: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                },
                indicators: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                },
                zoomChange: {
                    items: ['zoomX', 'zoomY', 'zoomXY'],
                    zoomX: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    zoomY: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    zoomXY: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    }
                },
                typeChange: {
                    items: ['typeOHLC', 'typeLine', 'typeCandlestick'],
                    typeOHLC: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    typeLine: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    },
                    typeCandlestick: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/tunnel.svg)'
                    }
                },
                fullScreen: {
                    symbol: 'url(https://cdn.rawgit.com/YR/weather-symbols/6.0.2/dist/svg/40d.svg)'
                }
            }
        }
    }
});

// HTML generator
addEvent(H.Chart.prototype, 'afterInit', function () {
    var chart = this,
        chartOptions = chart.options,
        guiOptions = chartOptions.stockTools && chartOptions.stockTools.gui,
        container = doc.getElementById(chart.renderTo),
        toolbar,
        stockToolbar,
        listWrapper,
        wrapper;

    if (!guiOptions.enabled) {
        return;
    }

    wrapper = createElement(DIV, {
        className: guiOptions.className
    });

    container.parentNode.insertBefore(wrapper, container);
    wrapper.appendChild(container);

    // GENERAL STRUCTURE

    // toolbar
    toolbar = createElement(UL, {
        className: guiOptions.toolbarClassName
    });

    listWrapper = createElement(DIV, {
        className: 'menu-wrapper'
    });

    wrapper.insertBefore(listWrapper, wrapper.childNodes[0]);
    listWrapper.insertBefore(toolbar, listWrapper.childNodes[0]);

    // generate buttons
    chart.stockToolbar = stockToolbar = new H.Toolbar(guiOptions, chart);

    // show hide toolbar
    createElement(DIV, {
        className: 'showhide-showbar'
    }, null, wrapper);

    H.Toolbar.prototype.showHideToolbar();

    // arrows
    // 50px space for arrows
    if (toolbar.offsetHeight > (wrapper.offsetHeight - 50)) {
        // arrow wrapper
        stockToolbar.arrowWrapper = createElement(DIV, {
            className: 'arrow-wrapper'
        });

        stockToolbar.arrowUp = createElement(SPAN, {
            className: 'arrow-up',
            innerHTML: '&rsaquo;'
        }, null, stockToolbar.arrowWrapper);

        stockToolbar.arrowDown = createElement(SPAN, {
            className: 'arrow-down',
            innerHTML: '&lsaquo;'
        }, null, stockToolbar.arrowWrapper);

        wrapper.insertBefore(stockToolbar.arrowWrapper, wrapper.childNodes[0]);
        stockToolbar.scrollButtons(guiOptions);
    }
});

H.Toolbar = function (options, chart) {
    this.init(options, chart);
};

H.Toolbar.prototype = {
    init: function (guiOptions, chart) {
        var _self = this,
            addButton = _self.addButton,
            addSubmenu = _self.addSubmenu,
            toolbar = doc
                .getElementsByClassName(guiOptions.toolbarClassName)[0],
            buttons = guiOptions.buttons,
            defs = guiOptions.definitions,
            button;

        _self.chart = chart;

        each(buttons, function (btnName) {
            if (btnName === 'separator') {
                button = addButton(toolbar, 'separator');
            } else {
                button = addButton(toolbar, defs[btnName], btnName);
                if (defs[btnName].items && defs[btnName].items.length > 0) {
                    // create submenu buttons
                    addSubmenu.call(_self, button, defs[btnName], guiOptions);
                }
            }
        });

        fireEvent(this, 'afterInit');
    },
    addSubmenu: function (parentBtn, buttons, guiOptions) {
        var _self = this,
            items = buttons.items,
            addButton = this.addButton,
            submenuArrow = parentBtn.submenuArrow,
            buttonWrapper = parentBtn.buttonWrapper,
            buttonWidth = getStyle(buttonWrapper, 'width'),
            wrapper = doc.getElementsByClassName(guiOptions.className)[0],
            allButtons = doc
                .getElementsByClassName(
                    guiOptions.toolbarClassName
                )[0].childNodes,
            topMargin = 0,
            submenuWrapper,
            firstSubmenuItem,
            submenuItems,
            submenuBtn;

        // create submenu container
        submenuWrapper = createElement(UL, {
            className: 'submenu-wrapper'
        }, null, buttonWrapper);

        // add items to submenu
        each(items, function (btnName) {
            // add buttons to submenu
            submenuBtn = addButton(submenuWrapper, buttons[btnName], btnName);

            addEvent(submenuBtn.mainButton, 'click', function () {
                _self.switchSymbol(this, buttonWrapper, true);
                submenuWrapper.style.display = 'none';
            });
        });

        firstSubmenuItem = submenuWrapper
                .querySelectorAll('li > .menu-item-btn')[0];

        this.switchSymbol(firstSubmenuItem, false);

        // show / hide submenu
        addEvent(submenuArrow, 'click', function () {
            // Erase active class on all other buttons
            each(allButtons, function (btn) {
                if (btn !== buttonWrapper) {
                    btn.classList.remove('current');
                    submenuItems = btn.querySelectorAll('.submenu-wrapper');

                    if (submenuItems.length > 0) {
                        submenuItems[0].style.display = 'none';
                    }
                }
            });

            // show menu
            if (buttonWrapper.className.indexOf('current') >= 0) {
                buttonWrapper.classList.remove('current');
                submenuWrapper.style.display = 'none';
            } else {
                // to calculate height of element
                submenuWrapper.style.display = 'block';

                topMargin = buttonWrapper.offsetTop;

                if (
                    (submenuWrapper.offsetHeight + topMargin) >
                    wrapper.offsetHeight
                ) {
                    topMargin -= (submenuWrapper.offsetHeight + topMargin) -
                        wrapper.offsetHeight;
                }

                css(submenuWrapper, {
                    top: topMargin + 'px',
                    left: buttonWidth + 'px'
                });

                buttonWrapper.className += ' current';
            }
        });
    },
    addButton: function (target, options, btnName) {
        var SPAN = 'span',
            LI = 'li',
            items = options.items,
            classMapping = H.Toolbar.prototype.classMapping,
            userClassName = options.className || '',
            mainButton,
            submenuArrow,
            buttonWrapper;

        buttonWrapper = createElement(LI, {
            className: classMapping[btnName] + ' ' + userClassName
        }, null, target);

        // single button
        mainButton = createElement(SPAN, {
            className: 'menu-item-btn'
        }, null, buttonWrapper);


        // submenu
        if (items && items.length > 1) {

            submenuArrow = createElement(SPAN, {
                className: 'submenu-item-arrow'
            }, null, buttonWrapper);

            // replace with arrow background (add it in CSS class)
            submenuArrow.innerHTML = '>';
        } else {
            mainButton.style['background-image'] = options.symbol;
        }

        // TODO: add icons!!!
        if (options === 'separator') {
            css(mainButton, {
                height: '25px',
                cursor: 'default',
                'text-align': 'center'
            });
            // TODO: replace with icon
            mainButton.innerHTML = '. . .';
        }

        return {
            buttonWrapper: buttonWrapper,
            mainButton: mainButton,
            submenuArrow: submenuArrow
        };
    },
    scrollButtons: function (guiOptions) {
        var toolbar = doc
                .getElementsByClassName(guiOptions.toolbarClassName)[0],
            wrapper = doc.getElementsByClassName(guiOptions.className)[0],
            arrowUp = doc.getElementsByClassName('arrow-up')[0],
            arrowDown = doc.getElementsByClassName('arrow-down')[0],
            toolbarHeight = toolbar.offsetHeight,
            wrapperHeight = wrapper.offsetHeight,
            targetY = 0,
            step = 0.2 * wrapperHeight; // 0.1 = 20%

        addEvent(arrowUp, 'click', function () {
            if (targetY > 0) {
                targetY -= step;
                toolbar.style['margin-top'] = -targetY + 'px';
            }
        });

        addEvent(arrowDown, 'click', function () {
            if (wrapperHeight + targetY <= toolbarHeight) {
                targetY += step;
                toolbar.style['margin-top'] = -targetY + 'px';
            }
        });
    },
    showHideToolbar: function () {
        var toolbar = doc.getElementsByClassName('menu-wrapper')[0],
            submenu = doc.getElementById('submenu'),
            showhideBtn = doc.getElementsByClassName('showhide-showbar')[0];

        // replace by icon
        showhideBtn.innerHTML = '<';

        // toggle menu
        addEvent(showhideBtn, 'click', function () {
            if (toolbar.className.indexOf('hide') >= 0) {
                toolbar.classList.remove('hide');
                submenu.style.display = 'block';
                showhideBtn.innerHTML = '<';
            } else {
                toolbar.className += ' hide';
                submenu.style.display = 'none';
                showhideBtn.innerHTML = '>';
            }
        });
    },
    switchSymbol: function (button, redraw) {
        var buttonWrapper = button.parentNode,
            buttonWrapperClass = buttonWrapper.classList.value,
            mainNavButton = buttonWrapper.parentNode.parentNode;

        // set class
        mainNavButton.classList = buttonWrapperClass;

        // set icon
        mainNavButton.querySelectorAll('.menu-item-btn')[0]
            .style['background-image'] = button.style['background-image'];

        // set active class
        if (redraw) {
            this.selectButton(mainNavButton);
        }
    },
    selectButton: function (btn) {
        if (btn.className.indexOf(activeClass) >= 0) {
            btn.classList.remove(activeClass);
        } else {
            btn.className += ' ' + activeClass;
        }
    },
    unselectAllButtons: function (btn) {
        var activeButtons = btn.parentNode.querySelectorAll('.' + activeClass);

        each(activeButtons, function (activeBtn) {
            if (activeBtn !== btn) {
                activeBtn.classList.remove(activeClass);
            }
        });
    },
    classMapping: {
        circle: 'highcharts-circle-annotation',
        rectangle: 'highcharts-rectangle-annotation',
        label: 'highcharts-label-annotation',
        segment: 'highcharts-segment',
        arrowSegment: 'highcharts-arrow-segment',
        ray: 'highcharts-ray',
        arrowRay: 'highcharts-arrow-ray',
        line: 'highcharts-infinity-line',
        arrowLine: 'highcharts-arrow-infinity-line',
        verticalLine: 'highcharts-vertical-line',
        horizontalLine: 'highcharts-horizontal-line',
        crooked3: 'highcharts-crooked3',
        crooked5: 'highcharts-crooked5',
        elliott3: 'highcharts-elliott3',
        elliott5: 'highcharts-elliott5',
        pitchfork: 'highcharts-pitchfork',
        fibonacci: 'highcharts-fibonacci',
        'parallel-channel': 'highcharts-parallel-channel',
        measure: 'highcharts-measure',
        verticalCounter: 'highcharts-vertical-counter',
        verticalLabel: 'highcharts-vertical-label',
        verticalArrow: 'highcharts-vertical-arrow',
        verticalDoubleArrow: 'highcharts-vertical-double-arrow',
        currentPriceIndicator: 'highcharts-current-price-indicator',
        flagCirclepin: 'highcharts-flag-circlepin',
        flagDiamondpin: 'highcharts-flag-diamondpin',
        flagSquarepin: 'highcharts-flag-squarepin',
        flagSimplepin: 'highcharts-flag-simplepin',
        zoomX: 'highcharts-zoom-x',
        zoomY: 'highcharts-zoom-y',
        zoomXY: 'highcharts-zoom-xy',
        typeLine: 'highcharts-series-type-line',
        typeOHLC: 'highcharts-series-type-ohlc',
        typeCandlestick: 'highcharts-series-type-candlestick',
        fullScreen: 'highcharts-full-screen',
        toggleAnnotations: 'highcharts-toggle-annotations'
    }
};