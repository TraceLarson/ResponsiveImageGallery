//local testing.

// Callback URLs
// urn:ietf:wg:oauth:2.0:oob (Authorize)
// https://tracelarson.github.io/ResponsiveImageGallery/ (Authorize)

const applicationId = '53f4a84191f5cb52ee8c31eb245314d92ed5a5e380d95348a3934dc94a59649e';
const secretId = 'ad6fc8d1783e91c70b0b0d3664a9212982e24559b55c8b50bd7d55a3acbc2ab6';



const url='https://api.unsplash.com/search/photos?client_id=' + applicationId + '&per_page=9&query=office';


var myInit = {
	method: 'GET',
	headers: {'Authorization': applicationId},
	mode: 'cors'
};


fetch(url, myInit).then((response) => {
	return response.json();
}).then(showImages).catch((error) => {
	console.log(error);
});

function showImages(data){
	console.log(data);

	let resultsArray = data.results;

	if(resultsArray.length > 0)
	{
		for( let i = 0; i < resultsArray.length; i++)
		{
			let author = resultsArray[i].user.username;
			let likeCount = resultsArray[i].likes;
			let description = resultsArray[i].description;

			let smallImgUrl = resultsArray[i].urls.small;
			let regularImgUrl = resultsArray[i].urls.regular;
			let rawImgUrl = resultsArray[i].urls.raw;
			let fullImgUrl = resultsArray[i].urls.full;

			document.getElementById('image-' + (i + 1)).firstElementChild.setAttribute('src', smallImgUrl);
			document.getElementById('image-'+ (i+1)).firstElementChild.setAttribute('srcset',smallImgUrl + ' 300w,' + regularImgUrl + ' 600w, ' + rawImgUrl + ' 800w ');
			document.getElementById('image-'+ (i+1)).firstElementChild.setAttribute('alt', description);
			document.getElementById('image-'+ (i+1)).firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = author;
			document.getElementById('image-'+ (i+1)).firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = likeCount;

		}

	}


}


