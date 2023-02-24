
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
            console.log(sec+"s");
            if(sec < 60){
                
                e.innerHTML = "0m";
            }
            else if(mins > 59){
                console.log(mins+"m");
                e.innerHTML = hours+"h";
            }
            else{
                console.log(mins+"m");
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

})
function createPost(tweetText){
    var outerDiv = document.createElement("div"); //Entire outer Div for tweet that will be returned
    outerDiv.className= "d1 marginTop";

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

    // var replybtn = document.createElement("button");
    // replybtn.innerHTML= "Reply";
    // replybtn.classList.add("btns");
    // var retweetbtn = document.createElement("button");
    // retweetbtn.innerHTML= "Retweet";
    // retweetbtn.classList.add("btns");
    var likebtn = document.createElement("button");
    likebtn.classList.add("likebtn");
    likebtn.innerHTML=  "Like";
    // likebtn.classList.add("btns");
    // var sharebtn = document.createElement("button");
    // sharebtn.innerHTML= "Share";
    // sharebtn.classList.add("btns");
    // tweetFooter.appendChild(replybtn);
    // tweetFooter.appendChild(retweetbtn);
    tweetFooter.appendChild(likebtn);
    // tweetFooter.appendChild(sharebtn);

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
    const profileBox = document.createElement("div"); //
    profileBox.classList.add("relativeDiv");
    const profileCover = document.createElement("div"); //
    profileCover.classList.add("profileCover");
    const profileDp = document.createElement("img"); //
    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = "Edit profile";
    profileDp.src= "dp.jpg"; 
    profileDp.classList.add("profileDp");
    profileDp.classList.add("round");
    profileDp.classList.add("imgMargin");
    const profileName = document.createElement("div");
    profileName.classList.add("profileFont");
    profileName.classList.add("fullName");
    const profileUserName = document.createElement("div");
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
    profileContent.appendChild(profileBox); 
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
    
})


createProfile();
updateTime();