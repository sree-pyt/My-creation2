function showLove() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Thank You, My Love! ❤️</h1>
            <p class="message">You just made me the happiest person in the world!</p>
            <h2 class="proposal">I love you, Athulya! 💖</h2>
        </div>
    `;
}

// Heart Animation
const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedY = Math.random() * 2 + 1;
    }
    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = "rgba(255, 0, 100, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        hearts.push(new Heart());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart) => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
