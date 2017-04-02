<template>
  <div id='app'>
    <div class='controls'>
      Connected: {{ connected }}
      Players: {{ players }}

      <button @click='join'>Join</button>
    </div>

    <div id='game'>
      <div class='country-wrap'>
      	<div class='sun'></div>
      	<div class='grass'></div>
      	<div class='street'></div>
        <hero></hero>
      	<div class='street-stripe'></div>
      	<div class='hill'></div>
      </div>
<!--
      <div class='sky'></div>

      <div class='street'>
        <hero></hero>
        <undead v-for='params in undeads' :params='params' :key='params'></undead>
      </div>

      <div class='floor'></div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hero from './components/Hero'
import Undead from './components/Undead'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      connected: 'connected',
      players: 'players',
      undeads: 'undeads'
    })
  },
  methods: {
    join () {
      this.$socket.emit('join')
    }
  },
  components: {
    Hero,
    Undead
  }
}
</script>

<style>
/*#app {
  display: grid;
  grid-template-areas: "controls"
                       "game";
}

.controls {
  grid-area: controls;
}*/

#game {
  /*grid-area: game;

  display: grid;
  grid-template-areas: "sky"
                       "street"
                       "floor";*/
  width: 800px;
  height: 400px;
  border: 1px solid black;
}
/*
.sky {
  grid-area: sky;
  background-color: blue;
}

.street {
  grid-area: street;
  grid-column: 1;
  height: 200px;
}

.floor {
  grid-area: floor;
  background-color: #ccc;
}*/


body {
	background: rgb(209,228,234);
  background: -moz-radial-gradient(center, ellipse cover,  rgba(209,228,234,1) 0%, rgba(186,228,244,1) 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(209,228,234,1)),   color-stop(100%,rgba(186,228,244,1)));
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(209,228,234,1) 0%,rgba(186,228,244,1) 100%);
  background: -o-radial-gradient(center, ellipse cover,  rgba(209,228,234,1) 0%,rgba(186,228,244,1) 100%);
  background: -ms-radial-gradient(center, ellipse cover,  rgba(209,228,234,1) 0%,rgba(186,228,244,1) 100%);
  background: radial-gradient(ellipse at center,  rgba(209,228,234,1) 0%,rgba(186,228,244,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d1e4ea', endColorstr='#bae4f4',GradientType=1 );
	padding:0;
	margin:0;
}
.country-wrap {
	position:relative;
	width:100%;
	height:100%;
	overflow:hidden;
}
.push-bottom {
	position:absolute;
	bottom:0;
	height:100%;
}
.bottom-ground {
	background:#8d773e;
	width:102%;
	left:-1%;
	height:60px;
	bottom:0;
	position:absolute;
	box-shadow:0 2px 3px rgba(0,0,0,0.2) inset;
}
.street {
	background:#7a7a7a	 url(data:image/png;base64,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);
	height:80px;
	width:102%;
	position:absolute;
	bottom:0;
	box-shadow:0 1px 16px rgba(111, 35, 51, 0.4) inset;
}
.street:after {
	content:'';
	display:block;
	position:absolute;
	width:100%;
	height:10px;
	background:#cdbcb4;
	bottom:0;
	border-bottom:3px solid #72625a;
	z-index:1;
}
.street:before {
	content:'';
	display:block;
	position:absolute;
	width:100%;
	height:7px;
	background:#c2a99d;
	bottom:-7px;
	z-index:1;
}

.street-stripe {
	background:#d4d4d4;
	height:8px;
	width:100px;
	position:absolute;
	bottom:44px;
	border-radius:2px;
	box-shadow:200px 0 0 #d4d4d4, 400px 0 0 #d4d4d4 , 600px 0 0 #d4d4d4 , 800px 0 0 #d4d4d4 , 1000px 0 0 #d4d4d4 , 1200px 0 0 #d4d4d4 , 1400px 0 0 #d4d4d4 , 1600px 0 0 #d4d4d4 , 1800px 0 0 #d4d4d4 , 2000px 0 0 #d4d4d4;
}
.grass {
	height: 40px;
  	width: 100%;
	background-color: #dbcac2;
	position:absolute;
	bottom:60px;
}
.grass:before {
    position: absolute;
    content: '';
	top: 14px;
    left: 0;
    height: 8px;
    width: 100%;
  	background-color: #b99f93;
}
.sun {
	background:#ff9944;
	width:40px;
	height:40px;
	border-radius:50%;
	box-shadow:0 0 50px rgba(255,153,68,0.7);
	position:absolute;
	left:49%;
	bottom:350px;
}
.la {
  position: absolute;
  bottom: 200px;
  width: 2px;
  height: 50px;
  background: $cd;
  margin-right: 20px;
}

.la:before {
  top: 5px;
  left: -10px;
  width: 22px;
  height: 2px;
  background: $cd;
}

.la:after {
  bottom: 0;
  left: -2px;
  width: 6px;
  height: 12px;
  background: $cd;
}

.l {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 10px #fff, 0 0 25px #fff, 0 0 50px #fff;
}

.l:nth-child(1) { left: -10px; }
.l:nth-child(2) { right: -10px; }
/*noise css*/

.noise {
	position: relative;
	z-index: 1;
	}

.noise:before, .body-noise:before {
	content: "";
	position: absolute;
	z-index: -1;
	top:0;
	bottom:0;
	left:0;
	right:0;
	background-image: url(data:image/png;base64,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);
}

.hill {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 250px;
  border-top-right-radius: 160%;
  border-top-left-radius: 100%;
  background-color: #adde60;
  z-index:-1;
}

.hill:after {
  content: '';
	position: absolute;
  bottom: -100px;
  right: -400px;
	width: 120%;
  height: 110%;
  border-top-right-radius: 100%;
  border-top-left-radius: 0%;
  background-color: #94c943;
  -moz-transform:rotate(-12deg);
  -webkit-transform:rotate(-12deg);
  box-shadow:0 0 25px #cbf191 inset;
}

.hill:before {
  background-color: #93cc3a;
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    bottom: -70px;
    content: "";
    height: 110%;
    left: -54px;
    position: absolute;
    transform: rotate(4deg);
    width: 120%;
}
</style>
