const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const heading = document.querySelector("h1");
buttonOne.onclick = active;
buttonTwo.onclick = relax;
buttonThree.onclick = startOver;

function active() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/thecolosseum1.png?v=1724150500392");
   text.innerHTML = "Do you enjoy visiting historical landmarks and museums?";
   buttonOne.onclick = localActivitiesQuestion;
   buttonTwo.onclick = divingQuestion;
   heading.style.display = "none";
}

function localActivitiesQuestion() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/localmarket.png?v=1724152887062");
   text.innerHTML = "Do you enjoy participating in local activities, like guided tours or visiting local markets, when traveling?";
   buttonOne.onclick = culturalEnthusiast;
   buttonTwo.onclick = adventureTraveler;
}

function culturalEnthusiast() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/enthusiast1.png?v=1724197274747");
   text.innerHTML = "You are: Cultural Enthusiast"
   buttonOne.style.display = "none";
   buttonTwo.style.display = "none";
   buttonThree.style.display = "block";
}

function adventureTraveler() {
   image.setAttribute("src", "https://thelatch.com.au/wp-content/uploads/2021/07/LATCH-HERO-2021-07-16T105953.619-1-1.jpg");
   text.innerHTML = "You are: Adventure Traveler"
   buttonOne.style.display = "none";
   buttonTwo.style.display = "none";
   buttonThree.style.display = "block";
}

function divingQuestion() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/divingQuestion2.png?v=1726945861592");
   text.innerHTML = "Do you seek thrill and excitement, like bungee jumping or scuba diving, during your trips?";
   buttonOne.onclick = adventureTraveler;
   buttonTwo.onclick = hikingQuestion;
}

function adventureTraveler() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/divingQuestion2%20(1).png?v=1726945956167");
   text.innerHTML = "You are: Adventure Traveler"
   buttonOne.style.display = "none";
   buttonTwo.style.display = "none";
   buttonThree.style.display = "block";
   buttonThree.style.display = "block";
}

//  2 CALM
function relax() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/natureQuestion.png?v=1726946409471");
   text.innerHTML = "Do you prefer spending your vacation in nature, such as camping or bird-watching?"
   buttonOne.onclick = hikingQuestion;
   buttonTwo.onclick = spaQuestion;
   heading.style.display = "none";
}

function hikingQuestion() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/hikingQuestion.png?v=1726945956167");
   text.innerHTML = "Do you enjoy activities like hiking or exploring national parks?"
   buttonOne.onclick = natureLover;
   buttonTwo.onclick = spaQuestion;
}

function natureLover() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/natureLover.png?v=1726952132287");
   text.textContent = "You are: Nature Lover";
   buttonOne.style.display = "none";
   buttonTwo.style.display = "none";
   buttonThree.style.display = "block";
   buttonThree.style.display = "block";
}

function spaQuestion() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/spaQuestion.png?v=1726953568527");
   text.innerHTML = "Do you prefer relaxing activities like lying on the beach or enjoying a spa day?"
   buttonOne.onclick = natureLover;
   buttonTwo.onclick = relaxationSeeker;
}

function relaxationSeeker() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/relaxationSeeker.png?v=1726946805817");
   text.textContent = "You are: Relaxation Seeker";
   buttonOne.style.display = "none";
   buttonTwo.style.display = "none";
   buttonThree.style.display = "block";

}

function startOver() {
   image.setAttribute("src", "https://cdn.glitch.global/5a01273b-a68c-4b04-8d58-2d34b2fed4e4/glay.png?v=1722700215513");
   text.innerHTML = "Do you enjoy exploring new cultures and traditions?";
   buttonOne.style.display = "inline-block";
   buttonTwo.style.display = "inline-block";
   buttonThree.style.display = "none";
   heading.style.display = "block";
   buttonOne.onclick = active;
   buttonTwo.onclick = relax;
}