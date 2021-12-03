import axios from 'axios';

const entryPoint = document.querySelector('.cards');

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Timbobeek')
  .then(resp => {
    //console logs to see if we find the right elements, resp.data being the one we look at to build the rest
    console.log(resp.data)
    //console logs to check individual elements of the data object  
    console.log(resp.data.avatar_url)
    console.log(resp.data.bio)
    console.log(resp.data.name)
    console.log(resp.data.login)
    console.log(resp.data.location)
    console.log(resp.data.html_url)
    console.log(resp.data.followers)
    console.log(resp.data.following)

    // writing up the object of a follower with key/value pairs necessary to fill in in our followersCardMaker function. values are gathered from teh data object found by axios.get('https://api.github.com/users/Timbobeek')
    const followerObj = {
      imageURL: resp.data.avatar_url,
      name: resp.data.name,
      username: resp.data.login,
      location: resp.data.location,
      githubAddress: resp.data.html_url,
      followers: resp.data.followers,
      following: resp.data.following,
      bio: resp.data.bio,
    }
    //entryPoint is where in our dom structure we will put this object
    entryPoint.appendChild(followersCardMaker(followerObj));
  }).catch(error => {  
    console.error(error); /*this needed in case there is an error so we see it in the log, if our link cannot be reached*/
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

//links for step5

const followersArray = [
  'https://api.github.com/users/JessWillCode',
  'https://api.github.com/users/gumsanmarip',
  'https://api.github.com/users/DatBoiLuiskrrt',
  'https://api.github.com/users/am-stewart',
  'https://api.github.com/users/dbvker'
];



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
function followersCardMaker({ imageURL, name, username, location, githubAddress, followers, following, bio}){
  
  //instantiated elements
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
  
  //setting class names
  followerCard.classList.add('card')
  followerInfo.classList.add('card-info')
  followerName.classList.add('name')
  followerUsername.classList.add('username')
  
  //setting attributes, text, etc
  followerAvatar.src = imageURL
  followerName.textContent = name
  followerUsername.textContent = username
  followerLocation.textContent = `Location: ${location}`
  followerProfile.textContent = `Profile: `
  followerGitAddress.href = githubAddress;
  followerGitAddress.textContent = githubAddress;
  followerFollowers.textContent = `Followers: ${followers}`;
  followerFollowing.textContent = `Following: ${following}`;
  followerBio.textContent = `Bio: ${bio}`;
  
  //create the hierarchy (based on the html above in step3)
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

  //could add buttons/interactivity here IF NEEDED


  //return the beast
  return followerCard;
}


//function below is to add other cards based on array of links provided

function createFollowersCards(array){
  for (let i = 0; i < array.length; i++){
    axios.get(array[i])
    .then(resp => {
      console.log(resp.data);
      const followerObject = {
        imageURL: resp.data.avatar_url,
        name: resp.data.name,
        username: resp.data.login,
        location: resp.data.location,
        githubAddress: resp.data.html_url,
        followers: resp.data.followers,
        following: resp.data.following,
        bio: resp.data.bio
      }
      entryPoint.appendChild(followersCardMaker(followerObject));
    }).catch(error => {
      console.error(error);
    }).finally(()=>console.log('gucci gang'))
  }
}

createFollowersCards(followersArray);




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
