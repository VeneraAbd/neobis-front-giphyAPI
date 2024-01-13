const search_word = document.querySelector('#search_input');
const search_icon = document.querySelector('.icon');
const gifContainer = document.querySelector('.main');
// const debounceTime = 300;

async function fetchGiphyAPI(){

    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WfXZgy5VyrhNFs5tGQPEo7kz4dlrwzA5&q=${search_word.value}`);
        let data = await response.json();

        // clearing the previous Gifs
        gifContainer.innerHTML = '';
       
        // rendering GIFs
        data.data.forEach(gif => {
            const card = document.createElement('img');
            card.src = gif.images.fixed_height.url;
            card.classList.add("card");
            
            gifContainer.appendChild(card);
            console.log('caarrrd')
        });

    }catch(error){
        console.log('Error fetching data:', error.message)
    }
};

// const debouncedFetchGIFs = _.debounce(fetchGiphyAPI, debounceTime);

search_word.addEventListener('input', fetchGiphyAPI);
search_icon.addEventListener('click', fetchGiphyAPI);