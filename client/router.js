//
// files router
//

new Import("/public")
    
    // libraries
    .js("/node_modules/eruda/eruda.js").then(() => eruda.init())
    
    .css("/node_modules/bootstrap/dist/css/bootstrap-utilities.min.css")
    .css("/node_modules/@fortawesome/fontawesome-free/css/all.min.css")
    .js("/node_modules/socket.io/client-dist/socket.io.min.js")
    .js("js/animate.js")
    .js("js/storage.js")
    
    
    // main files
    .js("js/main.js")
    .css("css/main.css")
    
    .js("js/socket/connect.js")
    
    
    // UI components
    .link("ui/layout/layout", "css,js")
    .link("ui/modal/modal", "css,js")
    .link("ui/button/button", "css")
    .link("ui/navbar/navbar", "css")
    .link("ui/fab/fab", "css")
    .link("ui/input/input", "css")
    .css("ui/utils.css")
    
    
    // layouts
    .link("layouts/auth/auth", "html,css,js")
    .js("layouts/auth/__login.js")
    .js("layouts/auth/__signup.js")
    .link("layouts/main/main", "html,css,js")
    .link("layouts/loading_modal/loading", "html,css,js")
    
    
    // start app
    .then(() => main());