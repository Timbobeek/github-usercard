import axios from 'axios';

const entryPoint = document.querySelector('.cards');

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Timbobeek')
  .then(resp => {
    console.log(resp.data.avatar_url)
    console.log(resp.data.bio)
    const followerObj = {
      imageURL: resp.data.avatar_url,
      bio: resp.data.bio
    }
    entryPoint.appendChild(followersCardMaker(followerObj));
  }).catch(error => {
    console.error(error);
  }).finally(() => console.log('operation complete!!!'))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function followersCardMaker({ imageURL, bio }){
  
  const followerCard = document.createElement('div')
  const followerAvatar = document.createElement('img')
  const followerInfo = document.createElement('div')
  const followerName = document.createElement('h3')
  const followerUsername = document.createElement('p')
  const followerLocation = document.createElement('p')
  const followerProfile = document.createElement('p')
  const followerGitAddress = document.createElement('a')
  const followerFollowers = document.createElement('p')
  const followerFollowing = document.createElement('p')
  const followerBio = document.createElement('p')
  
  
  followerCard.classList.add('card')
  followerInfo.classList.add('card-info')
  followerName.classList.add('name')
  followerUsername.classList.add('username')
  followerInfo.textContent = 'Good boi'
  followerAvatar.src = imageURL
  followerBio.textContent = bio
  followerGitAddress.textContent = 'dsafdsafsfd'




  followerCard.appendChild(followerAvatar)
  followerCard.appendChild(followerInfo)
  followerInfo.appendChild(followerName)
  followerInfo.appendChild(followerUsername)
  followerInfo.appendChild(followerLocation)
  followerInfo.appendChild(followerProfile)
  followerProfile.appendChild(followerGitAddress)
  followerInfo.appendChild(followerFollowers)
  followerInfo.appendChild(followerFollowing)
  followerInfo.appendChild(followerBio)

  return followerCard;
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
