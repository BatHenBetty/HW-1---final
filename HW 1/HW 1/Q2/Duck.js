class Duck {
    constructor(name, color, age, weight, photo) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.photo = photo;
    }

    show() {
        document.getElementById("duckDetails").innerHTML =
            `Name: ${this.name}<br>Color: ${this.color}<br>Age: ${this.age}<br>Weight: ${this.weight}<br> img:<img scr="${this.photo}" alt=Alternate Text />`;
    }

    quack() {
        let quackCount = Math.floor((this.age * this.weight)/2);
        let audio = `<br><audio id="myaudio" loop onshow = "playQuackSound()">
                    <source src="duck-quacking-37392.mp3" type="audio/mpeg" /> </audio>`;
        for (var i = 0; i < quackCount; i++) {
            audio += "Quack ";
        }
        document.getElementById("duckDetails").innerHTML = audio; 

        for (let i = 0; i < 3; i++) {
            playQuackSound();
        }
    }

}

function playQuackSound() {
    const audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
}



function createDuck() {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let age = parseInt(document.getElementById("age").value);
    let weight = parseInt(document.getElementById("weight").value);
    let photo = document.getElementById("photo").value;

    duck = new Duck(name, color, age, weight, photo);

    document.getElementById("showButton").disabled = true;
    document.getElementById("buttons").innerHTML = `<button id="showButton" onclick="showDuck()">Show Duck</button>
                                                               <button id="quackButton" onclick="quackDuck()">Quack</button>`;
}

function showDuck() {
    duck.show();
}

function quackDuck() {
    duck.quack();
}