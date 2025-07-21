import * as WebKit from "https://cdn.jsdelivr.net/gh/ppauloa37/WebBrowser@main/Plugin/webkit.js"
var WebBrowser = {
            web: {
                view: document.getElementById("web"),
                createPlugin: {
                        textFloating: document.getElementById("web"),
                }
            },
            install: {
                SearchLate: {
                    algoritmy(List, ServiceName,    Plataform) {
                        // Verification style obrigatory
                        if (WebKit.className === "finish") {
                            WebKit.classList.remove('finish')
                            WebKit.classList.add('init')
                        }
                        else {
                            WebKit.classList.add('processing')
                        }
                        //Code plugin
                        var inputsearch = document.createElement('input')
                        inputsearch.id = "Searchs";
                        inputsearch.className = "Plugin-SearchLate-inputsearch";
                        inputsearch.type = "search"

                        WebKit.appendChild(inputsearch);
                        for(var infinity = 0; infinity > List.length; infinity++) {
                            
                        }
                    }
                },
                CDATAFRAMESDRAW: {
                    rect(x,y,w,h) {
                    var element = document.createElement("div")
                    element.id = "MyCanvas"
                    element.className = "PLUGIN-CDATAFRAMESDRAW-CANVAS"
                    WebKit.appendChild(element)
                    WebKit.classList.remove('empty')
                    WebKit.classList.add('prossecing')

                    var canvas = document.createElement("canvas")
                    canvas.id = "CanvasDraw-"
                    canvas.className = "PLUGIN-CDATAFRAMESDRAW-DRAW"
                    var p = canvas.getContext("2d")
                    p.fillRect(x,y,w,h)

                    element.appendChild(canvas)
                WebKit.classList.remove('prossecing')
                    WebKit.classList.add('finish')
                    },
                    init() {
                        var install = document.createElement("div")
                        install.textContent = "Use WebBrowser.install.CDATAFRAMESDRAW.rect(x,y,w,h) to rect"
                        install.className = "PLUGIN-CDATAFRAMESDRAW-TEXTINIT"

                        WebKit.appendChild(install)
                    }
            },
                WSSENDS() {
                    localStorage.setItem("Wsstoraje", pass)
                }
            }
        }
