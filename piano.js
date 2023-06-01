(function() {
var piano = {
    /* initialization */
    css: document.createElement("style"),
    ui: document.createElement("div"),
    menuleft: document.createElement("div"),
    wave: document.createElement("select"),
    pitch: document.createElement("input"),
    tilt: document.createElement("input"),
    keyboard: document.createElement("div"),
    menuright: document.createElement("div"),
    audio: new AudioContext(),
    keymap: [
        {key: "`",          caps_key: "~",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "Tab",        caps_key: "Tab",        dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "1",          caps_key: "!",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "q",          caps_key: "Q",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "2",          caps_key: "@",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "w",          caps_key: "W",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "3",          caps_key: "#",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "e",          caps_key: "E",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "r",          caps_key: "R",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "5",          caps_key: "%",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "t",          caps_key: "T",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "6",          caps_key: "^",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "y",          caps_key: "Y",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "u",          caps_key: "U",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "8",          caps_key: "*",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "i",          caps_key: "I",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "9",          caps_key: "(",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "o",          caps_key: "O",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "0",          caps_key: ")",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "p",          caps_key: "P",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "[",          caps_key: "{",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "=",          caps_key: "+",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "]",          caps_key: "}",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "Backspace",  caps_key: "Backspace",  dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "\\",         caps_key: "|",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "ShiftLeft",  caps_key: "ShiftLeft",  dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "a",          caps_key: "A",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "z",          caps_key: "Z",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "s",          caps_key: "S",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "x",          caps_key: "X",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "d",          caps_key: "D",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "c",          caps_key: "C",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "v",          caps_key: "V",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "g",          caps_key: "G",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "b",          caps_key: "B",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "h",          caps_key: "H",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "n",          caps_key: "N",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "m",          caps_key: "M",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "k",          caps_key: "K",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: ",",          caps_key: "<",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "l",          caps_key: "L",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: ".",          caps_key: ">",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: ";",          caps_key: ":",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "/",          caps_key: "?",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "ShiftRight", caps_key: "ShiftRight", dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "Enter",      caps_key: "Enter",      dom: document.createElement("div"), hz: 0, pressed: 0}
    ],
    disc: [
        /* Current Recording History */
        [],
        /* Saved Discs */
        [
  (function() {
var piano = {
    /* initialization */
    css: document.createElement("style"),
    ui: document.createElement("div"),
    menuleft: document.createElement("div"),
    wave: document.createElement("select"),
    pitch: document.createElement("input"),
    tilt: document.createElement("input"),
    keyboard: document.createElement("div"),
    menuright: document.createElement("div"),
    audio: new AudioContext(),
    keymap: [
        {key: "`",          caps_key: "~",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "Tab",        caps_key: "Tab",        dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "1",          caps_key: "!",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "q",          caps_key: "Q",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "2",          caps_key: "@",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "w",          caps_key: "W",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "3",          caps_key: "#",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "e",          caps_key: "E",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "r",          caps_key: "R",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "5",          caps_key: "%",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "t",          caps_key: "T",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "6",          caps_key: "^",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "y",          caps_key: "Y",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "u",          caps_key: "U",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "8",          caps_key: "*",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "i",          caps_key: "I",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "9",          caps_key: "(",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "o",          caps_key: "O",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "0",          caps_key: ")",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "p",          caps_key: "P",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "[",          caps_key: "{",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "=",          caps_key: "+",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "]",          caps_key: "}",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "Backspace",  caps_key: "Backspace",  dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "\\",         caps_key: "|",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "ShiftLeft",  caps_key: "ShiftLeft",  dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "a",          caps_key: "A",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "z",          caps_key: "Z",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "s",          caps_key: "S",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "x",          caps_key: "X",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "d",          caps_key: "D",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "c",          caps_key: "C",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "v",          caps_key: "V",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "g",          caps_key: "G",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "b",          caps_key: "B",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "h",          caps_key: "H",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "n",          caps_key: "N",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "m",          caps_key: "M",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "k",          caps_key: "K",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: ",",          caps_key: "<",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "l",          caps_key: "L",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: ".",          caps_key: ">",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: ";",          caps_key: ":",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "/",          caps_key: "?",          dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "ShiftRight", caps_key: "ShiftRight", dom: document.createElement("div"), hz: 0, pressed: 0},
        {key: "Enter",      caps_key: "Enter",      dom: document.createElement("div"), hz: 0, pressed: 0}
    ],
    disc: [
        /* Current Recording History */
        [],
        /* Saved Discs */
        [
  {"keyi":64,"wave":"triangle","time":0,"timeout":null},
  {"keyi":71,"wave":"triangle","time":0.1973696145124677,"timeout":null},
  {"keyi":76,"wave":"triangle","time":0.4063492063492049,"timeout":null},
  {"keyi":71,"wave":"triangle","time":0.6153287981859421,"timeout":null},
  {"keyi":76,"wave":"triangle","time":0.8533333333333246,"timeout":null},
  {"keyi":76,"wave":"triangle","time":2.02594104308389,"timeout":null},
  {"keyi":74,"wave":"triangle","time":2.5135600907029527,"timeout":null},
  {"keyi":71,"wave":"triangle","time":3.4017233560090574,"timeout":null},
  {"keyi":76,"wave":"triangle","time":3.60489795918366,"timeout":null},
  {"keyi":71,"wave":"triangle","time":3.8254875283446665,"timeout":null},
  {"keyi":76,"wave":"triangle","time":4.028662131519269,"timeout":null},
  {"keyi":74,"wave":"triangle","time":4.260861678004517,"timeout":null},
  {"keyi":73,"wave":"triangle","time":4.696235827664395,"timeout":null},
  {"keyi":73,"wave":"triangle","time":4.905215419501133,"timeout":null},
  {"keyi":72,"wave":"triangle","time":5.1200000000000045,"timeout":null},
  {"keyi":73,"wave":"triangle","time":5.340589569160983,"timeout":null},
  {"keyi":73,"wave":"triangle","time":5.572789115646259,"timeout":null},
  {"keyi":66,"wave":"triangle","time":6.669931972789101,"timeout":null},
  {"keyi":64,"wave":"triangle","time":6.873106575963703,"timeout":null},
  {"keyi":63,"wave":"triangle","time":7.1053061224489795,"timeout":null},
  {"keyi":65,"wave":"triangle","time":7.3200907029478515,"timeout":null},
  {"keyi":67,"wave":"triangle","time":7.52907029478456,"timeout":null},
  {"keyi":69,"wave":"triangle","time":7.73514739229023,"timeout":null},
  {"keyi":70,"wave":"triangle","time":7.935419501133794,"timeout":null},
  {"keyi":72,"wave":"triangle","time":8.161814058956907,"timeout":null},
  {"keyi":74,"wave":"triangle","time":8.399818594104289,"timeout":null},
  {"keyi":74,"wave":"triangle","time":11.157188208616788,"timeout":null},
  {"keyi":74,"wave":"triangle","time":11.412607709750574,"timeout":null},
  {"keyi":71,"wave":"triangle","time":11.839274376417222,"timeout":null} 
  ],
    initialTime: 0,

    /* helper functions */
    newcss: function() {
        piano.css.innerHTML = `
            #piano-ui {
                background: linear-gradient(transparent, rgba(64, 64, 64, 0.5));
                color: black;
                font-family: Avenir, Klee, Helvetica, Arial, sans-serif;
                font-size: 14px;
                position: fixed;
                height: 75px;
                width: 100%;
                left: 0;
                bottom: 0;
                perspective: 1024px;
                z-index: 9999;
            }
            #piano-quit {
                background: rgba(255, 255, 255, 0.5);
                position: absolute;
                width: 30px;
                top: 0;
                right: 0;
                transform: translateY(-100%);
                border-top: 1px solid rgba(64, 64, 64, 0.5);
                border-radius: 10px 10px 0 0;
                text-align: center;
                cursor: pointer;
            }

            .piano-menu {
                height: 100%;
                width: 15%;
                vertical-align: top;
                display: inline-block;
            }
            .piano-menu > label, .piano-menu > input, .piano-menu > select {
                font-size: 14px;
                max-width: 50%;
                float: none;
            }
            #piano-left {
                background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
                text-align: left;
            }
            #piano-right {
                background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5));
                text-align: right;
            }
            #piano-middle {
                height: 100%;
                width: 70%;
                bottom: 0;
                transform: translateZ(${piano.tilt.value}px) rotateX(${piano.tilt.value}deg);
                transform-style: preserve-3d;
                display: inline-block;
            }

            .piano-key {
                text-align: center;
                position: relative;
                bottom: 0;
                transform-style: preserve-3d;
                border-radius: 0 0 5px 5px;
                display: inline-block;
            }
            .piano-key:before {
                content: "";
                background: #808080;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                transform: translateZ(-6px);
                border-radius: 0 0 5px 5px;
            }
            .piano-white {
                background: white;
                color: black;
                height: 100%;
                width: 3.5%;
                transform: translateZ(7px);
                margin-left: 0.2%;
            }
            .piano-white.piano-hit {
                background: #c0c0c0;
                transform: translateZ(1px);
            }
            .piano-black {
                background: black;
                color: white;
                vertical-align: top;
                height: 70%;
                width: 2%;
                transform: translateX(-55%) translateZ(14px);
                margin-right: -2%;
            }
            .piano-black.piano-hit {
                background: #404040;
                transform: translateX(-55%) translateZ(8px);
            }

            .piano-keyval {
                position: absolute;
                bottom: 0;
                transform: translateX(-50%);
            }
        `;
    },
    newselect: function(p, c, label, options, value, func) {
        options.forEach(function(e) {
            c.appendChild(document.createElement("option")).innerHTML = e;
        });
        c.value = options[value];
        if (func != null) {
            c.addEventListener("input", func);
        }
        p.appendChild(document.createElement("label")).innerHTML = label;
        p.appendChild(c);
    },
    newrange: function(p, c, label, min, step, max, value, func) {
        c.type = "range";
        c.min = min;
        c.step = step;
        c.max = max;
        c.value = value;
        c.min = min;
        c.addEventListener("input", func);
        p.appendChild(document.createElement("label")).innerHTML = label;
        p.appendChild(c);
    },
    newbutton: function(p, label, func) {
        var c = document.createElement("input");
        c.type = "button";
        c.addEventListener("click", func);
        c.value = label;
        p.appendChild(c);
        return c;
    },
    newbr: function(p) {
        p.appendChild(document.createElement("br"));
    },
    keyindex: function(e) {
        var key = e.key.length == 1 ? e.key : e.code;
        return piano.keymap.findIndex(e => e.key == key || e.caps_key == key);
    },

    /* audio functions */
    note: function(i, wave) {
        var vol = piano.audio.createGain();
        vol.connect(piano.audio.destination);
        var osc = piano.audio.createOscillator();
        /* altered version of formula from https://en.wikipedia.org/wiki/Piano_key_frequencies */
        osc.frequency.value = 440 * Math.pow(2, (i - 53) / 12);
        osc.type = wave;
        osc.connect(vol);
        osc.start();
        var secs = 10;
        vol.gain.exponentialRampToValueAtTime(1 / Number.MAX_SAFE_INTEGER, piano.audio.currentTime + secs);
        setTimeout(e => osc.disconnect(), secs * 1000);
        setTimeout(e => vol.disconnect(), secs * 1000);
    },
    playDisc: function(i) {
        piano.disc[i].forEach(function(e, j) {
            e.timeout = setTimeout(function() {
                piano.note(e.keyi, e.wave);
                var domi = e.keyi - piano.pitch.value;
                if (domi >= 0 && domi < 46) {
                    piano.keymap[domi].dom.classList.add("piano-hit");
                    setTimeout(o => piano.keymap[domi].dom.classList.remove("piano-hit"), 100);
                }
                e.timeout = null;
            }, e.time * 1000);
        });
    },
    stopDisc: function(i) {
        piano.disc[i].forEach(function(e) {
            clearTimeout(e.timeout);
            e.timeout = null;
        });
    },
    stopDiscs: function(i) {
        piano.disc.forEach(e => e.forEach(function(o) {
            clearTimeout(o.timeout);
            o.timeout = null;
        }));
    },
    saveDisc: function() {
        piano.disc.push(piano.disc[0]);
        piano.deleteDisc(0);
    },
    deleteDisc: function(i) {
        if (i == 0) {
            piano.disc[i] = [];
        }
        else {
            piano.disc = piano.disc.slice(0, i).concat(piano.disc.slice(i + 1));
        }
        piano.playbackmode();
    },
    exportDiscs: function() {
        piano.disc.forEach(function(e, i) {
            var d = JSON.stringify(e);
            console.log("Disc " + i + "\n" + d);
        });
        alert("Check the console.");
    },

    keyup: function(e) {
        var keyi = piano.keyindex(e);
        if (keyi >= 0) {
            piano.keymap[keyi].pressed = 0;
            piano.keymap[keyi].dom.classList.remove("piano-hit");
        }
    },
    keydown: function(e) {
        e.preventDefault();
        var keyi = piano.keyindex(e);
        /* play notes */
        if (keyi >= 0 && piano.keymap[keyi].pressed == 0) {
            piano.keymap[keyi].pressed = 1;
            var i = keyi + Number(piano.pitch.value);
            piano.note(i, piano.wave.value);
            piano.keymap[keyi].dom.classList.add("piano-hit");
            /* store history */
            if (piano.disc[0].length == 0) {
                piano.initialTime = piano.audio.currentTime;
            }
            piano.disc[0].push({
                keyi: i,
                wave: piano.wave.value,
                time: piano.audio.currentTime - piano.initialTime,
                timeout: null
            });
            if (piano.disc[0].length == 1) {
                Array.from(piano.menuright.getElementsByTagName("input")).slice(0, 3).forEach(e => e.removeAttribute("disabled"));
            }
        }
        /* reset history */
        else if (e.key == " ") {
            piano.stopDiscs();
            piano.deleteDisc(0);
        }
        /* control pitch and tilt */
        else if (e.key == "ArrowLeft") {
            piano.pitch.value = Number(piano.pitch.value) - 12;
        }
        else if (e.key == "ArrowRight") {
            piano.pitch.value = Number(piano.pitch.value) + 12;
        }
        else if (e.key == "ArrowDown") {
            piano.tilt.value = Number(piano.tilt.value) - 5;
            piano.newcss();
        }
        else if (e.key == "ArrowUp") {
            piano.tilt.value = Number(piano.tilt.value) + 5;
            piano.newcss();
        }
    },

    /* right menu */
    playstop: function(e, i) {
        if (piano.disc[i].length > 0) {
            var c = i == 0 ? "↻" : i;
            if (e.target.value == c + " ▶") {
                piano.playDisc(i);
                e.target.value = c + " ◼";
                var lastnote = piano.disc[i].length - 1;
                setTimeout(o => e.target.value = c + " ▶", 1000 * (piano.disc[i][lastnote].time));
            }
            else {
                piano.stopDisc(i);
                e.target.value = c + " ▶";
            }
        }
    },
    playbackmode: function() {
        piano.menuright.innerHTML = "";
        var d1 = piano.newbutton(piano.menuright, "↻ ▶", e => piano.playstop(e, 0));
        var d2 = piano.newbutton(piano.menuright, "⬇", piano.saveDisc);
        if (piano.disc[0].length == 0) {
            d1.setAttribute("disabled", 1);
            d2.setAttribute("disabled", 1);
        }
        var d3 = piano.newbutton(piano.menuright, "✖", piano.deletionmode);
        if (piano.disc.length == 1 && piano.disc[0].length == 0) {
            d3.setAttribute("disabled", 1);
        }
        var d4 = piano.newbutton(piano.menuright, "︎⬆︎", piano.exportDiscs);
        if (piano.disc.length == 1) {
            d4.setAttribute("disabled", 1);
        }
        piano.newbr(piano.menuright);
        piano.disc.forEach(function(e, i) {
            if (i !== 0) {
                if (piano.disc[i].every(e => e.timeout == null)) {
                    piano.newbutton(piano.menuright, i + " ▶", o => piano.playstop(o, i));
                }
                else {
                    piano.newbutton(piano.menuright, i + " ◼", o => piano.playstop(o, i));
                }
            }
        });
    },
    deletionmode: function() {
        piano.stopDiscs();
        piano.menuright.innerHTML = "";
        var d1 = piano.newbutton(piano.menuright, "↻ ✖", e => piano.deleteDisc(0));
        if (piano.disc[0].length == 0) {
            d1.setAttribute("disabled", 1);
        }
        var d2 = piano.newbutton(piano.menuright, "⬇", piano.saveDisc);
        d2.setAttribute("disabled", 1);
        piano.newbutton(piano.menuright, "✖", piano.playbackmode);
        var d3 = piano.newbutton(piano.menuright, "︎⬆︎", piano.exportDiscs);
        d3.setAttribute("disabled", 1);
        piano.newbr(piano.menuright);
        piano.disc.forEach(function(e, i) {
            if (i !== 0) {
                piano.newbutton(piano.menuright, i + " ✖", o => piano.deleteDisc(i));
            }
        });
    },

    /* main */
    quit: function() {
        piano.ui.remove();
        piano.css.remove();
        piano.stopDiscs();
        piano.audio.close();
        document.removeEventListener("keydown", piano.keydown);
        document.removeEventListener("keyup", piano.keyup);
    },
    init: function() {
        /* define styles */
        document.body.appendChild(piano.css);
        /* place main container */
        document.body.appendChild(piano.ui);
        piano.ui.id = "piano-ui";
        var quit = document.createElement("div");
        quit.id = "piano-quit";
        quit.innerHTML = "✕";
        quit.addEventListener("click", piano.quit);
        piano.ui.appendChild(quit);
        /* place ui settings */
        piano.ui.appendChild(piano.menuleft);
        piano.menuleft.className = "piano-menu";
        piano.menuleft.id = "piano-left";
        piano.newselect(piano.menuleft, piano.wave, "Wave: ", ["sine", "triangle", "square", "sawtooth"], 1);
        piano.newbr(piano.menuleft);
        piano.newrange(piano.menuleft, piano.pitch, "Pitch: ", 0, 12, 48, 24, null);
        piano.newbr(piano.menuleft);
        piano.newrange(piano.menuleft, piano.tilt, "Tilt: ", 0, 5, 90, 45, piano.newcss);
        piano.newcss();
        /* place piano */
        piano.ui.appendChild(piano.keyboard);
        piano.keyboard.id = "piano-middle";
        for (var i = 0; i < piano.keymap.length; i++) {
            /* place keys */
            var key = piano.keymap[i].key;
            var dom = piano.keymap[i].dom;
            if ([0, 2, 4, 5, 7, 9, 11].some(e => (i - e - 8) % 12 == 0)) {
                dom.className = "piano-key piano-white";
            }
            else {
                dom.className = "piano-key piano-black";
            }
            /* place characters on respective keys */
            var keyval = document.createElement("span");
            keyval.className = "piano-keyval";
            if (key.length == 1) {
                keyval.innerHTML = key;
            }
            else {
                keyval.innerHTML = {"Tab": "⇥", "Backspace": "⌫", "ShiftLeft": "⇧L", "ShiftRight": "⇧R", "Enter": "↵"}[key];
            }
            dom.appendChild(keyval);
            piano.keyboard.appendChild(dom);
        }
        /* place playback settings */
        piano.ui.appendChild(piano.menuright);
        piano.menuright.className = "piano-menu";
        piano.menuright.id = "piano-right";
        piano.playbackmode();
        /* link keyboard to audio */
        document.addEventListener("keydown", piano.keydown);
        document.addEventListener("keyup", piano.keyup);
    }
};
piano.init();
})();
],
    initialTime: 0,

    /* helper functions */
    newcss: function() {
        piano.css.innerHTML = `
            #piano-ui {
                background: linear-gradient(transparent, rgba(64, 64, 64, 0.5));
                color: black;
                font-family: Avenir, Klee, Helvetica, Arial, sans-serif;
                font-size: 14px;
                position: fixed;
                height: 75px;
                width: 100%;
                left: 0;
                bottom: 0;
                perspective: 1024px;
                z-index: 9999;
            }
            #piano-quit {
                background: rgba(255, 255, 255, 0.5);
                position: absolute;
                width: 30px;
                top: 0;
                right: 0;
                transform: translateY(-100%);
                border-top: 1px solid rgba(64, 64, 64, 0.5);
                border-radius: 10px 10px 0 0;
                text-align: center;
                cursor: pointer;
            }

            .piano-menu {
                height: 100%;
                width: 15%;
                vertical-align: top;
                display: inline-block;
            }
            .piano-menu > label, .piano-menu > input, .piano-menu > select {
                font-size: 14px;
                max-width: 50%;
                float: none;
            }
            #piano-left {
                background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
                text-align: left;
            }
            #piano-right {
                background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5));
                text-align: right;
            }
            #piano-middle {
                height: 100%;
                width: 70%;
                bottom: 0;
                transform: translateZ(${piano.tilt.value}px) rotateX(${piano.tilt.value}deg);
                transform-style: preserve-3d;
                display: inline-block;
            }

            .piano-key {
                text-align: center;
                position: relative;
                bottom: 0;
                transform-style: preserve-3d;
                border-radius: 0 0 5px 5px;
                display: inline-block;
            }
            .piano-key:before {
                content: "";
                background: #808080;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                transform: translateZ(-6px);
                border-radius: 0 0 5px 5px;
            }
            .piano-white {
                background: white;
                color: black;
                height: 100%;
                width: 3.5%;
                transform: translateZ(7px);
                margin-left: 0.2%;
            }
            .piano-white.piano-hit {
                background: #c0c0c0;
                transform: translateZ(1px);
            }
            .piano-black {
                background: black;
                color: white;
                vertical-align: top;
                height: 70%;
                width: 2%;
                transform: translateX(-55%) translateZ(14px);
                margin-right: -2%;
            }
            .piano-black.piano-hit {
                background: #404040;
                transform: translateX(-55%) translateZ(8px);
            }

            .piano-keyval {
                position: absolute;
                bottom: 0;
                transform: translateX(-50%);
            }
        `;
    },
    newselect: function(p, c, label, options, value, func) {
        options.forEach(function(e) {
            c.appendChild(document.createElement("option")).innerHTML = e;
        });
        c.value = options[value];
        if (func != null) {
            c.addEventListener("input", func);
        }
        p.appendChild(document.createElement("label")).innerHTML = label;
        p.appendChild(c);
    },
    newrange: function(p, c, label, min, step, max, value, func) {
        c.type = "range";
        c.min = min;
        c.step = step;
        c.max = max;
        c.value = value;
        c.min = min;
        c.addEventListener("input", func);
        p.appendChild(document.createElement("label")).innerHTML = label;
        p.appendChild(c);
    },
    newbutton: function(p, label, func) {
        var c = document.createElement("input");
        c.type = "button";
        c.addEventListener("click", func);
        c.value = label;
        p.appendChild(c);
        return c;
    },
    newbr: function(p) {
        p.appendChild(document.createElement("br"));
    },
    keyindex: function(e) {
        var key = e.key.length == 1 ? e.key : e.code;
        return piano.keymap.findIndex(e => e.key == key || e.caps_key == key);
    },

    /* audio functions */
    note: function(i, wave) {
        var vol = piano.audio.createGain();
        vol.connect(piano.audio.destination);
        var osc = piano.audio.createOscillator();
        /* altered version of formula from https://en.wikipedia.org/wiki/Piano_key_frequencies */
        osc.frequency.value = 440 * Math.pow(2, (i - 53) / 12);
        osc.type = wave;
        osc.connect(vol);
        osc.start();
        var secs = 10;
        vol.gain.exponentialRampToValueAtTime(1 / Number.MAX_SAFE_INTEGER, piano.audio.currentTime + secs);
        setTimeout(e => osc.disconnect(), secs * 1000);
        setTimeout(e => vol.disconnect(), secs * 1000);
    },
    playDisc: function(i) {
        piano.disc[i].forEach(function(e, j) {
            e.timeout = setTimeout(function() {
                piano.note(e.keyi, e.wave);
                var domi = e.keyi - piano.pitch.value;
                if (domi >= 0 && domi < 46) {
                    piano.keymap[domi].dom.classList.add("piano-hit");
                    setTimeout(o => piano.keymap[domi].dom.classList.remove("piano-hit"), 100);
                }
                e.timeout = null;
            }, e.time * 1000);
        });
    },
    stopDisc: function(i) {
        piano.disc[i].forEach(function(e) {
            clearTimeout(e.timeout);
            e.timeout = null;
        });
    },
    stopDiscs: function(i) {
        piano.disc.forEach(e => e.forEach(function(o) {
            clearTimeout(o.timeout);
            o.timeout = null;
        }));
    },
    saveDisc: function() {
        piano.disc.push(piano.disc[0]);
        piano.deleteDisc(0);
    },
    deleteDisc: function(i) {
        if (i == 0) {
            piano.disc[i] = [];
        }
        else {
            piano.disc = piano.disc.slice(0, i).concat(piano.disc.slice(i + 1));
        }
        piano.playbackmode();
    },
    exportDiscs: function() {
        piano.disc.forEach(function(e, i) {
            var d = JSON.stringify(e);
            console.log("Disc " + i + "\n" + d);
        });
        alert("Check the console.");
    },

    keyup: function(e) {
        var keyi = piano.keyindex(e);
        if (keyi >= 0) {
            piano.keymap[keyi].pressed = 0;
            piano.keymap[keyi].dom.classList.remove("piano-hit");
        }
    },
    keydown: function(e) {
        e.preventDefault();
        var keyi = piano.keyindex(e);
        /* play notes */
        if (keyi >= 0 && piano.keymap[keyi].pressed == 0) {
            piano.keymap[keyi].pressed = 1;
            var i = keyi + Number(piano.pitch.value);
            piano.note(i, piano.wave.value);
            piano.keymap[keyi].dom.classList.add("piano-hit");
            /* store history */
            if (piano.disc[0].length == 0) {
                piano.initialTime = piano.audio.currentTime;
            }
            piano.disc[0].push({
                keyi: i,
                wave: piano.wave.value,
                time: piano.audio.currentTime - piano.initialTime,
                timeout: null
            });
            if (piano.disc[0].length == 1) {
                Array.from(piano.menuright.getElementsByTagName("input")).slice(0, 3).forEach(e => e.removeAttribute("disabled"));
            }
        }
        /* reset history */
        else if (e.key == " ") {
            piano.stopDiscs();
            piano.deleteDisc(0);
        }
        /* control pitch and tilt */
        else if (e.key == "ArrowLeft") {
            piano.pitch.value = Number(piano.pitch.value) - 12;
        }
        else if (e.key == "ArrowRight") {
            piano.pitch.value = Number(piano.pitch.value) + 12;
        }
        else if (e.key == "ArrowDown") {
            piano.tilt.value = Number(piano.tilt.value) - 5;
            piano.newcss();
        }
        else if (e.key == "ArrowUp") {
            piano.tilt.value = Number(piano.tilt.value) + 5;
            piano.newcss();
        }
    },

    /* right menu */
    playstop: function(e, i) {
        if (piano.disc[i].length > 0) {
            var c = i == 0 ? "↻" : i;
            if (e.target.value == c + " ▶") {
                piano.playDisc(i);
                e.target.value = c + " ◼";
                var lastnote = piano.disc[i].length - 1;
                setTimeout(o => e.target.value = c + " ▶", 1000 * (piano.disc[i][lastnote].time));
            }
            else {
                piano.stopDisc(i);
                e.target.value = c + " ▶";
            }
        }
    },
    playbackmode: function() {
        piano.menuright.innerHTML = "";
        var d1 = piano.newbutton(piano.menuright, "↻ ▶", e => piano.playstop(e, 0));
        var d2 = piano.newbutton(piano.menuright, "⬇", piano.saveDisc);
        if (piano.disc[0].length == 0) {
            d1.setAttribute("disabled", 1);
            d2.setAttribute("disabled", 1);
        }
        var d3 = piano.newbutton(piano.menuright, "✖", piano.deletionmode);
        if (piano.disc.length == 1 && piano.disc[0].length == 0) {
            d3.setAttribute("disabled", 1);
        }
        var d4 = piano.newbutton(piano.menuright, "︎⬆︎", piano.exportDiscs);
        if (piano.disc.length == 1) {
            d4.setAttribute("disabled", 1);
        }
        piano.newbr(piano.menuright);
        piano.disc.forEach(function(e, i) {
            if (i !== 0) {
                if (piano.disc[i].every(e => e.timeout == null)) {
                    piano.newbutton(piano.menuright, i + " ▶", o => piano.playstop(o, i));
                }
                else {
                    piano.newbutton(piano.menuright, i + " ◼", o => piano.playstop(o, i));
                }
            }
        });
    },
    deletionmode: function() {
        piano.stopDiscs();
        piano.menuright.innerHTML = "";
        var d1 = piano.newbutton(piano.menuright, "↻ ✖", e => piano.deleteDisc(0));
        if (piano.disc[0].length == 0) {
            d1.setAttribute("disabled", 1);
        }
        var d2 = piano.newbutton(piano.menuright, "⬇", piano.saveDisc);
        d2.setAttribute("disabled", 1);
        piano.newbutton(piano.menuright, "✖", piano.playbackmode);
        var d3 = piano.newbutton(piano.menuright, "︎⬆︎", piano.exportDiscs);
        d3.setAttribute("disabled", 1);
        piano.newbr(piano.menuright);
        piano.disc.forEach(function(e, i) {
            if (i !== 0) {
                piano.newbutton(piano.menuright, i + " ✖", o => piano.deleteDisc(i));
            }
        });
    },

    /* main */
    quit: function() {
        piano.ui.remove();
        piano.css.remove();
        piano.stopDiscs();
        piano.audio.close();
        document.removeEventListener("keydown", piano.keydown);
        document.removeEventListener("keyup", piano.keyup);
    },
    init: function() {
        /* define styles */
        document.body.appendChild(piano.css);
        /* place main container */
        document.body.appendChild(piano.ui);
        piano.ui.id = "piano-ui";
        var quit = document.createElement("div");
        quit.id = "piano-quit";
        quit.innerHTML = "✕";
        quit.addEventListener("click", piano.quit);
        piano.ui.appendChild(quit);
        /* place ui settings */
        piano.ui.appendChild(piano.menuleft);
        piano.menuleft.className = "piano-menu";
        piano.menuleft.id = "piano-left";
        piano.newselect(piano.menuleft, piano.wave, "Wave: ", ["sine", "triangle", "square", "sawtooth"], 1);
        piano.newbr(piano.menuleft);
        piano.newrange(piano.menuleft, piano.pitch, "Pitch: ", 0, 12, 48, 24, null);
        piano.newbr(piano.menuleft);
        piano.newrange(piano.menuleft, piano.tilt, "Tilt: ", 0, 5, 90, 45, piano.newcss);
        piano.newcss();
        /* place piano */
        piano.ui.appendChild(piano.keyboard);
        piano.keyboard.id = "piano-middle";
        for (var i = 0; i < piano.keymap.length; i++) {
            /* place keys */
            var key = piano.keymap[i].key;
            var dom = piano.keymap[i].dom;
            if ([0, 2, 4, 5, 7, 9, 11].some(e => (i - e - 8) % 12 == 0)) {
                dom.className = "piano-key piano-white";
            }
            else {
                dom.className = "piano-key piano-black";
            }
            /* place characters on respective keys */
            var keyval = document.createElement("span");
            keyval.className = "piano-keyval";
            if (key.length == 1) {
                keyval.innerHTML = key;
            }
            else {
                keyval.innerHTML = {"Tab": "⇥", "Backspace": "⌫", "ShiftLeft": "⇧L", "ShiftRight": "⇧R", "Enter": "↵"}[key];
            }
            dom.appendChild(keyval);
            piano.keyboard.appendChild(dom);
        }
        /* place playback settings */
        piano.ui.appendChild(piano.menuright);
        piano.menuright.className = "piano-menu";
        piano.menuright.id = "piano-right";
        piano.playbackmode();
        /* link keyboard to audio */
        document.addEventListener("keydown", piano.keydown);
        document.addEventListener("keyup", piano.keyup);
    }
};
piano.init();
})();
