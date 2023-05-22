// Copyright (c) 2022 Anne Media Patrons | Collaborative Public Licence (https://annika.anne.media/)
ann.cl.reg.regset = {
    pub: '',
    salut: '',
    email: '',
    country: '',
    pic: '',
}
ann.cl.reg.makeReg = async function makeReg(callback1, callback2) {

    let regwrap = document.querySelector('.reg-wrap');
    if(regwrap){ regwrap.remove()}
    ann.cl.onload.regOnLoad = async function regOnLoad() {

        let reg = document.querySelector('reg');
        reg.setAttribute('data-before', 'Registration'); 
    }

    var countryset = await ann.getCountries();

    let c = ann.declareVars(12);
    c.v1='reg-wrap fadeOut hide',c.v3=c.v5='o-v',c.v6=c.v7='custominput w-218px',c.v8='customselect scrollbar',c.v9='annikabutton regbtn',c.v10='close2 mt-20',c.v11='heart fadeOut hide';
    let css = ann.json2array(c);

    let cl = ann.declareVars(12);
    cl.v6 = onBlur,cl.v9 = register, cl.v10 = close
    let clb = ann.json2array(cl);

    return ann.Subroutine('reg+ann.cl.onload.regOnLoad',

        ['div_y','reg_y', 'div_y', 'croppie_120_120', '$3_form_y_@submit','input_text_@blur','$5_input_email','$5_select','$5_button','$2_span','$2_canvas',postReg],
        [null,null,null,null,null,'label_Salutation','label_Email (optional)', [countryset,'Country',0,'3+2'],'REGISTER','X',ann.heart, null],
        [...css],[...clb]
    );

    function close(id, e) {
        let reg = e.target.closest(".reg-wrap");
        if(reg) { ann.toggleFade(reg) }
    }

    async function postReg() {

        ann.cl.onload.postRegOnLoad = async function postRegOnLoad() {           

            ann.waitForGlobal('bitcoin', function(){
                let datakey = document.getElementsByClassName('datakey')[0];
                let wif = localStorage.getItem('wif');
                if(!wif){
                    let idneuron = ann.newNeuron();
                    wif = idneuron.WIF;
                }
                datakey.innerHTML = wif;
                localStorage.removeItem('wif');
                ann.copyToClipboard();               
            })
        }
        let header = "Your Key Your Data";
        let topinfo = "You are the bearer of the Data Key. The key is unique to the holder. Its use satisfies the proof of your identity and enables the holder to retrieve and edit user data." + 
        "<br><br>Copy and paste the key into a safe place or write it down for safekeeping. <b>Unless desired, never share it with anyone, and do not lose it.</b> We do not have a copy and cannot recover it."
        let keyplaceholder = "PlacEHo1dERkey77WfUwy99UbZAL3vhmaFxMYzdnBJ544XhgBLaS";
        let bottominfo = "Nevertheless, you may encrypt your Data Key and keep the key safely in our custody. No one, including anyone with access to our servers, will be able to see or use your key, but you can retrieve and decrypt it using a secret password of your choosing.";

        let c = ann.declareVars(8);
        c.v1='hide fadeOut',c.v2='mt-10',c.v3='datakeyinfo inlineb',c.v4='datakey copycontent',c.v5='datakeyinfo',c.v7=c.v8='iambutton w-50','iambutton w-50';
        let css = ann.json2array(c);
    
        let cl = ann.declareVars(8);
        cl.v7=cl.v8=finishReg;
        let clb = ann.json2array(cl);

        return ann.Subroutine('postreg+ann.cl.onload.postRegOnLoad',
            ['$2_postreg_y','h3','$1_div_y','$1_div_y','$1_div_y','$1_div_x','button','$6_button'],
            [null,header,topinfo,keyplaceholder,bottominfo,null,"MY CUSTODY ONLY","OUR SAFEKEEPING"],
            [...css],[...clb]
        );
        
        async function finishReg(id, e) {
            var buttons =  e.path[1].querySelectorAll('button');
            var wantsSafeKeeping = false;
            if(buttons[1].id === id) {
                wantsSafeKeeping = true;
            }
            for(var x in buttons) {
                if(typeof buttons[x] === 'object') {
                    buttons[x].disabled = true;
                }
            }
            let copycontent = e.path[2].querySelector('.copycontent');
            if(!copycontent.classList.contains('off')) {
                ann.modal('ACTION REQUIRED', "Make a copy of your Data Key, keep it safe.",1,e.path[3]);
                for(var x in buttons) {
                    if(typeof buttons[x] === 'object') {
                        buttons[x].disabled = false;
                    }
                }
                return;
            }
            await ann.cl.reg.register(ann.cl.reg.regset, e.path[2].parentElement, wantsSafeKeeping);
            
            // heart.style.zIndex = 99;
            // heart.style.position = 'absolute';
            let reg = document.querySelector('reg');         
            let postreg = reg.querySelector('postreg');
            var croppie = reg.getElementsByClassName('croppie-inner')[0];
            ann.show(postreg, false);
            ann.show(croppie.parentElement.parentElement, false);
            var heart = document.getElementById('heart');
            console.log('heart :', heart);
            // postreg.before(heart); 
            if(!ann.isVisible(heart)) {ann.toggleFade(heart)}
            let regsuccess = document.getElementById('regsuccess');
            if(!regsuccess) {
                regsuccess = document.createElement('p')
                regsuccess.id = 'regsuccess'
                regsuccess.style.fontSize = '1.5rem';
                regsuccess.style.padding = '20px';
                regsuccess.innerHTML = 'REGISTRATION SUCCESS';
                heart.append(regsuccess);
                setTimeout(function() {
                   ann.toggleFade(heart)
                   setTimeout(function() {
                    ann.show(heart, false) 
                    if(!callback1) {
                        let regwrap = document.getElementsByClassName('reg-wrap')[0];
                        ann.toggleFade(regwrap);
                        setTimeout(function() {
                            regwrap.remove();
                        }, 2500);
                    } else {
                        callback1(id, e);
                    }                                              
                  }, 500);               
                }, 2500);
            }
            if(callback2) {
                callback2(id, e);
            }          
        }        
    }

   async function onBlur(id, e) {
        // validate unique salutation
        ann.validateSalutation(e);
    }  
    
    async function register(id,e) {
        e.preventDefault();

        let pic = validatePic(e);
        if(pic === 0) {return}

        let salutation = await ann.validateSalutation(e);
        console.log('salutation :', salutation);
        if(salutation === 0) {return}


        let email = await ann.validateEmail(e);
        if(email === 0) {
            await ann.modalResponse();
            if(ann.get.modal.response===0) {return}
        }

        let country = ann.validateCountry(e);
        if(country === 0) {return}

        let discardimage = e.path[2].querySelector('.discardimage');
        let customlabel = e.path[2].querySelector('.customlabel');
        ann.show(discardimage, false);
        ann.show(customlabel, false);
        let form = e.path[2].querySelector('form');   
        ann.show(form, false);
        e.path[2].parentElement.setAttribute('data-before', "Welcome " + ann.cl.reg.regset.salut);

        let target = document.querySelector("postreg");
        ann.toggleFade(target);

        function validatePic(e) {
            let cr = e.path[2].querySelector('.croppie-container');
            if(!cr.croppie.img) {
                ann.modal('MISSING PICTURE', "Please upload your profile picture and confirm its position.",1,e.path[2]);
                return 0;
            } else {
            ann.cl.reg.regset.pic = cr.croppie.img;
            return 1;                
            }
        }


        function validateSocial(e) {
            let social = e.path[1].querySelectorAll('input:not([type="hidden"]')[1];
            if(ann.isVisible(social)) {
                let socialbulk = document.querySelectorAll('.links div');
                var socialset = new Set();
                var socialarr, domain;
                var isLinkAdded = 0;
                if(social.value && social.value.trim().includes('https')) {
                    domain = (new URL(social.value));           
                    for(var x in socialbulk) {
                        if(typeof socialbulk[x] == 'object' && socialbulk[x].firstChild.nextElementSibling.innerHTML.includes(domain.hostname)) {
                            socialset.add(socialbulk[x].firstChild.nextElementSibling.innerHTML);
                            isLinkAdded++;
                        }
                    }
                    if(!isLinkAdded && socialbulk.length < 5) {
                        socialset.add(social.value.replace(/\/$/, ""));
                    }
                }
                for(var x in socialbulk) {
                    if(typeof socialbulk[x] == 'object') {
                        socialset.add(socialbulk[x].firstChild.nextElementSibling.innerHTML.replace(/\/$/, ""));
                    }                
                }
                if(socialset) { socialarr = Array.from(socialset) }
                if(!socialarr || !socialarr.length) {
                    ann.modal('MISSING SOCIAL LINK', "Do you wish to skip adding links to your social media profiles?",2,e.path[2]);        
                    return 0;
                } else {
                    ann.cl.reg.regset.social = socialarr;
                    return 1;
                }
            }    
        }

        function validateWeb(e) {
            let web = e.path[1].querySelectorAll('input:not([type="hidden"]')[3];
            if(ann.isVisible(web) && (!web.value || !web.value.trim().includes('https') || web.value.length < 11)) {
                ann.modal('MISSING WEB LINK', "Do you wish to skip adding a website link?",2,e.path[2]);
                return 0;
            } else {
                ann.cl.reg.regset.web = web.value.replace(/\/$/, "");
                return 1;
            }
        }        
    }
}


ann.validateCountry = function validateCountry(e, parent) {
    var countrypar, par;
    if(!parent) { par = e.path[2]; countrypar = e.path[1] } else { par = parent; countrypar = parent}    
    let country = countrypar.querySelector('.selected').getAttribute('value');
    if(!country || country == 0) {
        ann.modal('MISSING DATA', "Please choose a country of your influence.",1,par);
        return 0;
    } else {
        ann.cl.reg.regset.country = country;
    }
}

ann.validateEmail = async function validateEmail(e, input, parent,btncount,message) {
    var email, par;
    if(input) { email = input } else { email = e.path[1].querySelectorAll('input:not([type="hidden"]')[1]}
    if(parent) { par = parent} else { par = e.path[2]}
    if(!email || !email.value || !email.value.includes('@') || !email.value.includes('.') || !email.value.length > 6 ) {

        if(!message) {
            ann.modal('INVALID EMAIL', "If you choose not to include your email, we will be unable to contact you. Would you still like to register without providing your email address?",2,par);
        } else {
            ann.modal('INVALID EMAIL', message,btncount,par);
        }
        return 0;
    } else {
        ann.cl.reg.regset.email = email.value;
        console.log('email :', email.value);
        return 1;
    }
}

ann.validateSalutation = async function validateSalutation(e, input, parent, pub) {
    
    e.preventDefault();
    var salutation, par;
    if(input) { salutation = input } else { salutation = e.path[1].querySelector('input:not([type="hidden"]')}
    if(parent) { par = parent} else { par = e.path[2]}
    var value = salutation.value;
    console.log('value :', value);
    if((value && value.trim().length >= 0 && value.trim().length < 2) || !value) {
        ann.modal('MISSING DATA', "Your salutation is missing or is too short. Please enter your salutation.",1,par);
        return 0;
    } else {
        var fetchresponse;
        if(value) { value = value.trim()}
        if(value && value !== '') {
            fetchresponse = await ann.fetch('getSalut', { salut: value }, 'POST');
            console.log('fetchresponse :', fetchresponse);
        }
        if(fetchresponse !== 1 && value !== '') {
            ann.modal('UNAVAILABLE', "Sorry, " + value + " is taken. Please choose another salutation.",1,par);
            salutation.value = '';
            e.stopImmediatePropagation()
            return 0;
        } 
        ann.cl.reg.regset.salut = salutation.value;
        return 1;                
    }
}

ann.cl.reg.register = async function register(dataset, parent, wantsSafeKeeping = false) {
    if(!dataset) { console.error('Must add dataset to ann.cl.reg.register call'); return }
    var parent = parent 
    if(!parent) { parent = document.getElementsByTagName('reg')[0] }
    if(!parent) { console.error("Parent not found. Registration parent should have DOM tag 'reg'"); return }
    if(wantsSafeKeeping) { wantsSafeKeeping = 2} else { wantsSafeKeeping = 1 }
  
    ann.modal('SESSION PASSWORD', "<span class='inlineb'>Enter &nbsp;<hoverwrap><u>session password</u>.<hovertip>This password will be used to encrypt & protect the key in your browser's cache. We cannot recover this password. If you lose it, you can clear the cache and use your Data Key to set a new password.</hovertip></hoverwrap></span>",1,parent, wantsSafeKeeping);
    
  
    let datakey = document.getElementsByClassName('datakey')[0];
    var wif = datakey.innerHTML;
    var pub = ann.getPublicAddressFromWif(wif);
    localStorage.setItem('pub', pub)
    ann.cl.reg.regset.pub = pub;
  
    
    await ann.modalResponse();
    if(ann.get.modal.response==0) {return}
      
    var pass = localStorage.getItem('pass');
    localStorage.removeItem('pass');
    var safekeeping = localStorage.getItem('safekeeping');
    localStorage.removeItem('safekeeping');
    if(pass) {
        let fetchresponse = await ann.fetch('createID', ann.cl.reg.regset, 'POST');
        if(fetchresponse.salut && fetchresponse.salut[0] && fetchresponse.salut[0].includes('has already been taken')) {
          ann.modal('UNAVAILABLE', "Sorry, " + ann.cl.reg.regset.salut + " is taken. Please use different salutation.",1);
          return;
        } else if(fetchresponse.out && fetchresponse.out[0] && fetchresponse.out[0].includes('field is required.')) {            
          return;
        }
        localStorage.removeItem('out-done');
        var encrypted = await ann.encryptRoutine(wif,pass,fetchresponse[0]);
        var enwif, safe;
        if(safekeeping) {
          enwif = await ann.encryptRoutine(wif,safekeeping);
          safe = enwif.item;
        }
        localStorage.setItem('api-token',fetchresponse[1])
        localStorage.setItem('enwif',encrypted.item);
        let ik = encrypted.ik;
        let count = encrypted.count;
        let msg = await ann.sha256(fetchresponse[0]);
        let updateset = { pub: ann.cl.reg.regset.pub, ik: ik, count: count, msg: msg, safe: safe }
        console.log('updateset :', updateset);
        await ann.fetch('updateID', updateset, 'POST');
       // return[fetchresponse[0]]
        
    } else {
      console.error('Session password is missing.')
    }
}

ann.cl.auth.authModule = async function authModule() {    
    return ann.requireObject(ann.cl.auth.callback, 10000).then(function(resolve){
      
      ann.keep.isChecked = false;
      ann.cl.onload.userAuth = async function userAuth() {
          let enwif = localStorage.getItem('enwif');
          if(enwif && enwif.length > 52) {
              let auth = document.querySelector('auth')
              let inp = auth.querySelector('input')
              inp.setAttribute('value', enwif);
              let checkbox = auth.querySelector('input[type=checkbox]')
              checkbox.checked = true;
              ann.createListener(inp, 'keydown', onKeyDown);              
              function onKeyDown(id, e) {if(e.keyCode === 13) { inp.blur() }} 
          }
      }
    
      return ann.Subroutine('authuser+ann.cl.onload.userAuth',
          ['div_y','auth_x', 'div_y','input_text_@blur','$2_div_y','input_checkbox_@click', '$2_span', '$2_span'],
          [null, null,null,'label_Data Key',null,'label_KEEP','&#10227;','&#x2717;' ],
          ['dyn-w','dyn-w slideUp',null,null,'w-25px p-5 o-v',null,'reload','authclose'],
          [null,null,null, authOnEnterOrBlur,null, onAuthKeepChecked, onAuthReload, onAuthClose],
          [null,null,null,resolve,null, null, null,null]
      ); 
    })
 

  async function onAuthKeepChecked(id, e) {
    if(e.path[0].checked) {
        ann.keep.isChecked = true;
    } else {
        let enwif = localStorage.getItem('enwif');
        if(enwif) {
            ann.modal("CONFIRMATION","Your encrypted datakey is securely kept in browser's cache. Do you want to remove it?",2);
            await ann.modalResponse();
            if(ann.get.modal.response==0) { let auth = document.querySelector('auth'); let checkbox = auth.querySelector('input[type=checkbox]'); checkbox.checked = true; return}
            localStorage.removeItem('enwif');
        }
        ann.keep.isChecked = false;
    }
  }
  async function authOnEnterOrBlur(id, e, callback) {
  console.log('id, e, callback :', id, e, callback);
    var wif = (e.path[0].getAttribute('value') && e.path[0].getAttribute('value').length === 52) ? e.path[0].getAttribute('value') : e.path[0].value;
    if(wif && wif.length === 52) {
        let pub = ann.getPublicAddressFromWif(wif);
        if(pub) {
            let identity = { pub: pub };
            ann.fetch('getIK',identity,'POST').then(async function(resolve) {
                if(!resolve.ik.includes('not found')){
                    if(resolve.count && resolve.ik) {
                        var msg = await ann.decryptRoutine(wif, true, resolve.ik, resolve.count)
                        if(msg.pub && msg.item && msg.item.length === 52 && msg.msg) {
                            let isAuth = localStorage.getItem('auth');                         
                            if(ann.keep.isChecked && isAuth !== 'true') {
                                ann.modal("SESSION PASSWORD","Enter session password",2,null,1);
                                await ann.modalResponse();
                                if(ann.get.modal.response==0) {return}
                                var pass = localStorage.getItem('pass');
                                console.log('pass :', wif, pass);                                
                                let enwif = await ann.encryptRoutine(wif,pass);
                                localStorage.removeItem('pass');
                                localStorage.setItem('enwif', enwif.item);                                
                            } else if(!ann.keep.isChecked) {
                                localStorage.removeItem('enwif');
                            }
                            //having fun :: start
                            let v = await ann.sha256(e.path[0].value)
                            e.path[0].value = await ann.sha256(e.path[0].value)
                            e.path[0].setAttribute('value',v)
                            //having fun :: end
                            let autharea = document.querySelector('autharea');
                            if(autharea && autharea.parentElement) {autharea.parentElement.remove()}
                            callback(msg, resolve.ik, wif, resolve.count);      
                            localStorage.removeItem('auth');                      
                        }
                    } 
                } else {
                    ann.modal('NOT FOUND', "<span class='inlineb'>Our server could not find your identity Please enter correct Data Key.</span>",1);
                }
            })
        } else {
            ann.modal('INVALID KEY', "<span class='inlineb'>Please enter correct Data Key</span>",1);
        }
    }
  }

  async function onAuthReload(id, e) {
    localStorage.removeItem('auth'); 
    await ann.cl.auth.handleAuth();
  }

  async function onAuthClose(id, e) {
    let autharea = document.querySelector('autharea');
    if(autharea && autharea.parentElement) {
      ann.toggleSlide(autharea.parentElement)
      setTimeout(function(){
          autharea.parentElement.remove()
      },2500)
      
    }
  }
}


ann.cl.auth.handleAuth = async function handleAuth(supresswarning = false) {
    ann.require('auth').then(async function(resolve){
    var auth = resolve;
    setTimeout(async function(){
        if(!ann.isVisible(auth)){ ann.toggleSlide(auth)}
    },500)
    let inp = auth.querySelector('input')
    let enwif = (localStorage.getItem('enwif')) ? localStorage.getItem('enwif') : undefined;
    if(enwif && enwif.length > 52) {
        inp.setAttribute('value', enwif)
        ann.modal("SESSION PASSWORD","Enter session password",2,null,1);
        await ann.modalResponse();
        if(ann.get.modal.response==0) {inp.removeAttribute('value'); return}
        let pass = localStorage.getItem('pass');
        localStorage.removeItem('pass');
    
        let wif = await ann.decryptRoutine(enwif,pass);     
        if(wif && wif.item && wif.item.length === 52) {
            localStorage.setItem('auth', 'true');
            ann.keep.isChecked = true; 
            inp.setAttribute('value',wif.item);        
            inp.focus()
            inp.blur(); 
        } else {
            inp.removeAttribute('value')
            ann.cl.auth.handleAuth();
        }
    } else {
        if(!supresswarning){
          ann.modal("MISSING DATAKEY","No datakey has been found. Please enter your datakey.",1);
        }
    }
  });
 
}

