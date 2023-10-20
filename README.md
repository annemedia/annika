# Annika - Command Interface

Anne Media introduces the grace of Annika - Command Interface for building user interfaces. An efficient vanilla JavaScript solution, an AI-ready protocol, ideal for creating interchangeable web components and interactive website templates, drawing your attention to a logical set of commands and procedures within the scope of one master function. The Subroutine.

Web standards break down business logic into three distinct workflows - HTML, CSS, and JavaScript. The separation hinders creativity and distracts focus as web builders must continually navigate through multiple files and tally the workflows together to produce desired results. With our Subroutine, we attain a concise, easily adaptable overview and can associate particular business logic within the scope of a closure function that comprises a whole widget.

The more you build, the less you code. Annika delivers a flexible coding experience without the limitations of a framework. It's your configuration and business logic, constructing interoperable components developers can share and use. In contrast to other established frameworks commonly used for web development, building Annika interfaces, we achieved up to a 75% reduction in code footprint.

Hands-on. Give Annika a try...

## Prerequisites

-   PHP '>8.0'
```
sudo apt install openssl php php-cli php-common php-fpm php-gd php-bcmath php-curl php-xml php-json php-mbstring php-tokenizer php-xml php-zip php-mysql php-mongodb
```
-   MongoDB

follow the instructions at [https://www.mongodb.com/docs/manual/administration/install-community](https://www.mongodb.com/docs/manual/administration/install-community) 

-   composer
```
  sudo apt install curl git unzip
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" 
  php composer-setup.php --install-dir=/usr/local/bin --filename=composer
  chmod +x /usr/local/bin/composer
```

## Initiation

To learn Annika, our [online documentation](https://annika.anne.media) is the best place to go.

To see a demo of this repository, visit [https://annika-demo.anne.media](https://annika-demo.anne.media).

-   [Download the latest release](https://github.com/annemedia/annika/releases)
-   Extract the archive and take note of the following folders and files in the main directory.

LARAVEL BACK END

```
.env.example
resources/views/annika.blade.php
routes/web.php
app/Models/Identity.php
app/Http/Controllers/RegisterController.php
app/Http/Controllers/UserController.php
```

ANNIKA FRONT END

```
public/js, css, img, fonts
```

-   To begin, first, create a copy of the .env.example file and rename it to .env and configure your MONGO_DB_CONNECTION variables.
-   In your terminal/command prompt run:

```
composer install
php artisan key:generate
```

- To see an app in the web browser, in the terminal run...

```
php artisan serve
```

You can now access Annika's demo app at `http://127.0.0.1:8000`

-   Familiarize yourself with the `public/css/annika.css` library. Note that the purpose of our CSS library is to serve as an editable template rather than an extensive selection of CSS classes.
-   See `public/js/app.js` SPA demo file, which can also serve as a template you can use.

## Dependencies

Some of Annika's functions depend on third-party libraries. Annika's registration and authentication modules `js/annika/annika-auth.js` and `ann.encryptRoutine` and `ann.decryptRoutine` functions included in the `js/annika/annika.js` library depend on `js/libs/bitcoin.js`, and `js/libs/aesjs.js`, and the `ann.createCroppie` function depend on `js/libs/croppie.js`.

## Features
### Asynchronous Script Loader

In the `resources/views/annika.blade.php` file, you will find Annika's `ScriptLoader`, which is pre-configured to load the dependencies by default. If you don't need some of the scripts, you may exclude them. Should you need to load more scripts, simply add them to the `scripts` array variable. Use the ScriptLoader for preloading scripts or post-loading scripts on user interaction. You will particularly appreciate this solution for its performance and simplicity if you ever worked with RequireJS.

```js
let scripts = ['annika/annika-auth-min.js', 'libs/croppie.js', 'libs/aesjs.js', 'libs/bitcoin.js', 'app.js'];
const loader = new ann.ScriptLoader({ folder: 'js', src: scripts})
loader.load();
```

### The Subroutine

On this page, we include a Subroutine example to give a first-contact overview of the Command Interface. To learn how to use this command structure, visit our [online documentation](https://annika.anne.media).

```js
async function maingui() {

    let var1 = "Lorem Ipsum"
    let var2 = "Lorem Ipsum"
    let logosrc = 'img/demo.svg';
    let menu = ['MENU ITEM 1', "MENU ITEM 2", "MENU ITEM 3", "AUTH AREA"];
    let maininfo = [function1, function2, function3, ann.cl.auth.authModule]
   
    let c = ann.declareVars(11);
    c.v1 = 'class1', c.v2 = 'class2 anotherclass' //, and so on.
    let css = ann.json2array(c);

    let cl = ann.declareVars(11);
    cl.v8 = ann.onMenuClick;
    let clb = ann.json2array(cl);

    let pr = ann.declareVars(11);
    pr.v8 = ann.get.menuCallback;
    let par = ann.json2array(pr);

    return ann.Subroutine('maingui',
        // Command Array
        ['div_y', 'div_y', 'header_x', 'img','$3_div', 'h1', '$5_h2', '$3_menu_y', '$2_div_y', 'info_y', addfooter],
        // HTML Content Array
        [null,null,null,logosrc,null,var1, var2, menu,null, maininfo, null],
        // CSS Array
        [...css],
        // Callbacks Array
        [...clb],
        // Callback Parameters Array
        [...par],
    );

    async function addfooter() {

        let footer = '&copy;' + new Date().getFullYear() + '&nbsp;Here We Are.&nbsp;All Rights Reserved.';
        
        let css1 = 'h-30 bottom bg-black-8';
        let css2 = 'jself-start w-100'
        let terms = 'Terms'
       
        return ann.Subroutine('footer',
            ['footer_x', 'div', '$1_div'],
            [null,footer,terms,],
            [css1,css2,null],
        );
    }
}
```
### Trustless Registration & Authentication

Annika delivers a complete registration and authentication module and uses a cryptographic process to register the user's identity. The module is provided separately from the `annika.js` library as a part of the `js/annika/annika-auth.js` file, and depending on the required business logic, it may require a custom adaption.

The registration process issues the user with a private key (WIF). We do not see nor keep a copy of the WIF but store the WIF encrypted with a session password in localstorage. The user is asked to retain the WIF and keep it safe. The WIF is used to encrypt the pub key alongside a server message, which produces an identity key (IK) we store on our server but we do not show the IK to the user directly. Each time we need to verify the user's identity, we transmit the identity key over to the client side. The user retrieves their encrypted WIF from the localstorage, decrypts it with their session password, decrypts the IK with their WIF, and transmits back a hash of the server message it contains, and thus we can validate the user's identity on the server side. Optionally, the user may choose to keep the WIF encrypted with a custom password in our custody. We do not keep a copy of the password. 

To learn how to make use of these modules, visit our [online documentation](https://annika.anne.media).

### Annika API

```js
ann.addClasses(elorid, classesstring)
```
```js
ann.collapsible(openfirst = ann.get.collapsiblefirstopen, collapsenonactive = ann.get.collapsenonactive)
```
```js
ann.copyToClipboard()
```
```js
ann.createCroppie(command, parent)
```
```js
ann.createListener(elorid, type, callback, params)
```
```js
ann.declareVars(count)
```
```js
ann.downloadBase64File(contentBase64, fileName)
```
```js
ann.executeFunctionByName(functionName)
```
```js
ann.fetch(url, dataset, method = 'GET', content = 'application/json')
```
```js
ann.getColors()
```
```js
ann.getCountries()
```
```js
ann.getCSSProp(propName, element = document.documentElement)
```
```js
ann.getDaysArray(start, end)
```
```js
ann.getPartString(str, chr, index)
```
```js
ann.handleUnload(callback)
```
```js
ann.hovertips()
```
```js
ann.isVisible(elorid)
```
```js
ann.json2array(json)
```
```js
ann.get.menuCallback(id, e)
```
```js
ann.modal(title, content, buttoncount = 2, parentel = document.body, pwmodal = 0)
```
```js
ann.modalResponse(timeout = 100000000)
```
```js
ann.modaltips(parentelorid)
```
```js
ann.onMenuClick(id, e, callback, opencollapsible = ann.get.collapsiblefirstopen)
```
```js
ann.cl.onresize.callback(id, e)
```
```js
ann.rangeSlider(el, parent, callback, percentrange = 100, isInputVisible = false, mininput = 0)
```
```js
ann.require(selector, getall = false)
```
```js
ann.requireObject(object, timeout = 3000, reload = false)
```
```js
ann.returnNumber(str)
```
```js
ann.runLast(functionorarrayoffunctions, paramsorofarrayparams, delay = ann.get.lastRunInterval)
```
```js
ann.ScriptLoader({ folder: 'js', src: scripts })
```
```js
ann.setCSSProp(propName, value, element = document.documentElement)
```
```js
ann.show(elorid, show = true)
```
```js
ann.sleep(milliseconds)
```
```js
ann.toggleFade(elorid)
```
```js
ann.toggleSlide(elorid)
```
```js
ann.waitForGlobal(key, callback)
```
```js
ann.newNeuron()
```
```js
ann.getPublicAddressFromWif(wif)
```
```js
ann.encryptRoutine(item, pw, servermsg)
```
```js
ann.decryptRoutine(item, pw, servermsg, encrypted_count)
```
```js
ann.cl.reg.makeReg(callback1, callback2)
```
```js
ann.cl.auth.authModule()
```
```js
ann.cl.auth.callback(msg, ik, wifkey, count)
```
```js
ann.cl.auth.handleAuth(supresswarning = false)
```
To learn how to use the API functions, visit our [online documentation](https://annika.anne.media).


If you love Annika, please add our minibanner to your website.

```
<a href='https://annika.anne.media' target='_blank'><img src='https://annika.anne.media/img/annikaminibanner.png'/></a>
```
 ![alt text](https://annika.anne.media/img/annikaminibanner.png)

## Buy us a bun & coffee

XMR: 89Nz71j5WmCEeWAQEow3SdXzhwfbybctGJ2TGDKYYCwzYahHTtSTFnN9ij6SZD3j5S3rUnHJpUZSqFTvjGNakXpo8ySqUYw

BCH: qrgsxlg8utlvd0mjl289d2nq79jxr0vwgsf3t94nqu

BTC: bc1qke2vwv7hnufcj6rc2yj6p90regsl4gh4pfw3na

Thank you 💜

## Social

Gives us a follow at [@annemedia_web](https://twitter.com/annemedia_web) to keep in touch with the lastest news on our development.
