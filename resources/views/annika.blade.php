<!DOCTYPE html>
<html lang="en">
	<head>
        <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="The next-generation UI framework for developing custom procedures, interchangeable web components, and interactive website templates.">
        <title>Annika - Demo</title>


        <link rel="preload" href="fonts/AlphaProta.woff2" as="font" crossorigin="anonymous">
        <link rel="preload" href="fonts/Pulstar.woff2" as="font" crossorigin="anonymous">
        <link rel="preload" href="fonts/Inconsolata-Regular.woff2" as="font" crossorigin="anonymous">
        <link rel="preload" href="fonts/Lato-Medium.woff2" as="font" crossorigin="anonymous">
        

        <link rel="stylesheet" href="css/annika-min.css" type="text/css" media="print" onload="this.media='all'"/>
        <script id='annika.js' src="js/annika/annika-min.js"></script>
        <link rel="stylesheet" href="css/croppie.css" type="text/css" media="print" onload="this.media='all'"/>
        <link rel="stylesheet" href="css/docs-min.css" type="text/css" media="print" onload="this.media='all'"/>
        <link rel="stylesheet" href="css/app.css" type="text/css" media="print" onload="this.media='all'"/>
   


    </head>
    <body id="body" class='flexitc'>

         <script>
            // 'libs/crypto-js.min.js'
            let scripts = ['annika/annika-auth-min.js', 'libs/croppie.js', 'libs/aesjs.js', 'libs/bitcoin.js', 'app-min.js', 'docs-min.js'];
            const loader = new ann.ScriptLoader({ folder: 'js', src: scripts})
            loader.load();

        </script> 
    </body>
</html>
