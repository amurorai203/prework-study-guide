
var topics = ["HTML", "CSS", "Git", "Javascript"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics(){
    for (var x = 0;x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopic(){

/*
console.log(topics);

var topic = "HTML"
*/
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'Javascript') {
        console.log("Let's study Javascript!");
    } else {
        console.log('Please try again!');
    }
}
/*
var shapes = ["triangle", "square", "pentagon", "circle"];

for (var x=0; x < shapes.length; x++) {
    console.log(shapes[x]);
}

function helloWorld() {
    console.log("Hello, world, I am a function!")
}
*/

console.log('Here are the topics we learnt through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();