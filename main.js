let movies = [
{ name: 'SQL', video: "https://www.youtube.com/embed/HXV3zeQKqGY" ,bgc: 'https://www.youtube.com/embed/lapMmGGFS7k'},
{ name: '1 soatda HTML O\'rganamiz', 
video: "https://www.youtube.com/embed/xcGtfYUfDLo" ,
bgc: 'https://yt3.ggpht.com/ytc/AAUvwnjembDaZI0ZHpbdOVeHXZsx_PLnlaoEXD6yirAE=s900-c-k-c0x00ffffff-no-rj'},


{ name: 'Darxonbek', 
video: 'https://www.youtube.com/embed/DOuh1VQ3k4A',
bgc: 'https://i.ytimg.com/vi/DOuh1VQ3k4A/maxresdefault.jpg' },
{ name: 'Abdusattor', 
video: 'https://www.youtube.com/embed/rlhb4BHF6x8',
bgc: 'https://storage.kun.uz/source/6/ffLFw7p1YKxNuKEUBqZTBKH2x8dm-JLu.jpg' },
{ name: "JOnli Efir", 
video: "https://www.youtube.com/embed/g3Vd9iPj5z8" ,
bgc: 'https://yt3.ggpht.com/ytc/AAUvwnjembDaZI0ZHpbdOVeHXZsx_PLnlaoEXD6yirAE=s900-c-k-c0x00ffffff-no-rj'},
{ name: 'SanJarxo\'ja',
video: 'https://www.youtube.com/embed/g08CiUwEw7I',
bgc: 'https://i.ytimg.com/vi/inrNpM7e6H0/hqdefault.jpg' },
{ name: 'FRILANCERlik', 
video: 'https://www.youtube.com/embed/bj0t2hJX4is',
bgc: 'https://yt3.ggpht.com/ytc/AAUvwnjembDaZI0ZHpbdOVeHXZsx_PLnlaoEXD6yirAE=s900-c-k-c0x00ffffff-no-rj' },
{ name: 'Avengers4',
video: 'https://www.youtube.com/embed/QwievZ1Tx-8',
bgc: 'https://cdn.vox-cdn.com/thumbor/y_zQVlSf3T9JXNsdTVZ-V1lDZCc=/0x227:1688x1688/1200x675/filters:focal(731x663:1001x933)/cdn.vox-cdn.com/uploads/chorus_image/image/60222205/InfinityWar5aabd55fed5fa.0.jpg' },
{ name: 'IKrom SHarif',
video: 'https://www.youtube.com/embed/7aG5SDeVJ1s',
bgc: 'https://yt3.ggpht.com/ytc/AAUvwngkV0AuQrtKSHJrQRfClcWFicipZqzS4HzuOnGk0w=s900-c-k-c0x00ffffff-no-rj' },
{ name: 'Ertug\'rul', 
video: 'https://www.youtube.com/embed/WC3PYAg8Pts',
bgc: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/08/19/52711.jpg' },
{ name: 'Abdukarim Mirzayev',
video: 'https://www.youtube.com/embed/YrCjCT1m8zE',
bgc: 'https://yt3.ggpht.com/ytc/AAUvwnhFdknqmsPAU943UflXoSmgGhFahnKRihE7Pgoh=s900-c-k-c0x00ffffff-no-rj' },
{ name: 'Muhteşem Yüzyıl Kösem',
video: 'https://www.youtube.com/embed/dQzmiJc3HZQ',
bgc: 'https://lh3.googleusercontent.com/proxy/Jizrcvzcq8AdwCtfH9XxD0yNdvX1RnM3A2WfUYyySdCBt0UtRRCMZZwMzgjYkoIlMItI8dKYPSNHvO_98tqyJiRR5I_AToUo_T5bwOcyOiOan5Z4gjpjxexhSomQrsbiB2xowqU4VGSyZyHQPy-6pPsTBpDF0LEiSZh2-6EdaUJlL_KKlVvqoA' },
{ name: 'Mr Bin', 
video: 'https://www.youtube.com/embed/z_9mqGnAwNc',
bgc: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_726,w_1292,x_199,y_0/f_auto,q_auto,w_1100/v1578352479/shape/mentalfloss/62455-shout-factory1.jpg' },
{ name: 'NODE.js, REACT.js', 
video: "https://www.youtube.com/embed/Y2WWEBPrDHU" ,
bgc: 'https://yt3.ggpht.com/ytc/AAUvwnjembDaZI0ZHpbdOVeHXZsx_PLnlaoEXD6yirAE=s900-c-k-c0x00ffffff-no-rj'},
{ name: 'Rocky BIlbao', 
video: '"https://www.youtube.com/embed/onY5Daq6jD0',
bgc: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Sylvester_Stallone_Rocky_VI_2005.jpg' },
{ name: 'Kurdlar Vadisi', 
video: 'https://www.youtube.com/embed/T9Z-RN3juP4',
bgc: 'https://veryansintv.com/wp-content/uploads/2020/04/kurt1.jpg' },
{ name: "SuperMan", 
video: 'https://www.youtube.com/embed/b9V3Pj47x4c' ,
bgc: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2021/02/Dark-superman-superman-and-lois.jpg'}
]

let pars = JSON.parse(window.localStorage.getItem('videos')) || movies

window.localStorage.setItem('videos', JSON.stringify(pars))


console.log(pars)

try {
    btn2.onclick = function add() {
        let obj = {}
        if(search1.value != '' && search2.value != '') {
            obj.video = search1.value
            obj.name = search2.value
            obj.bgc = search3.value
            pars.push(obj)    
            window.localStorage.setItem('videos' ,JSON.stringify(pars) )
            console.log(pars)
        }
        search3.value = ''
        search2.value = ''
        search1.value = ''
    }
}
catch(error) {

}
window.localStorage.setItem('videos' ,JSON.stringify(pars))
try {
    function ren(arr) {
        let search = document.querySelector('#search');
        let btn = document.querySelector('#btn');
        let listSearched = document.querySelector('.list-serch');
        for(let el of arr) {
         let li = document.createElement('li')
         let div = document.createElement('div')
         let div2 = document.createElement('div')
         let iframe = document.createElement('iframe')
         let bgcc = document.createElement('img')
         let div3 = document.createElement('div')
         let img = document.createElement('img')
         let p = document.createElement('p')
         let a = document.createElement('a')
         let p0 = document.createElement('p')
         let p1 = document.createElement('p')
         let p2= document.createElement('p')

         a.classList.add('pros')
         p0.classList.add('para')
         p1.classList.add('para')
         p2.classList.add('para')
         p0.innerText = 'Rayis Media'
         p1.innerText = '427 тыс. просмотров'
         p2.innerText = '1 неделю назад'
         p.id = 'head'
         iframe.src = el.video
         p.innerText = el.name
         img.src = 'img/navoiy.jpg'
         bgcc.src = el.bgc
         bgcc.classList.add('abso')
         img.classList.add('avatar')
         li.classList.add('list-item', 'li')
         div.classList.add('center')
         div2.classList.add('iframe_box')
         div3.classList.add('box')
         div2.id = 'ifrAME_BOX2'
         div.appendChild(div2)
         div2.appendChild(iframe)
         div2.appendChild(bgcc)
         div3.appendChild(img)
         div3.appendChild(p)
         div.appendChild(div3)
         a.appendChild(p0)
         a.appendChild(p1)
         a.appendChild(p2)
         div.appendChild(a)
         li.appendChild(div)
         list.appendChild(li)
         li.onclick = function mod(){
            li.classList.remove('list-item')
            li.classList.add('modal')
            li.classList.add('li2')
            iframe.classList.add('fr')
            bgcc.classList.remove('abso')
            bgcc.classList.add('abso2')
            div2.classList.remove('iframe_box')
            div2.classList.add('li')
            div2.classList.add('fr')
            a.classList.remove('pros')
            a.classList.add('pros2')
            p.classList.add('head2')
            p.id = false
            div2.id = false
            div.classList.remove('center')
            p0.classList.add('para2')
            p0.classList.remove('para')
            p1.classList.remove('para')
            p2.classList.remove('para')
            p1.classList.add('para2')
            p2.classList.add('para2')
            img.classList.add('avatar2')
            let del = document.createElement('img')
            del.classList.add('delete')
            del.src = 'img/x-button.svg'
            li.prepend(del)
            del.onclick = function reverse () {
                list.innerHTML = null
                ren(pars)
            }
        }
    }

}

ren(pars)

let sh = false
menu_btn.onclick = () => {
    if(!sh) {
        drop_right.style.transform = "translateX(0)"
        drop_right.style.display = 'block'
        sh = true
    }else {
        drop_right.style.transform = "translateX(-270px)"
        drop_right.style.display = 'none'
        sh = false
    }
}

let salom = document.querySelectorAll('#ifrem')
function find(event,array) {
    list.innerHTML =null
    array = pars
    let incl = search.value.toLowerCase()
    arr = []
    for(let el of array) {
        if(search.value.toLowerCase( ) === el.name.toLowerCase() || el.name.toLowerCase().includes(incl)) {
            arr.push(el)
        }
    }
    ren(arr)
}
btn.onclick = find 

search.onkeyup = function finder(event) {
    if (event.keyCode == 13) {
        list.innerHTML = ''
        ar = movies
        let incl = event.target.value.toLowerCase()
        let arr = []
        for(let i of ar) {
            if(i.name.toLowerCase().includes(incl)) {
                arr.push(i)
            }
        }
        ren(arr)    
    }


}
let di = document.querySelector('#ul')
let di1 = document.querySelector('.ul1')
let show = false
vi.onclick = function display () {
    if(!show) {
        di.style.display = 'block'
        show = true
    }else {
        di.style.display = 'none'
        show =  false
    }
}
    // let show1 = false
    menu.onclick = function display () {
        // console.log(di1)
        if(!show) {
            di1.style.display = 'block'
            show = true
        }else {
            di1.style.display = 'none'
            show =  false
        }
    }
}
catch (error) {
    console.log(error)
}
window.localStorage.setItem('videos' ,JSON.stringify(pars) )


try {

    search.onkeyup = function finder2(event) {
        if (event.keyCode == 13) {
            list.innerHTML = ''
            ar = pars
            let incl = event.target.value.toLowerCase()
            let arr = []
            for(let i of ar) {
                if(i.name.toLowerCase().includes(incl)) {
                    arr.push(i)
                }
            }
            ren(arr)    
        }

    }
} catch (error) {

}



try{
    const speechRecognition = window.webkitSpeechRecognition
    const voice = new speechRecognition()
    voice.lang = "uz-Uz"
    voice.continuous = false;

    mic.onclick = () => {
        voice.start()
        search.placeholder = 'Listening....'
    }
    voice.onresult = (event) => {
        search.value = event.results[0][0].transcript
        find()
    }
    voice.onspeechend = function() {
        voice.stop();
        search.placeholder = 'Search...'
    }

}
catch(error) {

}
