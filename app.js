
const tweet = document.getElementById("tweet");
const profile = document.getElementById("profile");
const home = document.getElementById("home");
function updateTime(){ 
    count = 0;
        setInterval(() => {
            document.querySelectorAll(".tweet-time").forEach(function(e){
            var a = parseInt(e.dataset.value);
            var b = new Date().getTime();
            var hours = Math.floor((b-a) / (1000*60*60)) ;
            var mins = Math.floor((b-a) / (1000*60));
            var sec = Math.floor((b-a) / (1000));
            
            if(sec < 60){
                
                e.innerHTML = "0m";
            }
            else if(mins > 59){
                
                e.innerHTML = hours+"h";
            }
            else{
                
                e.innerHTML = mins+"m";
            }
            });
        }, 1000);
}
home.addEventListener("click", function(e){
    e.preventDefault();
    const homeContent = document.querySelector(".home-content");
    const header = document.querySelector(".header");
    const profileContent = document.querySelector(".profile-content");
    header.innerHTML= "Home";
    profileContent.style.display = "none";
    homeContent.style.display= "block";
    homeContent.appendChild(fetchTweets());

})
function createPost(tweetText){
    var outerDiv = document.createElement("div"); //Entire outer Div for tweet that will be returned
    outerDiv.className= "d1 marginTop allTweets";

    var img = document.createElement("img"); // Display picture
    img.src="dp.jpg";
    img.className="small-dp round imgMargin";

    var form = document.createElement("form"); 
    form.className= "form1";

    var tweet = document.createElement("div"); //Tweet div
    tweet.className= "textarea borderless bgnone";

    var tweetUser = document.createElement("div");
    tweetUser.innerHTML= "Nur Hossain Arman";
    tweetUser.style.fontWeight= "700";
    tweetUser.style.display= "inline";

    var tweetUserName = document.createElement("div");
    tweetUserName.style.display= "inline";
    tweetUserName.innerHTML = "@nurhossainarman"
    tweetUserName.classList.add("darkGrey");
    tweetUserName.classList.add("leftMargin");

    var tweetTime = document.createElement("div");
    tweetTime.classList.add("darkGrey");
    tweetTime.classList.add("leftMargin");
    tweetTime.style.display= "inline";
    tweetTime.classList.add("tweet-time"); //Setting classname to update the time using updateTime() method.
    
    var createTime = new Date(); //Post creation date instance
    tweetTime.dataset.value = createTime.getTime();
    tweetTime.innerHTML = "0m";
    
    var tweetBody = document.createElement("div");
    var tweetPara = document.createElement("p");
    tweetBody.classList.add("marginTop");
    tweetBody.style.height = "fit-content";

    tweetPara.innerHTML= tweetText;
    tweetPara.classList.add("wordWrap");

    var tweetFooter = document.createElement("div");
    tweetFooter.classList.add("marginTop");
    /* 
    <div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
    */
   var threeDots = document.createElement("button");
   threeDots

    var likebtn = document.createElement("button"); //like button
    likebtn.classList.add("likebtn");
    likebtn.innerHTML=  "0 Like";

    tweetFooter.appendChild(likebtn);

    tweetBody.appendChild(tweetPara);
    tweet.appendChild(tweetUser);
    tweet.append(tweetUserName);
    tweet.appendChild(tweetTime);
    tweet.appendChild(tweetBody);
    tweet.appendChild(tweetFooter);
    outerDiv.appendChild(img);
    form.appendChild(tweet);
    outerDiv.appendChild(form);

    return outerDiv;
}

tweet.addEventListener("submit", function(e){
    e.preventDefault();
    var aTweet = document.getElementById("myTweet");
    document.getElementById("myTweets").appendChild(createPost(aTweet.value));
    aTweet.value= aTweet.defaultValue;
    var close = document.createElement("div");
    close.className= "closingLine";
    document.getElementById("myTweets").appendChild(close);
    
})

function createProfile(){
    const profileBox = document.createElement("div"); // upper portion with cover, dp, name, edit profile
    profileBox.classList.add("relativeDiv");
    profileBox.classList.add("profileBox");
    const profileCover = document.createElement("div"); // cover
    profileCover.classList.add("profileCover");
    const profileDp = document.createElement("img"); // dp
    const editButton = document.createElement("button"); //edit profile
    editButton.classList.add("editButton");
    editButton.innerHTML = "Edit profile";
    profileDp.src= "dp.jpg"; 
    profileDp.classList.add("profileDp");
    profileDp.classList.add("round");
    profileDp.classList.add("imgMargin");
    const profileName = document.createElement("div"); //full name
    profileName.classList.add("profileFont");
    profileName.classList.add("fullName");
    const profileUserName = document.createElement("div"); //username
    profileUserName.classList.add("profileFont");
    profileUserName.classList.add("userName");
    profileName.innerHTML = "Nur Hossain Arman";
    profileUserName.innerHTML = "@nurhossainarman";
    profileBox.appendChild(profileCover);
    profileBox.appendChild(profileDp);
    profileBox.appendChild(editButton);
    profileBox.appendChild(profileName);
    profileBox.appendChild(profileUserName);
    const profileContent = document.querySelector(".profile-content");
    profileContent.appendChild(profileBox);  //appending upper portion of profile
    profileContent.style.display = "none";
}

profile.addEventListener("click", function(e){
    e.preventDefault();
    const homeContent = document.querySelector(".home-content");
    const header = document.querySelector(".header");
    const profileContent = document.querySelector(".profile-content");
    header.innerHTML= "Nur Hossain Arman";
    profileContent.style.display = "block";    
    homeContent.style.display= "none";
    profileContent.appendChild(fetchTweets());
})

function likeCount(){
    setInterval(() => {
        var likeButton = document.querySelectorAll(".likebtn");
        likeButton.forEach(function(e){
            e.onclick = function(event){
                event.preventDefault();
                var arr = e.innerHTML.split(" ");
                var count = parseInt(arr[0])+1;
                e.innerHTML = count+" Like";
            }
        })
     }, 1000);
}

function fetchTweets(){
    var allTweets = document.getElementById("myTweets");
    
    return allTweets;
}

likeCount();
createProfile();
updateTime();