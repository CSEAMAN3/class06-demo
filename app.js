"use strict";

const frankie = {
  name: "Frankie",
  age: 0,
  interests: ["cuddling", "chasing string", "catnip"],
  isGoodWithKids: true,
  isGoodWithDog: false,
  isGoodWithOtherCats: true,
  getAge: function () {
    this.age = randomAge(3, 12) + " months";
  },
};

frankie.getAge();

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const parentElement = document.getElementById("kittenProfiles");

const article = document.createElement("article");
parentElement.appendChild(article);

const h2 = document.createElement("h2");
h2.textContent = frankie.name;
article.appendChild(h2);

const p = document.createElement("p");
p.textContent = `Frankie is adorable, and is ${frankie.age} old`;
article.appendChild(p);

const ul = document.createElement("ul");
article.appendChild(ul);

for (let i = 0; i < frankie.interests.length; i++) {
  const li = document.createElement("li");
  li.textContent = frankie.interests[i];
  ul.appendChild(li);
}

const img = document.createElement("img");
img.setAttribute("src", "images/" + frankie.name + ".jpg");
img.setAttribute(
  "alt",
  "cute picture of " + frankie.name + ", who is an orange and white cat. You should reallly adopt him."
);
article.appendChild(img);
