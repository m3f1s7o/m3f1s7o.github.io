"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js?v=1685839895").then(function(e){e.onupdatefound=function(){var r=e.installing;r.onstatechange=function(){switch(r.state){case"installed":var e;navigator.serviceWorker.controller&&(e=new Event("sw.update"),window.dispatchEvent(e))}}}}).catch(function(e){console.error("Error during service worker registration:",e)});
