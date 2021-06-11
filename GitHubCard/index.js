import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


// const gitHubData = axios.get(`https://api.github.com/users/stepbystepdayo`)
  // .then((res)=> console.log(res))
  // .catch((err)=> console.log(err))
  


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
//get the data from github

const cards = document.querySelector('.cards')
// console.log(cards)

const cardMaker = (user) =>{
  return axios.get(`https://api.github.com/users/${user}`)
  .then((res)=> {
    // console.log(res.data)
    const newCard = gitHubCardMaker(res.data)
    cards.appendChild(newCard)
  })
   .catch('failed')
  
  }

  cardMaker('stepbystepdayo')

// const getDog = (breed)=>{
//   return axios.get(`https://dog.ceo/api/breed/${breed}/images/random/{number}`)
//   .then(({data})=>{
//     const imageURL = data.message[0]
//     const newCard = dogCardMaker({imageURL , breed})
//     entryPoint.appendChild(newCard)
//   })
//   .catch(err => console.log(err))
  



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tryingtokeepup', 'tetondan','dustinmyers','justsml', 'bigknell'];
followersArray.forEach(follower =>{
  cardMaker(follower)
})
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function gitHubCardMaker (obj) {

  console.log('hey I got your gitHub data', obj)
  console.log('here is my image, ', obj.avatar_url)

  
  const githubCard = document.createElement('div')
  const image = document.createElement('img')
  image.src =obj.avatar_url

  const info =document.createElement('div')
  
  const name = document.createElement('h3')
  console.log('this is my name,', obj.name)
  name.textContent = obj.name

  const usernameP = document.createElement('p')
  usernameP.textContent = obj.login
  const location = document.createElement('p')
  location.textContent = obj.location || 'fantasy Land!(^ U ^)'
  const portfolio = document.createElement('p')
  portfolio.textContent = 'profile: '
  const portfolioA = document.createElement('a')
  portfolioA.href  = obj.html_url;
  portfolioA.textContent = obj.html_url;
  portfolioA.target = '_blank';
  const followers = document.createElement('p')
  followers.textContent = `followers : ${obj.followers}`;
  const following = document.createElement('p')
  following.textContent = `following : ${obj.following}`;
  const bio = document.createElement('p')
  if (obj.bio === null) {
    bio.textContent = `Bio: I am ${obj.name} and an Engineer!`;
  } else bio.textContent = `Bio: ${obj.bio}`;
  

  githubCard.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  usernameP.classList.add('username')

  githubCard.appendChild(image)
  githubCard.appendChild(info)
  info.appendChild(name)
  info.appendChild(usernameP)
  info.appendChild(location)
  info.appendChild(portfolio)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)
  portfolio.appendChild(portfolioA)

  


console.log(githubCard)

return githubCard;
}

gitHubCardMaker({})