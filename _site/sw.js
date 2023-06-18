importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/assets/css/style.css","revision":"e6252d77748456531b436d9c05fdc588"},{"url":"/assets/js/workbox-v5.1.4/workbox-background-sync.dev.js","revision":"e6c466ef158b91df55fa3dd1f1fc79ee"},{"url":"/assets/js/workbox-v5.1.4/workbox-background-sync.prod.js","revision":"1e8c38916345d2843226a60ca686cc54"},{"url":"/assets/js/workbox-v5.1.4/workbox-broadcast-update.dev.js","revision":"9d6333ec473f7fc15bb00b6bd1a30a02"},{"url":"/assets/js/workbox-v5.1.4/workbox-broadcast-update.prod.js","revision":"f0a1d0037b9e038b362d7cf48460b8e9"},{"url":"/assets/js/workbox-v5.1.4/workbox-cacheable-response.dev.js","revision":"d688a5d580b0f9eee7e68c1746a4a750"},{"url":"/assets/js/workbox-v5.1.4/workbox-cacheable-response.prod.js","revision":"20228ec25a4938eb1934168d28aa7ab7"},{"url":"/assets/js/workbox-v5.1.4/workbox-core.dev.js","revision":"62c8ec9a9a13558795d8e321efb8a6b6"},{"url":"/assets/js/workbox-v5.1.4/workbox-core.prod.js","revision":"a758827cb2c60de74e793f6758a60561"},{"url":"/assets/js/workbox-v5.1.4/workbox-expiration.dev.js","revision":"95cf17376e32e997e649617f45040c80"},{"url":"/assets/js/workbox-v5.1.4/workbox-expiration.prod.js","revision":"1b99d6f47cb5baa3e82d508de52f3b01"},{"url":"/assets/js/workbox-v5.1.4/workbox-navigation-preload.dev.js","revision":"19b25c9559a0bf170cce20bccb8d6a33"},{"url":"/assets/js/workbox-v5.1.4/workbox-navigation-preload.prod.js","revision":"3b74c03775c55aac455b4293b03c9cd8"},{"url":"/assets/js/workbox-v5.1.4/workbox-offline-ga.dev.js","revision":"5b06151630ebbc0dc35f18dbb7e228e3"},{"url":"/assets/js/workbox-v5.1.4/workbox-offline-ga.prod.js","revision":"7bd7dc1af5a55c20511d84b18c81ec27"},{"url":"/assets/js/workbox-v5.1.4/workbox-precaching.dev.js","revision":"2e95fb60b828100bd829fd2ce1540bf4"},{"url":"/assets/js/workbox-v5.1.4/workbox-precaching.prod.js","revision":"aeb7cc7343e916040a2ae66df3036830"},{"url":"/assets/js/workbox-v5.1.4/workbox-range-requests.dev.js","revision":"7595027fcc4daee68d0904ebb2a0e5c5"},{"url":"/assets/js/workbox-v5.1.4/workbox-range-requests.prod.js","revision":"b1422938b62574c48f05376f01b156cc"},{"url":"/assets/js/workbox-v5.1.4/workbox-routing.dev.js","revision":"5d9ad2d6272d8fce31c61c2469cabda0"},{"url":"/assets/js/workbox-v5.1.4/workbox-routing.prod.js","revision":"70900ae0aa61ad31dbf1630337448848"},{"url":"/assets/js/workbox-v5.1.4/workbox-strategies.dev.js","revision":"0f3975f9eec0ade865343017e337b18b"},{"url":"/assets/js/workbox-v5.1.4/workbox-strategies.prod.js","revision":"4914ad2fb4559d87fdfd700a340cba60"},{"url":"/assets/js/workbox-v5.1.4/workbox-streams.dev.js","revision":"87e513967a9848e530cf76b36fd13c20"},{"url":"/assets/js/workbox-v5.1.4/workbox-streams.prod.js","revision":"5c6ca8a0c761060dfe4c2dbee90da236"},{"url":"/assets/js/workbox-v5.1.4/workbox-sw.js","revision":"a52c5a0c1a88f7b5108639007691a250"},{"url":"/assets/js/workbox-v5.1.4/workbox-window.dev.umd.js","revision":"be081e3628a7702d385219940ece1241"},{"url":"/assets/js/workbox-v5.1.4/workbox-window.prod.umd.js","revision":"81ec2283bbb9a8ac99cfac0b707d154d"},{"url":"/assets/js/main.js","revision":"3b06820797983f25dfce195521b054da"},{"url":"/assets/js/pvreport.js","revision":"28f95238cf83d4fc7ca70a77898eb3f7"},{"url":"/assets/js/snackbar.js","revision":"22b2f87b5dfb61e700ccaedff4123302"},{"url":"/assets/js/sw-registration.js","revision":"746a3c68440928c331bb811cd51040f5"},{"url":"/assets/js/theme.js","revision":"6541e17a4911a5054305b3d8a71976eb"},{"url":"/index.json","revision":"7cd28e94ecd1c97809b311f6e3889ec6"},{"url":"/gyedek.js","revision":"ba17c0a0d358815baeda612c041fb14b"},{"url":"/lighthouserc.json","revision":"c098b22f3567d468beab551436f2c8f6"},{"url":"/manifest.json","revision":"221984d6e1aadbc4c76cf14e080efc6a"},{"url":"/sw-register.js","revision":"2b7c9e75adb2cee565ed904580c44f29"},{"url":"/assets/images/favicons/android-icon-144x144.png","revision":"465635525e9440eab2fbdab404428f20"},{"url":"/assets/images/favicons/android-icon-192x192.png","revision":"fbe1dc59e1bbce0566c49abd4fad3a3c"},{"url":"/assets/images/favicons/android-icon-36x36.png","revision":"388d43b69c352519a117de564d8d61dc"},{"url":"/assets/images/favicons/android-icon-48x48.png","revision":"3ec474b369907476bf963f760656865c"},{"url":"/assets/images/favicons/android-icon-72x72.png","revision":"2ce5453913f3a027775764e9db5b8168"},{"url":"/assets/images/favicons/android-icon-96x96.png","revision":"f4c75696b6e2acddcf99a05f28ac6a0a"},{"url":"/assets/images/favicons/apple-icon-114x114.png","revision":"26f1da242abc5a029bcfc761efc85a25"},{"url":"/assets/images/favicons/apple-icon-120x120.png","revision":"8e9214095e4e14eba0cd46e14f4d1fe3"},{"url":"/assets/images/favicons/apple-icon-144x144.png","revision":"0a80a4b57c0f8aad6607ccbaf60d6401"},{"url":"/assets/images/favicons/apple-icon-152x152.png","revision":"cca1ab935578ea011fd99ef4b8dd4d25"},{"url":"/assets/images/favicons/apple-icon-180x180.png","revision":"65182fceccc15c2a702793c14ca39dfa"},{"url":"/assets/images/favicons/apple-icon-57x57.png","revision":"7415b492f713a6f6b9d1283bad0cc619"},{"url":"/assets/images/favicons/apple-icon-60x60.png","revision":"dae13173b4c2ce620daf03433c2b8204"},{"url":"/assets/images/favicons/apple-icon-72x72.png","revision":"3b6227c3e1607813fd0b6edb086e488a"},{"url":"/assets/images/favicons/apple-icon-76x76.png","revision":"779bbca431905c6cd15dcaf059cdf1b3"},{"url":"/assets/images/favicons/apple-icon-precomposed.png","revision":"584143e8401632a9c5304f819cf120af"},{"url":"/assets/images/favicons/apple-icon.png","revision":"c6d2b556af016cdc84f808418302ecc2"},{"url":"/assets/images/favicons/favicon-16x16.png","revision":"a72c3a2b2b47f9a6f07cd33868c9ff5b"},{"url":"/assets/images/favicons/favicon-32x32.png","revision":"a525e61f390c903fd0c8019e7ac7a151"},{"url":"/assets/images/favicons/favicon-96x96.png","revision":"dbf8becc3544ddaa8ba760f57449046d"},{"url":"/assets/images/favicons/favicon.ico","revision":"21620055c8f33fd16aaf550f58d4c67c"},{"url":"/assets/images/favicons/ms-icon-144x144.png","revision":"b10a18a718c454933c3910603f1aee8c"},{"url":"/assets/images/favicons/ms-icon-150x150.png","revision":"de38801540f0f53a53ccbfafaf8b85b4"},{"url":"/assets/images/favicons/ms-icon-310x310.png","revision":"1aea48851cb18bbf52d335bbfa89a685"},{"url":"/assets/images/favicons/ms-icon-70x70.png","revision":"3ef06b38596d52e826b3c13192b4892a"},{"url":"/assets/images/maquinas/Pasted image 20230104172836.png","revision":"c759bbaad16a2ee17a78e08624c7a35a"},{"url":"/assets/images/maquinas/Pasted image 20230104173405.png","revision":"439354dffc43209ba43d09e1c6908a80"},{"url":"/assets/images/maquinas/Pasted image 20230118223619.png","revision":"c55594755c68a965f644ff31e2d45cb7"},{"url":"/assets/images/maquinas/Pasted image 20230118224154.png","revision":"1691dc513ececf8e4cd17d77de1304f9"},{"url":"/assets/images/maquinas/Pasted image 20230118224903.png","revision":"fa212638d1a08ed872b1ee97534cbf99"},{"url":"/assets/images/maquinas/Pasted image 20230118230129.png","revision":"830b664f322812edaf783d2bc65afb8f"},{"url":"/assets/images/maquinas/Pasted image 20230118231008.png","revision":"7336d90eb9a7c3b1f12576c4fcc3eed4"},{"url":"/assets/images/maquinas/Pasted image 20230118231233.png","revision":"3f4d86994c6abccaa3d48193d06fb839"},{"url":"/assets/images/maquinas/first.png","revision":"0c3ae5e718f66da04573523fa5df30c8"},{"url":"/assets/images/maquinas/gobuster.png","revision":"1691dc513ececf8e4cd17d77de1304f9"},{"url":"/assets/images/maquinas/login_source.png","revision":"c55594755c68a965f644ff31e2d45cb7"},{"url":"/assets/images/maquinas/nmap.png","revision":"439354dffc43209ba43d09e1c6908a80"},{"url":"/assets/images/maquinas/pwd.png","revision":"830b664f322812edaf783d2bc65afb8f"},{"url":"/assets/images/maquinas/robots.png","revision":"fa212638d1a08ed872b1ee97534cbf99"},{"url":"/assets/images/maquinas/second.png","revision":"a8a485bbf8717574ffcec5e7dc693633"},{"url":"/assets/images/maquinas/web_server.png","revision":"c759bbaad16a2ee17a78e08624c7a35a"},{"url":"/assets/images/svg/logo1.svg","revision":"794c0ffef6d1778be0d1f480ae8334bc"},{"url":"/assets/images/svg/algolia.svg","revision":"3e91903f5b57be8e070a6a3dfdf26b44"},{"url":"/assets/images/svg/arrow-up.svg","revision":"5e0aebee09b77e40a81cebfb328e5836"},{"url":"/assets/images/svg/binoculars.svg","revision":"215aa708694a9d95954c895977efb510"},{"url":"/assets/images/svg/blocked.svg","revision":"f6386bd5cbc001e214b841bd7b005ad9"},{"url":"/assets/images/svg/bubble.svg","revision":"5554e47d98e3745ea6ef7bfbe264ffce"},{"url":"/assets/images/svg/bug.svg","revision":"33d378ecdd596b303d242990a1fb266e"},{"url":"/assets/images/svg/calculator.svg","revision":"3d73a626fac58ec52ca7bcd7585da8a4"},{"url":"/assets/images/svg/calendar.svg","revision":"a474ff42350ecca1f7996e71ea07d0aa"},{"url":"/assets/images/svg/checkmark2.svg","revision":"8b6c70ec8bc0dc2cccd48413a88d1446"},{"url":"/assets/images/svg/circle-down.svg","revision":"5bba7d8f82c527bfc8bbe3f4e16c5e53"},{"url":"/assets/images/svg/circle-left.svg","revision":"c463a3ce0145a678d3c3a9fcbc5c9fb2"},{"url":"/assets/images/svg/circle-right.svg","revision":"eefb57814f26561dacbb07389ed246f2"},{"url":"/assets/images/svg/clock.svg","revision":"b1d8553506822d4cff0a0100ee5629df"},{"url":"/assets/images/svg/copy.svg","revision":"80d3557e23d3fb3613cea9c1da75bfbd"},{"url":"/assets/images/svg/cross.svg","revision":"91159e72a2d395337fce134bc6afd7d1"},{"url":"/assets/images/svg/diamonds.svg","revision":"addc9440f6c361397c50f7cb6e5bb3d6"},{"url":"/assets/images/svg/digg.svg","revision":"a10d70cb03370c3f2cef4de20dacf194"},{"url":"/assets/images/svg/droplet.svg","revision":"9b090d2e11c1ec8eb2e93d158b3dee20"},{"url":"/assets/images/svg/eye.svg","revision":"6955fcfe5cb557e6fc4e6f7c9bb566ca"},{"url":"/assets/images/svg/facebook.svg","revision":"49bd157ad95c517b7ca674466332c285"},{"url":"/assets/images/svg/folder.svg","revision":"3e82257b24d7775e1a9813b37fd17d53"},{"url":"/assets/images/svg/info.svg","revision":"fb1af8a62343b4959403e71bc09c8b98"},{"url":"/assets/images/svg/linkedin2.svg","revision":"b6d9ba70a9327dd1a5894c7141563f5e"},{"url":"/assets/images/svg/logo.svg","revision":"794c0ffef6d1778be0d1f480ae8334bc"},{"url":"/assets/images/svg/notification.svg","revision":"bd47452e80e062de639514aaaf86056c"},{"url":"/assets/images/svg/pencil.svg","revision":"8809d3cf95ee20c74e5ebbdc6ee556da"},{"url":"/assets/images/svg/pinterest2.svg","revision":"0b397031e393c3428b598e699488cd66"},{"url":"/assets/images/svg/price-tags.svg","revision":"7e764e38db1e6d9419acd9bda2d688ff"},{"url":"/assets/images/svg/question.svg","revision":"7905d19ed62e19b886748964ec1cd66f"},{"url":"/assets/images/svg/quotes-left.svg","revision":"62fe3e947775c31a3b7d698870961cfa"},{"url":"/assets/images/svg/reddit.svg","revision":"c8638aac0fd5870f827c9f48f6018d2d"},{"url":"/assets/images/svg/rss.svg","revision":"b8d01174ee15f94874e5fb807cb5d2be"},{"url":"/assets/images/svg/search.svg","revision":"bf3113cdf3a30207d9a5399b7aea0f0b"},{"url":"/assets/images/svg/spinner2.svg","revision":"6ed9eefa534468a669ed3e87eee5ddb1"},{"url":"/assets/images/svg/stumbleupon.svg","revision":"eea2307557c27f432bc47a126d5f1af2"},{"url":"/assets/images/svg/telegram.svg","revision":"03ed58b4c1eb85439fdd11fac04a2740"},{"url":"/assets/images/svg/tumblr.svg","revision":"973d364c50270ad64f40059076576e3d"},{"url":"/assets/images/svg/tv.svg","revision":"50b917ba148865cc4940d15249437525"},{"url":"/assets/images/svg/twitter.svg","revision":"6134b234fbe588b9dc309b2bd14caa35"},{"url":"/assets/images/svg/vk.svg","revision":"a60611cf3f62aab30325ee2fddc0f4b2"},{"url":"/assets/images/svg/warning.svg","revision":"d4916a3bc916b3455029a8c26594a8cf"},{"url":"/assets/images/svg/whatsapp.svg","revision":"54300a2216a2411609fc13b184e0189d"},{"url":"/assets/images/touch/icon-192x192.png","revision":"191074a06307bf1258637c47916531f6"},{"url":"/assets/images/touch/icon-256x256.png","revision":"8bb59ea2bd3afc6243782744e6292663"},{"url":"/assets/images/touch/icon-384x384.png","revision":"ba8aa950e20b93f1452348f44d5e8fd3"},{"url":"/assets/images/touch/icon-512x512.png","revision":"d5e0a290347ef1d106bb0ff28c725313"},{"url":"/assets/images/posts/Pasted image 20230405204828.png","revision":"926dd252bca3608d4d7a3c30d1da7a0e"},{"url":"/assets/images/posts/Pasted image 20230405205626.png","revision":"baff61632979b0b000a669b698d2d107"},{"url":"/assets/images/posts/Pasted image 20230405212335.png","revision":"bbf94c2df0c441951715d0b44d82ceb6"},{"url":"/assets/images/posts/Pasted image 20230405212551.png","revision":"d3b805f00ebd9caac9a9cb9757838023"},{"url":"/assets/images/posts/1x1 Hello Friend .excalidraw.png","revision":"6ee055504a1487de260eb1a5dea8c597"},{"url":"/assets/images/posts/Pasted image 20230607081236.png","revision":"a2eed76b71eeb3332c92cc91a84f6263"},{"url":"/assets/images/posts/Pasted image 20230607081706.png","revision":"4bcb79903744e08ed4ecdbc658285455"},{"url":"/assets/images/posts/Pasted image 20230607082557.png","revision":"557113ef07641fc5122f1d7d1014fb28"},{"url":"/assets/images/posts/Pasted image 20230607082845.png","revision":"8ca0393a709a28ff2740a5e2cdf76c96"},{"url":"/assets/images/posts/Pasted image 20230607082941.png","revision":"2e140685499420853e8297a57f15f490"},{"url":"/assets/images/posts/Pasted image 20230607083108.png","revision":"d815e86bb862ca70d5eff893f166b312"},{"url":"/assets/images/posts/Pasted image 20230607083245.png","revision":"4d963a5989de347610d7f34fb6dfecdd"},{"url":"/assets/images/posts/Prize Draw _0.excalidraw.png","revision":"081c82f0e73dfd49d3085b5b38ed4421"},{"url":"/assets/images/posts/elpscrk.png","revision":"baff61632979b0b000a669b698d2d107"},{"url":"/assets/images/posts/fsociety.bat.png","revision":"d3b805f00ebd9caac9a9cb9757838023"},{"url":"/assets/images/posts/mr_robot.png","revision":"49f1a381777f01ecdc2727008af71d3d"},{"url":"/assets/images/posts/prize_draw_algorithm.png","revision":"081c82f0e73dfd49d3085b5b38ed4421"},{"url":"/assets/images/posts/rebooting_server.png","revision":"bbf94c2df0c441951715d0b44d82ceb6"},{"url":"/assets/images/posts/red01.png","revision":"a2eed76b71eeb3332c92cc91a84f6263"},{"url":"/assets/images/posts/red02.png","revision":"4bcb79903744e08ed4ecdbc658285455"},{"url":"/assets/images/posts/red03.png","revision":"557113ef07641fc5122f1d7d1014fb28"},{"url":"/assets/images/posts/red04.png","revision":"8ca0393a709a28ff2740a5e2cdf76c96"},{"url":"/assets/images/posts/red05.png","revision":"2e140685499420853e8297a57f15f490"},{"url":"/assets/images/posts/red06.png","revision":"d815e86bb862ca70d5eff893f166b312"},{"url":"/assets/images/posts/red07.png","revision":"4d963a5989de347610d7f34fb6dfecdd"},{"url":"/assets/images/posts/red_tor.png","revision":"6ee055504a1487de260eb1a5dea8c597"},{"url":"/assets/images/posts/ron's_coffee.png","revision":"926dd252bca3608d4d7a3c30d1da7a0e"},{"url":"/favicon.ico","revision":"21620055c8f33fd16aaf550f58d4c67c"},{"url":"/1x1-hello-friend/index.html","revision":"36e4b0f6dc9fd9b158d874ff1d18dda0"},{"url":"/404.html","revision":"56e5c9352f56e3945101d72b6628d18a"},{"url":"/:title/index.html","revision":"2b997a1d7ab2a6c7f662b9092a126903"},{"url":"/about/index.html","revision":"4eed8ef5380bacceef68f5b37dfcc16f"},{"url":"/categories/cheatsheet/index.html","revision":"5168da7727e577a996587ecbef105e2e"},{"url":"/categories/index.html","revision":"45e9bc903d14115987a54e6189cba243"},{"url":"/categories/mr-robot/index.html","revision":"9f40956003f1c4eb744a1947077ada39"},{"url":"/categories/redes/index.html","revision":"b175d1ac7185cad743b8f645760ba208"},{"url":"/categories/maquina/index.html","revision":"aadb6b0505a1d46ee9e980cb7c53a799"},{"url":"/categories/programacion/index.html","revision":"ab6726ad4a058231ed99f3cdf53d322b"},{"url":"/categories/linux/index.html","revision":"8dfe7e48d561053394d4f733d24ef90d"},{"url":"/index.html","revision":"dbeb4a1de1157b7a4368b007d2b37838"},{"url":"/linux-cheatsheet/index.html","revision":"e4c796c69b195d86e0b8495073fac568"},{"url":"/offline.html","revision":"63f4603b9b0585c0d62aafb1d35bfc78"},{"url":"/pickle-rick/index.html","revision":"5fcfce3e3feb642ea80f309704087009"},{"url":"/sql-cheatsheet/index.html","revision":"839c4a343f77c382a904e2755da7709c"},{"url":"/tags/bd/index.html","revision":"1ab5e7dc848023780530d86b50caa221"},{"url":"/tags/cheatsheet/index.html","revision":"13bddc7ab9322902f0de174d1b2b9037"},{"url":"/tags/comandos/index.html","revision":"c898cbc74a931c5b7aa97879a5654b0b"},{"url":"/tags/easy-machine/index.html","revision":"c2a16c5e2393051bcd62c5b1f392d765"},{"url":"/tags/index.html","revision":"a4a6d1c72f76ae6aedd0ebce62c0fd03"},{"url":"/tags/linux/index.html","revision":"790da0e7c333a9fae3360369af5f3dea"},{"url":"/tags/maquinas/index.html","revision":"a854da1d814e4f55524a85e023bd6772"},{"url":"/tags/pentesting/index.html","revision":"242ed2926e2fa26b153fc273ba9d9a1b"},{"url":"/tags/series/index.html","revision":"823eb610a9209cb5a137ad85dfd84ba0"},{"url":"/tags/sql/index.html","revision":"657009d93a8e5d382ef8d27ddde3c19f"},{"url":"/tags/tryhackme/index.html","revision":"324fbf23a4fb114f9d3d8fdd6e40f310"},{"url":"/tags/noob/index.html","revision":"e0eda06e67d7b85f7d3db2dfd874dafb"},{"url":"/tags/packettracer/index.html","revision":"f5c7119d767771eb39be92ea1f2519dc"},{"url":"/tags/bash/index.html","revision":"d707bec8a81935aa687757acdcf94e0c"},{"url":"/tags/codewars/index.html","revision":"077edc1e149e0e4676c3a3e2e83bd711"},{"url":"/tags/6kyu/index.html","revision":"584773e715a619d52e84569c6c310189"},{"url":"/mr-robot/index.html","revision":"9238e96fc455e491148a4b91b989e215"},{"url":"/la-red-mas-simple/index.html","revision":"1173b3089d5d270078dde310e1613630"},{"url":"/prize-draw/index.html","revision":"4481d2f50259c3f5b8810dc18c6beab8"},{"url":"/prize-draw/","revision":"d23e7ddbd16d0e041eb68ce58666880f"},{"url":"/la-red-mas-simple/","revision":"4c3d21fd76fd5a551a861addacb06560"},{"url":"/mr-robot/","revision":"0d687106eec443152bc03360645a5264"},{"url":"/pickle-rick/","revision":"08a33691c890b4d739d88435fae5a935"},{"url":"/sql-cheatsheet/","revision":"4b824bfea5be3a8fab58c93f7670a41a"},{"url":"/linux-cheatsheet/","revision":"776a6ff4179d2b104197cb8e100f8a16"},{"url":"/1x1-hello-friend/","revision":"2d59cbe98633e440cb67c91f919338c0"}];

/* ===========================================================
 * sw.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * service worker scripting
 * ========================================================== */

// CACHE_NAMESPACE
// CacheStorage is shared between all sites under same domain.
// A namespace can prevent potential name conflicts and mis-deletion.
const CACHE_NAMESPACE = "main-";

const CACHE = CACHE_NAMESPACE + "precache-then-runtime";
const PRECACHE_LIST = [
  "./",
  "./offline.html",
  "./assets/js/theme.js",
  "./assets/js/snackbar.js",
  "./assets/css/style.min.css",
  "//cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css",
  "//cdn.jsdelivr.net/npm/smooth-scroll@16.1.3/dist/smooth-scroll.min.js",
  "//cdn.jsdelivr.net/npm/autocomplete.js@0.38.0/dist/autocomplete.min.js",
  "//cdn.jsdelivr.net/npm/lunr@2.3.9/lunr.min.js",
  "//cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js",
  "//cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js",
  "//cdn.jsdelivr.net/npm/sharer.js@0.4.2/sharer.min.js",
];
const HOSTNAME_WHITELIST = [
  self.location.hostname,
  "yuceltoluyag.github.io",
  "cdn.jsdelivr.net",
  "www.googletagmanager.com",
  "www.google-analytics.com",
  "fonts.gstatic.com",
  "fonts.googleapis.com",
  "polyfill.io",
];
const DEPRECATED_CACHES = [
  "precache-v1",
  "runtime",
  "main-precache-v1",
  "main-runtime",
];

// The Util Function to hack URLs of intercepted requests
const getCacheBustingUrl = (req) => {
  var now = Date.now();
  url = new URL(req.url);

  // 1. fixed http URL
  // Just keep syncing with location.protocol
  // fetch(httpURL) belongs to active mixed content.
  // And fetch(httpRequest) is not supported yet.
  url.protocol = self.location.protocol;

  // 2. add query for caching-busting.
  // Github Pages served with Cache-Control: max-age=600
  // max-age on mutable content is error-prone, with SW life of bugs can even extend.
  // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
  // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
  url.search += (url.search ? "&" : "?") + "cache-bust=" + now;
  return url.href;
};

// The Util Function to detect and polyfill req.mode="navigate"
// request.mode of 'navigate' is unfortunately not supported in Chrome
// versions older than 49, so we need to include a less precise fallback,
// which checks for a GET request with an Accept: text/html header.
const isNavigationReq = (req) =>
  req.mode === "navigate" ||
  (req.method === "GET" && req.headers.get("accept").includes("text/html"));

// The Util Function to detect if a req is end with extension
// Accordin to Fetch API spec <https://fetch.spec.whatwg.org/#concept-request-destination>
// Any HTML's navigation has consistently mode="navigate" type="" and destination="document"
// including requesting an img (or any static resources) from URL Bar directly.
// So It ends up with that regExp is still the king of URL routing ;)
// P.S. An url.pathname has no '.' can not indicate it ends with extension (e.g. /api/version/1.2/)
const endWithExtension = (req) =>
  Boolean(new URL(req.url).pathname.match(/\.\w+$/));

// Redirect in SW manually fixed github pages arbitray 404s on things?blah
// what we want:
//    repo?blah -> !(gh 404) -> sw 302 -> repo/?blah
//    .ext?blah -> !(sw 302 -> .ext/?blah -> gh 404) -> .ext?blah
// If It's a navigation req and it's url.pathname isn't end with '/' or '.ext'
// it should be a dir/repo request and need to be fixed (a.k.a be redirected)
// Tracking https://twitter.com/Huxpro/status/798816417097224193
const shouldRedirect = (req) =>
  isNavigationReq(req) &&
  new URL(req.url).pathname.substr(-1) !== "/" &&
  !endWithExtension(req);

// The Util Function to get redirect URL
// `${url}/` would mis-add "/" in the end of query, so we use URL object.
// P.P.S. Always trust url.pathname instead of the whole url string.
const getRedirectUrl = (req) => {
  url = new URL(req.url);
  url.pathname += "/";
  return url.href;
};

/**
 *  @Lifecycle Install
 *  Precache anything static to this version of your app.
 *  e.g. App Shell, 404, JS/CSS dependencies...
 *
 *  waitUntil() : installing ====> installed
 *  skipWaiting() : waiting(installed) ====> activating
 */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache
        .addAll(PRECACHE_LIST)
        .then(self.skipWaiting())
        .catch((err) => console.log(err));
    })
  );
});

/**
 *  @Lifecycle Activate
 *  New one activated when old isnt being used.
 *
 *  waitUntil(): activating ====> activated
 */
self.addEventListener("activate", (event) => {
  // delete old deprecated caches.
  caches
    .keys()
    .then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => DEPRECATED_CACHES.includes(cacheName))
          .map((cacheName) => caches.delete(cacheName))
      )
    );
  console.log("SW Etkinleştirildi.");
  event.waitUntil(self.clients.claim());
});

var fetchHelper = {
  fetchThenCache: function (request) {
    // Requests with mode "no-cors" can result in Opaque Response,
    // Requests to Allow-Control-Cross-Origin: * can't include credentials.
    const init = { mode: "cors", credentials: "omit" };

    const fetched = fetch(request, init);
    const fetchedCopy = fetched.then((resp) => resp.clone());

    // NOTE: Opaque Responses have no hedaders so [[ok]] make no sense to them
    //       so Opaque Resp will not be cached in this case.
    Promise.all([fetchedCopy, caches.open(CACHE)])
      .then(([response, cache]) => response.ok && cache.put(request, response))
      .catch((_) => {
        /* eat any errors */
      });

    return fetched;
  },

  cacheFirst: function (url) {
    return caches
      .match(url)
      .then((resp) => resp || this.fetchThenCache(url))
      .catch((_) => {
        /* eat any errors */
      });
  },
};

/**
 *  @Functional Fetch
 *  All network requests are being intercepted here.
 *
 *  void respondWith(Promise<Response> r);
 */
self.addEventListener("fetch", (event) => {
  // logs for debugging
  //console.log(`fetch ${event.request.url}`)
  //console.log(` - type: ${event.request.type}; destination: ${event.request.destination}`)
  //console.log(` - mode: ${event.request.mode}, accept: ${event.request.headers.get('accept')}`)

  // Skip some of cross-origin requests, like those for Google Analytics.
  if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
    // Redirect in SW manually fixed github pages 404s on repo?blah
    if (shouldRedirect(event.request)) {
      event.respondWith(Response.redirect(getRedirectUrl(event.request)));
      return;
    }

    // Cache-only Startgies for ys.static resources
    if (event.request.url.indexOf("ys.static") > -1) {
      event.respondWith(fetchHelper.cacheFirst(event.request.url));
      return;
    }

    // Stale-while-revalidate for possiblily dynamic content
    // similar to HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale
    // Upgrade from Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
    const cached = caches.match(event.request);
    const fetched = fetch(getCacheBustingUrl(event.request), {
      cache: "no-store",
    });
    const fetchedCopy = fetched.then((resp) => resp.clone());

    // Call respondWith() with whatever we get first.
    // Promise.race() resolves with first one settled (even rejected)
    // If the fetch fails (e.g disconnected), wait for the cache.
    // If there’s nothing in cache, wait for the fetch.
    // If neither yields a response, return offline pages.
    event.respondWith(
      Promise.race([fetched.catch((_) => cached), cached])
        .then((resp) => resp || fetched)
        .catch((_) => caches.match("offline.html"))
    );

    // Update the cache with the version we fetched (only for ok status)
    event.waitUntil(
      Promise.all([fetchedCopy, caches.open(CACHE)])
        .then(
          ([response, cache]) =>
            response.ok && cache.put(event.request, response)
        )
        .catch((_) => {
          /* eat any errors */
        })
    );

    // If one request is a HTML naviagtion, checking update!
    if (isNavigationReq(event.request)) {
      // you need "preserve logs" to see this log
      // cuz it happened before navigating
      console.log(`fetch ${event.request.url}`);
      event.waitUntil(revalidateContent(cached, fetchedCopy));
    }
  }
});

/**
 * Broadcasting all clients with MessageChannel API
 */
function sendMessageToAllClients(msg) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      console.log(client);
      client.postMessage(msg);
    });
  });
}

/**
 * Broadcasting all clients async
 */
function sendMessageToClientsAsync(msg) {
  // waiting for new client alive with "async" setTimeout hacking
  // https://twitter.com/Huxpro/status/799265578443751424
  // https://jakearchibald.com/2016/service-worker-meeting-notes/#fetch-event-clients
  setTimeout(() => {
    sendMessageToAllClients(msg);
  }, 1000);
}

/**
 * if content modified, we can notify clients to refresh
 * TODO: Gh-pages rebuild everything in each release. should find a workaround (e.g. ETag with cloudflare)
 *
 * @param  {Promise<response>} cachedResp  [description]
 * @param  {Promise<response>} fetchedResp [description]
 * @return {Promise}
 */
function revalidateContent(cachedResp, fetchedResp) {
  // revalidate when both promise resolved
  return Promise.all([cachedResp, fetchedResp])
    .then(([cached, fetched]) => {
      const cachedVer = cached.headers.get("last-modified");
      const fetchedVer = fetched.headers.get("last-modified");
      console.log(`"${cachedVer}" vs. "${fetchedVer}"`);
      if (cachedVer !== fetchedVer) {
        sendMessageToClientsAsync({
          command: "UPDATE_FOUND",
          url: fetched.url,
        });
      }
    })
    .catch((err) => console.log(err));
}

