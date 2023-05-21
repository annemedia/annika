
ann.docs.annikainfo = async function annikainfo() {

    let annikainfo = document.querySelector("div[sub='annikainfo']");
    if(annikainfo) { annikainfo.remove() }
    
    let introheader = "<span class='headerspan'>Annika</span> Introduction"
    let intro = "Anne Media introduces the grace of Annika - Command Interface for building user interfaces. An efficient vanilla JavaScript solution, an AI-ready protocol, ideal for creating interchangeable web components and interactive website templates, drawing your attention to a logical set of commands and procedures within the scope of one master function. <b>The Subroutine</b>.<br><br>" +
    "Web standards break down business logic into three distinct workflows - HTML, CSS, and JavaScript. The separation hinders creativity and distracts focus as web builders must continually navigate through multiple files and tally the workflows together to produce desired results. With our Subroutine, we attain a concise, easily adaptable overview and can associate particular business logic within the scope of a closure function that comprises a whole widget.<br><br>" +
    "The more you build, the less you code. Annika delivers a flexible coding experience without the limitations of a framework. It's your configuration and business logic, constructing interoperable components developers can share and use. In contrast to other established frameworks commonly used for web development, building Annika interfaces, we achieved up to a 75% reduction in code footprint.<br><br>" +
    "Hands-on. Give Annika a try..."

    let menuid = ann.getMenuID() + "-1"
    // console.log('menuid :', menuid);
    let initiation = "<h3 class='mb-10'>PREREQUISITES</h3>" +
    "PHP '>8.0'<br>" +
    "MongoDB<br>" +
    "composer<br><br>" +
    "Download the latest release of Annika from <a href='https://github.com/annemedia/annika/releases' target='_blank'>Github</a> or fork and clone our repository. The provided release archive contains third-party libraries some of Annika's functions depend on.<br><br>" + 
    "Unpack the archive and take note of the following folders and files in the main directory."
    let precss = "<span><b>LARAVEL BACK END</b></span><br><br>" +
    ".env.example<br>" +
    "resources/views/annika.blade.php<br>" +
    "routes/web.php<br>" +
    "app/Models/Identity.php<br>" +
    "app/Http/Controllers/RegisterController.php<br>" +
    "app/Http/Controllers/UserController.php";
    let prescript = "<span><b>ANNIKA FRONT END</b></span><br><br>" +
    "public/js, css, img, fonts<br><br>" +
    "<span>Please keep in mind that the public/css/annika.css library is meant to be used as an editable template, rather than an extensive selection of CSS classes. Our SPA demo provided in the file public/js/app.js can also serve as a template you can use.</span>"
    let begin = "To begin, first, create a copy of the .env.example file and rename it to .env and configure your MONGO_DB_CONNECTION variables.<br><br>In your terminal/command prompt run:"
    let beginpre = "php artisan key:generate<br>" +
    "composer install"
    let ljsi = "Now all is set, you may access Annika's SPA demo in your web browser.<br><br>In the HTML body (see resources/views/annika.blade.php), see that we preconfigured Annika's asynchronous ScriptLoader to load third-party dependencies. You may use the ScriptLoader to preload or postload additional scripts."
    let preljsi = "&lt;script&gt;" +
    "<br>&nbsp;&nbsp;&nbsp;let scripts = ['myscript1.js','https://acdn.com/ascript.js', 'myscript2.js']" +
    "<br>&nbsp;&nbsp;&nbsp;const loader = new ann.ScriptLoader({ folder: 'js', src: scripts });" +
    "<br>&nbsp;&nbsp;&nbsp;loader.load();" +
    "<br>&lt;/script&gt;"
    let wait4gl = "By passing a specific global window object as a parameter to the waitForGlobal function, we make sure that any script we are loading through the ScriptLoader and need to use while the page is loading is available. For instance, if we're loading CroppieJS, the window object will be Croppie. When all scripts are loaded, we do not need to use this function for user interactions."
    let prewait4gl = "ann.waitForGlobal('Croppie', function () {" +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// make things happen</span>" +
    "<br>}"
    let eval = 'Similarly to the above, we may need to ensure that a function or object from another script is available when the page loads. To accomplish this, we use the ann.evalObject function.'
    let evalpre = "ann.evalObject('ann.cl.auth.authModule', app)<br><br>" +
    "await ann.evalObject('ann.docs.annikainfo')"
    let sub = "The Subroutine"
    let resub0 = "The Subroutine comprises a set of JavaScript functions and accepts up to 6 parameters. The first is the type of string followed by up to 5 arrays. The content of the arrays defines methods and direction of execution." +
    "<br><br>1st - Name of the Sub<br> 2nd - Command Array <br>3rd - HTML Content Array<br>4th - CSS Array <br>5th - Callback Array (optional)<br>6th - Callback Parameters Array (optional)<br><br>The parameter arrays must be of equal length because the array items are relational by array index across the parameter arrays. The below example shows that the first command (div_y) has no predefined HTML content (null), and the div has two CSS classes (dyn-h and jc-start), no callback, and no callback parameter. Note that the 'null' items and empty array items separated by a comma are mutually interchangeable.<br><br>This particular Sub composes a full SPA in aggregate...";

    let presub = "let <span class='cc-6'>brandp1</span> = 'ANNIKA';" +
    "<br>let <span class='cc-6'>brandp2</span> = 'COMMAND INTERFACE';" + 
    "<br>let <span class='cc-6'>logosrc</span> = 'img/annika.svg';" +
    "<br>let <span class='cc-5'>menu</span> = ['MENU ITEM 1', 'MENU ITEM 2', 'MENU ITEM 3', 'USER AUTH DEMO'];" +
    "<br>let <span class='cc-5'>maininfo</span> = [<span class='color-3'>page1</span>, <span class='color-3'>page2</span>, <span class='color-3'>page3</span>, <span class='color-3'>ann.cl.auth.authModule</span>];" +

    "<br><br>let <span class='cc-5'>c</span> = <span class='color-3'>ann.declareVars</span>(11)" +
    "<br><span class='cc-5'>c</span>.<span class='cc-6'>v1</span> = 'dyn-h jc-start'; <span class='cc-5'>c</span>.<span class='cc-6'>v2</span> = 'mt-40 jc-start', <span class='cc-5'>c</span>.<span class='cc-6'>v3</span> = 'bg-contrast-2 jc-start', <span class='cc-5'>c</span>.<span class='cc-6'>v4</span> = 'logoimg',<span class='cc-5'>c</span>.<span class='cc-6'>v5</span> = 'jc-start',<span class='cc-5'>c</span>.<span class='cc-6'>v6</span> = 'black f-13rem m-0 Pulstar ls-035rem ml--6px',<span class='cc-5'>c</span>.<span class='cc-6'>v7</span> = 'black m-0 AlphaProta fs-06rem pb-5px mt--5px ls-065rem',<span class='cc-5'>c</span>.<span class='cc-6'>v8</span> = 'bg-contrast-2 p-10 mt-40 glow-box3 pointer',<span class='cc-5'>c</span>.<span class='cc-6'>v10</span>='dyn-w fadeOut hide z-mid'" +
    "<br>let <span class='cc-5'>css</span> = <span class='color-3'>ann.json2array</span>(<span class='cc-5'>c</span>)" +

    "<br><br>let <span class='cc-5'>cl</span> = <span class='color-3'>ann.declareVars</span>(11)" +
    "<br><span class='cc-5'>cl</span>.<span class='cc-6'>v8</span> = <span class='color-3'>ann.onMenuClick</span>" +
    "<br>let <span class='cc-5'>clb</span> = <span class='color-3'>ann.json2array</span>(<span class='cc-5'>cl</span>)" +

    "<br><br>let <span class='cc-5'>pr</span> = <span class='color-3'>ann.declareVars</span>(11)" +
    "<br><span class='cc-5'>pr</span>.<span class='cc-6'>v8</span> = <span class='color-3'>ann.get.menuCallback</span>" +
    "<br>let <span class='cc-5'>par</span> = <span class='color-3'>ann.json2array</span>(<span class='cc-5'>pr</span>)" +
    
    "<br><br><span class='color-3'>ann.Subroutine</span>('maingui'," +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// Command Array</span>" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;['div_y', 'div_y', 'header_x', 'img', '$3_div', 'h1', '$5_h2', '$3_menu_y', '$2_div_y', 'info_y', <span class='color-3'>addfooter</span>]," +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// HTML Content Array</span>" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;[<span class='cc-9'>null</span>, <span class='cc-9'>null</span>, <span class='cc-9'>null</span>, <span class='cc-6'>logosrc</span>, <span class='cc-9'>null</span>, <span class='cc-6'>brandp1</span>, <span class='cc-6'>brandp2</span>, <span class='cc-5'>menu</span>, <span class='cc-9'>null</span>, <span class='cc-5'>maininfo</span>, <span class='cc-9'>null</span>]," +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// CSS Array</span>" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;[<span class='color-3'>...</span><span class='cc-5'>css</span>]," +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// Callback Array</span>" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;[...</span><span class='cc-5'>clb</span>]," +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// Callback Parameters Array</span>" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;[...</span><span class='cc-5'>par</span>]" +
    "<br>);"
    let resub = "At the top of the Sub, we defined several variables which we pass into our parameter arrays. For the purpose of this documentation, the variables/items are color coded as follows...<br><br>type of <span class='cc-6'>string</span> - type of <span class='cc-5'>object (array/JSON/collection)</span> - type of <span class='color-3'>function</span> - and <span class='color-4'>hard-coded item</span>"+
    "<br><br>The first parameter passed into the Sub must be the type of string. It is intended to be a unique Sub identifier, so we can access each Sub DOM tree via querySelector, for example, like this..."
    let preresub = "let <span class='cc-5'>target</span> = <span class='color-3'>document.querySelector</span>(&quot;div[sub='maingui']&quot;);";

    let resub2 = "Focusing on the Command Array, notice the root of each command is any HTML DOM object (div, h1, h2, ul, li, etc...) or a custom-defined DOM object (header, menu, info, any, etc...). Custom elements enable better management of the DOM, taking programming beyond the usual HTML conventions. Annika introduces exclusive custom objects useful for any website, and a bunch of handy classes and API functions, which are documented further below. Note that the root command bits can be applied standalone and may be extended by elementary command bits.<br><br>Here are the elementary command bits you can avail of..."
    
    var flexitcinfo = ".flexitc {" +
    "\n&nbsp;&nbsp;position:relative;" +
    "\n&nbsp;&nbsp;width:100%;" +
    "\n&nbsp;&nbsp;height:auto;" +
    "\n&nbsp;&nbsp;display:flex;" +
    "\n&nbsp;&nbsp;flex-direction:column;" +
    "\n&nbsp;&nbsp;align-items:center;" +
    "\n&nbsp;&nbsp;justify-content:center;" +
    "\n&nbsp;&nbsp;overflow:hidden;\n}"

    var flexitrinfo = ".flexitr {" +
    "\n&nbsp;&nbsp;position:relative;" +
    "\n&nbsp;&nbsp;width:100%;" +
    "\n&nbsp;&nbsp;height:auto;" +
    "\n&nbsp;&nbsp;display:flex;" +
    "\n&nbsp;&nbsp;flex-direction:row;" +
    "\n&nbsp;&nbsp;align-items:center;" +
    "\n&nbsp;&nbsp;justify-content:center;" +
    "\n&nbsp;&nbsp;overflow:hidden;\n}"

    let preresub2x1 = "_y &nbsp;<span>- instructs the Sub to stack subsequent child elements vertically using CSS class </span><hoverwrap>flexitc<hovertip>" + flexitcinfo + "</hovertip></hoverwrap><span> (use after the root of the command)</span>" +
    "<br>_x &nbsp;<span>- instructs the Sub to stack subsequent child elements horizontally using CSS class </span><hoverwrap>flexitr<hovertip>" + flexitrinfo + "</hovertip></hoverwrap><span> (use after the root of the command)" +    
    "<br><br>Both classes set the object's position to relative, width to 100%, display to flex, height to auto, overflow to hidden, and align and justify child items in the center. Class flexitc sets flex-direction to column and flexitr to row. Using these CSS classes helps achieve a responsive design and minimize the need for media optimization.</span>" +
    "<br><br>_@ &nbsp;<span>- instructs the Sub to add an event against the corresponding DOM object. The click event is typically the most used - Annika adds it as default even if you don't specify the </span>_@click<span> command bit, providing a callback function is given at a corresponding index of the Callback Array. You can/must specify any other event listener (</span>_@mousedown<span>, </span>_@keydown <span>, </span>_@submit<span>, etc...). The listener calls a function passed into a corresponding index in the Callback Array. (use after the root of the command or after </span>_x<span> or </span>_y<span>)</span>" +
    "<br><br>$ <span>(</span>$1_,$2_,$3_<span>,...) - instructs the Sub to append the DOM object to the DOM object specified at the particular array index. Note that the standard practice is to refer to array index 0 as the index of the first element of an array. For convenience, we refer to the first index as 1 and count from there. It is because we may use the </span>$0_<span> command bit to append a DOM object to the document body. Then, </span>$1_<span> appends the particular element to the first element specified at the first index of the Command Array, </span>$2_<span> to the second one, and so on. (use before the root command)</span>" +
    "<br><br><span>'Append to index' and 'add event' command bits can be specified concurrently. For example, </span>$1_div_@click<span>. Also </span>$1_div_y<span> or </span>$1_div_y_@click<span> will work as expected.</span>" +
    "<br><br><b>NB: Any elements without the $ index specification will be automatically appended to the preceding DOM object, but there are two exceptions. See the HTML Content Array instructions below and the Advanced Subroutine section for more info.</b></span>"
    
    let resub2_1 = "The 'maingui' Sub calls <span class='color-3'>addfooter</span> function we added at the last index of the Command Array. Note the Command Array only accepts a function object when added at the last index. At any other index, a function will cause a run time error. The sole purpose of calling another function from the Command Array is to enable for nesting of Subroutine-generated DOM using function closures.<br><br>" +
    "A child Sub assumes the parent DOM object is the one specified at the first array index of the parent Sub. For example, the &lt;footer&gt; object, generated by the 'footer_x' command, will be appended to the first &lt;div&gt; object generated by the first 'div_y' command in the 'maingui' Sub. In a scenario we wanted to append the &lt;footer&gt; to the 2nd element generated by the 'maingui' Sub, we can use the 'append to index' command bit. For example, the below-shown command would be '$2_footer_x'.<br><br>" +
    "The last index of the Command Array of the parent Sub would also accept an array of functions. This would be useful if we wanted to append the resulting DOM from multiple child Subs to the parent Sub DOM. The 'append to index' command bit can be specified at the first command of each child sub. Depending on our layout, we may also call a command function from the last index of each child Sub, i.e. each child would become a parent of its child.";
    let preresub2_1 = "<span>Function closure - A Sub enclosed in and returned from another function...</span>" +
    "<br><br>async function addfooter() {" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;let <span class='cc-6'>footer</span> = '&amp;copy;' + <span class='color-3'>new Date().getFullYear()</span> + '&nbsp;Anne Media Patrons.&nbsp;All Rights Reserved.';" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// return the Sub (the return value of the Sub is its ID, used by Annika)</span>" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;return <span class='color-3'>ann.Subroutine</span>('footer'," +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['footer_x', 'div', '$1_div']," +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[null,<span class='cc-6'>footer</span>,<span class='cc-6'>ann.keep.terms</span>]," +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['h-30 bottom bg-black-8', 'jself-start w-100', <span class='cc-9'>null</span>]" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;);" +
    "<br>}<br><br>"
    let resub2x2 = "<span>We recommend the best practice is using function closures for all your Subroutines, encompassing all local variables inside the closure function. Then you may call your Subroutine components on demand in appropiate places. Note that top parent Subs do not require the </span>return<span> statement.<br><br>Above, we covered some elementary command bits, and there's more documented in the below 'Advanced Subroutine' section. But first, let's learn about the procedures that can be triggered by passing different types of variables into the HTML Content Array...";
    let preresub2x2 = "<span>Annika recognizes the type of parameter included in the HTML Content Array. For example, we have defined a source path of an image...</span>" +
    "<br><br>let <span class='cc-6'>logosrc</span> = 'img/annika.svg'" +
    "<br><br><span>...and added the <span class='cc-6'>logosrc</span> variable into the HTML Content Array. The variable is the type of </span>string<span>. The Sub recognizes the </span>'img'<span> root command bit and adds the specified path to the src property of the img tag. An img tag does have innerHTML property, but for any other tag that does, for example, div or p, the Sub adds the string variable into the innerHTML of the particular DOM object." +
    "<br><br>If the parameter included into the HTML Content Array is the type of </span>object (array)<span>, for example, let's build a menu...</span>" +
    "<br><br><span class='cc-5'>let menu</span> = ['MENU ITEM 1', 'MENU ITEM 2', 'MENU ITEM 3', 'USER AUTH DEMO'];" +
    "<br><br><span>...then the Sub creates the corresponding DOM object for each item of the menu array. In our example, the command is </span>$3_menu_y <span>at index 8 of the Command Array. The </span>$3_<span> command bit instructs the Sub to append the menu object to the </span>header<span> object. The command bit </span>_y<span> determines the menu items will be stacked vertically. If we used </span>_x<span> instead, the menu items would appear next to one another in a horizontal fashion." +
    "<br><br>Above, we noted that all elements without the </span>$<span> index specification will be automatically appended to the preceding DOM object. This does not apply in the following scenario:<br><br>" +
    "In the Command Array, we may exclude 'append to index' specifications (</span>$<span>) if we add multiple array parameters of the <b>same length</b> into the HTML Content Array in the ensuing sequence against the particular commands. Annika uses the procedure to automatically recognize a shared parent element by assuming the parent element preceding the whole sequence of given arrays applies to all children. The sequence is interrupted at the first found HTML Content Array parameter that is not an array object, or if the array object is of a different length than the previous array object, or if the 'append to index' command bit is specified." +
    "<br><br>When the item we pass into the HTML Content Array is the type of </span>function<span>, the function must be either a closure function that returns another Subroutine or a function that returns some HTML content or text. Doing so generates DOM objects where we expect them to be and enables us to compose interoperable procedures, components, and multiple SPA sections in one go.</span>"
    let resub2x3 = "At the top of the 'maingui Sub, we declared the maininfo variable, which comprises an array of four functions.";
    let preresub2x3 = "<span class='cc-5'>let maininfo</span> = [<span class='color-3'>page1</span>, <span class='color-3'>page2</span>, <span class='color-3'>page3</span>, <span class='color-3'>ann.cl.auth.authModule</span>]" +
    "<br><br><span>We have passed this array at the tenth index of the HTML Content Array against the </span>info_y<span> command. The product of this procedure is four </span>&lt;info&gt;<span> objects appended to the parent div generated by the command specified at the 9th index (</span>$2_div_y<span>) of the Command Array. The innerHTML content of each of the info objects is generated by the closure functions specified in the <span class='cc-5'>maininfo</span> array, in respective order.</span>"

    let resub2x3a = "The below section contains an extracted part from the above 'maingui' Subroutine, showing a method we can use to declare CSS variables. In the CSS Array, we could add CSS classes as strings against each array index, for example, 'class1 m-10', class2 m-20', and so on, but when a Subroutine grows longer and may contain many CSS classes, is it more practical, efficient and visual to declare an object variable.";
    let preresub2x3a = "let <span class='cc-5'>c</span> = <span class='color-3'>ann.declareVars</span>(11)" +
    "<br><br><span>For this purpose, we use <span class='color-3'>ann.declareVars</span> function that produces a JSON object of the specified length with 'null' values and enumerated keys with the prefix 'v' followed by index number, starting 1, for example, v1, v2, and so on. The parameter we pass into the function is a number that must correspond to the count of items of our Command Array." +
    "<br><br>Underneath this function, we can assign our CSS class strings as values against keys, which numeric values conform to particular indexes of the Sub's parameter arrays, as you can see below.</span>" +
    "<br><br><span class='cc-5'>c</span>.<span class='cc-6'>v1</span> = 'dyn-h jc-start'; <span class='cc-5'>c</span>.<span class='cc-6'>v2</span> = 'mt-40 jc-start', <span class='cc-5'>c</span>.<span class='cc-6'>v3</span> = 'bg-contrast-2 jc-start', <span class='cc-5'>c</span>.<span class='cc-6'>v4</span> = 'logoimg',<span class='cc-5'>c</span>.<span class='cc-6'>v5</span> = 'jc-start',<span class='cc-5'>c</span>.<span class='cc-6'>v6</span> = 'black f-13rem m-0 Pulstar ls-035rem ml--6px',<span class='cc-5'>c</span>.<span class='cc-6'>v7</span> = 'black m-0 AlphaProta fs-06rem pb-5px mt--5px ls-065rem',<span class='cc-5'>c</span>.<span class='cc-6'>v8</span> = 'bg-contrast-2 p-10 mt-40 glow-box3 pointer',<span class='cc-5'>c</span>.<span class='cc-6'>v10</span>='dyn-w fadeOut hide z-mid'" +
    "<br><br><span>After we declare the JSON object values, we convert the object to an array using the <span class='color-3'>ann.json2array</span> function and the JSON object as its parameter.</span>" +
    "<br><br>let <span class='cc-5'>css</span> = <span class='color-3'>ann.json2array</span>(<span class='cc-5'>c</span>)" +
    "<br><br><span>Then we can spread the resulting array into the CSS Array using the spread operator (<span class='color-3'>...</span>).</span>" +
    "<br><br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// CSS Array</span>" +
    "<br>&nbsp;&nbsp;&nbsp;[<span class='color-3'>...</span><span class='cc-5'>css</span>]" +
    "<br><br><span>Note we also used these methods for the Callback Array and the Callback Parameters Array, spreading the prior declared arrays of functions/parameters via the spread operator. That way, we don't have to manually count empty spaces separated by commas or fill the Subroutine parameter arrays with null objects.</span>"

    let resub2x4 = "Drawing your attention to two functions we added against the menu_y command - <span class='color-3'>ann.onMenuClick</span> and <span class='color-3'>ann.get.menuCallback</span>." +
    "<br><br>The former handles default onclick events for each menu item. We have only included it for the showcase. It does not need to be specified. Annika recognizes the <span class='color-4'>menu</span> and <span class='color-4'>info</span> commands and will create the onclick events by default (see the section Special Elements below)." + 
    "<br><br>The latter function is a callback function that will process additional custom-defined actions triggered on a menu item click. For example, we wanted to show the 'campaign' object only on some pages but hide it on others. The function abstract can be found at the top of Annika's js library and copied to a custom script. Note this function must be passed as a parameter of the <span class='color-3'>ann.onMenuClick</span> function into the Callback Parameters Array.";
    let presub2x4 = "<span class='color-3'>ann.get.menuCallback</span> = <span class='color-3'>async function menuCallback</span>(<span class='cc-6'>id</span>, <span class='cc-5'>e</span>) {" +
    "<br>&nbsp;&nbsp;&nbsp;let <span class='cc-5'>campaign</span> = <span class='color-3'>document.querySelector</span>('.maincamp');" +
    "<br>&nbsp;&nbsp;&nbsp;if(<span class='cc-6'>id</span> === 'menu-1-7-2' || <span class='cc-6'>id</span> === 'menu-1-7-3') { " +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='color-3'>ann.show</span>(<span class='cc-5'>campaign</span>,false)" +
    "<br>&nbsp;&nbsp;&nbsp;} else {" +
    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='color-3'>ann.show</span>(<span class='cc-5'>campaign</span>)" +
    "<br>&nbsp;&nbsp;&nbsp;}" +
    "<br>}"

    let resub2x5 = "Occasionally, we may need to trigger an onload function when a Sub's DOM object is generated...";
    let preresub2x5 = "<span class='color-3'>ann.cl.onload.customFunction</span> = <span class='color-3'>async function customFunction()</span> {" +
    "<br>&nbsp;&nbsp;&nbsp;let <span class='cc-5'>subdom</span> = <span class='color-3'>document.querySelector</span>(&quot;div[sub='maingui']&quot;);" +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// onload code</span>" +
    "<br>}" +
    "<br><br><span class='color-3'>ann.Subroutine</span>('maingui+ann.cl.onload.customFunction'," +
    "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// subroutine code</span>" +
    "<br>);"
    let resub2x6 = "As shown above, we can trigger an 'onload' against a Subroutine by using the namespace ann.cl.onload, defining a custom function at the top of the Sub, and adding the full definition ann.cl.onload.customFunction to the first string parameter of the Sub, extending on its name with the + sign.";

    var loadafter = [advancedsub,specialelements,apifunctions,final];

    let c = ann.declareVars(42);
    c.v1='dyn-h jc-start info-wrap',c.v2='dyn-h scrollbar jc-start mb-20 mt-60 o-y-a mw-800px',c.v6='fs-12rem collapsible',c.v7='ccontent jc-start',c.v20='collapsible', c.v21='ccontent jc-start', c.v41='close mt-5'
    let css = ann.json2array(c);


    let cl = ann.declareVars(42);
    cl.v41 = close
    let clb = ann.json2array(cl);

    return ann.Subroutine('annikainfo',
      ['docs_y', 'div_y','$2_h2', '$2_p', '$2_div_y', '$5_h2', '$5_div_y', 'p', '$7_pre', '$7_pre','$7_p', '$7_pre', '$7_p', '$7_pre', '$7_p','$7_pre','$7_p','$7_pre',
      '$2_div_y', '$19_h2', '$19_div_y','$21_p', '$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$21_pre','$21_p','$3_span', loadafter],
      [null,null,introheader, intro, null, 'INITIATION',null,initiation, precss, prescript, begin, beginpre, ljsi, preljsi, wait4gl, prewait4gl, eval, evalpre,
      null,sub,null,resub0,presub, resub, preresub, resub2, preresub2x1,resub2_1, preresub2_1, resub2x2, preresub2x2, resub2x3, preresub2x3,resub2x3a, preresub2x3a,resub2x4,presub2x4,resub2x5, preresub2x5,resub2x6,'X',null],
      [...css],[...clb]
    );

    function close(id, e) {
        let docs = e.target.closest("docs");
        if(docs) { ann.toggleFade(docs) }
    }

    async function advancedsub() {

        let head = 'ADVANCED SUBROUTINE'
        let advsubintro = "The structure of the below Subroutine 'workshop' is the same as in our previous example. This Sub produces the content and layout of the demo section <span class='ahref' onclick=workshop()>ANNIKA'S WORKSHOP</a>.";
        let presub = "let <span class='cc-6'>introheader</span> = &quot;ANNIKA&apos;S DEMO WORKSHOP&quot;;" +
        "<br>let <span class='cc-6'>consult</span> = &quot;GET A QUOTE&quot;" +
        "<br><br>let <span class='cc-5'>serviceimgs</span> = ['data:image/png;base64...', '...', '...', '...', '...', '...'];" +
        "<br><br>let <span class='cc-5'>serviceheaders</span> = [&quot;Annika&lt;br&gt;Integration&quot;, &quot;101 Crash&lt;br&gt;Course&quot;, &quot;Annika&lt;br&gt;Apps&quot;, &quot;Annika&apos;s&lt;br&gt;Guardian&quot;, &quot;Advanced&lt;br&gt;Craft&quot;, &quot;Craft&lt;br&gt;With Us&quot; ];" +
        "<br><br>let <span class='cc-5'>servicestext</span> = ['Transform your web apps with Annika', 'Book 1 on 1 or group learning sessions', 'We make web apps. Powered by Annika', 'Managed servers for your apps','Conceptualized data architecture','Partnership opportunities at Anne Media'];" +
        "<br><br>let <span class='cc-5'>actionbuttons</span> = ['GET STARTED','LEARN ANNIKA','I NEED APP','I WANT THIS', 'SAY WHAT?','JOIN US'];" +
        "<br>let <span class='cc-5'>servicecallbacks</span> = [<span class='color-3'>serviceInfo</span>, <span class='color-3'>serviceInfo</span>, <span class='color-3'>serviceInfo</span>, <span class='color-3'>serviceInfo</span>, <span class='color-3'>serviceInfo</span>, <span class='color-3'>serviceInfo</span>];" +
        
        "<br><br>let <span class='cc-5'>c</span> = <span class='color-3'>ann.declareVars</span>(10)" +
        "<br><span class='cc-5'>c</span>.<span class='cc-6'>v3</span>='f-12rem w-89 bblr-unset bblrr-unset',<span class='cc-5'>c</span>.<span class='cc-6'>v4</span>='service-container sc2 flexitr scrollbar o-y-a',<span class='cc-5'>c</span>.<span class='cc-6'>v5</span>='singleserviceb+serviceicon',<span class='cc-5'>c</span>.<span class='cc-6'>v6</span>= 'serviceinner',<span class='cc-5'>c</span>.<span class='cc-6'>v7</span>='servicetitle',<span class='cc-5'>c</span>.<span class='cc-6'>v8</span>='w-100 servicebutton',<span class='cc-5'>c</span>.<span class='cc-6'>v9</span>='annikabutton',<span class='cc-5'>c</span>.<span class='cc-6'>v10</span>='close'" +
        "<br>let <span class='cc-5'>css</span> = <span class='color-3'>ann.json2array</span>(<span class='cc-5'>c</span>)" +

        "<br><br>let <span class='cc-5'>cl</span> = <span class='color-3'>ann.declareVars</span>(10)" +
        "<br><span class='cc-5'>cl</span>.<span class='cc-6'>v8</span> = <span class='color-3'>servicecallbacks</span>, " +
        "<span class='cc-5'>cl</span>.<span class='cc-6'>v9</span> = <span class='color-3'>serviceInfo</span>, " +
        "<span class='cc-5'>cl</span>.<span class='cc-6'>v10</span> = <span class='color-3'>close</span>" +
        "<br>let <span class='cc-5'>clb</span> = <span class='color-3'>ann.json2array</span>(<span class='cc-5'>cl</span>)" +
        "<br><br><span class='color-3'>ann.Subroutine</span>('workshop'," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// Command Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;['workshop_y', 'div_y', 'h2', '$1_div', '^_img', '^_h3', '^_p', '^_button', '$4_button', '$3_div']," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// HTML Content Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;[<span class='cc-9'>null</span>, <span class='cc-9'>null</span>, <span class='cc-6'>introheader</span>, <span class='cc-9'>null</span>, <span class='cc-5'>serviceimgs</span>, <span class='cc-5'>serviceheaders</span>, <span class='cc-5'>servicestext</span>, <span class='cc-5'>actionbuttons</span>, <span class='cc-6'>consult</span>, 'X']," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// CSS Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;[<span class='color-3'>...</span><span class='cc-5'>css</span>]," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// Callback Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;[...</span><span class='cc-5'>clb</span>]" +
        "<br>);"
        let resub1 = "Notice the above Sub features additional commands bits and procedures..."
        let presub1 = "^_ &nbsp;<span>- instructs the Sub to change the order of execution at the HTML Content Array level. Notice we have defined four arrays <span class='cc-5'>serviceimagearr</span>, <span class='cc-5'>serviceheaders</span>, <span class='cc-5'>servicetext</span>, and <span class='cc-5'>actionbuttons</span>. Each of the arrays contains six string variables. By default, without the </span>^_<span> command bit, the arrays would be processed one by one. The same DOM object would be generated six times in a turn and appended to a particular parent. Using the '^_' command bit, the Sub processes the sets of arrays by their joint index instead, for example, the array content of </span>serviceimagear[0]<span>, </span>serviceheaders[0]<span>, </span>servicetext[0]<span>, and </span>actionbuttons[0]<span> will be appended together to their particular parent and so on. The parent is auto-generated at each turn, and all the parents are children of the parent that is generated by the preceding command of the first command having the </span>^_<span> command bit in the given sequence. The </span>^_<span> command bit must be given to each command we expect to be processed by joint index, and these commands must be specified within the same sequence." +
        "<br><br>Draw your attention to the command </span>^_img<span> at the fourth index of the Command Array. In the Classes Array at the fourth index are CSS classes singleserviceb and serviceicon, separated by the </span>+<span> character. As the Sub finds the first </span>^_<span> command bit, it auto-creates the parent div for each service section. In our example, the CSS class </span>singleserviceb<span> is assigned to that parent and the </span>serviceicon<span> class is used for the img element. Use the </span>+<span> bit in the CSS Array only in conjunction with the first  </span>^_<span> command bit in the given sequence." +
        "<br><br>Notice the array <span class='cc-5'>servicecallbacks</span> is assigned at the eighth index of the Callback Array against the command </span>^_button<span>. The array <span class='cc-5'>actionbuttons</span> generates six buttons, and the array <span class='cc-5'>servicecallbacks</span> gives each of the buttons a click event that calls the given function from the corresponding index. For the sole purpose of this demo, we only included the function <span class='color-3'>serviceInfo</span> six times. If we were to pass a single function instead of an array of functions, the buttons would be also given a click event executing the same function. Outside of our demo scope, each function would likely be different, depending on business logic and user experience requirements.</span>"
        let menuid = ann.getMenuID() + "-2"
        let aresub2 = "There goes another example. The below Sub introduces a convenient method that outputs the known content of a JSON object into HTML view. The result is the full view seen on the <a href='https://anne.media' target='_blank'>ANNE MEDIA PATRONS</a> page."
        let apresub2 = "var <span class='cc-5'>patrondata</span> = <span class='color-3'>await ann.fetch</span>('getPatrons');" +        
        "<br><br>let <span class='cc-6'>header</span> = 'ANNE MEDIA PATRONS'" +
        "<br>let <span class='cc-5'>htmlkeys</span> = ['^xy#img+pic', '#salut+salut', '^y#tier+tier', 'country', '#a+social', '#a+web', 'created_at', 'pub'];"+
        "<br>let <span class='cc-5'>htmllabels</span> = [<span class='cc-9'>null</span>, <span class='cc-9'>null</span>, 'Tier:', <span class='cc-9'>null</span>, 'SOCIAL NETWORKS', 'WEBSITE', 'Patron since', <span class='cc-9'>null</span>];"+
        "<br>let <span class='cc-5'>classes</span> = ['class1','class2', 'hide', 'class3', 'class4', 'class5', 'class6', 'pub hide'];" +
        "<br><br><span class='color-3'>ann.Subroutine</span>('patrons'," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// Command Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;['div_y', 'h1', '$1_div_x', '#_patron_y',<span class='color-3'>offer</span>]," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// HTML Content Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;[<span class='cc-9'>null</span>,header, <span class='cc-9'>null</span>, [<span class='cc-5'>patrondata</span>, <span class='cc-5'>htmlkeys</span>, <span class='cc-5'>htmllabels</span>], <span class='cc-9'>null</span>]," +
        "<br>&nbsp;&nbsp;&nbsp;<span class='contrast-3'>// CSS Array</span>" +
        "<br>&nbsp;&nbsp;&nbsp;[<span class='cc-9'>null</span>, 'viewh1', 'patronview scrollbar', <span class='cc-5'>classes</span>, <span class='cc-9'>null</span>]" +        
        "<br>);<br><br>" +
        "<span class='contrast-3'>// Sample JSON object of the patrondata array</span>" +
        "<br>[{" +
            "<br>&nbsp;&nbsp;&nbsp;'pub': '19tkmk4EGcX3b82dUvoGoHprvfnsDzcZY5'," +
            "<br>&nbsp;&nbsp;&nbsp;'salut': 'Annika'," +
            "<br>&nbsp;&nbsp;&nbsp;'email': 'demo@anne.media'," +
            "<br>&nbsp;&nbsp;&nbsp;'country': 'US'," +
            "<br>&nbsp;&nbsp;&nbsp;'pic': 'img/id/Annika.jpg'," +
            "<br>&nbsp;&nbsp;&nbsp;'tier': 1," +
            "<br>&nbsp;&nbsp;&nbsp;'social': [" +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://twitter.com/annika'," +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://facebook.com/annika'," +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'https://gab.com/annika'" +
            "<br>&nbsp;&nbsp;&nbsp;]," +
            "<br>&nbsp;&nbsp;&nbsp;'web': 'https://annika.anne.media'," +
            "<br>&nbsp;&nbsp;&nbsp;'created_at': {" +
              "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'$date': '2022-12-17T16:04:23.787Z'" +
            "<br>&nbsp;&nbsp;&nbsp;}, ..." +
          "<br>}]"

        let repatrons = "To print out a JSON object we need more command bits and understand the associated procedure...";
        let prepatrons = "#_ &nbsp;<span>- instructs the Sub to output the content of a JSON into specified DOM objects. In our example, the particular command is </span>#_patron_y<span>. The </span>patron<span> root command generates a custom DOM object, e.g. we could use </span>div<span> instead, but we use custom elements so we don't have to define CSS classes against the objects. That way we can assign CSS properties directly to the custom object, it allows us to organize and access our DOM objects spontaneously and it saves a byte or two." + 
        "<br><br>In conjunction with the command bit, in the HTML Content Array, we must also pass three array variables against the single command. The first contains the JSON object - <span class='cc-5'>patrondata</span>, the second - <span class='cc-5'>htmlkeys</span> - defines known keys of that JSON object, and a set of DOM objects and their parent objects where applicable. The purpose of the third array - <span class='cc-5'>htmllabels</span> - is to give the DOM objects custom labels, where applicable.<br><br>" +
        "The array <span class='cc-5'>htmlkeys</span> must comprise exact keys corresponding to our JSON object and may include additional command bits and properties that define their DOM objects, their parents, and parent-children relations. Compare the <span class='cc-5'>htmlkeys</span> array against our Sample JSON object shown above. As you can see the JSON object keys are defined at the last index of each item of the <span class='cc-5'>htmlkeys</span> array. The default DOM object into which we output the values of those keys is </span>&lt;span&gt;<span>, if that is what we want, we do not need to specify it. For example, we used this default against the </span>country<span>, </span>created_at<span>, and </span>pub<span> JSON keys.<br><br>" +
        "Against other items we prepended a </span>#domobject+<span> using the </span>#<span> sign to define it's a DOM object, e.g. </span>#img<span>, </span>#salut<span>, </span>#tier<span>, </span>#a<span>, and the </span>+<span> separator to distinguish it from the JSON keys. To append a sequence of DOM objects into their parent, we may also add </span>^xy<span> or </span>^yx<span> or </span>^x<span> or </span>^y<span> before the </span>#<span> sign. The <span class='cc-5'>htmlkeys</span> array contains eight items. We used </span>^xy<span> at index 0 of the array. The </span>x<span> bit instructs the Sub to create a parent </span>div<span> with the CSS class </span><hoverwrap>flexitr<hovertip>" + flexitrinfo + "</hovertip></hoverwrap><span>. This parent encompasses all DOM objects generated by the procedure and the double bits </span>^xy<span> or </span>^yx<span> should be only used at the index 0 of the <span class='cc-5'>htmlkeys</span> array. The </span>y<span> bit instructed the Sub to create another parent </span>div<span> with the CSS class </span><hoverwrap>flexitc<hovertip>" + flexitcinfo + "</hovertip></hoverwrap><span>. This is a child of the parent generated by the </span>x<span> bit. The child-parent is a parent of the </span>img<span> and </span>salut<span> DOM objects. Using the </span>y<span> bit in the command </span>^y#tier+tier<span>, we have instructed the Sub to create another parent </span>div<span> with class </span>flexitc<span>. This is another child-parent appended to the top parent generated by the </span>x<span> bit from the first command </span>^xy#img+pic<span>. As all subsequent array items have no </span>x<span> or </span>y<span> bits specified, they will be appended to the parent generated by the </span>^y#tier+tier<span> command.<br><br>" + 
        "In the CSS Array, we included <span class='cc-5'>classes</span> array against the </span>#_patron_y<span> command. These classes will be assigned to their respective DOM objects generated by the <span class='cc-5'>htmlkeys</span> array.<br><br>" +
        "Note that the JSON 'print out' procedure can only provide a basic but helpful HTML output of a JSON object. To achieve the final layout of the <a href='https://anne.media' target='_blank'>ANNE MEDIA PATRONS</a> page, we post-processed the generated DOM.</span>"

        
        return ann.Subroutine('advsub',
            ['$2_div_y', '$1_h2', '$1_div_y','p', '$3_pre','$3_p','$3_pre','$3_p','$3_pre','$3_p', '$3_pre'], 
            [null,head,null, advsubintro, presub,resub1,presub1, aresub2, apresub2, repatrons, prepatrons],
            [,'collapsible', 'ccontent jc-start',,,,,,,,,]
        );
    }

    async function specialelements() {
            
        let head = 'SPECIAL ELEMEMENTS'
        let resub2x1 = "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters...."
        let preresub2 = "&lt;header&gt;<span> and </span>&lt;footer&gt; <span>elements include a set of CSS attributes, positioning the objects where expected. We may edit the CSS definitions or override them with additional CSS classes.</span>" + 
        "<br><br>&lt;info&gt; <span>element is specifically designed to work in conjunction with the</span> &lt;menu&gt; <span>element. The menu root command creates a menu and associates the info objects with each menu item in a particular order. The info objects must have an equal amount of user-defined items as the menu element.</span>" + 
        "<br><br>&lt;grid&gt; <span>element creates a selectable grid of items of user-defined length. For example<br></span>" +
        "var <span class='cc-5'>daylist</span> = ann.getDaysArray(new Date(Date.now()),ann.addYearsToDate(1)); " + "<span>...this API function generates a list of days within a range from today plus 1 year. Passing the variable <span class='cc-5'>daylist</span> into the HTML Content Array against the command 'grid_x' or 'grid_y' will print a horizontal or vertical view of the selectable day items.<br><br>See the <span class='ahref' onclick=griddemo()>Grid demo</span></span>" +
        "<br><br>&lt;hovertip&gt; <span>Add </span>&lt;hoverwrap&gt;Hover me&lt;hovertip&gt;Hovertip content 1st line&#8726;nHovertip content 2nd line&lt;/hovertip&gt;&lt;/hoverwrap&gt;<span> to a string variable and add the variable to the HTML Content Array... </span><hoverwrap class='f-08rem'>Hover me<hovertip>Hovertip content 1st line\nHovertip content 2nd line</hovertip></hoverwrap>" + 
        "<br><br>&lt;modaltip&gt;<span>Add</span>&lt;modalcall&gt;Click me&lt;modaltip&gt;I am modaltip&lt;/modaltip&gt;&lt;/modalcall&gt;<span class='inlineb'> to a string variable and add the variable to the HTML Content Array... </span><modalcall class='f-08rem'>Click me<modaltip>I am modaltip</modaltip></modalcall>" +
        "<br><br><span>Annika's CSS library assigns a default set of CSS attributes to the special objects using their tag name. Definitions of every detail of the entire CSS library are outside the scope of this documentation, but here are some highlights you can avail of. At the top of the 'annika.css' library, we defined root variables that enable us to change the website's color themes, root variables that hold base64 images for the menu, background image effects, and several glowing effects.</span>" +
        "<br><br><span>Adding 'copycontent' CSS class against a DOM object makes its inner text available for copying. It also adds a copy label at the top right corner of the DOM object, and the message 'Copied to clipboard' is shown on user interaction.</span>" +
        "<br><br><span>Using the 'close' CSS class against a DOM object adds 'X' at the top right corner of its parent element.</span>" +
        "<br><br><span>Using the 'customselect', 'custominput', and 'customlabel' CSS classes gives pretty looks to the particular form elements.</span>" +
        "<br><br><span>Annika delivers an elegant solution to media optimization. The JS library adds an onresize event that modifies values of the CSS classes '.dyn-w', and '.dyn-h'. When adding these classes against HTML parent objects, the width or height dynamically adjusts to the screen resolution. Alongside frequent use of the prior documented flexitc and flexitr CSS classes (via the '_y' & '_x' elementary command bits), the need to post-optimize apps using CSS media queries becomes negligible.<br><br></span>"

        return ann.Subroutine('specialels',
            ['$2_div_y', '$1_h2', '$1_div_y','$3_p','$3_pre'], 
            [null,head,null,resub2x1,preresub2],
            [null,'collapsible', 'ccontent jc-start','hide',null]
        );
    }

    async function apifunctions() {
            
        let head = 'ANNIKA API';
        let resub2x1 = "Most of Annika's API functions are called upon within the scope of the Subroutine. We recommend using the Subroutine commands where possible/suitable, as the Command Interface greatly simplifies the developer's workflow and draws attention toward the final product. Nevertheless, we don't wish to hinder the endless joy of coding, and here are all of Annika's functions you can avail of."

        let preresub2 = "<span class='collapsible color-3'>ann.addClasses</span>(elorid, classesstring)" +
        "<div class='ccontent mb-10'><p>Adds multiple CSS classes against a DOM object. The first parameter accepts a DOM object or its ID, the second a string of classes separated by space (e.g. 'myclass1 myclass2 myclass3')</p></div>" +

        "<span class='collapsible color-3'>ann.collapsible</span>(openfirst = ann.get.collapsiblefirstopen, collapsenonactive = ann.get.collapsenonactive)" +
        "<div class='ccontent mb-10'><p>We do not call this function directly. Instead, to make a top-level collapsible, within the scope of a Sub, we assign the CSS class 'collapsible' against a clickable DOM object that can toggle its next sibling to collapse/expand. The next sibling should be a wrapper div against which we add the CSS class 'ccontent'. Do not use the 'span' DOM object for a top-level collapsible against the CSS class 'collapsible'.<br><br>" +
        "We can also instruct the Sub to create collapsibles inside a top-level collapsible (you are here) by using the 'span' root command against the 'collapsible' CSS class. Then, same as above, we give the next sibling 'ccontent' CSS class. We must identify the top-level collapsible content by adding the 'parentcc' CSS class next to the 'ccontent' CSS class. Inspect the DOM of the ANNIKA API section, searching for 'parentcc'.<br><br>" +
        "At the top of the annika.js library, you will find two variables - 'ann.get.collapsiblefirstopen' and 'ann.get.collapsenonactive', both set to boolean true by default. <br><br>The former defines whether we want our pages to load with the first top-level collapsible expanded. Setting it to false will keep all collapsibles collapsed by default. <br><br>The latter defines click behavior, if set to true the active collapsible cannot be collapsed by a click on itself, only by expanding another collapsible, i.e. the existing open collapsible automatically collapses, while the one called upon expands. If set to false, each collapsible can be expanded/collapsed separately by using the previous sibling click event.</p></div>" +

        "<span class='collapsible color-3'>ann.copyToClipboard</span>()" +
        "<div class='ccontent mb-10'><p>Similarly to the above, There may not be a need to directly call this function. Instead, we can use the CSS class 'copycontent' against a DOM object which inner text we want to make available for copying. As long as our Subs produce all DOM objects on page load, all 'copycontent' objects will be given the desired behavior. However, if we were to add a dynamic Sub that does not generate content on page load but on user interaction or add another 'copycontent' within a scope of an ann.cl.onload.customOnloadFunction, to include the additional 'copycontent' objects, we need to call this function again in our script. The class adds a copy label at the top right corner of the DOM object and shows the message 'Copied to clipboard' on user interaction.</p></div>" +

        "<span class='collapsible color-3'>ann.createCroppie</span>(command, parent)" +
        "<div class='ccontent mb-10'><p>This function depends on Croppie, the best image cropping plugin available. If we want to use this function we need a copy of <a href='https://foliotek.github.io/Croppie/' target='_blank'>Croppie</a> JS and CSS libraries, add the CSS to the HTML head, and load the JS via our ScriptLoader function.<br><br>" +
        "Annika levels up and makes this great plugin even greater, fully featured and working out of the box. To make a croppie, do not try calling this function directly, simply add 'croppie' to Sub's Commands Array. We may specify croppie dimensions within the scope of the command, for example, croppie_120_120, we may also specify the 'append to index' command bit ($) if needed.</p></div>" +

        "<span class='collapsible color-3'>ann.createListener</span>(elorid, type, callback, params)" +
        "<div class='ccontent mb-10'><p>There may not be a need to directly call this function. The Subroutine uses it to auto-create events we specify via the Callback Array, and the event command bit (_@). To make a direct call, the first parameter accepts a DOM object or its ID, the second is the event type, e.g. 'click', 'keydown', etc..., the third is a callback function, and the fourth (optional) is a parameter array we might want to return into the callback function.<br><br>" +
        "All custom callback functions that pass through the ann.createListener function auto-include default return parameters (id, e, params), which we can use within the scope of our custom callback to access the ID of the event trigger object (e.g. a button) and the whole event (e) object, including the computed path (e.path). If the params parameter is of type of array, the callback function will receive several custom parameters as per the array. If the params parameter is of type of function or string, it will be returned as the third parameter of the custom callback function.</p></div>" +


        "<span class='collapsible color-3'>ann.declareVars</span>(count)" +
        "<div class='ccontent mb-10'><p>Returns a JSON object of the specified length with null objects and enumerated keys with the prefix 'v' followed by index number, starting 1, for example, v1, v2, and so on.</p></div>" +

        "<span class='collapsible color-3'>ann.downloadBase64File</span>(contentBase64, fileName)" +
        "<div class='ccontent mb-10'><p>Intended for use outside of the scope of the Subroutine. The function triggers a download of any base64-encoded file. The first parameter accepts a base64-encoded string, and the second a name of the file, including file extension, as it will be downloaded by the user.</p></div>" +

        "<span class='collapsible color-3'>ann.executeFunctionByName</span>(functionName)" +
        "<div class='ccontent mb-10'><p>There may not be a need to directly call this function. The Subroutine uses it to execute custom-defined onload functions defined against the ann.cl.onload namespace after a Sub DOM has been generated. The parameter accepts the name of any function as a string.</p></div>" +

        "<span class='collapsible color-3'>ann.fetch</span>(url, dataset, method = 'GET', content = 'application/json')" +
        "<div class='ccontent mb-10'><p>Annika uses JavaScript fetch API and provides a convenient wrapper we use to fetch data from a URL. The first parameter accepts an URL/route, the second one is an optional dataset we may need to send via HTTP request to our servers. The default method is GET, default content type is 'application/json.<br><br>" + 
        "Usage:<br><br>var patrondata = await ann.fetch('getPatrons');</p></div>" +

        "<span class='collapsible color-3'>ann.getColors</span>()" +
        "<div class='ccontent mb-10'><p>A JSON dataset of 20 moody color couples matched by optimal contrast. For example...<br><br>" +
        "1: {" +
            "<br>&nbsp;&nbsp;&nbsp;'hex': '#FFFFFF'," +
            "<br>&nbsp;&nbsp;&nbsp;'contrast': '#000000'," +
            "<br>&nbsp;&nbsp;&nbsp;'mood': 'Bright'" +
            "<br>},..." +
        "<br><br>Usage:<br><br>var colorset = await ann.getColors();</p></div>" +

        "<span class='collapsible color-3'>ann.getCountries</span>()" +
        "<div class='ccontent mb-10'><p>A JSON dataset of 258 countries of the following structure...<br><br>" +
        "AC: {" +
            "<br>&nbsp;&nbsp;&nbsp;'code': 'AC'," +
            "<br>&nbsp;&nbsp;&nbsp;'unicode': 'U+1F1E6 U+1F1E8'," +
            "<br>&nbsp;&nbsp;&nbsp;'name': 'Ascension Island'" +
            "<br>&nbsp;&nbsp;&nbsp;'emoji': '🇦🇨'" +
            "<br>},..." +
            "<br><br>Usage:<br><br>var countries = await ann.getCountries();</p></div>" +

        "<span class='collapsible color-3'>ann.getCSSProp</span>(propName, element = document.documentElement)" +
        "<div class='ccontent mb-10'><p>Access CSS root variables<br><br>" + 
        "Usage:<br><br>var primary = ann.getCSSProp('--primary');</p></div>" +

        "<span class='collapsible color-3'>ann.getDaysArray</span>(start, end)" +
        "<div class='ccontent mb-10'><p>Generates an array of dates from the specified start date until the specified end date." +
        "<br><br>Usage:<br><br>var daylist = ann.getDaysArray(new Date(Date.now()),ann.addYearsToDate(1));</p></div>" +

        "<span class='collapsible color-3'>ann.getPartString</span>(str, chr, index)" +
        "<div class='ccontent mb-10'><p>The function uses the JavaScript split function. The first parameter accepts a string, the second one a character(s) that can split the string into multiple parts, and the third an array index (integer) that identifies the particular part we want to return."+
        "<br><br>Usage:<br><br>var mypartstring = ann.getPartString('my_string','_', 0);</p></div>" +

        "<span class='collapsible color-3'>ann.handleUnload</span>(callback)" +
        "<div class='ccontent mb-10'><p>Adds beforeunload event that executes a custom callback function just before the user closes the browser's tab or window. On the JavaScript level, this is poorly handled because submitting a form or clicking an anchor link also triggers the beforeunload listener and we may not want to do that. Our function ensures the callback executes only when the user closes the browser's tab or the window.<br><br>We recommend calling this function on page load using the ann.runLast function. See its documentation below for more details." +
        "<br><br>Usage:<br><br>var mypartstring = ann.runLast(ann.handleUnload, mycustomcallback);</p></div>" +


        "<span class='collapsible color-3'>ann.hovertips</span>()" +
        "<div class='ccontent mb-10'><p>We do not call this function directly. Instead, we add the following into Sub's HTML Array items." +
        "<br><br>&lt;hoverwrap&gt;Hover me&lt;hovertip&gt;I will show on hover.&lt;/hovertip&gt;&lt;/hoverwrap&gt;" +
        "<br><br>As long as our Subs produce all DOM objects on page load, all hovertip objects will be given the desired behavior. However, if we were to add a dynamic Sub that does not generate content on page load but on user interaction or add more hovertips within a scope of an ann.cl.onload.customOnloadFunction, to include the additional hovertips objects, we may need to call this function again in our script.</p></div>" +

        "<span class='collapsible color-3'>ann.isVisible</span>(elorid)" +
        "<div class='ccontent mb-10'><p>The function returns true if a DOM object is visible or false if it isn't. The visibility condition is defined by CSS classes 'hide', 'slideUp', 'fadeOut', and CSS property display set to 'none'. If either of these is found against the object, the function will return false. The parameter accepts a DOM object or its ID.</p></div>" +

        "<span class='collapsible color-3'>ann.json2array</span>(json)" +
        "<div class='ccontent mb-10'><p>As the name suggests, the function will convert a JSON object into an array. The parameter accepts a JSON object.</p></div>" +

        "<span class='collapsible color-3'>ann.get.menuCallback</span>(id, e)" +
        "<div class='ccontent mb-10'><p>This function is an additional, custom-ready callback to Annika's ann.onMenuClick(). We can find its abstract at the top of annika.js and include it in our script. The onMenuClick function will execute the menuCallback if it exists, therefore we may add custom actions against each page without having to modify Annika's library.</p></div>" +

        "<span class='collapsible color-3'>ann.modal</span>(title, content, buttoncount = 2, parentel = document.body, pwmodal = 0)" +
        "<div class='ccontent mb-10'><p>Modal windows. The first parameter accepts a string that gives the modal a title, the second an HTML content, and the third parameter accepts an integer 1 or 2, defining if we want to have either an 'OK' button only or a 'CANCEL' and 'CONFIRM' buttons, into the fourth you may pass a parent object (optional - default is document.body) and the fifth accept an integer 1 which turns the modal into a password modal.<br><br>We may change the default button text by changing the environmental variables we can find at the top of annika.js<br><br>" +
        "<br>ann.get.modal.btnone = 'CANCEL';"+
        "<br>ann.get.modal.btnonealt = 'OK';" +
        "<br>ann.get.modal.btntwo = 'CONFIRM';" +
        "</p></div>" +

        "<span class='collapsible color-3'>ann.modalResponse</span>(timeout = 100000000)" +
        "<div class='ccontent mb-10'><p>After we call a modal we may need to wait for the user response. The modal response can be 0 or 1." +
        "<br><br>Usage:<br><br>await ann.modalResponse();" +
        "<br>if(ann.get.modal.response==0) {return}" +
        "<br>// ...what happens when user confirms modal...</p></div>" +
        
                                    
        "<span class='collapsible color-3'>ann.modaltips</span>(parentelorid)" +
        "<div class='ccontent mb-10'><p>There may not be a need to directly call this function. Instead, we add the following into Sub's HTML Array items."+
        "<br><br>Usage: &lt;modalcall&gt;Click me&lt;modaltip&gt;I am modaltip&lt;/modaltip&gt;&lt;/modalcall&gt;" +
        "<br><br>As long as our Subs produce all DOM objects on page load, all &lt;modalcall&gt; objects will be given the desired behavior. However, if we were to add a dynamic Sub that does not generate content on page load but on user interaction or add more modaltips within a scope of an ann.cl.onload.customOnloadFunction, to include the additional modaltips, we need to call this function again in our script. We may also include a parameter 'parentelorid' which accepts a parent DOM object or its ID and appends the modal to the given parent instead of the document body.</p></div>" +

        "<span class='collapsible color-3'>ann.onMenuClick</span>(id, e, callback, opencollapsible = ann.get.collapsiblefirstopen)" +
        "<div class='ccontent mb-10'><p>The function handles default onclick events for each menu item, we do not call it directly, instead we use the menu and info commands which will create the needed onclick events by default. Make sure to define the menu and info objects within the scope of one Subroutine.</p></div>" +

        "<span class='collapsible color-3'>ann.cl.onresize.callback</span>(id, e)" +
        "<div class='ccontent mb-10'><p>This function is a custom-ready callback added to the existing window onresize event. Annika already uses the onresize event to handle responsive design features (see the Special Elements section above). When needed, using the callback function ensures we do not override the default event, thus preserving its functionality."+
        "<br><br>Usage:<br><br>ann.cl.onresize.callback = function customOnResize() {" +
        "<br>&nbsp;&nbsp;&nbsp;// ...what happens when user resizes the window...<br>}</p></div>" +
       

        "<span class='collapsible color-3'>ann.rangeSlider</span>(el, parent, callback, percentrange = 100, isInputVisible = false, mininput = 0)" +
        "<div class='ccontent mb-10'><p>We do not call this function directly. Instead, we add a 'slider' command into Sub's Command Array. The command may include additional parameters that the Sub will pass into the function within its scope. For example, '$1_slider_200_ih0.1' increases the default percent range to 200%, and sets the minimum value of the slider and the slider's input field to 0.1 while keeping the input field hidden (_ih). Another command could be 'slider_200_i0.1', which accomplishes the same but shows the input field. We could also specify slider_i1, keeping the default range to 100%, but set the input field visible giving the slider and the input a minimum value of 1. The callback defines what happens when the user drags the slider and should be specified within the scope of the Sub's Callback Array at a corresponding index against the slider command." +
        "<br><br>If we were to call the function directly within our script, the first parameter must be a &lt;slider&gt; object and the second its parent.</p></div>" +
        
        "<span class='collapsible color-3'>ann.require</span>(selector, getall = false)" +
        "<div class='ccontent mb-10'><p>In a scenario our script is dependent on a DOM object that does not yet exist, we may initiate a promise using this function. The first parameter accepts a DOM selector, which may be an ID, class, or tag name, and the second defines whether to return the first object instance of the object or get all available objects." +
        "<br><br>Usage:<br><br>ann.require('.myclass', true).then(async function(resolve){ ... }</p></div>" +
        

        "<span class='collapsible color-3'>ann.requireObject</span>(object, timeout = 3000, reload = false)" +
        "<div class='ccontent mb-10'><p>Similarly to the above, the purpose of this function is to ensure either a function, array, or variable has a value before we use it in our script. We may specify a timeout, defining how long the function will wait for the object to be found (default is 3 seconds) and set the third parament to true, in case the object is not found and we want to automatically reload the page." +
        "<br><br>Usage:<br><br>ann.requireObject(object, 1000).then(async function(resolve) { ... }</p></div>" +

        "<span class='collapsible color-3'>ann.returnNumber</span>(str)" +
        "<div class='ccontent mb-10'><p>Extracts all numbers from a string and returns a float.</p></div>" +

        "<span class='collapsible color-3'>ann.runLast</span>(functionorarrayoffunctions, paramsorofarrayparams, delay = ann.get.lastRunInterval)" +
        "<div class='ccontent mb-10'><p>The function is a closure for other functions and ensures they execute after all Subroutines completed execution. The first parameter accepts a callback function or array of callback functions, the second a parameter or array of parameters we can pass into the callback function(s), and the third parameter is an interval delay. Default is 500ms." +
        "<br><br>Usage:" +
        "<br><br>if(ann.get.hasCollapsible) { ann.runLast(ann.collapsible)}" +
        "<br>if(ann.get.hasHovertips) { ann.runLast(ann.hovertips) }" +
        "<br>if(ann.get.hasCopyToClipboard) { ann.runLast(ann.copyToClipboard) }" +
        "<br>if(ann.get.hasDynResolution) { ann.runLast(ann.applyResolution) }" +
        "<br>if(ann.get.hasModaltips) { ann.runLast(ann.modaltips)}" + 
        "<br>ann.runLast(ann.handleUnload, mycustomcallback)" + 
        "<br><br>The above examples comprise functions we need to run after all Subs complete execution on page load - because they may contain particular DOM objects generated by the Subs, and these functions process the objects and enable user events. There are no direct/reliable means to recognize the number of Subs a developer has added to a custom script, therefore the ann.runLast function checks for Subroutine IDs in intervals and assumes a final count. Although this works very well, it is not a 100% reliable method. We need to ensure the product of the enclosed functions works as expected, and when necessary, allow for a higher interval delay using the variable ann.get.lastRunInterval that is defined at the top of the annika.js library." +
        "<br><br>Within the namespace ann.get we defined a set of boolean variables we also included at the top of the annika.js library. If we don't need some of the features, we may turn them off by setting the variables to false.</p></div>" +

        "<span class='collapsible color-3'>ann.ScriptLoader</span>({ folder: 'js', src: scripts })" +
        "<div class='ccontent mb-10'><p>Loads scripts asynchronously. Use for preloading scripts or post-loading scripts on user interaction. You will particularly appreciate this solution for its performance and simplicity if you ever worked with RequireJS." +
        "<br><br>Usage:"+ 
        "<br><br>let scripts = ['myscript1.js','https://acdn.com/ascript.js', 'myscript2.js']" + 
        "<br>const loader = new ann.ScriptLoader({ folder: 'js', src: scripts });" + 
        "<br>loader.load();" + 
        "</p></div>" +
        
        "<span class='collapsible color-3'>ann.setCSSProp</span>(propName, value, element = document.documentElement)" +
        "<div class='ccontent mb-10'><p>Change CSS root variables<br><br>" + 
        "Usage: ann.setCSSProp('--primary', '#000000');</p></div>" +

        "<span class='collapsible color-3'>ann.show</span>(elorid, show = true)" +
        "<div class='ccontent mb-10'><p>Show/hide a DOM object. The first parameter accepts a DOM object or its ID, the second defines its visibility." +
        "<br><br>Usage:<br><br>ann.show(el)" +
        "<br>ann.show(el, false)</p></div>" +

        "<span class='collapsible color-3'>ann.sleep</span>(milliseconds)" +
        "<div class='ccontent mb-10'><p>Asynchronous delay between actions in milliseconds." +
        "<br><br>Usage: await ann.sleep(1000)</p></div>" +

        "<span class='collapsible color-3'>ann.toggleFade</span>(elorid)" +
        "<div class='ccontent mb-10'><p>Fade object in or out. The parameter accepts a DOM object or its ID</p></div>" +

        "<span class='collapsible color-3'>ann.toggleSlide</span>(elorid)" +
        "<div class='ccontent mb-10'><p>Slide object up (hide) or down (show). The parameter accepts a DOM object or its ID</p></div>" +

        "<span class='collapsible color-3'>ann.waitForGlobal</span>(key, callback)" +
        "<div class='ccontent mb-10'><p>For any scripts we load via the ScriptLoader and need to use while the page is loading, we make sure they are available using a particular global (window) object. For example, we load Croppie JS, its window object is 'Croppie'. We do not need to use this function for user interactions (once all scripts are loaded)" +
        "<br><br>Usage:<br><br>ann.waitForGlobal('Croppie', function () {" +
        "<br>&nbsp;&nbsp;&nbsp;// make things happen" +
        "<br>}</p></div>" +

        "<hr><br><h3>Encryption, Trustless Registration &amp; Authentication</h3><br>" +
    
        "<span class='collapsible color-3'>ann.newNeuron</span>()" +
        "<div class='ccontent mb-10'><p>The function is dependent on Bitcoin JS library. We use it to generate non-custodial key-pair at the client's end. The client is provided with the WIF key and uses it to validate indentity and authenticate with our server." +
        
        "<br><br>{" +
            "<br>&nbsp;&nbsp;&nbsp;&quot;privateKey&quot;: {" +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;bn&quot;: &quot;7d3a79293b7db0497a3c4931695dc43a7e871bb066d44b7612046c249ca38c94&quot;," +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;compressed&quot;: true," +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;network&quot;: &quot;livenet&quot;" +
                "<br>&nbsp;&nbsp;&nbsp;}," +
            "<br>&nbsp;&nbsp;&nbsp;&quot;WIF&quot;: &quot;L1R8zLAJHix9dTVX2VduBoVpUPoL4ne3SFLEZW6J4EJCUejFWxsZ&quot;," +
            "<br>&nbsp;&nbsp;&nbsp;&quot;publicKey&quot;: {" +
                    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;x&quot;: &quot;79d213a04411e5e3a73abe32d4873e16c042e648ad84b6a1a1cba48d8bb6b2bb&quot;," +
                    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;y&quot;: &quot;9790122f55502c10b00d932872e26dd83cffb54345771adfcc6dba153bf1199f&quot;," +
                    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;compressed&quot;: true" +
                    "<br>&nbsp;&nbsp;&nbsp;}," +
                    "<br>&nbsp;&nbsp;&nbsp;&quot;publicAddress&quot;: {" +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;hash&quot;: &quot;ce86e1b26ce18f17302f59dae93c5c197056e137&quot;," +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;: &quot;pubkeyhash&quot;," +
                "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;network&quot;: &quot;livenet&quot;" +
                "<br>&nbsp;&nbsp;&nbsp;}," +
            "<br>&nbsp;&nbsp;&nbsp;&quot;publicAddressString&quot;: &quot;1Kq1nFuKnpR9NYrt4AeQ31fmYxbAxUHamH&quot;" +
        "<br>}</p></div>" +

        "<span class='collapsible color-3'>ann.getPublicAddressFromWif</span>(wif)" +
        "<div class='ccontent mb-10'><p>Get unique public key from the WIF. The function is dependent on Bitcoin JS library.</p></div>" +


        "<span class='collapsible color-3'>ann.encryptRoutine</span>(item, pw, servermsg)" +
        "<div class='ccontent mb-10'><p>The function encrypts plain text item with a custom password, optionally, if specified, it also encrypts another plain text item (server message) using hash of the item as password and a product of the hash we call recovery count.<br><br>" +
        "The function returns a JSON object:" +
        "<br>{" +
        "<br>&nbsp;&nbsp;&quot;pub&quot;: pub," +
        "<br>&nbsp;&nbsp;&quot;item&quot;: encrypteditem," +
        "<br>&nbsp;&nbsp;&quot;ik&quot;: encryptedIK," +
        "<br>&nbsp;&nbsp;&quot;count&quot;: encrypted_count" +
        "<br>};" +
        "<br><br>If the item is WIF key and servermsg is given, all items of the JSON object will be returned. If the item if only WIF key, only pub and the encrypted item will be returned. If the item is other than WIF key, only the encrypted item will be returned.</p></div>" +

        "<span class='collapsible color-3'>ann.decryptRoutine</span>(item, pw, servermsg, encrypted_count)" +
        "<div class='ccontent mb-10'><p>The function works in tandem with ann.encryptRoutine, as the names suggests, decryptRoutine decrypts anything that had been encrypted with the encryptRoutine. Both functions are dependent on cryptographic tools (bitcoin.js, aesjs.js, sha256.js) and several other functions included in Annika's library (ann.decrypt_it, ann.decrypt_it, ann.getPublicAddressFromWif, ann.getRecoveryCount (thank you <a href='https://twitter.com/mrscatmANNE__' target='_blank'>Mr. Scatmanne</a>).<br><br>" +
        "The function returns a JSON object:" +
        "<br>{" +
        "<br>&nbsp;&nbsp;&quot;pub&quot;: pub," +
        "<br>&nbsp;&nbsp;&quot;item&quot;: decrypteditem," +
        "<br>&nbsp;&nbsp;&quot;msg&quot;: decryptedmsg" +
        "<br>};" +
        "<br><br>If only the item and password (pw) are given, the function only returns the decrypted item. If the decrypted item is WIF, the also pub key is returned. If all parameters are given, the the function returns all items.</p></div>" +

        "<span class='collapsible color-3'>ann.cl.reg.makeReg</span>(callback1, callback2)" +
        "<div class='ccontent mb-10'><p>The function delivers a complete registration module and uses a cryptographic process to register the user's identity. The module is provided separately from the annika.js library as a part of the annika-auth.js file, and depending on the required business logic, it may require a custom adaption. We may or may not need to call this function directly. We can add a 'register' command into Sub's Command Array and optionally an array of two callback functions in the Sub's Callbacks Array, which may be used/needed to include custom business logic to the registration process. The callback1 parameter defines what happens after registration is completed within the scope of the reg DOM object. If callback1 is not specified, the registration window will close as soon as the user completes the registration. Callback2 defines what happens after the reg DOM object becomes hidden.<br><br>" +
        "The registration process issues the user with a private key (WIF). We do not see nor keep a copy of the WIF but store the WIF encrypted with a session password in localstorage. The user is asked to retain the WIF and keep it safe. The WIF is used to encrypt the pub key alongside a server message, which produces an identity key (IK) we store on our server but we do not show the IK to the user directly. Each time we need to verify the user's identity, we transmit the identity key over to the client side. The user retrieves their encrypted WIF from the localstorage, decrypts it with their session password, decrypts the IK with their WIF, and transmits back a hash of the server message it contains, and thus we can validate the user's identity on the server side. Optionally, the user may choose to keep the WIF encrypted with a custom password in our custody. We do not keep a copy of the password.</p></div>" + 

        "<span class='collapsible color-3'>ann.cl.auth.authModule</span>()" +
        "<div class='ccontent mb-10'><p>The function delivers a complete authentication module and uses cryptographic process to establish the user's identity. The module is provided separately from the annika.js library as a part of the annika-auth.js file, and depending on the required business logic, it might require a custom adaption. At this time, the function cannot be triggered by a command from from the Command Array. We recommend adding in to the Sub's HTML Content Array instead, alternatively, pass it as a function against the last index of the Command Array or call it directly where applicable.<br><br>A mandatory custom callback function must be specified using the <span class='color-3'>ann.cl.auth.callback</span> abstract (see below).</p></div>" +

        "<span class='collapsible color-3'>ann.cl.auth.callback</span>(msg, ik, wifkey, count)" +
        "<div class='ccontent mb-10'><p>The authModule function checks for the callback definition within the given namespace and will not execute if it is absent. Add a custom callback closure function to apply a custom business logic defining what happens after the user successfully authenticated. The custom Subroutine returned from the closure function must include the root command 'autharea'" +
        "<br><br>Usage:<br><br>ann.cl.auth.callback = function customAuthCallback(msg, ik, wifkey, count) {" +
        "<br>&nbsp;&nbsp;&nbsp;// ...what happens after authentication...<br>" +
        "<br>&nbsp;&nbsp;&nbsp;return ann.Subroutine('patronarea')<br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['div_y','autharea_y',...<br>" +
        "&nbsp;&nbsp;&nbsp;);<br>}<br><br>" +
        "When the user enters data key the event authOnEnterOrBlur is triggered, and returns four parameters into the ann.cl.auth.callback function, a JSON object with a Public Key (msg.pub) and Server Message (msg.msg), the Identity Key (ik), the Data Key (wif), and Encrypted Count which alongside with the Data Key is needed to decrypt the Identity Key which comprises concatenated Public Key and Server Message.<br><br>" +
        "The server-side code is beyond the scope of this documentation, however, we can provide some or all of the code for a flat fee in the range of 1-10 BCH/XMR, depending on the required quantity.</p></div>" +

        "<span class='collapsible color-3'>ann.cl.auth.handleAuth</span>(supresswarning = false)" +
        "<div class='ccontent mb-10'><p>The function checks local storage for encrypted data key. If found, it prompts the user for session password. If not found, the user is notified that no data key has been found. We may suppress the notification by setting the supresswarning parameter to true, for example when calling this function on menu item click.<br><br>" +
        "On successful decryption, the function triggers authOnEnterOrBlur event which request the Identity Key from the server, and after the identity validation succeeds, the content generated by the custom ann.cl.auth.callback function is loaded into view.</p></div>"

        ann.cl.onload.apiOnLoad = function apiOnLoad (){
            setTimeout(function(){
                ann.collapsible();    
                ann.modaltips();
                ann.hovertips();
            },2000);
            
        }
        return ann.Subroutine('api+ann.cl.onload.apiOnLoad',
            ['$2_div_y', '$1_h2', '$1_div_y','$3_p','$3_pre'], 
            [null,head,null,resub2x1,preresub2],
            [null,'collapsible', 'parentcc ccontent jc-start',null,null],
        );
    }

    async function final() {
        let final = "You'll find that there are many ways to execute commands and trigger procedures in the Subroutine context when working with Annika. We'd like you to take our offer and get your copy, experiment with it. And make something great!"
        return ann.Subroutine('final',
            ['$2_div_y','p'], 
            [null,final],
            ['o-v','docsfinal']
        );
    }
}

async function workshop() {

    let workshop = document.querySelector("div[sub='workshop']");
    if(workshop) { workshop.remove() }

    let serviceimgs = [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAEOklEQVRIiY2WXWxTBRTHf+e2xXUL0SiGkZiNtcSkrY6ooYNgkK+AcYgJWla+NYyIBuFJO/XB+gCs40EIODXMIEaSjfKgDrbgCKAPAoMlxrj1xXVCNM4Y0OG4Q8bu8aH31rt2Izsvvfd8/c85/Z/TCveQ2BN7Hvb6jDWKLAUeB2YAHYOlI/Xnzyfv3ivWLd7Jkhs+zx6BTQr3FZi3zDRLzgKfTxXEKFSsrUkt8fg8GYF6wKPwJVAvYswV2AcgSNVUAaCgk3Xzmp5R1Q6gRKHDwtiR7n5zwLHHoynTfpTJEmYJVYJ8CswHLiiyNQ+yemFquo7qUaBEhebQpZE3kiStqVTaz2OrDDQCoGg9MMc2LRdoyYOUjep6RSpBev7wm7vapgiQJbINrE+0oDtFawU5BTrfNS6pA1DVDxzmrK1JLTGUYxb6yvHuhtPFHYReBz1kx7co1nXJ5ZmdAwCQi/kvXtFHAbwG3zo6Q1kDzDKQ5g01qUfcAANEXhbkkB27I0DvtiCZBtDFIF3AMOg3CvXuTsoB7lRU/c4liEX3VYEVt42BMeUHhSvOTCw4a0BWkf1B+pqdLAEyV4EV7oLc7PIApNMxqy7atEqwPgRmCJyzYETgOYGVjnOQ3muDVM8t58dbhWMslKI9iUebugRtByqACz7GYm3diVoMXkDpd/tOBJAlVJklfCZLeDhLuKufSIV38eKkt9wsfQvU8VsGehMkMVg60uKQoPVi4ut4NPUk8J7j2E84WVy3bgacZc1RuNz0vws6zlmUI3//5T8yU7U1Hk09C3QO3fBvFDVF5X+migsQt5ZiCm8tdLPQYw88eHuTIi/aqpfuf+h2p6qo20/h/QkgNgEBN4W9wDQ7xAQpBRlou9xwJR5tqi5KoDqukyB9RePKEjoCxmHQBaDfK7LNQGizU5TmPsdOg+jQDf8XwAlgWCA9dL3kmMr4TgapLisECZC5GqB3RYC+6QEyK4P0XvPeujvydpnHP80emw/D8xtA5887/wVi7gTxaCr/3E+kwuTuuSzh/QH6DhaCucVo70mard2J1wxkQ25q+vxEjvFoajtqzc4HwlJyLDqQOy/5cRVROL8n/4yZp4A/UaLxaGOtG6Au2rgZ+Agxtji6Kno/U3QHgCCHsoQPDBBJgJwBlgFl2BTOg7T3JE0V2Z17k8PranbPdGzm2O0TKHsFvekGD5JpBnnVft2paCP2mVfULlTnj9v40CXzIEoXMAv1Hl+9MDXdKaD1cuIdlP2FYwzQe1gxViuaUjQF/GJ3V3yFAZIkLZ/P2Aj8qrDIP8p3sQV75xQmLpQgP50MkmmY7ApP+DMae6qxwuORDiACjCocBfnKUGu5iuwCkq3diaJFnEyKDiRAuqfhWsmdaU8DH+dap17QdhsAUe2fKG4ymfQPgSPr5+0NWGJsFlikEFI4aVVWbU+n145NFeQ/IdCgeXJZheAAAAAASUVORK5CYII=',
        'data:image/png;base64,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',
        'data:image/png;base64,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',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAARV0lEQVR4nO1beXRT1db/nTsk6UAHOpOkTdIWWmhBpAylUqCggAUUCoKf00NFrTwBn4oiWmaUJz6hCHyivPpEHyKjSIFioROD1IKMBTo3SVtKGdpQ2gz33vP9URkKTQlq7Fvre7+1slZW7j57//bOuefss885QAdCrdYuVqu1izuSA9tRhlXBuvkAJgHo4eHV2dfUcDW7I3hwHWEUACDBE4AMAAjg0WE8OhJKtfZjpVq7rKN5dCTIr5//oqPQEdEnarWuD6V0KAAVABACA0CyDYaygj+dzJ9prEuwdowLzy61WMVIVZCbWavyYACgVG+i1bXX5XIZW2i2SW9X6ct2/lmc/pQAaDQaBaXsWonSp58cHU5ferIHo1V1aiVTZjDhsw1npI3pJYQh5GueJ1NLSkoszubm9AD4+fVwd3M3/+juyvf54oMEvm+0X7vy+ScvYuq7WbbGZtvPzdcbH6mtrb3uTH6MM5UDQzh3d/N2H0/Fg+nrRt/TeQDo19MfOz9P5L07yWNcXTttA4Y4NVdxaiaoDiEL5Tz71NY1o3iNstO9G/wKz04yDI1VsRvTi0Nc3K6y10z1Wc7i6LQAKJUhsYSQtNS5g9j+vQLuu72PlwIaZSdmd45+UCd3z73XrtUbnUDTaa8AI5fza0YMCpEeHRzym5WMTtBgeJyayuXcWjjpz/pdg6BSqe0FBkkyju3NsogQRRrAcWyjKImM1SoFxET7Sf17BTA9u/kipqc/fL0VDum9dNWMgpMXcfL8JRw5USsVnKpjZDKmlmVYSRBEd5YltaKIs1ZBPE4oNhuN5Sd/qw+/KQBqtTZeJmP/12IVI8M1XuZ+Pf0VoSEe8HCTQyFn8NbSQ7R3zAAEBgXh/NnTtuLzJZxNEJiuGm/riHi1bHSCBt20Xq10ni+vx879FcjINViLKq7KeI6TwruGCd26R/EXamrwS8FPWPS3AcRqE9HULKK0sgH5Jy+aSyrrFXIZW2i1iskGQ3mu0wOgDtF+BIo3xo8IlZKfimLDQzxbPc88aMBLc3Lo7v37iH9Ay7tvs9lw+tQpHMzNxd7d6Va9vkoWofO2PTOuKw8A67cV2c6VXeWDg5XWR0YlyuLi4xEVHQ2e5wEAF2trMSphGF27eDAZHqduZa+4sgGrvjopbM8sZwnBMn1l+SynBUAdol3MEubtz5cMZRNilW3KPPfmPoHzjCTLUlPtvrM/HzmCN2bMhKmhAQDg4emJf6SuQEy/fnZtvzVjumBrOEv+9dGwNvVmHjLi5TnZokilJYbK8hRHfXJ4EFQqtb1AyTsr5w2y6/zlegvyjlazjydNaJNkU1MTPlu1GtOTp4k8Iwgpr8Xg/b/2Bc8IwvTkV8XPVq1Gc1NTm7rHjk/i8gqqmSsNbSeHwweqsPy9OJZQzFGpdNGO+uVwAHgZO6d/tL/Y3qieecAAhcJFGhA3sNXvlFJk7NqFMSNGChu+Wie8+3I0+9PmcdwLE7vjxSci8dPmcdw7L0WxG9avE8aMGGHL2L37Lt2xcXFwUbiIP+YZ7NofM0yLB6P8RU6G2Y765WAAhnAEdFTSqFC+PanMQ0YxfnA84bhbyVt1dTVemjJFeHfWLJo0PIA9sPFx7tnx3SDjb5mW8QyeGx+BvA2PceOGBXDvvvkWfWnK80JNdc1NGY7jEBc/iOw7bBTb4zBhZChPKJMIB6dNhwLQpYshyCZI7g90t5/KShLFoWM1iH1o0E2d27dsxfjE0WLjlTK6a91oMufVPqSTm/0YerjL8N60GJK+LpGYLpXQcYmJ4vdbt918PvChePbg0RpIErWr44HuvrAJoodarXYo+3IoACwLzxaC9skXVTSgscnGPhgTg+amJrw7a5a4cO77dPqz3dmdn43iI3RedtveichQb6SvHcX/9ekIdkHKe/Tdt2aJzU1N6NM3Bo1NNraoosFuWw93GQCAELm3I7YcDIDYCADXmwW7MqfOXYaHh5tAAExOSrL9fCiLbkwdQaY9HQWOu/90g+MIXnu2J75dMYL8fDhLmpyUZCMAPDzchFPnLttt19RsAwAIgnTNETsOBaCiQmMkBKKxxr7OwpIrkMtdyOSJE8XOrs3ISBvN9Y32d0R9u+jX0x8ZaaP5zq7N5MmJEwS53IWcLb1qV15f0wgCiNXVZVWO6HdwEMwW5DK2MP/kRbsSxZUNQl3dJXZQbx9sTH2Y9/GSt6uxsqoR+w9XYf/hKuir2/+zfLzk2Jj6MPdQb19SV3eJLaqot9sV809chFzOnQLQ7mB5Aw6vtc1WaeueXEP4W1N735XQ78nR49DRGjZpZBhd9k4syzD2u/yBozVYtOY4zhbVgWFbBmpJFBHZzQ8pyb0x8MHANtvJZSxWzXuIffNDlm7fW8pm5OoxIj74LrmMvEqz2Wzb1oaKNuFwHkAo2VxSWS8/fvZSq9+zDldh2rxcKkqUDO0fRNpzPm3LWTzz5j7Q8BgkpaXhxexsvJidjaS0NFBdDJ56IxP/2nrOPlmGYGj/ICJKlLw6N5dmHW7dy4+erkO54ZqcYaTNjvrlcAAMhtLTchmT+8XGwpvd78S5y3glJUcaP3GCBAC+nV3stj9wtAYLPj2K+FlvY/DsOfANDwchBIQQ+IaHY/CcOXjojTcxb2UBDh27YFePr3eLjaRJT9BXUnKkE7cNiOu+OyvIZWy2Xq8vdNSv+6oHWK3iB+lZleyZ4iu4UNeEKW/vF+KHDqOvzpjJAoC3p/3l7qI1x9F15Ah0S0y0KxM5dizCH34Yi9Yctyvj5dkytiS/Np2JHzqMTnl7v3Chrgmni69gV04l22yTltyPTwwAKNXaBSqVbvm9hA2GigyOI/vnrsi3JqfkiD7+XaSFH3zAmpvNAFre07ZQWdWIs0V1iJo46Z6EoiZNwpnzF+0OjDdsmJvNWPjBB6yPXxcpOSVHmL/iZ5uMJ/uq9WWZ97KhUumWK9XaBQDAqVS6DwH6BAjl1WodNRjK/qYM1k4kEtUYjRXLVGptKgFuzGdfm83StIJTdacVChk27/hGJlcoYDY3A0Cr9PZ2lOkbwLAsOut09wyAT2gYGJZFmd6E4C531xFvBsDcDLkiEJ+sWiObMHaMaDZbIYmYplZrxwJ4GgAoUGs0lM9QBWveoiDlVfryTSqV7hMQmkQAm0ql4RmgzbyStvVdJLCfg/4HgFJK2uFIAYDc9pwQUM5orJitVGtthBIPg7HsdQCo0pdvuiFkNJS/drsWnS5sX69IH0mSwL4+7RXL+o2b5QpFy8BktUltWtYFe0ISRVwuLYVveHi7TlwqKYYkigi9o9ByAxZry/SuULjAYjbj9WnJ1kidB8uxDD1x7vKq0tLi4QB+uL2NUV+x9MZ3g6HsdZVKRyihJqOhIoUBgCpDeYrRWDazXWYAVKqQUYIgDV0ws79s9fx49nJdDfv+7NmiwkXRitydCFG6I7KbH858t/FeJnB640b0iPCHOsi9/QC4KPD+7Nni5bpqZs2CwezcGX15q01MUKu1j9zLhtFYNrPK0FI0ua9ZQMaz74wephG7h3kj0M8VaUsTuNysfWRN6goRAK42mO22TUnujaK9e3Huhx/syhR+vx0lmZl4P/kBuzL1vxZE1qxMlXKz9pG0pQlcoJ8rosI749EhIRInYx2uBQD3UWpWqXTRIqUffvROHBPo6woACPR1RVR4Z7I0NZ1IlJIh/bugm67tRZg6yB3eHjJ8tXwzrlUZ4RYYCFfvzgCluFRchPzVq3Him28w/7W+GJ2gscvjeGEdduXocb6wEJ8vHsIMeODWqjfI35X5946iEC8v380NDVfqHPHL8W0nBhPCgr3MvSJ8Wk32Q2OVWD0/niSn5NCsIzVIHKqxmw0+Nz4C4RovLFrzC7Y+n9EqFe4R4Y9//2M4Ynu3nQoDLTWHrCM1lGUIVs2LJ0MGtC7NPdjDD1p1J0u53jQBwBlH3HI4AAoZM37kYHWbmc6I+GAM7BMkbtlTwjWbRXH5ewNZeznBwAcDsevzkTBeaERRecu6vqvWE6rAtt/5G7BYRcxcdEjclV3ODurbRRg5OLhN7iMHhSjStp4bB2C+I345XBKzWMXI/j3tF1m6arw4Pz9fMe+Xy5g0PdN2ub79nW1VoDsSYpVIiFXe0/nL9RZMmv6jcOCXS9TPz1fsqvGy+8f16xUAi1mIwh9ZEtNoKlSUglW2QzQy1BsWSzP9dtMm9kqTAiOm7LT9fMr+8tlR5J+8iEf+ki5caXKhGzZt5iyWZhoZar/Yo+7iDgqwQVqtyhH9DgVAFFl3AHBzsf/GREf4wGS6zlEA327ZwveLTWAmTc+gn64/RQXh/vMnQaRY8eUJTJ6RQQfEDSXfbtnCUwAm03UuOsLHbjs3l5ayHf8r53vBwQCgAQBMjTa7Ml01nnB35cVjBQVwcXXF4o+WsikLFpGV689Ko6futrVXxbkThSVX8egLu21rNhSLcxcuIov+vpR1cXXFsYICuLvyYldN20kSADRca3n1KLU4ZNChAFRXq2t4jmn85Yz9mYVhCAb2CcKhvNyb6eBj48dhW3o66+4XShJfSKcLPy2gpkZrO+StmJ9aQEe/mE49A8LItvSd7Nhx424+P5iXK8b1CUJ7NYfjhZfA80yDwWCwv6a+nbcjQkC2QIFdm/aU2O8CAIbHqtgDuXmSINyqWAV1CcLnaWnckmUfke1ZteJDk7cLX2451yprtFhFpG05i7hJ28UdOReFJR8vI2v/+U8uMOjWlCgIAg7m5tJhsap2B7fNe0ptFHQXgLbz8jvgcCLk7u5VVFPXlBwW4km6atsucXcJcMPqr0+QqOieJETTOpkJCw/HxEmTGQqWWfVFhvjl1vMSxxLm2JlLePn9PCEnv47+5YWp7IfLPmIjIiPv0n0o7wB+2PE9+XDWQOKqaHss2pFZgbTNhUQSmadMpqsOjcAOB8Bkqq/19PLiM3INcT26dmZ06ruP97ooOBw7c0ksLqujj4wadVfv4nkeffr2Ra/eDzB7dv/I7M0tQ25+NWQKN2b5pyuZMY8/dnNH+E6s/ORjQeVjwf+MDW+z1+47bMRf5+WIokgXGo23FnP3wn0X7INDtH+XJLw57mGtOO2ZaC5c07o32N0eP3kSB/PysHdXulVvsLM9rlZaH3n0/rbHi8obsOrrk8L2H8tZhnHy9vgNKENCExQsSbXYxB66YA9zv54BirBgT7i5cWAIwbzUfNo7ZgACAgNxvvC0tbi4lBcEgQnXeNtGxqv59g5I7MnV24or6nme46TwbmG2rhE9ZLUXLuCXgp8wb3o/IlGKxus2lOpNyD9Ray4zmBRynj1tttimV1VV3vdhqt91REat1vWlVHqU59hYhiVhALwEicoJJVZBFDv3ifKjAx4IIH/EERmOY69QUBnHEAuAekmkxTZBPEwIs+v3HLF11kFJRqcLOzo0Vhm9dtGQ33W46YXZWWJufnVhWVlJbzi42XE/cNYpMcliEZL35hnIzqyK36xkR2YF9h0yEqtVmAonOA848ZzgtWv1xk4eXlzWT1VxIwcHM53bKZm3heKKejz/zn7BJtJFRkP5N06i6dyjslWGkAWCIO6fPGOvzXih0eF2+uprmDxzr1WwSZlGfdlCJ1J09lnhbKGp6fr4epMlP/HFdIdWh0dO1GLM1HRbwzXrEYu1OQlO6vo34PRbY9evX7f5+vh802QRtd+ll/SsqWuiocGexNuz9e5xqd6EJWuOSgtWFsAqSOt5lplUWVlpv8j4B+FPvTChDNElKlhmqcUm9gjyd7WEhXgSACiuaKAX6prkcp49bbHaZhmNlXefknISOuTCUnBwaB9KpSGUEjUAEAK9yIjZ1ZWVxzqCz3/Rgfj/fW3uP+HiZMfdHVbplhNgPAG6e3h01phMV/d0BI+OuzvMoB4ULfUxgvoO49GRUKu1i5Vq7aKO5PB/8x8rr/8AnVUAAAAASUVORK5CYII=',        
        'data:image/png;base64,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',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFFklEQVRoge3aa4hVVRQH8N+UU5lWai8spQkqiMhMKStCekNpD6YIeplifSuCiIKygqjogwSRWB9CK7Ks6IVaWUpj9iB6iEoRlVpDZdn7XZZNH/Y+7HOv59w5995RDOYPm7mctc5/7/+566y91r7DIAYxiEboaMJ3PKbidByM/eL1TViPl7EYqyvyHYYpOBljI9+/+By9WIol+LqJNTbEJCxHX8XxOiY34DsOyypy/YsncGg7AjpxX470B8xDdyQeFsdhOB/z8WPOf27kyDAUD+fsv+FpzMSJkedwnITr0IMt0XczZmkugsCoSNSH33EHRla4byTuxB/x3h7sLYTOu/HaH5iNfSvwHYGnJPFPYveqIjpzIj7FhKo35jARn0WONdgQP/e2yHex8A324TnsVOWmLJzWY/8WJs2wH9ZKT/OdNvkm4KfIdVd/zidEx19wZBuTwjh8E/mWYs82+eBs4b3ZgqMaOWYhdWObE+ZFPK32pW8XWcQsKnM4Ojp8JWSjVjFO2Fu2hQg4QHpfDilyuDka721jkqoihmGBkOGaTql4LM5xTZFxZTSe2QIx4Z2qKmKFlATu17yYS+K9S4qMvdE4tklSGI0vNSeiVwqRZsUcHu/7oN7Qgb+EkmCXJggzzInEy1UTsQFdOFXYcJsVMzLe8329oV0h6yJxWUosEpHhDKkSqCpmN6nq2ArthFaWavcqsDUSkeFM/Km6mC5p094Kr0bjWRUWXo9soZfUXa8iIsNUISqqiDkt+q0sMs6KxjkVFl6PC6SYnSbk+slCWVJFRIZzhUq3PzGzo8/tRcbx0fg1hldVUEBePz5STUSGbvytXEynVIROKiN5JTrMamLiPKYIXeI6rBKe2IgWeC6UxNynVsyV8fpqDarg46PTr8Iu3QhDsXMLi6yKi/CPWjGjsTFeO6c/grlSXBc1P2PwYpzkV9yktTIjw6t4q2Suy6Qu8X68Fj8/X4U431itxj45W5cUnxvxs+opswxvRY61ivuV6ZKYPnyiWreK0J6uVismL6JHSK35a7e2psPeeE8qOUYX+FwhbNZ9uKXZCfaRxOTb1UxEhi58K+wBrZb/o6RU/SEOLPC5NtrXtTJBXkyRCEJIrYr2N4XSuiwJDMUzQjarD8URUph9bOsKY1K0bWpBB0KvnB3f7FFn61B7ZJSNpxQXj2OkDa8+rRJKnDekJ39QvJ4P4Zb7pX0jwRbhzKlIxGZcLpwaZnXXIyV83f2I2UPqjT7D9dKJTI8mjoOKsEA6lJgsbER5Ed0533HCO9MnlOmtiBkupdpsvKS9Fhy1xd9m4byrSESGu6N9mfKOsz8x06LtfVxqADff4XhW7VOaXuCX/0ayMadgoZSL6ZIe1tUDJSCPDqHN/DBOcnKdPX8MtBgzpD5+bglnXsw8oY3IXuxXMGRAFdThhjjRN1JNlheRz1r5Q4nzSvjyYrKxQmtVeFMYIh0uf4d74t+y1Dsz2l5Q/hPB49LmezN2HfBVl6BTSLH5p7jI1iI6hTDL+z1Q5zdOaMoa9f3bHKfg7biIGXW2Tumb+xsLpQVn31w+JOdvnyWX4yqpfMgOv/Mi8mk6v/DXhB+QGlUD2xVDpO5yk/BOZOFUtNccozbUHrIDiMgwXO1RaKMN81gp603cXgtsBrsKGWeNsNCFBT750Lpz+y2tNUyUjofyvX/ZXrND40EpfCbF8b8TQSjyHlW9V9mhMQS34QvhPxpusY1rp0EMYoDxH8fg6AEiZClhAAAAAElFTkSuQmCC'
    ];
    let introheader = "ANNIKA'S DEMO WORKSHOP"
    let consult = 'GET A QUOTE'

    let serviceheaders = ['Annika<br/>Integration', '101 Crash<br/>Course', 'Annika<br/>Apps',  "Annika's<br>Guardian", 
    'Advanced<br/>Craft', 'craft<br>with us' ];
    let servicestext = [
        'Transform your web apps with Annika',  
        'Book 1 on 1 or group learning sessions ',
        'We make web apps. Powered by Annika',
        "Managed servers for your apps",
        'Conceptualized data architecture',
        'Partnership opportunities at Anne Media',
        ];
    let actionbuttons = ['GET STARTED','LEARN ANNIKA','I NEED APP','I WANT THIS', 'SAY WHAT?',"JOIN US"];
    let servicecallbacks = [serviceInfo,serviceInfo,serviceInfo,serviceInfo,serviceInfo,serviceInfo]
    
    let c = ann.declareVars(10);
    c.v3='f-12rem w-89 bblr-unset bblrr-unset',c.v4='service-container sc2 flexitr scrollbar o-y-a',c.v5='singleserviceb+serviceicon',c.v6= 'serviceinner',c.v7='servicetitle',c.v8='w-100 servicebutton',c.v9='annikabutton',c.v10='close'
    let css = ann.json2array(c);

    let cl = ann.declareVars(10);
    cl.v8=servicecallbacks, cl.v9=serviceInfo,cl.v10=close;
    let clb = ann.json2array(cl);

    return ann.Subroutine('workshop',
    ['workshop_y', 'div_y', 'h2', '$1_div', '^_img', '^_h3', '^_p', '^_button', '$4_button','$3_div' ],
    [null,null,introheader,null,serviceimgs, serviceheaders, servicestext, actionbuttons, consult, 'X'],
    [...css],[...clb]
    );

    function serviceInfo(id, e) {
        let workshop = e.target.closest("workshop");
        ann.modal('INFO', "<span class='inlineb'>This view is solely intented for demo purposes, to demostrate the output of the particular Subroutine. You can find the source code in our <a href='https://github.com/annemedia/annika/tree/main/js/docs.js' target='_blank'>GitHub repository</a>.</span>",1,workshop);
    }

   

    function close(id, e) {
        let workshop = e.target.closest("workshop");
        if(workshop) { workshop.remove() }
    }
}

async function griddemo() {

    var daylist = ann.getDaysArray(new Date(Date.now()),ann.addYearsToDate(1));
    var preferedtime = ['11:00<br/>-<br/>12:00','12:00<br/>-<br/>13:00','13:00<br/>-<br/>14:00','14:00<br/>-<br/>15:00','15:00<br/>-<br/>16:00', '16:00<br/>-<br/>17:00', '17:00<br/>-<br/>18:00', '18:00<br/>-<br/>19:00', '19:00<br/>-<br/>20:00', '20:00<br/>-<br/>21:00']
    // var daylist = ann.getDaysArray(new Date("2018-05-01"),new Date("2018-07-01"));

    ann.cl.onload.griddSubOnLoad = async function griddSubOnLoad(response) {
        let grid1 = document.querySelectorAll("grid")[0];
        let grid2 = document.querySelectorAll("grid")[1];
        grid1.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) { grid1.scrollLeft += 100 }
            else {grid1.scrollLeft -= 100}
        });
        grid2.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) { grid2.scrollLeft += 100 }
            else {grid2.scrollLeft -= 100}
        });
       
    }
    
    let c = ann.declareVars(8);
    c.v1='fadeIn',c.v2='pointer mw-650px f-12rem',c.v3='service-container sc2 flexitr dyn-w',c.v4='w-100',c.v5='dyn-w',c.v7='justifyc',c.v8='close'
    let css = ann.json2array(c);

    let cl = ann.declareVars(8);
    cl.v2=gridDemo;
    let clb = ann.json2array(cl);

    ann.Subroutine('gridd+ann.cl.onload.griddSubOnLoad',
    [ 'griddemo_y', 'h2_y', '$1_div_y', 'form_y', 'div_y', '$5_grid_y', '$5_grid_y','$2_div'],
    [null,"GRID DEMO",null,null, null, daylist, preferedtime, 'X'],
    [...css],[...clb]
    );  

    function gridDemo(id, e) {
        let el = document.querySelector("griddemo");
        ann.toggleFade(el);
        setTimeout(function(){
            el.remove()
        },2500)

    }
}