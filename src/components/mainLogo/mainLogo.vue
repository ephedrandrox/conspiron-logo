<template>
    <transition appear name="mainLogoIntro">
        <div class="MainLogo">
            <svg id="MainLogoSVG"
                 width="213.24657mm"
                 height="200mm"
                 viewBox="0 0 400 400"
                 version="1.1"
            >
                <defs>
                    <linearGradient id="logoPathCGradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop v-bind:offset="logoCGradient.fill.violetStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.violetStop.color,
                                        stopOpacity:logoCGradient.fill.violetStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.redStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.redStop.color,
                                        stopOpacity:logoCGradient.fill.redStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.orangeStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.orangeStop.color,
                                        stopOpacity:logoCGradient.fill.orangeStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.yellowStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.yellowStop.color,
                                        stopOpacity:logoCGradient.fill.yellowStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.greenStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.greenStop.color,
                                        stopOpacity:logoCGradient.fill.greenStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.blueStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.blueStop.color,
                                        stopOpacity:logoCGradient.fill.blueStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.indigoStop.offset"
                              v-bind:style="{stopColor: logoCGradient.fill.indigoStop.color,
                                        stopOpacity:logoCGradient.fill.indigoStop.opacity} "/>

                        <stop v-bind:offset="logoCGradient.fill.violetStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.violetStop.color,
                                        stopOpacity:logoCGradient.fill.violetStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.redStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.redStop.color,
                                        stopOpacity:logoCGradient.fill.redStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.orangeStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.orangeStop.color,
                                        stopOpacity:logoCGradient.fill.orangeStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.yellowStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.yellowStop.color,
                                        stopOpacity:logoCGradient.fill.yellowStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.greenStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.greenStop.color,
                                        stopOpacity:logoCGradient.fill.greenStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.blueStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.blueStop.color,
                                        stopOpacity:logoCGradient.fill.blueStop.opacity} "/>
                        <stop v-bind:offset="logoCGradient.fill.indigoStop.secondOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.indigoStop.color,
                                        stopOpacity:logoCGradient.fill.indigoStop.opacity} "/>

                        <stop v-bind:offset="logoCGradient.fill.violetStop.thirdOffset"
                              v-bind:style="{stopColor: logoCGradient.fill.violetStop.color,
                                        stopOpacity:logoCGradient.fill.violetStop.opacity} "/>
                    </linearGradient>
                    <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1,1"/>
                    </filter>
                </defs>
                <g
                        id="LogoPathLayer"
                        transform-origin="50% 50%"
                        transform="translate(0,0) ">

                    <path
                            v-bind:d="logoCPath"
                            id="logoPathCUnder"/>

                    <path
                            v-on:click="animateCGradient"
                            v-bind:d="logoCPath"
                            id="logoPathC"/>

                    <path
                            id="logoPathSwitchUnder"
                            d="m 195,105 a 12.597238,17.764881 0 0 0 -12.59723,-17.76488 h -82.30194 a 12.597238,17.764881 0 0 0 -12.59729,17.76488 12.597238,17.764881 0 0 0 12.59729,17.76488 h 82.30194 a 12.597238,17.764881 0 0 0 12.59723,-17.76488 z"
                    />

                    <path v-on:click="loginLinkClicked"
                          id="logoPathSwitch"
                          d="m 195,105 a 12.597238,17.764881 0 0 0 -12.59723,-17.76488 h -82.30194 a 12.597238,17.764881 0 0 0 -12.59729,17.76488 12.597238,17.764881 0 0 0 12.59729,17.76488 h 82.30194 a 12.597238,17.764881 0 0 0 12.59723,-17.76488 z"
                    />

                    <text id="switchLabel" x="105" y="110">Conspiron</text>
                    <mask id="logoPathSwitchMask">
                        <path style="stroke: none;"
                              id="logoPathSwitchClipPath"
                              d="m 195,105 a 12.597238,17.764881 0 0 0 -12.59723,-17.76488 h -82.30194 a 12.597238,17.764881 0 0 0 -12.59729,17.76488 12.597238,17.764881 0 0 0 12.59729,17.76488 h 82.30194 a 12.597238,17.764881 0 0 0 12.59723,-17.76488 z"
                        />

                    </mask>

                </g>
            </svg>
        </div>
    </transition>
</template>
<script>
    export default {
        name: "MainLogo",
        data: function () {
            return {
                logoCGradientAnimationTime: 0,
                logoCGradientAnimationPlaying: false,
                gradientOpacity: {},
                logoCPoints: {
                    xOffset: 165,
                    yOffset: 45,
                    path: [{
                        arc: {
                            xRadius: 17.135636, yRadius: 17.103725,
                            xAxisRotation: 0,
                            largeArcFlag: 0,
                            sweepFlag: 0,
                            xEnd: -5.67619, yEnd: -12.61843
                        }
                    },
                        {
                            curve: [
                                {x: -17.75008, y: -15.93159},
                                {x: -41.39244, y: -25.70904},
                                {x: -67.09225, y: -25.70904},
                                {x: -55.06792, y: 0},
                                {x: -100.18545, y: 44.91409},
                                {x: -100.18545, y: 99.99888},
                                {x: 0, y: 54.96538},
                                {x: 44.99793, y: 100.00112},
                                {x: 100.18545, y: 100.00112},
                                {x: 25.69981, y: 0},
                                {x: 49.34217, y: -9.77745},
                                {x: 67.09225, y: -25.70904}
                            ]
                        },
                        {
                            arc: {
                                xRadius: 17.135636, yRadius: 17.103725,
                                xAxisRotation: 0,
                                largeArcFlag: 0,
                                sweepFlag: 0,
                                xEnd: 1.28295, yEnd: -24.15458
                            }
                        },
                        {
                            arc: {
                                xRadius: 17.135636, yRadius: 17.103725,
                                xAxisRotation: 0,
                                largeArcFlag: 0,
                                sweepFlag: 0,
                                xEnd: -24.1996, yEnd: -1.28052
                            }
                        },
                        {
                            curve: [
                                {x: -11.72322, y: 10.52215},
                                {x: -27.15054, y: 16.93669},
                                {x: -44.1756, y: 16.93669},
                                {x: -36.65944, y: 0},
                                {x: -65.91418, y: -29.31114},
                                {x: -65.91418, y: -65.79367},
                                {x: 0, y: -36.59117},
                                {x: 29.36359, y: -65.79143},
                                {x: 65.91418, y: -65.79143},
                                {x: 17.02506, y: 0},
                                {x: 32.45238, y: 6.41454},
                                {x: 44.1756, y: 16.93669},
                            ]
                        },
                        {
                            arc: {
                                xRadius: 17.135636, yRadius: 17.103725,
                                xAxisRotation: 0,
                                largeArcFlag: 0,
                                sweepFlag: 0,
                                xEnd: 24.1996, yEnd: -1.28056
                            }
                        },
                        {
                            arc: {
                                xRadius: 17.135636, yRadius: 17.103725,
                                xAxisRotation: 0,
                                largeArcFlag: 0,
                                sweepFlag: 0,
                                xEnd: 4.39324, yEnd: -11.53611
                            }
                        }
                    ],

                    c: {
                        begin: {
                            x: 17.135636,
                            y: 17.103725
                        },
                        middle: {
                            x: -25.70904,
                            y: 17.103725
                        }
                    }

                }
            }
        },
        computed: {
            logoCPath: function () {
                return this.buildPathFromPoints(this.logoCPoints);
                //By using this computed function we could change the data in
                //this.logoCPoints to animate the path
            },
            logoCGradient: function () {
                let maxOpacity = .9;
                let minOpacity = .6;
                let offsetBase = (100 * this.logoCGradientAnimationTime);
                let opacityBase = .8;

                return {
                    fill:
                        {
                            violetStop:
                                {
                                    color: `rgb(200, 0, 200)`,
                                    opacity: (this.gradientOpacity.violet = this.fluctuateValue(this.gradientOpacity.violet, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 100}%`,
                                    secondOffset: `${offsetBase}%`,
                                    thirdOffset: `${offsetBase + 100}%`,
                                },

                            redStop:
                                {
                                    color: `rgb(200, 0, 0)`,
                                    opacity: (this.gradientOpacity.red = this.fluctuateValue(this.gradientOpacity.red, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 86}%`,
                                    secondOffset: `${offsetBase + 14}%`
                                },

                            orangeStop:
                                {

                                    color: `rgb(200, 100, 0)`,
                                    opacity: (this.gradientOpacity.orange = this.fluctuateValue(this.gradientOpacity.orange, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 72}%`,
                                    secondOffset: `${offsetBase + 28}%`
                                },

                            yellowStop:
                                {

                                    color: `rgb(200, 200, 0)`,
                                    opacity: (this.gradientOpacity.yellow = this.fluctuateValue(this.gradientOpacity.yellow, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 58}%`,
                                    secondOffset: `${offsetBase + 42}%`
                                },

                            greenStop:
                                {

                                    color: `rgb(0, 200, 0)`,
                                    opacity: (this.gradientOpacity.green = this.fluctuateValue(this.gradientOpacity.green, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 44}%`,
                                    secondOffset: `${offsetBase + 56}%`
                                },

                            blueStop:
                                {

                                    color: `rgb(0, 0, 200)`,
                                    opacity: (this.gradientOpacity.blue = this.fluctuateValue(this.gradientOpacity.blue, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 30}%`,
                                    secondOffset: `${offsetBase + 70}%`
                                },

                            indigoStop:
                                {

                                    color: `rgb(0, 200, 200)`,
                                    opacity: (this.gradientOpacity.indigo = this.fluctuateValue(this.gradientOpacity.indigo, maxOpacity, minOpacity)),
                                    offset: `${offsetBase - 16}%`,
                                    secondOffset: `${offsetBase + 84}%`
                                }

                        }
                };
            },
            mainLogoBackgroundOpacity: function () {
                return (this.logoCGradientAnimationTime * .2) + .8;
            }

        },
        methods: {
            fluctuateValue: function (currentValue, maxValue, minValue) {

                if (currentValue === undefined) {
                    currentValue = minValue;
                }
                let opacityOffset = Math.floor(Math.random() * .2) + .003;

                if (currentValue <= maxValue && currentValue >= minValue) {
                    opacityOffset *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
                } else if (currentValue >= maxValue) {
                    opacityOffset *= -1;
                }

                return currentValue + opacityOffset;
            },
            animateCGradient: function () {
                if (!this.logoCGradientAnimationPlaying) {
                    this.logoCGradientAnimationPlaying = true;
                } else {
                    this.logoCGradientAnimationPlaying = false;
                }

                let nextAnimation = function () {
                    this.logoCGradientAnimationTime += .001;

                    if (this.logoCGradientAnimationPlaying == true) {
                        if (this.logoCGradientAnimationTime <= .99) {
                            window.setTimeout(nextAnimation, 20);
                        } else {
                            this.logoCGradientAnimationTime = 0;
                            window.setTimeout(nextAnimation, 20);
                        }
                    } else {
                        return;
                    }
                }.bind(this);

                nextAnimation();

            },
            loginLinkClicked: function () {
                location.href = "https://www.conspiron.com/logins/";
            },
            buildPathFromPoints: function (pointObject) {
                let pathPoints = pointObject;
                let pathString = "";

                pathString += `m ${pathPoints.xOffset},${pathPoints.yOffset} `;

                pathPoints.path.forEach(function (segment) {

                    if (segment.arc) {
                        let arcCommand = "a"
                        if (segment.positionPerspective === "absolute") {
                            arcCommand = "A";
                        }
                        pathString += `${arcCommand} ${segment.arc.xRadius},${segment.arc.yRadius} ${segment.arc.xAxisRotation} ${segment.arc.largeArcFlag} ${segment.arc.sweepFlag} ${segment.arc.xEnd},${segment.arc.yEnd} `;

                    } else if (segment.curve) {


                        let curveCommand = "c "
                        if (segment.positionPerspective === "absolute") {
                            curveCommand = "C ";
                        }
                        pathString += curveCommand;

                        segment.curve.forEach(function (point) {
                            pathString += `${point.x},${point.y} \n`;
                        });
                    }

                });
                pathString += ` z`;

                return pathString;
            },
            getValueTransition: function (beginValue, endValue, amount) {
                return beginValue + ((endValue - beginValue) * amount);
            }
        },
        mounted: function () {
            this.animateCGradient();
        }
    };
</script>
<style>
    .MainLogo {
        position: absolute;
        top: 50%;
        left: 50%;

        background: none;
        color: white;
        width: 400px;
        height: 400px;
        transform: perspective(0) translateX(-50%) translateY(-50%);
        text-align: center

    }

    #switchLabel {
        font-size: 18px;
        fill: url(#logoPathCGradientFill);
        stroke: url(#logoPathCGradientFill);
        pointer-events: none;

    }

    #logoPathCUnder {
        fill: #8c8c8c;
        stroke-width: 3px;
        stroke: black;

        filter: url(#blurFilter);

    }

    #logoPathC {
        fill: url(#logoPathCGradientFill);
        stroke-width: 2px;
        color: white;
        stroke: black;
        cursor: pointer;


    }

    #logoPathC:hover {
        filter: url(#blurFilter);
    }

    #logoPathSwitch {
        fill: black;
        stroke-width: 2px;
        color: white;
        cursor: pointer;
        stroke: black;

    }

    #logoPathSwitchUnder {
        fill: rgba(0, 0, 0, 0.96);
        stroke-width: 2px;
        color: black;
        cursor: pointer;
        stroke: url(#logoPathCGradientFill);
        filter: url(#blurFilter);
    }

    #logoPathSwitch:hover {
        mask: url("#logoPathSwitchMask");
        fill: url(#logoPathCGradientFill);
    }

    .mainLogoIntro-enter-active, .mainLogoIntro-leave-active {
        transition: opacity 3s ease-in;
    }

    .mainLogoIntro-enter, .mainLogoIntro-leave-to {
        opacity: 0;
    }
</style>