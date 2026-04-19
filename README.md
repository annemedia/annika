# ANNIKA.JS (coming soon)

**A lightweight, high-performance JavaScript framework** that lets you build complex, modular, and responsive single-page applications using pure declarative code — no HTML templates required.

ANNIKA core class is the **Subroutine DSL**: a powerful nested array-based syntax language that lets you generate, style, nest, and wire up portable UI components in a single declarative call.

Combined with a rich set of supporting classes (`ANNIKA_UTILS`, `ANNIKA_DOM`, `ANNIKA_LANGSET`, `ANNIKA_IDB`, `ANNIKA_VALIDATION`, `ANNIKA_LOADER`, `ANNIKA_PROGRESS`), it forms a complete frontend framework optimized for data-heavy, privacy-focused, and high-interaction applications.

> Sentiment: html files be gone.

---

## Why ANNIKA?

- **Ultra-concise declarative DOM generation** - replace 20–100 lines of imperative code with one clean Subroutine call.
- **Fractal rendering** - automatic handling of lists, tables, JSON objects, grids, and menus.
- **Built-in modularity** - self-contained widgets (JS + CSS), nested child subroutines, and onload hooks.
- **Enterprise-grade helpers** - IndexedDB with upsert/hash logic, advanced validation (including AI toxicity detection), i18n, progress UI, script loader, crypto primitives, and more.
- **Responsive-first** - `_x` / `_y` flex directives + dynamic viewport utilities.
- **Privacy & security focused** - non-custodial patterns, PBKDF2 key derivation, session management, and strict input validation.

---

## Why Not Web Components?

ANNIKA Subroutine is a **higher-level abstraction** than Web Components, offering greater simplicity and productivity while maintaining full control.

| Feature              | Web Components                              | ANNIKA Subroutine                          |
|----------------------|---------------------------------------------|--------------------------------------------|
| Learning curve       | Custom elements, Shadow DOM, templates      | Simple array syntax                        |
| DOM generation       | Manual or templating                        | Fully declarative                          |
| Layout helpers       | None                                        | `_x` / `_y` directives                    |
| Event binding        | Manual listeners                            | `_@click` (and other `_@event`) syntax    |
| Parallel data        | Manual mapping                              | Built-in parallel arrays (`declareVars`)   |
| Dynamic lists        | Manual loops                                | Automatic Fractal system                   |
| Lines of code        | 20–50 per component                         | 1–5 per component                          |
| Reusability          | Manual composition                          | Built-in widget system + nesting           |

---

## Core: The Subroutine DSL

The `Subroutine` method is the heart of ANNIKA. It accepts up to 7 parameters and generates complete DOM trees on the fly, fast.

### Signature

```javascript
ann.Subroutine(nameOrArray, commands, html, classes, callbacks, params, attributes)
```

The Subroutine keeps your DOM modular, nested, and portable.

#### Parameters

- nameOrArray: string or [name, parentSelector, appendMethod] (before|after|prepend|append)
- commands: array of command strings (the DSL)
- html, classes, callbacks, params, attributes: parallel objects (created via ann.utils.declareVars(n))

Command Syntax

| Directive / Pattern      | Meaning |
|--------------------------|---------|
| `_y`                     | Vertical flex container (`flexitc`) |
| `_x`                     | Horizontal flex container (`flexitr`) |
| `$N_`                    | Append this element to the N-th command (1-based; `$0_` = `document.body`) |
| `_@event`                | Bind specific event (`_@click`, `_@submit`, `_@keyup`, `_@mousedown`, etc.). Click is default when a callback is provided |
| `xN_`                    | Multiplier – repeat the element N times (`x5_input_text`) |
| `input_*`                | Special inputs (`input_text`, `input_password` with eye toggle, `input_radio`, `input_checkbox`) |
| `widgets`                | Load child widgets (widget names go in the matching HTML slot) |
| `select` / `countryselect` | Custom searchable dropdown |
| `countries`              | Radio/checkbox list of countries with flags |
| `slider`                 | Range slider (optional input) |
| `croppie`                | Image cropper component |
| `table`                  | Full HTML table with header/body support |
| `grid`                   | Grid layout with radio/checkbox support |
| `menu`                   | Navigation menu with left/right controls |
| `^_` / `#_`              | Fractal / JSON rendering modifiers |
| `+multi`                 | Multi-select mode (for selects) |

Example (basic component)

```javascript
async myComponent() {
    let [h, c, cl] = ann.utils.declareVars(4);

    h.v1 = "Hello ANNIKA";
    h.v2 = "Click me!";
    h.v3 = "/assets/icon.svg";
    h.v4 = "Extra content";

    c.v1 = "card flexitc p-6";
    c.v2 = "btn btn-primary";
    cl.v2 = (id, e) => console.log("Clicked!", id);

    return ann.Subroutine('myComponent', ['div_y', 'h1', '$1_button', '$1_img'], h, c, cl);
}
```
### Advanced Subroutine Features

ANNIKA’s Subroutine is far more than a simple DOM builder. It includes powerful built-in capabilities for modularity, dynamic rendering, and lifecycle control.

#### Fractals & Dynamic Rendering
ANNIKA automatically detects repeated data structures and renders them efficiently using its **cooperatively non-blocking** fractal engine (`_makeFractals`):

- Multi-dimensional arrays → repeated blocks (`_verticalPrint`)
- Arrays of objects with flexible key mapping (`_jsonPrint`)
- Full HTML tables with header/body support (`_tablePrint`)
- Built-in grids, menus, and automatic radio/checkbox groups
- Smart depth calculation for nested fractal structuress

#### Lifecycle Hooks
- `ann.onload.componentName` - automatically executed after the Subroutine finishes rendering, support for post-render logic
- Child subroutines (pass a function as the last item in the commands array) run automatically after the parent completes

#### Additional Advanced Capabilities
- `$N_` parent targeting with flexible append methods (`before`, `after`, `prepend`, `append`)
- Event binding with explicit `_@event` or automatic click when callback is provided
- Multiplier syntax (`xN_`) for repeating elements
- Special element handling (`input_password` with eye toggle, searchable selects, croppie, sliders, countries, etc.)
- Seamless integration with supporting Classes

---

## Supporting Classes

ANNIKA is built on a rich set of tightly integrated supporting classes that provide utilities, DOM manipulation, internationalization, persistence, validation, loading, and UI feedback. These classes work seamlessly with the core `Subroutine` DSL.

### ANNIKA_UTILS

`ANNIKA_UTILS` is the general-purpose utility layer that powers most operations in ANNIKA. It provides essential helpers for data handling, networking, cryptography, async control, and more.

**namespace: ann.utils**

#### Core Data Helpers
- `declareVars(count)` — Creates a set of parallel objects (`{ v1: null, v2: null, ... }`) used for clean, indexed data passing into Subroutines.
- `jsons2arrays()` — Converts multiple JSON objects into parallel arrays (used internally by Subroutine).
- `json2array()` / `arrayToJson()` — Simple bidirectional conversion between JSON objects and arrays.
- `deepEqual()` — Deep comparison for arrays and objects.
- `arraysEqual()` — Fast equality check for arrays.
- `sortJson()`, `sortObjectByKeys()`, `sortArrayByKeys()`, `orderJsonNumeric()` — Flexible sorting utilities.

#### Networking & I/O
- `fetch()` — Robust fetch wrapper with automatic CSRF token handling, support for JSON, blob, and HTML responses, and proper credentials management.
- `addStyleSheet()` — Dynamically injects CSS files.
- `createListener()` — Safe event listener creation with callback support.

#### Cryptography & Security
- `sha256()` — SHA-256 hashing.
- `deriveKey()` — PBKDF2 key derivation (used for session encryption).
- `MD5()`, `crc32()` — Additional hash functions.
- `randomHex()`, `generateRandomString()` — Secure random value generation.
- `stringToArrayBuffer()`, `hexToArrayBuffer()`, `arrayBufferToHex()` — Low-level buffer conversions.

#### Session & Authentication
- `createSession()`, `checkSession()` — Encrypted session management with PIN-based protection and automatic expiry.
- `isset()` — Safe null/undefined/empty checks.

#### Date, String & Formatting
- `localDateTimeFromEpoch()` — Converts Unix timestamps to localized date/time strings.
- `minMaxDate()` — Calculates valid date ranges (e.g., for deadlines).
- `commaNumber()`, `ordinalNumber()`, `percentage()` — Formatting helpers.
- `getPartString()`, `returnNumber()`, `removeLastCharacter()` — String manipulation utilities.

#### Async & DOM Helpers
- `sleep(ms)` — Promise-based delay.
- `require(selector)` — Waits for a DOM element to appear (MutationObserver-based).
- `waitForElement()`, `requireObject()`, `evalObject()`, `waitForGlobal()` — Robust waiting utilities.
- `runLast()` — Executes callbacks only after all Subroutines have completed.
- `applyResolution()` — Dynamic `--vh` / `--vw` CSS variable setup for mobile responsiveness.

#### Other Utilities
- `colorLog()` — Colored console output with success/info/warning/error styles.
- `downloadBase64File()` — Triggers browser downloads from base64 data.
- `convertToWebP()` — Image compression and format conversion.
- `imageUrlToBase64()` — Converts remote images to base64.
- `doesImageExist()` — Promise-based image existence check.

`ANNIKA_UTILS` is injected into the main `ann` instance and is used extensively by Subroutines, Widgets, and higher-level custom classes.

### ANNIKA_DOM

`ANNIKA_DOM` is the rich DOM manipulation and UI component layer of ANNIKA. It provides high-level helpers for element selection, visibility, animations, and a wide range of ready-to-use UI components.

**namespace: ann.dom**

#### Core DOM Utilities
- `getEl(selector, multi)` — Smart element retrieval supporting IDs, classes, queries, or direct Element/NodeList.
- `show()` / `hide()` — Toggle visibility with intelligent display handling (including flex, block, etc.).
- `addClasses()` / `removeClasses()` / `swapClasses()` — Safe, bulk class manipulation.
- `toggleFade()` / `toggleSlide()` — Smooth fade and slide animations with z-index management.
- `clear()` / `remove()` — Quick content clearing or element removal.
- `recalculateOffsetTop()` — Accurate offset calculation accounting for nested parents.
- `isVisible()` — Checks if an element is currently visible (accounts for classes like `hide`, `fadeOut`, etc.).

#### Event & Interaction Helpers
- `createListener()` (via utils) — Safe event binding with path fallback and callback support.
- `copyToClipboard()` — Automatic copy-to-clipboard functionality with visual feedback for elements marked `.copycontent`.
- `makeDraggable()` — Makes elements draggable (with `.draggable` child support).
- `makeResizable()` — Adds resize handles to floating panels with min/max constraints.

#### Advanced UI Components
- `modal()` — Highly flexible modal system supporting multiple types (ERROR, WARN, INFO, SUCCESS, PASS, QUESTION), PIN entry, password validation with eye toggle, and custom button text. Returns user response via `modalResponse()`.
- `rangeSlider()` — Custom range slider with optional linked input, live callbacks, and tooltip.
- `createCroppie()` — Integrated image cropper with upload, preview, confirm, and discard flow.
- `collapsible()` — Accordion-style expandable sections with options for first-open and single-active behavior.
- `hovertips()` / `modaltips()` — Automatic tooltip system for hover and click triggers.

#### Navigation & Layout
- `jumpPage()` — Smooth scrolling to indexed sections with offset support.
- `showImgOverlay()` — Full-screen image/video overlay with close button.
- `toggleMaximize()` — Maximize/restore floating panels with body overflow handling.
- `selectItem()` — Programmatic selection for custom dropdowns.

#### Progress & Feedback
- Integrated with `ANNIKA_PROGRESS` for step-based progress bars and splash screens.
- `loadSplash()` — Quick loading overlay with cloned loader element.

`ANNIKA_DOM` works in close coordination with `ANNIKA_UTILS` and is injected into the main `ann` instance. It is heavily used by Subroutines, Widgets, and complex flows like the fundraiser builder (`KUNO_FUNDRAISER`).

Many of its methods are designed to be called from within Subroutine callbacks or `ann.onload` hooks, enabling powerful dynamic UI behavior with minimal code.

### ANNIKA_IDB

`ANNIKA_IDB` is a robust, production-ready IndexedDB abstraction layer that makes persistent client-side storage simple, reliable, and powerful. It is heavily used for saving drafts, user data, and temporary application state.

**namespace: ann.db**

#### Key Features

- **Automatic schema management** — Creates and upgrades object stores based on your configuration.
- **Smart upsert logic** — When storing arrays of items, it intelligently merges new data with existing records instead of overwriting.
- **Automatic hashing** — Generates and stores `itemhash` (SHA-256) for change detection and integrity verification.
- **Flexible retrieval** — Supports `get`, `getAll`, `getAllByIndex`, and filtered lookups.
- **Persistent storage request** — Automatically asks the browser for persistent storage to prevent data loss.
- **Safe deletion** — Smart `delete` that works on both full records and individual items inside arrays.

#### Basic Usage

```javascript
// Initialize with configuration
ann.idb = new ANNIKA_IDB({
    dbName: "MyAppDB",
    version: 1,
    stores: [
        {
            name: "mydbstore1",
            keyPath: "id",
            indexes: [
                { name: "id", keyPath: "id", unique: true }
            ]
        },
        {
            name: "mydbstore2",
            keyPath: "custom_id"
        }
    ]
});
```
#### Main Methods

- init() — Opens the database and handles upgrades (automatically called).
- get(storeName, key, value?) — Retrieve a record. If value is provided and the record contains an item array, it returns the matching sub-item.
- getAll(storeName) — Returns all records in a store.
- getAllByIndex(storeName, indexName, indexValue) — Query by index (very useful for fast lookups).
- put(storeName, data) — Smart upsert. If data.item is an array with one object, it merges intelligently with existing data and updates the hash.
- putAll(storeName, dataArray) — Bulk insert/update of multiple records.
- delete(storeName, key, value?) — Delete a full record or a specific item inside an array (by id).
- clear() — Deletes the entire database.

####  Advanced Capabilities

- Array item merging: When you put an object with item: [{ id: "x", ... }], it automatically finds the existing record and merges the new item instead of replacing the whole array.
- Change detection: Every stored array gets an itemhash so you can easily detect modifications.
- Integrity focused: Designed for offline-first apps where data consistency matters.

### ANNIKA_LOADER

`ANNIKA_LOADER` is a lightweight, reliable asynchronous **JavaScript** loader. It is the core engine behind widget loading, but it is a general-purpose utility that can load any `.js` files with proper ordering, deduplication, and error handling.

**namespace: ann.ANNIKA_LOADER**

#### Key Features

- **Mixed loading modes** — Supports both synchronous (blocking) and asynchronous scripts while preserving execution order when required.
- **Automatic deduplication** — Prevents the same script from being loaded multiple times.
- **Error handling** — Failed script loads can optionally trigger a page reload to avoid broken states.
- **Callback support** — Runs a user-defined callback once all scripts in the batch have finished loading.

#### How It Relates to Widgets

When you load widgets using `ann.widgetLoader()` or the `widgets` command inside a Subroutine:

1. `ANNIKA_LOADER` loads the corresponding `.js` file.
2. Once the JavaScript finishes loading, ANNIKA **automatically** injects the matching `.css` file using `utils.addStyleSheet()`.

**Important**: `ANNIKA_LOADER` itself only loads JavaScript. CSS injection is handled separately by the widget system.

#### Basic Usage

```javascript
// Load a single script
new ann.ANNIKA_LOADER({
    folder: 'widgets/myWidget',
    src: ['myWidget.js'],
    callback: () => {
        console.log('Script loaded successfully');
    }
}).load();
```

### ANNIKA_PROGRESS
Polished spinner and progress UI component.

**namespace: ann.progress**

- Animated progress bar with step tracking and percentage display
- Automatic splash screen integration
- `show(totalSteps)`, `updateProgress(step, text)`, `hide()`
- Works seamlessly with long-running operations (campaign publishing, image processing, etc.)

#### Two Usage Modes

1. **Loader Only Mode** (just spinner, no progress bar)
```javascript
   ann.progress.show();        // Show loader only
   // ... perform work ...
   ann.progress.hide();        // Hide when done
    ```
2. **Progress Bar Mode (with steps and status text)**
```javascript
const progressSteps = 3;    // Total number of steps
let step = 1;

ann.progress.show(progressSteps);                    // Initialize with total steps

await ann.progress.updateProgress(step++, 'Re-validating submission...');
// validation logic...

await ann.progress.updateProgress(step++, 'Uploading data...');
// upload logic

await ann.progress.updateProgress(step++, 'Uploading media...');
// upload logic...

ann.progress.hide();                                 // Hide when finished
```

#### Main Methods
- show(totalSteps?)
  - No argument → shows only the animated loader/spinner.  
  - With a number → shows loader + progress bar initialized to that total step count.
- updateProgress(step, text) - Updates the bar to the current step and changes the status message.
- hide() - Hides the entire progress UI and resets internal state.

#### Notes
The progress percentage is calculated automatically as (currentStep / totalSteps) * 100.
The status text is fully customizable on each updateProgress() call.
Ideal for multi-step operations like form submission, image processing, data-heavy publishing.

ANNIKA_PROGRESS helps improve user experience by giving clear visual feedback during longer operations.

> **These supporting classes are designed to be used both independently and in tight coordination with the main `ANNIKA.Subroutine` engine, giving you a complete, production-ready frontend toolkit.**

## Advanced Class Templates

The framework ships with powerful templates for complex flows. Language data and input validation rules.

### ANNIKA_LANGSET

`ANNIKA_LANGSET` is the internationalization and localized content management layer of ANNIKA. It provides a centralized system for storing, organizing, filtering, and retrieving translated strings, labels, messages, and lookup data used throughout the application.

**namespace: ann.lg** 
**namespace: ann.LANGSET**

#### Key Features

- **Grouped content organization** — Strings and data are structured by language and logical groups (e.g., form labels, validation messages, modal texts, etc.).
- **Flexible filtering** — Retrieve items by group, language, or specific ID.
- **Variable support** — Built-in placeholder replacement for dynamic strings.
- **Extensible design** — The class is built to be easily customizable, allowing developers to define their own language sets, data sources, and translation strategies.

#### Basic Usage

```javascript
// Initialize the language set
ann.lg = new ANNIKA_LANGSET(ann.LANG);

// Get the active language object
ann.LANGSET = ann.lg.getLangSet();
let title = ann.LANGSET['pirate_ipsum']
```
#### Main Methods
- ann.lg.getLangSet() — Returns the full language object for the currently active language.
- ann.lg.data() — Returns the raw dataset containing all grouped content.
- ann.lg.filter(data, group, lang) — Filters items by group and language.
- ann.lg.filterLookupsByID(group, lang, id) — Retrieves a specific item by its ID within a group.
- ann.lg.variableResource(key, variablesarray) — Replaces placeholders in a string with provided values.

#### Design Philosophy
ANNIKA_LANGSET is intentionally kept lightweight and generic. It serves as a foundation for managing all text and lookup data in your application, making it easy to support multiple languages, maintain consistency, and keep copy separate from business logic. It integrates naturally with Subroutines, validation messages, modals, and widgets, helping keep your UI text centralized and maintainable.

### ANNIKA_VALIDATION

`ANNIKA_VALIDATION` is a flexible, declarative validation engine for ANNIKA. It allows developers to define validation rules directly on DOM elements using a simple `validate` attribute, while providing centralized error handling and user feedback.

**namespace: ann.val**

#### Key Features

- **Declarative rules** — Attach validation logic to any element via the `validate` attribute.
- **Rich set of built-in operators** — Supports length checks, word count, date ranges, pattern matching, custom functions, and more.
- **Content safety tools** — Includes detection for repetitive patterns, excessive symbols, emoji usage, uppercase ratios, and low-information content.
- **Conditional validation** — Supports rules like `ALLOWEMPTY`, `ALLOWEMPTYIF`, and `IGNOREIFEMPTY` for dynamic field requirements.
- **Extensible design** — Easy to add custom operators and integrate with external validation logic or AI-based moderation.
- **User-friendly feedback** — Automatically displays localized error messages via modals when validation fails.


#### Basic Usage

```javascript
// Validate inputs inside a container
const data = await ann.val.validateInputs("#myForm input");

// or Validate with custom options
const data = await ann.val.validateInputs(".custominput", false, true);
```
```javascript
// then...
if (!data) {
    // just return the VALIDATION + LANGSET classes will inform.
    return;
}
```
```javascript
// or direct usage of the operators if you want...
const title1Valid = await Promise.all([
      ann.val.operators['>length'](json.nk_titles[0], 15),
      ann.val.operators['<length'](json.nk_titles[0], 80),
      ann.val.operators['restrictUnnatural'](json.nk_titles[0], 80, null, true)
  ]);
  if (!title1Valid[0] || !title1Valid[1] || !title1Valid[2]) {
      await ann.val.modalPass(false, 'nk_title');
      return false;
  }
```
#### Main Methods
- validateInputs(selector, ...) — Validates all matching elements and returns the collected values (or false on failure).
- modalPass(passed, validateKey) — Displays an appropriate error modal using the language system.
- getValidationSet() / getConditions() — Define and manage validation rules and conditions.

#### Design Philosophy
ANNIKA_VALIDATION is built as a reusable template. It provides a solid foundation for form and input validation while remaining fully customizable. You can extend it with your own operators, integrate third-party libraries, or adapt the error messaging to fit any application's needs.

It integrates naturally with Subroutines, modals, and the language system, helping keep validation logic clean, maintainable, and consistent across your UI.

## Installation & Setup

ANNIKA is a browser-native framework. There are no npm packages, no build steps, and no module imports. Everything is included via a single script tag.

#### Basic Setup

1. **Include the main script**

   Place `annika.js` (which contains the `ANNIKA` class and all supporting classes: `ANNIKA_UTILS`, `ANNIKA_DOM`, `ANNIKA_LANGSET`, `ANNIKA_IDB`, `ANNIKA_VALIDATION`, `ANNIKA_LOADER`, and `ANNIKA_PROGRESS`) in your public js folder, then add it to your HTML head:

```html
   <link rel="preload" href="/js/annika.js?v=1707564282" as="script">
   <script src="/js/annika.js" async></script>
```
In annika.js file, customise this function to suit your needs.

```javascript

function classGroups() {
    
    const ann = new ANNIKA();
    ann.utils = new ANNIKA_UTILS();
    ann.dom = new ANNIKA_DOM();
    ann.setA(ann.utils, ann.dom);
    ann.dom.setA(ann.utils);
    ann.utils.setA(ann.dom);
    ann.LANG = localStorage.getItem('lang') || 'en';
    ann.lg = new ANNIKA_LANGSET(ann.LANG);
    ann.LANGSET = ann.lg.getLangSet();
    // project vars;
    ann.salt="a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6";
    ann.mem = {};
    ann.mem.bypassValidation = false;
    let hassession = localStorage.getItem('session');
    if(!hassession || hassession === "NaN" || hassession === "undefined" || !parseInt(hassession)) {
      localStorage.setItem('session', 20)
    }
    ann.mem.session = parseInt(localStorage.getItem('session'));
    ann.SITE_DOMAIN = window.location.origin;
    ann.val = new ANNIKA_VALIDATION(ann);
    if (ann.db && ann.db.db) {
      ann.db.db.close();
      ann.db.db = null;
      console.log('Closed existing database connection');
  }
    ann.db = new ANNIKA_IDB({
      dbName: 'annika',
      version: 1,
      stores: [
          {
              name: 'annikastore1',
              keyPath: 'id'
          },
          {
            name: 'annikastore2',
            keyPath: 'guid',
            indexes: [
              { name: 'aauth', keyPath: 'aauth', unique: false }
            ]
          }
      ]
    });

    ann.ANNIKA_LOADER = ANNIKA_LOADER;
    ann.progress = new ANNIKA_PROGRESS();

    ann.run = {};
    ann.onload = {};
    ann.img = {};
    ann.widgets = {};
    window.ann = ann;
    return ann;
    
}
const ann = classGroups();
```

2. **Make sure the ann object is loaded (optional)**

For optimal performance we recommend a small preload script waiting for the ann object. Needed if/because you should load annika.js in head async - as a main driver fo DOM composition.

```html
   <script src="/js/preload.js"></script>
   <script src="/js/annika.js" async></script>
```

**The preload.js script**
```javascript
const PRELOAD = {}

PRELOAD.waitForAnn = async function waitForAnn() {
    while (!window['ann']) {
        console.log('waiting for ann')
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
```

**Get your scripts loaded in app.js**

Unless specified to the contrary, every script passing through the ANNIKA_LOADER class will load async.

```javascript
PRELOAD.waitForAnn().then(() => {
    console.log('ann is now truthy');
    const scripts = [{
            src: 'libs/mylib1.js',
            async: false
         },
        'libs/mylib2.js',
        'libs/addressvalidator.js'
    ];
    new ann.ANNIKA_LOADER({
        folder: 'js',
        src: scripts,
        callback: () => {
            ann.run.MY_CUSTOM_CLASS = new MY_CUSTOM_CLASS();
            
        }
    }).load().catch(error => console.error('Script loading failed:', error));
});
```

For optimal performance, use async false in the loader only when neccessary. If objects are dependent/needed on page load, you can easily handle the waits in your custom code with...

```javascript
await ann.utils.waitForObject(objstring, callback, timeout = 10000).
```
---

## Start Building with Subroutines

```javascript

async function welcome() {
    let [h, c, cl] = ann.utils.declareVars(3);

    h.v1 = "Welcome to ANNIKA";
    c.v1 = "main-container";

    return ann.Subroutine('homepage', ['welcome_y', 'h1', 'widgets'], h, c, cl);
}
```

Project Structure (Recommended)

```
your-project/
└── js/
│   ├── annika.js              # Single file containing all ANNIKA classes
│   ├── app.js                 # Your application code
├── widgets/                   # Reusable components
│   ├── userCard/
│   │   ├── userCard.js
│   │   └── userCard.css
│   └── ...
├── index.html/php
```

Note: ANNIKA runs directly in the browser. It requires no bundlers, no npm, and no transpilation. Just a standard web browser supporting async/await, fetch, IndexedDB, and ES6+ features.

## Advanced Subroutine Usage: Multi-Step Wizard with Recursive Calls

A powerful pattern in ANNIKA is building **multi-step wizards or complex flows** using a single method that recursively calls `ann.Subroutine` with different command arrays and data depending on the current step.

The following simplified example comes from a real production class.

### Core Pattern: `myWizard(step)`

```javascript

async myWizard(id, e, step) {

    // Number of parallel objects may be dynamic depending on the step
    let vars = 15;
    if (step === 1) vars = 17; // Step 1 needs extra slots

    let [h, c, cl, pr, at] = ann.utils.declareVars(vars);

    // Step-specific content
    h.v4 = ann.LANGSET['nk_head_' + step];
    h.v5 = ann.LANGSET['nk_subhead_' + step];
    h.v8 = ann.LANGSET['nk_info_' + step];

    // Dynamically choose input types based on current step
    let selecttype = step === 4 ? ['countryselect', '$9_p'] 
                   : step === 5 ? ['input_text', '$9_button'] 
                   : step === 6 ? ['input_text', '$9_textarea'] 
                   : ['$9_select', '$9_p'];

    // Dynamically build the command array for this step
    let cmds = (step > 1) 
        ? ['wizard' + step + '_y', 'div_y', 'div_y', 'h2', '$3_h3', '$3_div_y', 
           'div_y', 'h4', '$7_div_y', ...selecttype, '$3_div_x', 'button', 
           '$12_button', '$7_p']
        : ['wizard' + step, 'div_y', 'div_y', 'h2', '$3_h3', '$3_div_y', 
           'div_y', 'h4', '$7_div_y', ...selecttype, '$3_div_x', 'button', 
           '$12_button', '$7_p', '$1_div', 'div'];

    // Dynamic attributes and validation
    at.v10 = step === 4 ? ['validate="nk_country"'] 
           : step === 5 ? ['placeholder="' + ann.LANGSET['nk_contact_placeholder'] + '"', 'validate="nk_contact"']
           : step === 6 ? ['placeholder="' + ann.LANGSET['nk_title_placeholder'] + '"', 'validate="nk_title"']
           : ['validate="nk_cat' + step + '"'];

    // Callbacks - Next button recursively calls the same method with step + 1
    cl.v13 = this.stepBack.bind(this);
    cl.v14 = this.myWizard.bind(this);        // Recursive call

    pr.v13 = step;
    pr.v14 = step + 1;

    // Special onload logic for step 1 (progress bar + draft recall)
    ann.onload.wizard1 = async function() {
        if (step === 1) {
            await ann.widgetLoader('mynavbar', ann.dom.getEl('wizard1'));
            this.recallData('mydb');   // Restore saved draft from IndexedDB
            this.updateProgress(step);
        }
    }.bind(this);

    let name = (step > 1) 
        ? ['wizard' + step, 'wizard1'] 
        : ['wizard' + step, '.section-wrap', 'prepend'];

    return ann.Subroutine(name, cmds, h, c, cl, pr, at);
}
```
### Key Techniques Shown

- Variable number of parallel objects: let vars = 15; if (step === 1) vars = 17; then declareVars(vars)
- Dynamic command array construction: The cmds array changes significantly per step (different number of elements, different special commands like countryselect, input_text, etc.)
- Recursive flow control: The "Next" button callback is bound to this.myWizard.bind(this) so it automatically advances the step
- Step-specific configuration: Different placeholders, validation rules, and onload behavior per step
- Draft persistence integration: Step 1 automatically recalls saved data from IndexedDB

```javascript
async makeDOM() {
    for (let s = 1; s <= 6; s++) {
        await this.myWizard(null, null, s, true);   // Build all steps
    }
    this.stepSwitch(1);   // Show the first step
}
```
This pattern lets you create long, stateful, multi-screen wizards while keeping the code clean and highly declarative. Each step reuses the same myWizard method but customizes the Subroutine through dynamic arrays and objects. It is one of the most advanced and practical ways to use ANNIKA Subroutines in production applications.

---

## Widgets

While Subroutines can already be nested and composed recursively for maximum flexibility, **Widgets** provide a higher-level, reusable component system in ANNIKA. 

Each widget is a fully self-contained UI module that follows a clean and consistent convention, making them easy to create, manage, load, and nest within other components.

> “Each widget must contain 1 js file, 1 css file and both must be inside same subfolder which must match the name of both files.  
> e.g. `mywidget/mywidget.js` and `mywidget/mywidget.css`  
> Any additional files must be loaded by the widget’s main js file.”

### Key Features

- **Self-contained**: Each widget bundles its own JavaScript logic and CSS styles.
- **Automatic loading**: ANNIKA handles script and stylesheet injection.
- **Nested support**: Widgets can contain other widgets (parent/child relationships).
- **Flexible placement**: You can override where a child widget is appended using a simple class naming convention.
- **Onload hooks**: Each widget can define an `ann.onload.widgetName` function that runs after it has been rendered.
- **Namespace**: Widget functions are expected under the `ann.widgets.` namespace by default.

### Widget Folder Structure

```
public/
├── widgets/
│   ├── userCard/
│   │   ├── userCard.js          # Main widget logic
│   │   └── userCard.css         # Widget-specific styles
│   ├── statsWidget/
│   │   ├── statsWidget.js
│   │   └── statsWidget.css
│   ├── dashboardPanel/
│   │   ├── dashboardPanel.js
│   │   └── dashboardPanel.css
│   └── ...
├── annika.js                    # Main ANNIKA framework (single file)
└── index.html
```

### How to Create a Widget

1. Create a folder inside `/widgets/` with the exact name of your widget.
2. Inside that folder, create two files:
   - `widgetName.js` — contains the widget function (must return a DOM element ID or a Subroutine ID)
   - `widgetName.css` — contains all styles for the widget
3. In the JS file, define the widget under the expected namespace:

```javascript
   ann.widgets.myWidget = async function(parent) {
       // Use Subroutine to build the widget's UI
       let [h, c, cl] = ann.utils.declareVars(3);
       
       h.v1 = "Hello from My Widget";
       c.v1 = "widget-container";

       const id = await ann.Subroutine('myWidget', ['div_y', 'h1'], h, c, cl);
       return id;   // Must return the root element ID
   };

   // Optional: onload hook
   ann.onload.myWidget = function() {
       console.log('MyWidget has finished rendering');
   };
```

### Loading Widgets

There are two primary ways to load widgets:

1. Inside a Subroutine
   
Use the special widgets command:

```javascript

let [h, c, cl] = ann.utils.declareVars(2);

h.v1 = "Dashboard";
h.v2 = ['userCard', 'statsWidget'];   // Array of widget names

return ann.Subroutine('dashboard', ['div_y', 'h1', 'widgets'], h, c, cl);
```

2. Using widgetLoader() — With Full Nesting Support

**Basic single widget:**

```javascript
ann.widgetLoader('userCard', someParentElement);
```
**Parent with multiple children**

```javascript
ann.widgetLoader([ 'parentWidget', ['childWidget1', 'childWidget2'] ], parentElement);
```

**What happens automatically:**

- parentWidget is loaded first.
- Once the parent is rendered, childWidget1 and childWidget2 are automatically loaded and appended to the parent in one go.
- No extra calls needed — everything happens in a single widgetLoader invocation.

**Deeper nesting example:**
```javascript
ann.widgetLoader([
    'grandparent',
    [
        'parent1', ['childA', 'childB'],
        'parent2', ['childC']
    ]
], mainContainer);
```
**This will load:**
- grandparent
- parent1 + its children childA and childB
- parent2 + its child childC

All in one call, with proper async sequencing.

**Parent/Child Targeting**
By default, child widgets are appended to the first DOM element created by the parent widget. To target a specific element deeper in the parent’s DOM tree:
- Add a class named childWidgetparent (widget name + "parent") to the desired container inside the parent.

Example: To force statsWidget to be appended inside a particular div in dashboardPanel, add the class statsWidgetparent to that div.

**Best Practices**

- Keep your Subroutines small and focused and nested at first
- Always return the root element ID from the widget function.
- Use ann.onload.widgetName for initialization code that needs to run after rendering.
- Leverage _x and _y inside widgets for responsive layouts.
- Use the nested array syntax in widgetLoader() when you have clear parent/child relationships.

Widgets are one of ANNIKA’s strongest features — they allow you to build clean, maintainable, and highly reusable interfaces without relying on heavy frameworks or build tools.

---
Made with	&#10084;&#65039; by ANNE Media.


