        var WebKit = document.createElement("div")
        WebKit.id = "web-container"
        WebKit.className = "Webview empty"

        document.body.appendChild(WebKit)
        var Plugins = document.createElement("div") 
        Plugins.id = "plugins"
        Plugins.className = "Web-controls-plugins"

        WebKit.appendChild(Plugins)
        const WebBrowser = {
            web: {
                view: document.getElementById("web-container"),
            },
            controls: {
                init(text) {
                        // Verification style obrigatory
                        if (WebKit.className === "finish") {
                            WebKit.classList.remove('finish')
                            WebKit.classList.remove('empty')
                            WebKit.classList.add('init')
                        }
                        else {
                            WebKit.classList.add('processing')
                        }
                        var init = document.createElement("div")
                        init.id = "Web-requisits"
                        init.className = "Web-controls"
                        var life = document.createElement("div")
                        life.id = "Web-controls-init"
                        life.className = "Web-requisits"

                        var kiwi = document.createElement("p")
                        if (text === "yes") {
                        kiwi.textContent = "Thankyou. WebViews all rights reserved©"}
                        kiwi.id = "Web-controls-text"
                        kiwi.className = "Web-controls-textThank"


                        WebKit.appendChild(init)
                        init.appendChild(life)
                        life.appendChild(kiwi)
                },
                createPlugin: {
                        init() {
                            var MyPlugin = document.createElement("div")
                            MyPlugin.id = "Myplugin"
                            MyPlugin.className = "Web-controls-Myplugin"

                            document.getElementById("Web-requisits").appendChild(MyPlugin)
                        },
                        textFloating() {
                            return document.getElementById("Myplugin")
                        },
                        obj: {
                            canvasid: null,
                            p: null,
                            iniobjs() {
                                var canvas = document.createElement("canvas")
                                canvas.id = "Myplugin-canvas"
                                canvas.className = "Web-MyPlugin-canvas"
                            },
                            rect() {

                            }
                        }

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
                    Plugins.appendChild(element)
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
                        if (WebKit.className === "finish") {
                            WebKit.classList.remove('finish')
                            WebKit.classList.remove('empty')
                            WebKit.classList.add('processing')
                        }
                        else {
                            WebKit.classList.add('processing')
                        }
                        var install = document.createElement("div")
                        install.textContent = "Use WebBrowser.install.CDATAFRAMESDRAW.rect(x,y,w,h) to rect"
                        install.className = "PLUGIN-CDATAFRAMESDRAW-TEXTINIT"

                        Plugins.appendChild(install)
                    }
            },
                WSSENDS() {
                    localStorage.setItem("Wsstoraje", "SSTORAGE EMPTY")
                }
            }
        }
        export { WebBrowser }
