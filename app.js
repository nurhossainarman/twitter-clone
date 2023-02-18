{/* <div class="d1">
<img src="dp.jpg" alt="DP" class="small-dp round imgMargin">
<form class="form1" id="tweet">
<textarea maxlength="280" type="text" placeholder="Whats on your mind" class="xautosize tweetx borderless bgnone"></textarea>
<div>
<input type="submit" value="Tweet" class="tweet-button borderless b-radius padding bgaqua">
</div>
</form>
</div>
<div class="closingLine"></div> <!--After tweet--> */}

const tweet = document.getElementById("tweet");

function createPost(tweetText){
    var outerDiv = document.createElement("div");
    var img = document.createElement("img");
    var form = document.createElement("form");
    var tweet = document.createElement("div");
    outerDiv.className= "d1";
    img.src="dp.jpg";
    img.className="small-dp round imgMargin";
    form.className= "form1 posts";
    tweet.className= "textarea borderless bgnone";
    var date = new Date();
    tweet.innerHTML= `<h5><b>Nur Hossain Arman</b></h5><h6>${date.toLocaleTimeString()}</h6><h6>${date.toDateString()}</h6><br>${tweetText}`;
    outerDiv.appendChild(img);
    form.appendChild(tweet);
    outerDiv.appendChild(form);

    return outerDiv;
}

tweet.addEventListener("submit", function(e){
    e.preventDefault();
    var aTweet = document.getElementById("myTweet");
    document.getElementById("home-content").appendChild(createPost(aTweet.value));
    aTweet.value= aTweet.defaultValue;
    var close = document.createElement("div");
    close.className= "closingLine";
    document.getElementById("home-content").appendChild(close);
})