// // error




// master play or bottom play sec
const music = new Audio('audio/1.mp3');
// music.play();

// master play

//song playlist
const songs = [
    // 1 song
    {
     id: "1",
     songName:`Tere Bina <br> <div class="subtitle">A.R.Rahman </div>`,
     poster:"photos/1.jpg",
    },
    // 2 song 
    {
    id: "2",
    songName:`Vaathi Coming <br> <div class="subtitle">Anirudh Ravichander and Gana Balachandar </div>`,
    poster:"photos/2.jpg",
    },
    // 3 song
    {  
    id: "3",
    songName:`Roobaroo <br> <div class="subtitle">A.R.Rahman </div>`,
    poster:"photos/3.jpg",
    },

      //4  song
      {  
        id: "4",
        songName:`Luka Chupi <br> <div class="subtitle">A.R.Rahman </div>`,
        poster:"photos/4.jpg",
        },
          // 5 song
    {  
        id: "5",
        songName:`Mitwa <br> <div class="subtitle">Shankar Madhavan</div>`,
        poster:"photos/5.jpg",
        }, 
         
        // 6 song
        {  
        id: "6",
        songName:`Ankhon Mai Teri <br> <div class="subtitle">K.K </div>`,
        poster:"photos/6.jpg",
        }, 

         // 7 song
        {  
        id: "7",
        songName:`Jiya Dhadak Dhadak <br> <div class="subtitle">Rahet Fateh ali Khan </div>`,
        poster:"photos/7.jpg",
        }, 
        
        // 8 song
        {  
        id: "8",
        songName:`Pehli Nazar Mai <br> <div class="subtitle">Atif Aslam </div>`,
        poster:"photos/8.jpg",
        },  
        
        // 9 song
        {  
        id: "9",
        songName:`Agar Tun Sath Ho <br> <div class="subtitle">Arijit singh </div>`,
        poster:"photos/9.jpg",
        }, 
        
        // 10 song
        {  
        id: "10",
        songName:`High Rated Gabru<br> <div class="subtitle">Guru Randhawa</div>`,
        poster:"photos/10.jpg",
        }, 
        
        // 11 song
        {  
        id: "11",
        songName:`Wakhra Swag<br> <div class="subtitle">Badshah</div>`,
        poster:"photos/11.jpg",
        },  
        
        // 12 song
        {  
        id: "12",
        songName:`Durga Bhawani<br> <div class="subtitle">Pritam Bharatwan</div>`,
        poster:"photos/12.jpg",
        },  
        
        // 13 song
        {  
        id: "13",
        songName:`Thando Re Thando<br> <div class="subtitle">Narendra Singh Negi</div>`,
        poster:"photos/13.jpg",
        },  
        
        // 14 song
        {  
        id: "14",
        songName:`Saruli<br> <div class="subtitle">Pritam Bharatwan</div>`,
        poster:"photos/14.jpg",
        },  
        
        // 15 song
        {  
        id: "15",
        songName:`Jai Bola<br> <div class="subtitle">Narendra Singh Negi</div>`,
        poster:"photos/15.jpg",
        },  
        
        // 16 song
        {  
        id: "16",
        songName:`Hamare Sath Shri Raghunath<br> <div class="subtitle">Prem Bhushan Maharaj</div>`,
        poster:"photos/16.jpg",
        }, 
        
        // 17 song
        {  
        id: "17",
        songName:`Arti Kunj Bihari Ji Ki<br> <div class="subtitle">Lakhbir Singh Lakkha</div>`,
        poster:"photos/17.jpg",
        },  
        
        // 18 song
        {  
        id: "18",
        songName:`Sita Ram<br> <div class="subtitle">Rajan ji</div>`,
        poster:"photos/18.jpg",
        }, 
        
        // 19 song
        {  
        id: "19",
        songName:`Parvati Boli Shankar Se<br> <div class="subtitle">Hansraj Raghuwanshi</div>`,
        poster:"photos/19.jpg",
        },  
        
        // 20 song
        {  
        id: "20",
        songName:`Faded<br> <div class="subtitle">Alan Walker</div>`,
        poster:" photos/20.jpg",
        },  
        
        // 21 song
        {  
        id: "21",
        songName:`Mera Mann<br> <div class="subtitle">Ayushman Khurana </div>`,
        poster:" photos/21.jpg",
        }, 
        
        // 22 song
        {  
        id: "22",
        songName:`Yari<br> <div class="subtitle">Nikk</div>`,
        poster:"photos/22.jpg",
        },  
        
        // 23 song
        {  
        id: "23",
        songName:`Bachalo<br> <div class="subtitle">Ninja</div>`,
        poster:"photos/23.jpg",
        },  
        
        // 24 song
        {  
        id: "24",
        songName:`Chalte Chalte Yun Hi Koi <br> <div class="subtitle">Lata Mangeshkar</div>`,
        poster:"photos/24.jpg",
        },  
        
        // 25 song
        {  
        id: "25",
        songName:`Mere Samne Wali Khidki<br> <div class="subtitle">kishore Kumar</div>`,
        poster:"photos/25.jpg",
        },  
        
        // 26 song
        {  
        id: "26",
        songName:`Bade Miyan Chote Miyan<br> <div class="subtitle">Udit Narayan, Sudesh Bhosale, Rakesh Pandit, Poonam Bhatia</div>`, 
        poster:"photos/26.jpg",
        },  
        
        // 27 song
        {  
        id: "27",
        songName:`Ignite<br> <div class="subtitle">Alan Walker</div>`,
        poster:"photos/27.jpg",
        },  
        
        // 28 song
        {  
        id: "28",
        songName:`Saton Janam Pake Gori Tere Naino Mai<br> <div class="subtitle">Kumar Sanu</div>`,
        poster:"photos/28.jpg",
        }, 
        
        // 29 song
        {  
        id: "29",
        songName:`Aj Din Chadiya<br> <div class="subtitle">Rahet Fateh Ali Khan</div>`,
        poster:"photos/29.jpg",
        }, 
        
        // 30 song
        {  
        id: "30",
        songName:`Jeena Jeena<br> <div class="subtitle">Atif Aslam</div>`,
        poster:"photos/30.jpg",
        }, 
        
        // 31 song
        {  
        id: "31",
        songName:`Beete Lamhe<br> <div class="subtitle">K.K</div>`,
        poster:"photos/31.jpg",
        }, 
        
        // 32 song
        {  
        id: "32",
        songName:`Teri Kami<br> <div class="subtitle">Ninja</div>`,
        poster:"photos/32.jpg",
        },  
        
        // 33 song
        {  
        id: "33",
        songName:`Pani Da Rang<br> <div class="subtitle">Ayushman Khurana</div>`,
        poster:"photos/33.jpg",
        }, 
        
        // 34 song
        {  
        id: "34",
        songName:`Suit<br> <div class="subtitle">Guru Randhawa</div>`,
        poster:"photos/34.jpg",
        },  
        
        // 35 song
        {  
        id: "35",
        songName:`Teri Narr<br> <div class="subtitle">Nikk</div>`,
        poster:"photos/35.jpg",
        },  
        
        // 36 song
        {  
        id: "36",
        songName:`Samjhawan<br> <div class="subtitle">Arijit Singh</div>`,
        poster:"photos/36.jpg",
        },  
        
        // 37 song
        {  
        id: "37",
        songName:`She Move It Like This<br> <div class="subtitle">Badshah</div>`,
        poster:"photos/37.jpg",
        },
        // popular songs
        {
            id: "38",
            songName:`Tere Bina <br> <div class="subtitle">A.R.Rahman </div>`,
            poster:"photos/38.jpg",
        },

        {  
            id: "39",
            songName:`Suit<br> <div class="subtitle">Guru Randhawa</div>`,
            poster:"photos/39.jpg",
        },  

        {  
            id: "40",
            songName:`Beete Lamhe<br> <div class="subtitle">K.K</div>`,
            poster:"photos/40.jpg",
        }, 
             
        {  
            id: "41",
            songName:`Chalte Chalte Yun Hi Koi <br> <div class="subtitle">Lata Mangeshkar</div>`,
            poster:"photos/41.jpg",
        },  
        
        {  
        
            id: "42",
            songName:`Sita Ram<br> <div class="subtitle">Rajan ji</div>`,
            poster:"photos/42.jpg",
        }, 
            
          
        {  
            id: "43",
            songName:`Parvati Boli Shankar Se<br> <div class="subtitle">Hansraj Raghuwanshi</div>`,
            poster:"photos/43.jpg",
        },  

        {  
            id: "44",
            songName:`Faded<br> <div class="subtitle">Alan Walker</div>`,
            poster:" photos/44.jpg",
        },
        
        {  
            id: "45",
            songName:`Mere Samne Wali Khidki<br> <div class="subtitle">kishore Kumar</div>`,
            poster:"photos/45.jpg",
        },

        {  
            id: "46",
            songName:`Yari<br> <div class="subtitle">Nikk</div>`,
            poster:"photos/46.jpg",
        },  

        {  
            id: "47",
            songName:`Bachalo<br> <div class="subtitle">Ninja</div>`,
            poster:"photos/47.jpg",
        }, 
      
            
] 


// Array of songs
Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
e.getElementsByTagName('img')[0].src = songs[i].poster;
e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


// search data
  let search_results=document.getElementsByClassName('search_results')[0];

  songs.forEach(element=>{
    const {id, songName,poster}= element;
    //we are creating an anchor tag that will shown in searched 
    // result and will take us to that song
    if(element.id<38)
    {
    let card=document.createElement('a'); 
    card.classList.add('card');
    card.href="#"+ id;
    card.innerHTML=` <img src="${poster}"> 
    <div class="content">
     ${songName}
    </div>`;
    search_results.appendChild(card);
    }
  })
  
let input= document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value =input.value.toUpperCase();
    let items= search_results.getElementsByTagName('a');
    
    // matching
     
    for(let index=0;index<items.length;index++){
        let as=items[index].getElementsByClassName('content')[0];
        let text_value= as.textContent||as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value)>-1) {   //as a character matches condition will execute
          items[index].style.display="flex";  //display songs in rows 
        } 
        else {
          items[index].style.display="none"; 
        }

        if(input.value==0)
        {
            search_results.style.display="none";   
        }
        else
        {
            search_results.style.display="";   
        }
    }

})
// start

// end

// plaay and pause
let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    }
    else{
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})
// function for play and pause
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
})
}
// function for highlighting playing song
const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
      el.style.background='rgba(105, 105, 105, .0)';
})
}

        
// song info change 
let index=0;
let poster_master_play=document.getElementById('poster_master_play');
// let title=document.getElementById('title');
let download_music=document.getElementById('download_music');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
e.addEventListener('click',(el)=>{
    index=el.target.id;
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`photos/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href=`audio/${index}.mp3`; //providing link for song
    // title
   let songTitles =songs.filter((els)=>{
return els.id ==index;
   });
   
   songTitles.forEach(elss=>{
    let {songName}=elss;
    title.innerHTML=songName;
    let name_song=title.innerText;
    download_music.setAttribute('download',name_song);//setting name that will appear while downloading
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
   makeAllPlays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
})
})


// time
let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    
    // converting time in minuts
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10)
    {
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10)
    {
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;
// seek bar movmnet
    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

})

seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration / 100;
})

// volume button
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>
{
    if(vol.value==0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');

    }
    else if(vol.value>0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }   
    else if(vol.value>55)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})

// forward and backward
let back=document.getElementById('back');
let next=document.getElementById('next');

// back
back.addEventListener('click',()=>{
    index-=1;

    // circuar connection

    if(index<1)
    {
       index= Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`photos/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href=`audio/${index}.mp3`; //providing link for song
    // title
   let songTitles =songs.filter((els)=>{
return els.id ==index;
   });
   
   songTitles.forEach(elss=>{
    let {songName}=elss;
    title.innerHTML=songName;
     let name_song=title.innerText;
    download_music.setAttribute('download',name_song);//setting name that will appear while downloading
   })
   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
   makeAllPlays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
})

// forward
next.addEventListener('click',()=>{
    index++;

    // circuar connection

    if(index > Array.from(document.getElementsByClassName('songItem')).length)
    {
       index= 1;
    }

    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`photos/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href=`audio/${index}.mp3`; //providing link for song
    // title
   let songTitles =songs.filter((els)=>{
return els.id ==index;
   });
   
   songTitles.forEach(elss=>{
    let {songName}=elss;
    title.innerHTML=songName;
     let name_song=title.innerText;
    download_music.setAttribute('download',name_song);//setting name that will appear while downloading
   })
   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
   makeAllPlays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
})




// arrow functionality for popular song
let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right= document.getElementById('pop_song_right');
let pop_song= document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',() => {
    pop_song.scrollLeft -= 330;
})

// arrow functionality for popular artist

let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right= document.getElementById('pop_art_right');
let item= document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',() => {
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click',() => {
    item.scrollLeft -= 330;
})

// shuffling button 
let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
let a=shuffle.innerHTML;
switch (a) {
    case "next":
        shuffle.classList.add('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML='repeat';
        break;
    case "repeat":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML='random';
        break;   
            
    case "random":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML='next';
            break;
 
}
});

// To automatically play any song base on symbol


// Next function

const next_music=()=>{
// condition need to be add of playing side song and song card different
if(index==songs.length){
    index =1;
   }
   else{
    index ++;
   }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`photos/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href=`audio/${index}.mp3`; //providing link for song
    // title
   let songTitles =songs.filter((els)=>{
return els.id ==index;
   });
   
   songTitles.forEach(elss=>{
    let {songName}=elss;
    title.innerHTML=songName;
    let name_song=title.innerText;
    download_music.setAttribute('download',name_song);//setting name that will appear while downloading
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
   makeAllPlays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}



// repeat function

const repeat_music=()=>{
 
        index;
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`photos/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href=`audio/${index}.mp3`; //providing link for song
        // title
       let songTitles =songs.filter((els)=>{
    return els.id ==index;
       });
       
       songTitles.forEach(elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
        let name_song=title.innerText;
        download_music.setAttribute('download',name_song);//setting name that will appear while downloading
       });
    
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
       makeAllPlays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
    }



// random function

const random_music=()=>{
    // condition need to be add of playing side song and song card different
        if(index>=1 && index<38)
    {
    index=Math.floor((Math.random()* 37)+1);
    }
    else if(index>37 && index<songs.length)
    {
        index=Math.floor((Math.random()*10)+38);
    }
    // condition need to be add of playing side song and song card different

        // index=Math.floor((Math.random()* songs.length)+1);
        
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`photos/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href=`audio/${index}.mp3`; //providing link for song
        // title
       let songTitles =songs.filter((els)=>{
    return els.id ==index;
       });
       
       songTitles.forEach(elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
        let name_song=title.innerText;
        download_music.setAttribute('download',name_song);//setting name that will appear while downloading
       });
    
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105, 105, 105, .1)";
       makeAllPlays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
    }

//

    music.addEventListener('ended',()=>{
     let b=shuffle.innerHTML;
switch (b) {
    case "next":
        next_music();
        break;
    case "repeat":
        repeat_music();
        break;   
            
    case "random":
        random_music();
            break;
}
    })
    

    // responsive
    let menu_list_active_button=document.getElementById('menu_list_active_button');
    let cross_button=document.getElementById('cross_button');
    let menu_side=document.getElementsByClassName('menu_side')[0];
    menu_list_active_button.addEventListener('click',()=>{
        menu_side.style.transform="unset";
        // menu_list_active_button.classList.remove('bi-music-note-list');
        menu_list_active_button.style.opacity=0;
        cross_button.style.opacity=1;
      
    })
    
    cross_button.addEventListener('click',()=>{
        menu_side.style.transform="translateX(-100%)";
        // menu_list_active_button.classList.remove('bi-music-note-list');
         cross_button.style.opacity=0;
         menu_list_active_button.style.opacity=1;
       
    })
  
