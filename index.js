const form = document.querySelector('form');
const input = document.querySelector('input');


  form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
          if (!isUrl(url)) url = 'https://bing.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        localStorage.setItem('iframeurl', __uv$config.prefix + __uv$config.encodeUrl(url))
          window.location.href = "./iframe.html"
    });
});



function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function openproxy(url) {
    window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "http://" + url;
            localStorage.setItem('iframeurl', __uv$config.prefix + __uv$config.encodeUrl(url))
            window.location.href = "./iframe.html";
    });
};
function openiniframe(iframeurl) {
  localStorage.setItem('iframeurl', iframeurl);
  location.href = 'iframe.html'
}