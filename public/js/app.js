// Annika SPA demo

ann.evalObject('ann.cl.auth.authModule', app)

ann.get.menuCallback = async function menuCallback(id, e) {
    if(id.includes('-3')) {
        ann.cl.auth.handleAuth(true);
     }
 }

async function app() {

    await ann.evalObject('ann.docs.annikainfo')

    let logosrc = 'img/annika.svg';
    let brandp1 = "ANNIKA"
    let brandp2 = "COMMAND INTERFACE"
    let menu = ['MENU ITEM 1', "MENU ITEM 2", "MENU ITEM 3", 'USER AUTH DEMO'];
    let maininfo = [page1, page2, page3, ann.cl.auth.authModule]
   
    let c = ann.declareVars(11);
    c.v1 = 'dyn-h jc-start', c.v2 = 'mt-60 jc-start', c.v3 = 'bg-contrast-2 jc-start', c.v4 = 'logoimg',c.v5 = 'jc-start',
    c.v6 = 'black f-13rem m-0 Pulstar ls-035rem ml--6px',c.v7 = 'black m-0 AlphaProta fs-06rem pb-5px mt--5px ls-065rem',
    c.v8 = 'bg-contrast-2 p-10 mt-40 glow-box3 pointer', c.v10='dyn-w fadeOut hide z-mid'
    let css = ann.json2array(c);

    let cl = ann.declareVars(11);
    cl.v4 = logoclick;
    let clb = ann.json2array(cl);

    ann.Subroutine('demo',
        // Command Array
        //   1      2          3        4       5      6        7           8          9           10      11
        ['div_y', 'div_y', 'header_x','img','$3_div', 'h1',  '$5_h2', '$3_menu_y', '$2_div_y', 'info_y', addfooter],
        // HTML Content Array
        [null,null,null,logosrc,null,brandp1,brandp2,menu,null,maininfo,null],
        // CSS Array
        [...css],
        // Callback Array
        [...clb]
    );

    function logoclick(){
        let menuid = ann.getMenuID() + '-0';
        ann.onMenuClick(menuid); 
    }

    async function addfooter() {

        let footer = '&copy;' + new Date().getFullYear() + '&nbsp;Anne Media Developers<br>All Rights Reserved.';
        
        let css1 = 'h-30 bottom bg-black-8';
        let css2 = 'jself-start w-100 fs-07rem'
        let css3 = 'w-100px'
        let ccs4 = 'homelink'
        let licence = "MIT Licence"
        let annemedia = "<a href='https://anne.media' class='homelink' target='_blank'>Anne Media</a>"
       
        return ann.Subroutine('footer',
            ['footer_x', 'div', '$1_div','$1_div'],
            [null,footer,licence,annemedia],
            [css1,css2,css3,ccs4],
        );
    }
}

async function page1() {


    let header = 'Yar Pirate Ipsum Demo Head 1'
    let demop = 'Six pounders long boat spyglass Brethren of the Coast Plate Fleet loot Buccaneer hands hang the jib sutler. Black spot Jack Tar careen run a rig spanker gaff gally boatswain dead men tell no tales matey. Aft hogshead Letter of Marque careen quarterdeck gun jack yardarm dead men tell no tales knave.'
    
    let c = ann.declareVars(7);
    c.v4 = 'bg-1 bold', c.v6=c.v7='annikabutton mt-20 pointer',c.v7=c.v7+' ml-10'
    let css = ann.json2array(c);
    
    let cl = ann.declareVars(7);
    cl.v6 = register, cl.v7 = ann.docs.annikainfo
    let clb = ann.json2array(cl);

   return ann.Subroutine('page1',
        ['div_y', 'div_y', 'h1', '$2_p','$2_div_x','button', '$5_button'],
        [null,null,header,demop,null,'REGISTER DEMO', 'DOCS'],
        [...css],[...clb]
    );

    function register() {
        ann.cl.reg.makeReg();
        ann.require('reg').then(function(reg){
            console.log('reg :', reg);
            ann.toggleFade(reg.parentElement)
        });
    }
}

async function page2() {

    let header = 'Yar Pirate Ipsum Demo Head 2'
    let demop = 'Wench draft gunwalls prow bilged on her anchor barque aye log take a caulk lass. Loaded to the gunwalls fore Corsair scuttle wherry nipperkin lateen sail lee grog blossom Jack Ketch. Plunder league bounty jack coffer hogshead grog blossom carouser bilged on her anchor boom.'

    let c = ann.declareVars(4);
    c.v4 = 'bg-3 bold';
    let css = ann.json2array(c);

   return ann.Subroutine('page2',
        // Command Array
        ['div_y', 'div_y', 'h1', '$2_p'],
        // HTML Content Array
        [null,null,header,demop],
        // CSS Array
        [...css],
    );
}

async function page3() {

    let header = 'Yar Pirate Ipsum Demo Head 3'
    let demop = 'Reef sails long clothes bowsprit pink pirate warp handsomely lookout hardtack dead men tell no tales. Capstan lad aft quarterdeck strike colors squiffy landlubber or just lubber gabion bilge spyglass. Galleon sutler gangway bilged on her anchor killick jury mast starboard crimp no prey, no pay lee.'

    let c = ann.declareVars(4);
    c.v4 = 'bg-4 black bold';
    let css = ann.json2array(c);

   return ann.Subroutine('page3',
        // Command Array
        ['div_y', 'div_y', 'h1', '$2_p'],
        // HTML Content Array
        [null,null,header,demop],
        // CSS Array
        [...css],
    );
}

ann.cl.auth.callback = async function userarea(msg, ik, wifkey, count) {
    
    let ikhash = await ann.sha256(ik)
    console.log('ikhash :', ikhash);
    var identity = { pub: msg.pub, ik: ikhash };
    var areadata = await ann.fetch('privateArea',identity,'POST');

    let header = areadata.salut + "'s " + areadata.header;
    let demop =  areadata.demop;

    let c = ann.declareVars(4);
    c.v1='mt-30', c.v4 = 'bg-5 black bold';
    let css = ann.json2array(c);

    ann.cl.onload.userArea = function userArea() {
        var autharea = document.querySelector('autharea').parentElement;
        let main = document.querySelector("div[sub='authuser']");
        main.append(autharea)
    }

   return ann.Subroutine('page4+ann.cl.onload.userArea',
        // Command Array
        ['div_y', 'autharea_y', 'h1', '$2_p'],
        // HTML Content Array
        [null,null,header,demop],
        // CSS Array
        [...css],
    );

}



