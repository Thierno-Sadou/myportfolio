console.log(window.outerWidth)


const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleskills(){

    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleskills)
 }
)


const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove ('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


const modalViews = document.querySelectorAll('.services__modal'), 
modalBtns = document.querySelectorAll('.services__button'),
modalCloses = document. querySelectorAll('.services__modal-close')

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
    modal(i)
    console.log(modalViews)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',() => {
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

function test(){
    //retrieving data 
  var name = document.getElementById("username").value;
  var mail = document.getElementById("useremail").value;
  var feedback= document.getElementById("feedbackmessage").value;
  // storing data
  var nam=localStorage.setItem("name",name);
  var mai=localStorage.setItem("mail",mail);
  var feed=localStorage.setItem("feedback",feedback);
  //retrieving data and using it 
  var nam=localStorage.getItem("name",name);
  var feed=localStorage.getItem("feedback",feedback);
  if(nam!="" && feed!=""){
    document.getElementById("feedbelow").innerHTML = "<h2>From:</h2> "+nam+" <br><h2>Feedback Message:</h2>"+feed;
  }
  }

  function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

  //const contactBtn = querySelectorAll('.contact__button')

//   contactBtn.addEventListener('click', ()=>{
//     test()
//   })

// function addSwip(){
//     let newSwip = document.createElement('div');
//     newSwip.className = 'portfolio__content grid swiper-slide';

//     let img = document.createElement('img');
//     img.src = '/img/portfolio1.png';
//     img.className = 'portfolio__img';

//     let data = document.createElement('div');
//     data.className = 'portfolio__data';
    

//     let title = document.createElement('h3');
//     let titleCont = document.createTextNode('A wonderful project');
//     title.className = 'portflio__title';
//     title.appendChild(titleCont);

//     let description = document.createElement('p');
//     description.className = 'portfolio__description';
//     let descriptionTxt = document.createTextNode('This is a new and very interesstong project');
//     description.appendChild(descriptionTxt);

//     let btn = document.createElement('span');
//     btn.className = 'button button--flex button--small services__button';
//     let demo = document.createTextNode('Demo');
//     btn.appendChild(demo);

//     data.appendChild(title);
//     data.appendChild(description);
//     data.appendChild(demo);

//     newSwip.appendChild(img);
//     newSwip.appendChild(data);

//     //let html = '<div class="portfolio__content grid swiper-slide"><img src="/img/portfolio1.png" alt="" class="portfolio__img"><div class="portfolio__data"><h3 class="portfolio__title">Basketball Universe</h3><p class="portfolio__description">A fun shooting game using trajectory calculations</p><span class="button button--flex button--small services__button">Demo<i class="uil uil-arrow-right button__icon"></i></span></div></div>'

//     document.querySelectorAll('swiper-wrapper').appendChild(newSwip);
// }

function setObject(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  function getObject(key) {
    var storage = window.localStorage,
        value = storage.getItem(key);
    return value && JSON.parse(value);
  }
  function clearStorage() {
    window.localStorage.clear();
    saveComment();
  }
  
  // Clear inputfields and localstorage
  function clearComment(){
    $('#txt1').val('');
    $('#namebox').val('');
    clearStorage();
  }



  
  function saveComment(){
    var cText = $('#feedbackmessage').val(),
        cName = $('#username').val(),
        cMail = $('#useremail').val(),
        feedbelow = getObject('feedbelow');
        
        
    if(cText != "" && cName != "" && cText != ""){
        if (feedbelow){
            feedbelow.push({name: cName, text: cText, mail: cMail});
            setObject('feedbelow', feedbelow);
          }else{ //Add a comment
            setObject('feedbelow', [{name: cName, text: cText, mail: cMail}]);
            
          }
          
        bindCmt();
    }
   
  }
  
  function bindCmt(){
    var feedbelowElement = $('#feedbelow'),
        feedbelow = getObject('feedbelow');
  
    //Out with the old
    feedbelowElement.empty();
    //And in with the new
    $.each(feedbelow, function(i, k){
      feedbelowElement.append( $('<p><b> <span>'+ k.name +' (' + k.mail + ') </b> <br> </span> '+" "+ k.text +'</p>') );
    });
  }

  
  
  //Get the comments on page ready
  $(function(){
    bindCmt();
  });


  function myFunction() {
    alert("Message sent ! ");
 }

