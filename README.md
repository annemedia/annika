# Annika - Command Interface

Anne Media introduces the grace of Annika - Command Interface for building user interfaces. An efficient vanilla JavaScript solution, an AI-ready protocol, ideal for creating interchangeable web components and interactive website templates, drawing your attention to a logical set of commands and procedures within the scope of one master function. The Subroutine.

Web standards break down business logic into three distinct workflows - HTML, CSS, and JavaScript. The separation hinders creativity and distracts focus as web builders must continually navigate through multiple files and tally the workflows together to produce desired results. With our Subroutine, we attain a concise, easily adaptable overview and can associate particular business logic within the scope of a closure function that comprises a whole widget.

The more you build, the less you code. Annika delivers a flexible coding experience without the limitations of a framework. It's your configuration and business logic, constructing interoperable components developers can share and use. In contrast to other established frameworks commonly used for web development, building Annika interfaces, we achieved up to a 75% reduction in code footprint.

Hands-on. Give Annika a try...

## Prerequisites

-   PHP '>8.0'
-   MongoDB
-   composer

## Initiation

To learn Annika, our [online documentation](https://annika.anne.media) is the best place to go.

To see a demo of this repository, visit [https://annika-demo.anne.media](https://annika-demo.anne.media).

-   [Download the latest release](https://github.com/annemedia/annika/releases)
-   Extract the zip file and take note of the following folders and files in the main directory.

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
-   Familiarize yourself with the `css/annika.css` library. Note that the purpose of our CSS library is to serve as an editable template rather than an extensive selection of CSS classes.
-   See `public/js/app.js` SPA demo file, which can also serve as a template you can use.

## Dependencies

Some of Annika's functions depend on third-party libraries. Annika's registration and authentication modules `js/annika/annika-auth.js` and `ann.encryptRoutine` and `ann.decryptRoutine` functions included in the `js/annika/annika.js` library depend on `js/libs/bitcoin.js`, `js/libs/aesjs.js`, and `js/libs/sha256.js`, and the `ann.createCroppie` function depend on `js/libs/croppie.js`.

## Features
### Asynchronous Script Loader

In the `index.html`, you will find Annika's `ScriptLoader`, which is pre-configured to load the dependencies by default. If you don't need some of the scripts, you may exclude them. Should you need to load more scripts, simply add them to the `scripts` array variable. Use the ScriptLoader for preloading scripts or post-loading scripts on user interaction. You will particularly appreciate this solution for its performance and simplicity if you ever worked with RequireJS.

```js
let scripts = ['annika/annika-auth-min.js', 'libs/croppie.js', 'libs/aesjs.js', 'libs/sha256.js', 'libs/bitcoin.js'];
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

## Development Resources

You will NOT need node.js, Annika is client end JavaScript, and works best with PHP for any backend requirements via fetch API.

You'll see we included our [annika.anne.media](https://annika.anne.media) SPA in the `app-resources/annika.anne.media` folder. You can use the files in reference, and adapt any components to suit your needs. When you write a Subroutine, develop a component, widget or module in Annika, you can share it with other developers by submitting a pull request from your Annika's fork into the app-resources/yourdomain.com folder. If and when your project goes live, we will link your website at Anne Media directory web page, referencing all known websites built on Annika.

## Collaboration

We are Anne Media - a non-corporate, self-established collective, a rendezvous of loosely coupled professionals who aim to lay the foundation of a new World Wide Web and deploy solutions that enable a world without corporations, borders, or boundaries, a Semantic Web owned by you. In collaboration with Anne Network, we build competitive global solutions and strive to deliver competitive products and services that will disrupt the existing Big Data market.

The Big Data market is monopolized almost exclusively by international corporations serving as trusted third parties who process our data for profit and protect our data in compliance with privacy laws. While the business models result in widespread free-of-charge services, in lieu of service, individuals and organizations relinquish their authority over the information and products produced from the data and give away digital value and rights to profit.

In order to counteract the economic imbalance, with Annika and ANNE protocols, we have the right tools to build a global network where individuals own the content they post on social media or enter into a search engine, where quality data grow in value, empowering the masses to earn a regular profit from everyday online activities. Opportunities arise in a collaborative, permissionless environment where everyone can join in building one database, share data, and use the same data resource, which software builders can query and compete in building interoperable user-end applications. The collective nature of the ecosystem allows cross-app content compatibility, empowering the individual to carry it across the net.

Our GitHub repository is a mirror of our private subversion repository and we only use GitHub for stable public releases. Annika is not a typical open-source project. We offer equity/royalty-based partnership opportunities, invite you to learn more about our mission at [annika.anne.media](https://annika.anne.media), and consider joining us in collaboration laying the foundation of Semantic Web.

## Collaborative Public License

Open-source public licenses are nobly altruistic but also a hindrance to collaboration, as the copyright owners often stand to gain no to little benefit from simply sharing code to the public domain.

In advancement of collaborative spirit, we hereby dedicate any and all copyright interest in Anne Media software to Anne Media Patrons. We make this dedication for the benefit of the public at large and we intend this dedication to be an overt act of dissemination in perpetuity of all present and future rights to Anne Media software.


```
Copyright (c) 2023 Anne Media Patrons

Permission is hereby granted to any Patron obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software 
without restriction, for any purpose, commercial or non-commercial, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, subject to the following conditions:

0.1) Patron is a fractional copyright owner of the Software who acquired the Patron 
Rights via the Interchange Offer (the "Offer") at Anne Media.

0.2) The Offer is a current offer addressed to an unlimited number of individuals who 
can enter into an Agreement on the terms contained in the Offer and Anne Media Terms.

0.3) Patron Rights are granted for a lifetime and subject to the Offer.

1) The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

2) This License does not grant permission to use the trade names, trademarks, service 
marks, or product names of the Founding Patrons, except as required for reasonable and
customary use in describing the origin of the Work and reproducing the content of the
copyright notice file.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.

Everyone is permitted to copy and distribute verbatim or copies of this license document.
To license your product, the licensor's name must be changed. Verbatim modification is 
allowed as long as the license name is changed.
```

Patron is a status that constitutes a contract between you and Anne Media. You can only use Annika if you agree to our Terms. There are three options. You may become Affiliate Patron, Royalty Patron, or Collab Patron.

If you do not want to take part in Anne Media projects, you may use Annika as Affiliated Patron. This status enables you to download and use the Software without limitations under the Collaborative Public Licence, with the only condition that you accredit Anne Media on all websites using Annika via the anchor element tag that must be accessible in a notable place. In other words, easily found by your site visitors.

```
<a href='https://annika.anne.media' target='_blank'><img src='https://annika.anne.media/img/annikaminibanner.png'/></a>
```
See our Offer at [annika.anne.media](https://anne.media), become Anne Media Patron and help us to create a better world.

## Support our development

In our [Offer](https://anne.media), we put together a range of compelling rewards for participation in Anne Media projects. Alternatively, if this project helps you reduce time to develop and you want to support us with an anonymous donation, you may use one of the below options. Your kindness and backing mean the world to us, and we extend our deepest gratitude in advance.

BCH: qzct28kem0yrcrq8f53zuelk728f77lpfstd5wpgcy

XMR: 89Nz71j5WmCEeWAQEow3SdXzhwfbybctGJ2TGDKYYCwzYahHTtSTFnN9ij6SZD3j5S3rUnHJpUZSqFTvjGNakXpo8ySqUYw

BTC: 1H7LuEgg3hUKcG8XWmrLRbhuGQmTBiivdZ

ETH: 0x2F2291dc41449f9506B9356c04853E6704D7b955

## Social

Gives us a follow at [@annemedia_web](https://twitter.com/annemedia_web) to keep in touch with the lastest news on our development.