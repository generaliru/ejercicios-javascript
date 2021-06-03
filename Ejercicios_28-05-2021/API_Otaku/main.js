fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(function(quote){
            var anime = quote;
            console.log(anime);
            console.log(anime.anime)
            document.body.innerHTML = '<h1>' + 'Name: ' + anime.anime + '</h1>' + 
            '<h2>' + 'Character: ' + anime.character + '</h2>' + 
            '<h3>' + 'Quote: ' + anime.quote + '</h3>';
        })
