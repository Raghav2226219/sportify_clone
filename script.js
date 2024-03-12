const songs = [
    "ASAN TERE NAAL GAL KARNI.mp3",
    "Aaja Ve Mitra.mp3",
    "Aao Raja.mp3",
    "Aarambh.mp3",
    "Aate Di Chiri Sohne Mukhde Da.mp3",
    "Achko Machko Yo Yo.mp3",
    "Adhi Adhi Raat %20Bilal Saeed.mp3",
    "Akhiyan.mp3",
    "All Black.mp3",
    "Aman Yanak.mp3",
    "Amrinder Gill.mp3",
    "Angreji Beat.mp3",
    "Ari Ari Rock.mp3",
    "Armani Harman Chahal.mp3",
    "BADDAL.mp3",
    "BILLO NI TERA LAAL GARA.mp3",
    "Badshah.mp3",
    "Banda Marna Never Done.mp3",
    "Bapu Zimidar Jassi Gill.mp3",
    "Bewafa.mp3",
    "Bottle Deep Money.mp3",
    "Brown Rang.mp3",
    "Bulla Ki Jaana Maen Kaun.mp3",
    "Bullet Vs Girls.mp3",
    "Chakkwein Suit.mp3",
    "Chandigarh Kare Ashiqi.mp3",
    "Chandigarh Sher Di Kuri Sabjit Cheema.mp3",
    "Chhad Gayi Guru Randhawa.mp3",
    "DHOL JAGEERO DA.mp3",
    "DIL DE VARKE.mp3",
    "DJ Waley Babu feat.mp3",
    "De De Gehra.mp3",
    "De De Gerha.mp3",
    "Dele Gera BALVIR BOPARAI.mp3",
    "Desi Bande Inderjit Nagra.mp3",
    "Desi Boyz Allah Maaf.mp3",
    "Dheere Dheere Se Meri Zindagi.mp3",
    "Dhol Wajda Sarbjit Cheema Kurti.mp3",
    "Dhoom Pichak Dhoom.mp3",
    "Dil Chori Sada.mp3",
    "Dil De De.mp3",
    "Dil Lutiya.mp3",
    "Dil Tote Tote Ho Gaya.mp3",
    "Do Ghutt Roshan Prince Feat.mp3",
    "Dope Shope.mp3",
    "Dupatta Tereh Saat Rang Da.mp3",
    "Ek Geda Gidhe Vich Hor.mp3",
    "Falak soniye.mp3",
    "Falak ijazat.mp3",
    "Fiqrana.mp3",
    "Flower.mp3",
    "Fukre - Jihne Mera Dil Luteya.mp3",
    "GAL SUN.mp3",
    "Gaani.mp3",
    "Gabru.mp3",
    "Galav Waraich.mp3",
    "Get Up Jawani.mp3",
    "Gippy Grewal Yaar Mera Feat.mp3",
    "HOT MIX.mp3",
    "Haar Jaani Aa.mp3",
    "Hang.mp3",
    "Ishq.mp3",
    "JAZ DHAMI.mp3",
    "Jatt Desi.mp3",
    "Jogi.mp3",
    "Jugni.mp3",
    "KALI TERI GUTT.mp3",
    "KANGNA TERA NI.mp3",
    "KATAL KARE.mp3",
    "Kache Tandan.mp3",
    "Kamal Raja.mp3",
    "Kanian Ch.mp3",
    "Khuda Kay Liye.mp3",
    "Khuda Ko Dikh Raha Hoga.mp3",
    "Koka Tera Koka.mp3",
    "Kudi Tu Pataka.mp3",
    "Lakk Tunoo Tunoo.mp3",
    "Lalar Lyade re.mp3",
    "Leja Leja Re.mp3",
    "Look Lak.mp3",
    "Love Aaj Kal.mp3",
    "MITRAN DA NAA CHALDA.mp3",
    "Main Jaagan Swere.mp3",
    "Main Sharabi.mp3",
    "Manali Trance.mp3",
    "Margaye Tera Roop.mp3",
    "Mehfil mitran di.mp3",
    "Mel Kara De.mp3",
    "Mera Pehla Pehla.mp3",
    "Mittran Di Chhatri.mp3",
    "Mood Kharaab.mp3",
    "Moorni Balle Balle.mp3",
    "Morni Banke.mp3",
    "Na Na Na Na.mp3",
    "Nachan Main Oday Naa.mp3",
    "O Vekho.mp3", "Patiala Peg.mp3",
    "Patola.mp3",
    "Pind Nanke.mp3",
    "RABB DI SONH.mp3",
    "Raatan.mp3",
    "Rang Rara Riri Rara.mp3",
    "Raula Paa Dena.mp3",
    "Resham Ka Rumaal.mp3",
    "Saal.mp3",
    "Sadi Gali.mp3",
    "Sahan To Pyariya.mp3",
    "Sair.mp3",
    "Sajan Diyan Akhiyan.mp3",
    "Saree Wali Girl.mp3",
    "Saturday Saturday.mp3",
    "Saun Di Jhadi.mp3",
    "Shona Shona %20Miss Pooja %20Feat.mp3",
    "Silent Love.mp3",
    "Silli Silli Aundi Hai Hawa.mp3",
    "Tauba Tauba.mp3",
    "Taur %20Babbal Rai.mp3",
    "Tera Cheta.mp3",
    "Tera Yaar Bolda.mp3",
    "Tere Vich Vasdi.mp3",
    "Tere bin nahi lagda dil mera dholna.mp3",
    "The Young Blood.mp3",
    "Theme Songs Blue.mp3",
    "This Party Gettin Hot.mp3",
    "Tohar.mp3",
    "Tung Tung.mp3",
    "Upar Upar In The Air.mp3",
    "Urvashi Rautela.mp3",
    "Vaid %20Miss.mp3",
    "Vehli Janta.mp3",
    "Vichhora.mp3",
    "Wakhra Swag %20Official Video %20Navv Inder feat.mp3",
    "YAAR ANMULLE.mp3",
    "Zulfan %20Garry Hothi.mp3",
    "aja mahi.mp3",
    "cham cham cham karti kothe harbajan maan.mp3",
    "chand chandni.mp3",
    "chorni.mp3",
    "diljit desi daroo.mp3",
    "gal sunle soniyE.mp3",
    "hall oye rabba.mp3",
    "heer aakhdi jogiya jhooth bole.mp3",
    "kabaddi.mp3",
    "khao piyo aish karo.mp3",
    "mai ri.mp3",
    "mail karade rabba soni.mp3",
    "nach heeriye.mp3",
    "pakki kanak.mp3",
    "rubaru.mp3",
    "sandhu feat parry-parrot.mp3",
    "sauda khara khara.mp3",
    "soniye hiriye teri yaad aandi hai.mp3",
    "yaar maar.mp3"
];
let songs_url = []
for (let i = 0; i < songs.length; i++) {
    song_ = `https://ia801300.us.archive.org/2/items/LalarLyadeRe/${songs[i].replaceAll(" ", "%20")}`;
    songs_url.push(song_)
}



for (let index = 0; index < songs.length; index++) {
    let container = document.getElementById('songs_side_bar');
    container.insertAdjacentHTML('beforeend', `
    <div class="lib-bottom play">
<div class="playlists-logo">
    <img class="playlists-img" src="img/liked.jpg" alt="">
</div>
<div class="playlists-title  ">
    <h4>${songs[index].replace(".mp3", "").replaceAll("%20" ,"")}</h4>
</div>
</div>` 
    )
}
let current_song;
let play_audio = new Audio();
let playing_song_button = document.getElementById("playing-song")
let play_btn = document.getElementsByClassName("play");
let song_title_playbar = document.getElementById("song-title-bar");
playing_song_button.onclick = function () {
    
    if (play_audio.paused) {
        play_audio.play();
        playing_song_button.innerHTML = `<img src="img/pause.svg" alt="">`;
    }else{
        play_audio.pause();
        playing_song_button.innerHTML  = `<img src="img/play.svg" alt="">`;
    }
}


for (let index = 0; index < songs.length; index++) {
    play_btn[index].onclick = function () {
        song_title_playbar.innerHTML = `${songs[index].replace(".mp3", "").replaceAll("%20" ,"")}`
        play_audio.src = songs_url[index];
        playing_song_button.click()
    };
    
}