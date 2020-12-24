window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function () {
    var list = document.getElementById('list');

    list.style.height = (parseInt(document.getElementById('flat-black-player-container').offsetHeight) - 135) + 'px';

    document.getElementById('list-screen').classList.remove('slide-out-top');
    document.getElementById('list-screen').classList.add('slide-in-top');
    document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function () {
    document.getElementById('list-screen').classList.remove('slide-in-top');
    document.getElementById('list-screen').classList.add('slide-out-top');
    document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function (e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": [
        {
            "name": "Second Chance",
            "artist": "Lila Ike",
            "album": "Unity Sound Dubplate",
            "url": "songs/lilaIke-secondChance.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Raggamuffin",
            "artist": "Koffee",
            "album": "Unity Sound Dubplate",
            "url": "songs/koffee-raggamuffin.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Gimme One Drop",
            "artist": "Tarrus Riley",
            "album": "Unity Sound Dubplate",
            "url": "songs/tarrusRiley-gimmeOneDrop.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Beat & A Mic",
            "artist": "Chronixx",
            "album": "Unity Sound Dubplate",
            "url": "songs/chronixx-beatAndAMic.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Worldwide Sound",
            "artist": "Kabaka Pyramid",
            "album": "Unity Sound Dubplate",
            "url": "songs/kabakaPyramid-worldwideSound.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Winning Right Now",
            "artist": "Agent Sasco",
            "album": "Unity Sound Dubplate",
            "url": "songs/agentSasco-winningRightNow.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Real Revolutionary",
            "artist": "Asante Amen",
            "album": "Unity Sound Dubplate",
            "url": "songs/asanteAmen-realRevolutionary.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Gal Policy",
            "artist": "Kranium",
            "album": "Unity Sound Dubplate",
            "url": "songs/kranium-galPolicy.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Pure & Clean",
            "artist": "TJ aka Likkle Briggie",
            "album": "Unity Sound Dubplate",
            "url": "songs/tj-pureAndClean.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "Try A Little Love",
            "artist": "RC",
            "album": "Unity Sound Dubplate",
            "url": "songs/rc-tryALittleLove.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        },
        {
            "name": "My Foundation",
            "artist": "Mr Bertus",
            "album": "Unity Sound Dubplate",
            "url": "songs/mrBertus-myFoundation.mp3",
            "cover_art_url": "http://placehold.it/400x400/acf/"
        }
    ],
    "volume": 50
});