function contentLoaded(e,t){var n=!1,i=!0,a=e.document,o=a.documentElement,r=a.addEventListener,s=r?"addEventListener":"attachEvent",l=r?"removeEventListener":"detachEvent",d=r?"":"on",g=function(i){("readystatechange"!=i.type||"complete"==a.readyState)&&(("load"==i.type?e:a)[l](d+i.type,g,!1),!n&&(n=!0)&&t.call(e,i.type||i))},h=function(){try{o.doScroll("left")}catch(e){return void setTimeout(h,50)}g("poll")};if("complete"==a.readyState)t.call(e,"lazy");else{if(!r&&o.doScroll){try{i=!e.frameElement}catch(c){}i&&h()}a[s](d+"DOMContentLoaded",g,!1),a[s](d+"readystatechange",g,!1),e[s](d+"load",g,!1)}}!function(){"use strict";var e={};e.init=function(){this.progress=0,this.filesNeeded=1,this.filesTotal=1,this.$={},this.$.progressBar=document.getElementById("progressbar"),this.$.status=document.getElementById("status"),this.$.percentage=document.getElementById("percentage"),this.$.mapPreview=document.getElementById("mappreview"),this.$.serverName=document.getElementById("servername"),this.$.mapName=document.getElementById("mapname"),this.$.playerSlots=document.getElementById("playerslots"),this.updateProgress()},e.setFilesTotal=function(e){this.filesTotal=Math.max(0,e)},e.setFilesNeeded=function(e){this.filesNeeded=Math.max(0,e)},e.setServerInfo=function(e,t,n){this.$.mapPreview.sdrc="http://image.www.gametracker.com/images/maps/160x120/garrysmod/"+t+".jpg",this.$.mapName.innerText=t,this.$.serverName.innerText=e,this.$.playerSlots.innerText=n+" player slots"},e.updateProgress=function(){var e=Math.max(0,this.filesTotal-this.filesNeeded),t=this.filesTotal>0?e/this.filesTotal:1;t=Math.round(100*t),this.$.percentage.innerText=t+"%",this.$.progressBar.style.right=100-t+"%"},e.onFileDownloading=function(e){this.filesNeeded=Math.max(0,this.filesNeeded-1),this.updateProgress();var t="Downloading "+e+"...";this.onStatusChanged(t)},e.onStatusChanged=function(e){"Sending client info..."===e&&(this.filesNeeded=0,this.updateProgress()),this.$.status.innerText=e},e.init(),window.LOAD=e,window.GameDetails=function(t,n,i,a){e.setServerInfo(t,i,a)},window.DownloadingFile=function(t){e.onFileDownloading(t)},window.SetStatusChanged=function(t){e.onStatusChanged(t)},window.SetFilesTotal=function(t){e.setFilesTotal(t)},window.SetFilesNeeded=function(t){e.setFilesNeeded(t)}}(),contentLoaded(window,function(){"use strict";var e=[{func:"GameDetails",args:["[cG] 24/7 TTT Minecraft/Dolls | SpecDM | LowGrav | PointShop","st.compactgamers.com/loading/garrysmod/ttt/bg-pointshop.php?steamid=76561197991989781","ttt_minecraftcity_v4_dark",40,"76561197991989781","terrortown"],time:854},{func:"DownloadingFile",args:["maps/ttt_minecraftcity_v4_dark.bsp"],time:1972},{func:"SetFilesNeeded",args:[21],time:2435},{func:"SetFilesTotal",args:[73],time:2436},{func:"DownloadingFile",args:["maps/graphs/ttt_minecraftcity_v4_dark.ain"],time:9380},{func:"DownloadingFile",args:["materials/vgui/cg/cg_ps_logo.png"],time:9621},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/flash.png"],time:9853},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/full.png"],time:9980},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_ten.png"],time:10107},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_nine.png"],time:10235},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_eight.png"],time:10356},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_seven.png"],time:10484},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_six.png"],time:10611},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_five.png"],time:10737},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_four.png"],time:10864},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_thrice.png"],time:10987},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_twice.png"],time:11115},{func:"DownloadingFile",args:["materials/nook/heart_hud/horizontal_heart/hurt_once.png"],time:11240},{func:"DownloadingFile",args:["materials/vgui/ttt/icon_melon_laun.png"],time:11366},{func:"DownloadingFile",args:["materials/vgui/ttt/icon_poison_dart.png"],time:11496},{func:"DownloadingFile",args:["materials/vgui/ttt/icon_cloak.png"],time:11617},{func:"DownloadingFile",args:["materials/vgui/ttt/icon_crabpod.png"],time:11747},{func:"DownloadingFile",args:["sound/siege/leeroy.mp3"],time:11871},{func:"DownloadingFile",args:["materials/tripmine/icon_tripwire.png"],time:12e3},{func:"SetStatusChanged",args:["Sending client info..."],time:17669}];[].forEach.call(e,function(e){var t=window[e.func];void 0!==t&&setTimeout(function(){t.apply(window,e.args)},e.time)})});