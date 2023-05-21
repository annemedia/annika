<!DOCTYPE html>
<html lang="en">
	<head>
    <meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Annika - Demo</title>
        
        <link rel="stylesheet" href="css/annika.css" type="text/css" />
        <script id='annika.js' src="js/annika/annika.js"></script>
        <link rel="stylesheet" href="css/croppie.css" type="text/css" />
        <link rel="stylesheet" href="css/docs.css" type="text/css" />
        <link rel="stylesheet" href="css/app.css" type="text/css" />

    </head>
    <body id="body" class='flexitc'>
         <script>
            // 'libs/crypto-js.min.js'
            let scripts = ['annika/annika-auth.js', 'libs/croppie.js', 'libs/aesjs.js', 'libs/sha256.js', 'libs/bitcoin.js', 'app.js', 'docs.js'];
            const loader = new ann.ScriptLoader({ folder: 'js', src: scripts})
            loader.load();

        </script> 
    </body>
</html>
