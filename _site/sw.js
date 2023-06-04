importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/assets/css/style.css","revision":"e6252d77748456531b436d9c05fdc588"},{"url":"/assets/js/workbox-v5.1.4/workbox-background-sync.dev.js","revision":"e6c466ef158b91df55fa3dd1f1fc79ee"},{"url":"/assets/js/workbox-v5.1.4/workbox-background-sync.prod.js","revision":"1e8c38916345d2843226a60ca686cc54"},{"url":"/assets/js/workbox-v5.1.4/workbox-broadcast-update.dev.js","revision":"9d6333ec473f7fc15bb00b6bd1a30a02"},{"url":"/assets/js/workbox-v5.1.4/workbox-broadcast-update.prod.js","revision":"f0a1d0037b9e038b362d7cf48460b8e9"},{"url":"/assets/js/workbox-v5.1.4/workbox-cacheable-response.dev.js","revision":"d688a5d580b0f9eee7e68c1746a4a750"},{"url":"/assets/js/workbox-v5.1.4/workbox-cacheable-response.prod.js","revision":"20228ec25a4938eb1934168d28aa7ab7"},{"url":"/assets/js/workbox-v5.1.4/workbox-core.dev.js","revision":"62c8ec9a9a13558795d8e321efb8a6b6"},{"url":"/assets/js/workbox-v5.1.4/workbox-core.prod.js","revision":"a758827cb2c60de74e793f6758a60561"},{"url":"/assets/js/workbox-v5.1.4/workbox-expiration.dev.js","revision":"95cf17376e32e997e649617f45040c80"},{"url":"/assets/js/workbox-v5.1.4/workbox-expiration.prod.js","revision":"1b99d6f47cb5baa3e82d508de52f3b01"},{"url":"/assets/js/workbox-v5.1.4/workbox-navigation-preload.dev.js","revision":"19b25c9559a0bf170cce20bccb8d6a33"},{"url":"/assets/js/workbox-v5.1.4/workbox-navigation-preload.prod.js","revision":"3b74c03775c55aac455b4293b03c9cd8"},{"url":"/assets/js/workbox-v5.1.4/workbox-offline-ga.dev.js","revision":"5b06151630ebbc0dc35f18dbb7e228e3"},{"url":"/assets/js/workbox-v5.1.4/workbox-offline-ga.prod.js","revision":"7bd7dc1af5a55c20511d84b18c81ec27"},{"url":"/assets/js/workbox-v5.1.4/workbox-precaching.dev.js","revision":"2e95fb60b828100bd829fd2ce1540bf4"},{"url":"/assets/js/workbox-v5.1.4/workbox-precaching.prod.js","revision":"aeb7cc7343e916040a2ae66df3036830"},{"url":"/assets/js/workbox-v5.1.4/workbox-range-requests.dev.js","revision":"7595027fcc4daee68d0904ebb2a0e5c5"},{"url":"/assets/js/workbox-v5.1.4/workbox-range-requests.prod.js","revision":"b1422938b62574c48f05376f01b156cc"},{"url":"/assets/js/workbox-v5.1.4/workbox-routing.dev.js","revision":"5d9ad2d6272d8fce31c61c2469cabda0"},{"url":"/assets/js/workbox-v5.1.4/workbox-routing.prod.js","revision":"70900ae0aa61ad31dbf1630337448848"},{"url":"/assets/js/workbox-v5.1.4/workbox-strategies.dev.js","revision":"0f3975f9eec0ade865343017e337b18b"},{"url":"/assets/js/workbox-v5.1.4/workbox-strategies.prod.js","revision":"4914ad2fb4559d87fdfd700a340cba60"},{"url":"/assets/js/workbox-v5.1.4/workbox-streams.dev.js","revision":"87e513967a9848e530cf76b36fd13c20"},{"url":"/assets/js/workbox-v5.1.4/workbox-streams.prod.js","revision":"5c6ca8a0c761060dfe4c2dbee90da236"},{"url":"/assets/js/workbox-v5.1.4/workbox-sw.js","revision":"a52c5a0c1a88f7b5108639007691a250"},{"url":"/assets/js/workbox-v5.1.4/workbox-window.dev.umd.js","revision":"be081e3628a7702d385219940ece1241"},{"url":"/assets/js/workbox-v5.1.4/workbox-window.prod.umd.js","revision":"81ec2283bbb9a8ac99cfac0b707d154d"},{"url":"/assets/js/main.js","revision":"3b06820797983f25dfce195521b054da"},{"url":"/assets/js/pvreport.js","revision":"28f95238cf83d4fc7ca70a77898eb3f7"},{"url":"/assets/js/snackbar.js","revision":"22b2f87b5dfb61e700ccaedff4123302"},{"url":"/assets/js/sw-registration.js","revision":"746a3c68440928c331bb811cd51040f5"},{"url":"/assets/js/theme.js","revision":"1746c40ceb08663d2160e98d8424c9ef"},{"url":"/index.json","revision":"3fb3d270f9eef40998680f47ca40edec"},{"url":"/gyedek.js","revision":"ba17c0a0d358815baeda612c041fb14b"},{"url":"/lighthouserc.json","revision":"c098b22f3567d468beab551436f2c8f6"},{"url":"/manifest.json","revision":"221984d6e1aadbc4c76cf14e080efc6a"},{"url":"/sw-register.js","revision":"752e4b7dcaee39684c48f54ab86750be"},{"url":"/assets/images/Pasted image 20230405204828.png","revision":"926dd252bca3608d4d7a3c30d1da7a0e"},{"url":"/assets/images/favicons/android-icon-144x144.png","revision":"465635525e9440eab2fbdab404428f20"},{"url":"/assets/images/favicons/android-icon-192x192.png","revision":"fbe1dc59e1bbce0566c49abd4fad3a3c"},{"url":"/assets/images/favicons/android-icon-36x36.png","revision":"388d43b69c352519a117de564d8d61dc"},{"url":"/assets/images/favicons/android-icon-48x48.png","revision":"3ec474b369907476bf963f760656865c"},{"url":"/assets/images/favicons/android-icon-72x72.png","revision":"2ce5453913f3a027775764e9db5b8168"},{"url":"/assets/images/favicons/android-icon-96x96.png","revision":"f4c75696b6e2acddcf99a05f28ac6a0a"},{"url":"/assets/images/favicons/apple-icon-114x114.png","revision":"26f1da242abc5a029bcfc761efc85a25"},{"url":"/assets/images/favicons/apple-icon-120x120.png","revision":"8e9214095e4e14eba0cd46e14f4d1fe3"},{"url":"/assets/images/favicons/apple-icon-144x144.png","revision":"0a80a4b57c0f8aad6607ccbaf60d6401"},{"url":"/assets/images/favicons/apple-icon-152x152.png","revision":"cca1ab935578ea011fd99ef4b8dd4d25"},{"url":"/assets/images/favicons/apple-icon-180x180.png","revision":"65182fceccc15c2a702793c14ca39dfa"},{"url":"/assets/images/favicons/apple-icon-57x57.png","revision":"7415b492f713a6f6b9d1283bad0cc619"},{"url":"/assets/images/favicons/apple-icon-60x60.png","revision":"dae13173b4c2ce620daf03433c2b8204"},{"url":"/assets/images/favicons/apple-icon-72x72.png","revision":"3b6227c3e1607813fd0b6edb086e488a"},{"url":"/assets/images/favicons/apple-icon-76x76.png","revision":"779bbca431905c6cd15dcaf059cdf1b3"},{"url":"/assets/images/favicons/apple-icon-precomposed.png","revision":"584143e8401632a9c5304f819cf120af"},{"url":"/assets/images/favicons/apple-icon.png","revision":"c6d2b556af016cdc84f808418302ecc2"},{"url":"/assets/images/favicons/favicon-16x16.png","revision":"a72c3a2b2b47f9a6f07cd33868c9ff5b"},{"url":"/assets/images/favicons/favicon-32x32.png","revision":"a525e61f390c903fd0c8019e7ac7a151"},{"url":"/assets/images/favicons/favicon-96x96.png","revision":"dbf8becc3544ddaa8ba760f57449046d"},{"url":"/assets/images/favicons/favicon.ico","revision":"21620055c8f33fd16aaf550f58d4c67c"},{"url":"/assets/images/favicons/ms-icon-144x144.png","revision":"b10a18a718c454933c3910603f1aee8c"},{"url":"/assets/images/favicons/ms-icon-150x150.png","revision":"de38801540f0f53a53ccbfafaf8b85b4"},{"url":"/assets/images/favicons/ms-icon-310x310.png","revision":"1aea48851cb18bbf52d335bbfa89a685"},{"url":"/assets/images/favicons/ms-icon-70x70.png","revision":"3ef06b38596d52e826b3c13192b4892a"},{"url":"/assets/images/l.png","revision":"99408c2ed000e2027535f5bdbcb2c21d"},{"url":"/assets/images/logo.png.png","revision":"c46e886f0fd89f3c5e8ec9feb37abe8c"},{"url":"/assets/images/maquinas/Pasted image 20230104172836.png","revision":"c759bbaad16a2ee17a78e08624c7a35a"},{"url":"/assets/images/maquinas/Pasted image 20230104173405.png","revision":"439354dffc43209ba43d09e1c6908a80"},{"url":"/assets/images/maquinas/Pasted image 20230118223619.png","revision":"c55594755c68a965f644ff31e2d45cb7"},{"url":"/assets/images/maquinas/Pasted image 20230118224154.png","revision":"1691dc513ececf8e4cd17d77de1304f9"},{"url":"/assets/images/maquinas/Pasted image 20230118224903.png","revision":"fa212638d1a08ed872b1ee97534cbf99"},{"url":"/assets/images/maquinas/Pasted image 20230118230129.png","revision":"830b664f322812edaf783d2bc65afb8f"},{"url":"/assets/images/maquinas/Pasted image 20230118231008.png","revision":"7336d90eb9a7c3b1f12576c4fcc3eed4"},{"url":"/assets/images/maquinas/Pasted image 20230118231233.png","revision":"3f4d86994c6abccaa3d48193d06fb839"},{"url":"/assets/images/maquinas/first.png","revision":"0c3ae5e718f66da04573523fa5df30c8"},{"url":"/assets/images/maquinas/gobuster.png","revision":"1691dc513ececf8e4cd17d77de1304f9"},{"url":"/assets/images/maquinas/login_source.png","revision":"c55594755c68a965f644ff31e2d45cb7"},{"url":"/assets/images/maquinas/nmap.png","revision":"439354dffc43209ba43d09e1c6908a80"},{"url":"/assets/images/maquinas/pwd.png","revision":"830b664f322812edaf783d2bc65afb8f"},{"url":"/assets/images/maquinas/robots.png","revision":"fa212638d1a08ed872b1ee97534cbf99"},{"url":"/assets/images/maquinas/second.png","revision":"a8a485bbf8717574ffcec5e7dc693633"},{"url":"/assets/images/maquinas/web_server.png","revision":"c759bbaad16a2ee17a78e08624c7a35a"},{"url":"/assets/images/svg/algolia.svg","revision":"3e91903f5b57be8e070a6a3dfdf26b44"},{"url":"/assets/images/svg/arrow-up.svg","revision":"5e0aebee09b77e40a81cebfb328e5836"},{"url":"/assets/images/svg/binoculars.svg","revision":"215aa708694a9d95954c895977efb510"},{"url":"/assets/images/svg/blocked.svg","revision":"f6386bd5cbc001e214b841bd7b005ad9"},{"url":"/assets/images/svg/bubble.svg","revision":"5554e47d98e3745ea6ef7bfbe264ffce"},{"url":"/assets/images/svg/bug.svg","revision":"33d378ecdd596b303d242990a1fb266e"},{"url":"/assets/images/svg/calculator.svg","revision":"3d73a626fac58ec52ca7bcd7585da8a4"},{"url":"/assets/images/svg/calendar.svg","revision":"a474ff42350ecca1f7996e71ea07d0aa"},{"url":"/assets/images/svg/checkmark2.svg","revision":"8b6c70ec8bc0dc2cccd48413a88d1446"},{"url":"/assets/images/svg/circle-down.svg","revision":"5bba7d8f82c527bfc8bbe3f4e16c5e53"},{"url":"/assets/images/svg/circle-left.svg","revision":"c463a3ce0145a678d3c3a9fcbc5c9fb2"},{"url":"/assets/images/svg/circle-right.svg","revision":"eefb57814f26561dacbb07389ed246f2"},{"url":"/assets/images/svg/clock.svg","revision":"b1d8553506822d4cff0a0100ee5629df"},{"url":"/assets/images/svg/copy.svg","revision":"80d3557e23d3fb3613cea9c1da75bfbd"},{"url":"/assets/images/svg/cross.svg","revision":"91159e72a2d395337fce134bc6afd7d1"},{"url":"/assets/images/svg/diamonds.svg","revision":"addc9440f6c361397c50f7cb6e5bb3d6"},{"url":"/assets/images/svg/digg.svg","revision":"a10d70cb03370c3f2cef4de20dacf194"},{"url":"/assets/images/svg/droplet.svg","revision":"9b090d2e11c1ec8eb2e93d158b3dee20"},{"url":"/assets/images/svg/eye.svg","revision":"6955fcfe5cb557e6fc4e6f7c9bb566ca"},{"url":"/assets/images/svg/facebook.svg","revision":"49bd157ad95c517b7ca674466332c285"},{"url":"/assets/images/svg/folder.svg","revision":"3e82257b24d7775e1a9813b37fd17d53"},{"url":"/assets/images/svg/info.svg","revision":"fb1af8a62343b4959403e71bc09c8b98"},{"url":"/assets/images/svg/linkedin2.svg","revision":"b6d9ba70a9327dd1a5894c7141563f5e"},{"url":"/assets/images/svg/notification.svg","revision":"bd47452e80e062de639514aaaf86056c"},{"url":"/assets/images/svg/pencil.svg","revision":"8809d3cf95ee20c74e5ebbdc6ee556da"},{"url":"/assets/images/svg/pinterest2.svg","revision":"0b397031e393c3428b598e699488cd66"},{"url":"/assets/images/svg/price-tags.svg","revision":"7e764e38db1e6d9419acd9bda2d688ff"},{"url":"/assets/images/svg/question.svg","revision":"7905d19ed62e19b886748964ec1cd66f"},{"url":"/assets/images/svg/quotes-left.svg","revision":"62fe3e947775c31a3b7d698870961cfa"},{"url":"/assets/images/svg/reddit.svg","revision":"c8638aac0fd5870f827c9f48f6018d2d"},{"url":"/assets/images/svg/rss.svg","revision":"b8d01174ee15f94874e5fb807cb5d2be"},{"url":"/assets/images/svg/search.svg","revision":"bf3113cdf3a30207d9a5399b7aea0f0b"},{"url":"/assets/images/svg/spinner2.svg","revision":"6ed9eefa534468a669ed3e87eee5ddb1"},{"url":"/assets/images/svg/stumbleupon.svg","revision":"eea2307557c27f432bc47a126d5f1af2"},{"url":"/assets/images/svg/telegram.svg","revision":"03ed58b4c1eb85439fdd11fac04a2740"},{"url":"/assets/images/svg/tumblr.svg","revision":"973d364c50270ad64f40059076576e3d"},{"url":"/assets/images/svg/tv.svg","revision":"50b917ba148865cc4940d15249437525"},{"url":"/assets/images/svg/twitter.svg","revision":"6134b234fbe588b9dc309b2bd14caa35"},{"url":"/assets/images/svg/vk.svg","revision":"a60611cf3f62aab30325ee2fddc0f4b2"},{"url":"/assets/images/svg/warning.svg","revision":"d4916a3bc916b3455029a8c26594a8cf"},{"url":"/assets/images/svg/whatsapp.svg","revision":"54300a2216a2411609fc13b184e0189d"},{"url":"/assets/images/svg/logo1.svg","revision":"794c0ffef6d1778be0d1f480ae8334bc"},{"url":"/assets/images/svg/logo.svg","revision":"794c0ffef6d1778be0d1f480ae8334bc"},{"url":"/assets/images/touch/icon-192x192.png","revision":"191074a06307bf1258637c47916531f6"},{"url":"/assets/images/touch/icon-256x256.png","revision":"8bb59ea2bd3afc6243782744e6292663"},{"url":"/assets/images/touch/icon-384x384.png","revision":"ba8aa950e20b93f1452348f44d5e8fd3"},{"url":"/assets/images/touch/icon-512x512.png","revision":"d5e0a290347ef1d106bb0ff28c725313"},{"url":"/assets/images/AFileIcon.png","revision":"7814287700acc5fef6de8d6459cd15b4"},{"url":"/assets/images/AlignTab.png","revision":"7dbaf0a05fce399a9afdcbad91ac310a"},{"url":"/assets/images/BracketHighlighter.png","revision":"8c59bb85158b126dd6235d0751500a91"},{"url":"/assets/images/Extended- test.png","revision":"2ba039d7323ad39536d478754aeee08a"},{"url":"/assets/images/GitHubinator.png","revision":"394c2a657d60449b94aebe5ec99798d5"},{"url":"/assets/images/GutterColor.png","revision":"d55193a2ec8aaa1171fbdfe85dadb245"},{"url":"/assets/images/Screenshot_2018-11-17_17-22-17.png","revision":"decc4b5f7ea06fb9bbe856c46a68e949"},{"url":"/assets/images/Side​Bar​Enhancements.png","revision":"6122fb05baf38bf17033283e22060be1"},{"url":"/assets/images/SublimeLinter.png","revision":"e516fa4fe8f9f74298d7c51d86c3dfee"},{"url":"/assets/images/airdrop_flx_coin.png","revision":"2a5a3aee89beec6ad832073cddc42be7"},{"url":"/assets/images/amazon-openvpn-kurulumu-10.png","revision":"e47ee831730c725f994902f982c187e5"},{"url":"/assets/images/amazon-openvpn-kurulumu-11.png","revision":"d6502feedc2a799e184da373b86839b1"},{"url":"/assets/images/amazon-openvpn-kurulumu-12.png","revision":"d8c7894e9450f0c53bde42c986a00dfc"},{"url":"/assets/images/amazon-openvpn-kurulumu-13.png","revision":"c03cec98b59fe9e9ca2c56a23004a1db"},{"url":"/assets/images/amazon-openvpn-kurulumu-14.png","revision":"530dd3a5d000d37d8aa839d32629c3a4"},{"url":"/assets/images/amazon-openvpn-kurulumu-2.png","revision":"de9c3755f1d17b2eebd48d8df40b24ff"},{"url":"/assets/images/amazon-openvpn-kurulumu-3.png","revision":"df1f90e8abe5290484abc5fcc6edeb0a"},{"url":"/assets/images/amazon-openvpn-kurulumu-4.png","revision":"3acd460b2bd0aa1bc46577fcddde62f6"},{"url":"/assets/images/amazon-openvpn-kurulumu-5.png","revision":"7673838a6f6d64301c09a9f5137a9dc0"},{"url":"/assets/images/amazon-openvpn-kurulumu-6.png","revision":"79b1444ccd84bd7a35843cb4e34dc70f"},{"url":"/assets/images/amazon-openvpn-kurulumu-7.png","revision":"e56b6e5d8d31bd2b50050239642dcdc6"},{"url":"/assets/images/amazon-openvpn-kurulumu-8.png","revision":"1a8edb829a1110653e826225419aa447"},{"url":"/assets/images/amazon-openvpn-kurulumu-9.png","revision":"ad01d22440350de69e68032375fb6e57"},{"url":"/assets/images/amazon-openvpn-kurulumu.png","revision":"3e07cb308ded8638bec10e27f26ab241"},{"url":"/assets/images/baba.test.png","revision":"63101f2152c4dc726765c3c63d021c95"},{"url":"/assets/images/comodo_firewall.png","revision":"027f3960d0c377f661f685e9667abe5d"},{"url":"/assets/images/composer.jpeg","revision":"3aa86b048ce2a3333332263181075230"},{"url":"/assets/images/configure_lampp.jpeg","revision":"856cc2902cacddb26afa50fcf65a9a8a"},{"url":"/assets/images/duyuru.jpg","revision":"cf75d158c0453c356b715a2e8cdbe890"},{"url":"/assets/images/esigara-yararlimi-zararlimi.jpg","revision":"3c37a2b9f42fbda56791244269cf6d1b"},{"url":"/assets/images/exen.png","revision":"455cdd9a31e9a8efa07a3094f73316d8"},{"url":"/assets/images/facebook-5000-arkadas-ekleme-kodu-v2.jpg","revision":"787cd0ccbf5d288eed91884603bbb8d7"},{"url":"/assets/images/facebookgrupistatistik.png","revision":"07fb1110b13cfaa1df938d912cb685eb"},{"url":"/assets/images/facebookgrupkodu.png","revision":"e52f2ef75676e5b228803bac9d6d56cf"},{"url":"/assets/images/git_bash.png","revision":"880e677c7b23f3fd35b5ef667ce97839"},{"url":"/assets/images/hosts.png","revision":"f85d0373cb2a611d0efce1d84f9e6e8a"},{"url":"/assets/images/imap_openssl_terminal.png","revision":"e3c5f824a43639fa9baef963ae299f20"},{"url":"/assets/images/keyscrambler.png","revision":"7c8685b9326d5254d96b4cdac27c42b3"},{"url":"/assets/images/keyscrambler2.png","revision":"6995592fae81db21c0f987891c920e39"},{"url":"/assets/images/laravel-valet-kurulumu-linux.jpeg","revision":"b39f544ae15bc3683993c75ae42c56c3"},{"url":"/assets/images/laravel-valet-link-archlinux.png","revision":"7f02d4f78950eeeefa366f08e36e60b0"},{"url":"/assets/images/laravel_7x_ide_helper.png","revision":"dbb222d71421d7bff01b25644008232a"},{"url":"/assets/images/linux_browser.png","revision":"5fe091be7dd7a3719fc0c5236bfc6cf3"},{"url":"/assets/images/linux_browser_discord.png","revision":"eeb328f01020ea80b6df6f3459a85e84"},{"url":"/assets/images/linux_browser_final.png","revision":"62563a97930e224cfd29374b5dd8b208"},{"url":"/assets/images/linux_browser_kaynaklar.png","revision":"e2f0c05f0d46c9964a42e5b88d99bc2a"},{"url":"/assets/images/linux_browser_obs.png","revision":"dc697113ad38c91e86cbb45d452724e9"},{"url":"/assets/images/linux_browser_obs_custom.png","revision":"0a21a34749904ffcd7e07b5f0411b6fb"},{"url":"/assets/images/linux_browser_settings.png","revision":"49ec6cd10ff6cdb8fc723ce4b2700334"},{"url":"/assets/images/linux_samba.png","revision":"decc4b5f7ea06fb9bbe856c46a68e949"},{"url":"/assets/images/linux_windows10_uefi.jpeg","revision":"5cb3842a3afe064bce6e9e857b37dd8c"},{"url":"/assets/images/linux_windows10_uefi_boot.jpeg","revision":"d1feb317d3173768663e773dcb5c0cdb"},{"url":"/assets/images/linux_windows10_uefi_boot_2.jpeg","revision":"1224ad6eed044ddb5c38e0ce45319a4d"},{"url":"/assets/images/linux_windows10_uefi_disk.jpeg","revision":"c11172b6ee2141baf2a1d7e9d802ee97"},{"url":"/assets/images/linux_windows10_uefi_format.jpeg","revision":"07fc76728a0b8c6fc22463953a9bb295"},{"url":"/assets/images/linux_windows10_uefi_format_error.jpeg","revision":"5d9cffcc0c5793c3a7b2eb4b157f564c"},{"url":"/assets/images/logo.png","revision":"99408c2ed000e2027535f5bdbcb2c21d"},{"url":"/assets/images/neomutt_senkron.png","revision":"6e5f4cf3e2b104f6718d377eb1c93b66"},{"url":"/assets/images/newsboat.png","revision":"1089f2d01dbb14d93f696159379dac8b"},{"url":"/assets/images/newsboaticerik.png","revision":"f7c5e4d5320dcad8cc658537077d8c57"},{"url":"/assets/images/ntfs_yetki_hatasi.png","revision":"4254f422ff0a315feaeefd7f1551a5f2"},{"url":"/assets/images/nvidia-grafik-ayari-maximum-performans.png","revision":"2ac8bbacf8888b1caf408976844e06fd"},{"url":"/assets/images/nvidia-grafik-karti-indirme.png","revision":"b9733abafd1ec5245dece1f2686c7481"},{"url":"/assets/images/nvidia-grafik-karti-indirme2.png","revision":"71e98f699ffa1e641b401ea7ed12576d"},{"url":"/assets/images/nvidia-linux-performans-ayari.png","revision":"eadfa9a8e0d0740d78be08050701cdfb"},{"url":"/assets/images/oh_my_zsh.png","revision":"cb0cbf3e74a815009a323efb6dd6e8ec"},{"url":"/assets/images/ol_vbox_vagrant-min.png","revision":"0823f5fcd3c712cae8090dd709e906aa"},{"url":"/assets/images/optirun-dahili-gpu.png","revision":"4ebbab7ec26eea42ca9b195b59dea10e"},{"url":"/assets/images/optirun-performansi.png","revision":"cdc24a03d4a7777181c36f367f7395ea"},{"url":"/assets/images/ortam_degiskenleri1.png","revision":"e3fbe3806f28653833dd6ea316cefe73"},{"url":"/assets/images/ortam_degiskenleri2.png","revision":"4938509a9a076d8197078e773fd62441"},{"url":"/assets/images/ortam_degiskenleri3.png","revision":"3284e965fe5b30f7f6f1c534d03e1db4"},{"url":"/assets/images/php_morris.png","revision":"7caf1497b177beb06616b613593e9f18"},{"url":"/assets/images/php_morris_grafik.png","revision":"0036ada04d7e6d32a51097f2524ce38f"},{"url":"/assets/images/php_phpstorm_csfixer.png","revision":"259959bfc25b1d0f58452ef9c6fee623"},{"url":"/assets/images/php_phpstorm_csfixer2.png","revision":"6f71ccdb0c58d943735112d9cd81a679"},{"url":"/assets/images/php_phpstorm_csfixer3.png","revision":"6ff35139eab7c3ec813b462fa9581a87"},{"url":"/assets/images/php_phpstorm_csfixer4.png","revision":"9832b798bb6cc97719ea6ea4441230e4"},{"url":"/assets/images/php_phpstorm_csfixer5.png","revision":"0497af662ad095804995bb90b04d9d28"},{"url":"/assets/images/phpstorm_terminal.png","revision":"39b66f893ac02b688d59018552eb3dce"},{"url":"/assets/images/phpstorm_terminal2.png","revision":"d3447d8d9d5d21baf36bbb057e912e73"},{"url":"/assets/images/pic-full-190916-0808-36.png","revision":"f0b1464db93678588295590be3eb2064"},{"url":"/assets/images/pic-selected-190916-0747-49.png","revision":"4bd8d61798760cd0db9f19e4b17899f4"},{"url":"/assets/images/pic-selected-190916-0818-54.png","revision":"aa37c3f662b1eafe7adeaed46c1cc996"},{"url":"/assets/images/primeperformansi.png","revision":"f24078dc666913c93e481d3216a4d670"},{"url":"/assets/images/redshift_windows.png","revision":"6108bf219773ea65aab61e4fe13bd97d"},{"url":"/assets/images/ron's-coffee.png","revision":"926dd252bca3608d4d7a3c30d1da7a0e"},{"url":"/assets/images/spotify-2.png","revision":"2ec3ea7053a765460afa9184574c52ef"},{"url":"/assets/images/spotify-3.png","revision":"349560f94c22e4a55e8a9b6e74521f17"},{"url":"/assets/images/spotify-4.png","revision":"0e763b06d82d058f7b2d35482f1688e4"},{"url":"/assets/images/spotify-5.png","revision":"fc30278ace3f4a4183343a0e243298df"},{"url":"/assets/images/spotify.png","revision":"091ddc592b389b076200a39695cda9ee"},{"url":"/assets/images/staticman-postman.png","revision":"4bcbcccf22d214b6f1f5f31272d857e2"},{"url":"/assets/images/staticman.png","revision":"57bb411aea26170e635fed919aff6b3f"},{"url":"/assets/images/staticman10.png","revision":"0dccc3027b01712704025fc0ef676fdc"},{"url":"/assets/images/staticman11.png","revision":"f8b60175c14e18432b29a7cdea6d796b"},{"url":"/assets/images/staticman2.png","revision":"a379ee37b49679b8e859dd1ddd7a19d9"},{"url":"/assets/images/staticman3.png","revision":"579045b745b155aca50fd480c906843e"},{"url":"/assets/images/staticman4.png","revision":"2fa515b4b6e41b703ac7a5b8dbfec57d"},{"url":"/assets/images/staticman5.png","revision":"0b8da7ed403500d89f750f4da463e631"},{"url":"/assets/images/staticman6.png","revision":"6eebb1102ed790f3468eca4bec07d5cf"},{"url":"/assets/images/staticman7.png","revision":"c4d014171243d2d1fc9bfb6afb77c04f"},{"url":"/assets/images/staticman8.png","revision":"3b851387e235259e4fe00f4599d4d868"},{"url":"/assets/images/staticman9.png","revision":"6dafe5712d0fbbdc9d6bcaf2e20fa56e"},{"url":"/assets/images/sublime-text-eklentileri.jpeg","revision":"1708ddca746abe5a3098a106cfa05e69"},{"url":"/assets/images/superproxy.png","revision":"be412cf176b08d5fd371c0919f6334f5"},{"url":"/assets/images/superproxy10.png","revision":"7ea31abc4ea5b8495d59aaba494cdb66"},{"url":"/assets/images/superproxy11.png","revision":"f7abfbe5c0e1ee2e86d42ef7cc8d107b"},{"url":"/assets/images/superproxy2.png","revision":"566b6ea9022c47adfbcbe56901164dd1"},{"url":"/assets/images/superproxy3.png","revision":"e038c4cb7c299d6fc1f4f7515a5d879a"},{"url":"/assets/images/superproxy4.png","revision":"6c01fbdedeb7d4d7dcc9a62c19124069"},{"url":"/assets/images/superproxy5.png","revision":"4b5dc9e50fe50855553b7a4264e11cc2"},{"url":"/assets/images/superproxy6.png","revision":"b76d84e05c10140a70bb080620143607"},{"url":"/assets/images/superproxy7.png","revision":"f925eead199732f4bad96706d45fa9ab"},{"url":"/assets/images/superproxy8.png","revision":"aaed36878bbd3786adeac35f5ce55287"},{"url":"/assets/images/superproxy9.png","revision":"a7fca7622d1e3587b6e5a02924a9c22b"},{"url":"/assets/images/sweetalert.png","revision":"01ce0ac5951540636ddf80d7cbf1da0d"},{"url":"/assets/images/ucretsiz-oyunlar.jpg","revision":"cf193b1cb5ca72c3bc1515470e143020"},{"url":"/assets/images/uygulama_sifresi_gmail.png","revision":"a4a3af35a16f9a4ce1077c05585da54a"},{"url":"/assets/images/vlbsub.png","revision":"c79c8fd13300cd1721996b94ecd9fa43"},{"url":"/assets/images/vlsub0.png","revision":"119c872c7e05a82004e6335feb70c5a5"},{"url":"/assets/images/vlsub1.png","revision":"bd2a4be1a2a20eb9073034a704fd62ea"},{"url":"/assets/images/windows-terminal-son.png","revision":"aad4760ec78b806980304a584d7a65a9"},{"url":"/assets/images/windows-terminal.png","revision":"c5744daa355248724cc1822dcf842780"},{"url":"/assets/images/windows-terminal2.png","revision":"15801b7576c98e44e3202e86dd8e9469"},{"url":"/assets/images/windows-terminal3.png","revision":"3a24e27542055750957e0521b61dfa0c"},{"url":"/assets/images/windows-terminal4.png","revision":"a206bd4d2f19503e46af851899171130"},{"url":"/assets/images/windows-terminal5.png","revision":"89b1d32dae73de54aac32bc92c6c8a4c"},{"url":"/assets/images/wls-archlinux-kurulumu.png","revision":"f25c3985b4f811232d5e334d8ec8afd1"},{"url":"/assets/images/wls-archlinux-kurulumu2.png","revision":"4358b8f3d2b16031fdce5f5fa2aa9b03"},{"url":"/assets/images/wls-archlinux-kurulumu3.png","revision":"ea1abccca74915609356059fb67bdcc4"},{"url":"/assets/images/wls-archlinux-kurulumu4.png","revision":"7192d748705ee958ab142079661ee68a"},{"url":"/assets/images/wls-archlinux-kurulumu5.png","revision":"86030d49883124f3e29191517f90ae3f"},{"url":"/assets/images/wls-archlinux-kurulumu6.png","revision":"9b5f01dd40f8e7038fdf55132f48e1bd"},{"url":"/assets/images/wls-archlinux-kurulumu7.png","revision":"115dd3861aecd7f0181d644e956fa7a5"},{"url":"/assets/images/wls-archlinux-kurulumu8.png","revision":"687a9e5c1f5e872227be7c8f4150e0de"},{"url":"/favicon.ico","revision":"21620055c8f33fd16aaf550f58d4c67c"},{"url":"/1x1-hello-friend/index.html","revision":"0be431cdac987e47d4843697f3c8d2c7"},{"url":"/404.html","revision":"74185ce88a0171ff24618f2d685a47b0"},{"url":"/:title/index.html","revision":"4cfbb8c25b52b677c762562b449cc473"},{"url":"/about/index.html","revision":"c38b39a166429e6d92453d999bf01db5"},{"url":"/categories/cheatsheet/index.html","revision":"72587420012d78b94a9caa3cf4aa0fcc"},{"url":"/categories/index.html","revision":"39f6d9b3665d239eeef6daf6d51968ad"},{"url":"/categories/maquina/index.html","revision":"c2f88e7a892ba0560b1a391bfe5fa704"},{"url":"/categories/mr-robot/index.html","revision":"37cfb2756a25452c6c704f287a3f9487"},{"url":"/index.html","revision":"bc319d1da9585566e5d09670ced2736c"},{"url":"/linux-cheatsheet/index.html","revision":"11bf870dbe1a3081b566bbf7879d14ce"},{"url":"/offline.html","revision":"300f5dbb535370c89a1c19a6a0135d0b"},{"url":"/pickle-rick/index.html","revision":"b96859412c66369f4604deffa1c66e97"},{"url":"/sql-cheatsheet/index.html","revision":"31e8a0a02f8c9a2fb60e2d3bccd83379"},{"url":"/tags/bd/index.html","revision":"b1e3f011ad49b250f05710384bef4157"},{"url":"/tags/cheatsheet/index.html","revision":"099e6f32a9598915530e225fc6ce8d40"},{"url":"/tags/comandos/index.html","revision":"07627504d11ea25225282ad4549f42d4"},{"url":"/tags/easy-machine/index.html","revision":"657ac21ab9d5504b1dbc56853bd81c86"},{"url":"/tags/index.html","revision":"da9d60c77220aa7b723a0e4cd54a1b16"},{"url":"/tags/linux/index.html","revision":"0d559cd2ea6882039387397a4cca86ab"},{"url":"/tags/maquinas/index.html","revision":"334157856eada18639abfcd547723755"},{"url":"/tags/pentesting/index.html","revision":"577f3cface22a1ff22382807be778df9"},{"url":"/tags/series/index.html","revision":"db853267427290dfc47dfbb31e4d2c7c"},{"url":"/tags/sql/index.html","revision":"77af31cca1c8de0122ea1c6744a007f1"},{"url":"/tags/tryhackme/index.html","revision":"02dc19219048817926a3175e631d11b6"},{"url":"/pickle-rick/","revision":"08a33691c890b4d739d88435fae5a935"},{"url":"/sql-cheatsheet/","revision":"4b824bfea5be3a8fab58c93f7670a41a"},{"url":"/linux-cheatsheet/","revision":"bdd8576a342e634aa1f7402e50ee8a03"},{"url":"/1x1-hello-friend/","revision":"067575a4a8c671513462d47c34a752b8"}];

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

