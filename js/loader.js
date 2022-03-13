(function() {
    document.getElementsByName('head')
    const files = ['lang', 'data', 'main'];
    const date = new Date();
    const timeCache = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0).getTime();
    files.forEach(function(file) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/' + file + '.js?' + timeCache ;

        document.head.appendChild(script);

    })
})();