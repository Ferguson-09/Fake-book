'use strict';

const main = document.querySelector('main');
const postBtn = document.querySelector('.post-btn');
const textArea = document.querySelector('.input').value;

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
    #canMonetize;

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
 }

 const subscriberOne = new Subscriber (
    '00002619', 'Ferguson Zibiri', 'ferguson_09', 'excelzibiri5@gmail.com', ''
 )

 postBtn.addEventListener('click', (a) => {
    a.preventDefault();

    const post = document.createElement('div');
    post.textContent = textArea;
 })





 



