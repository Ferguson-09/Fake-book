'use strict';

const main = document.querySelector('main');
const postBtn = document.querySelector('.post-btn');
const textArea = document.querySelector('.input');
const containter = document.querySelector('.container');
const image = document.querySelector('#imageUpload');
const openBtn = document.querySelector('.end-header');
const overlay = document.querySelector('.overlay');
const info = document.querySelector('.pop-text');
const closeBtn = document.querySelector('.close');
const now = new Date();

const date = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});

class User{
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
    }

    set id(id) {this.#id = id;}
    get id() {return this.#id}

    set name(name) {this.#name = name;}
    get name() {return this.#name}

    set userName(userName) {this.#userName = userName; }
    get userName() {return this.#userName}

    set email(email) {this.#email = email;}
    get email() {return this.#email}

    getInfo () {
        console.log(this.#id);
        console.log(this.#name);
        console.log(this.#userName);
        console.log(this.#email)
    }
}

 class Subscriber extends User {
    #pages = [];
    #groups = [];
    #canMonetize = Boolean;

    constructor (id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.pages = pages;
        this.groups = groups;
        this.canMonetize = canMonetize
    }

    set pages(pages) {this.#pages = pages;}
    get pages() {return this.#pages;}

    set groups(groups) {this.#groups = groups;}
    get groups() {return this.#groups}

    set canMonetize(canMonetize) {this.#canMonetize = canMonetize;}
    get canMonetize() {return this.#canMonetize}

    getInfo () {return(`
        <p>ID: ${this.id} </p>
        <p>Name: ${this.name} </p>
        <p>Username: ${this.userName} </p>
        <p>Email: ${this.email} </p>
        <p>Pages: ${this.pages} </p>
        <p>Groups: ${this.groups} </p>
        <p>Can Monetize: ${this.canMonetize}</p>
        `)
    }
 }

 const subscriberOne = new Subscriber (
    '00002619', 'Ferguson Zibiri', 'ferguson_09', 'excelzibiri5@gmail.com', ['Landing-page', ' Home-page'], ['Soccer', ' Baseball'], true
 )

 postBtn.addEventListener('click', (a) => {
    a.preventDefault();

    let textHTML = '';
    let imgHTML = '';

    if (textArea.value.trim() !== '') {
        textHTML = `<p class="text-out">${textArea.value}</p>`;
    }

    if (image.files[0]) {
        const imageUrl = URL.createObjectURL(image.files[0]);
        imgHTML = `<img src="${imageUrl}" class="image-out">`;
    }

    if (!textHTML && !imgHTML) {
        alert ('Insert content in the box');
        return;
    };


    const post = document.createElement('div');
    post.innerHTML = `
        <div class="top">
            <div class="end-header">
                <i class="fa-regular fa-user"></i>
            </div>          
            <h3 class="name">Ferguson Zibiri</h3>
            <p class="date-end">${date}</p>
        </div>
        ${textHTML}
        ${imgHTML}
    `;
    post.classList.add('output')
    main.appendChild(post);

    textArea.value = '';
    image.value = '';
 }) 

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
}) 

info.innerHTML = `${subscriberOne.getInfo()}`

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
})