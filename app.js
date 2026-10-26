// // To select all elements with the class of 'special':
// document.getElementsByClassName('special');

// //getElementsByClassName also returns an array-like object.
// // We don't have access to array methods, but we can iterate:

// const specials = document.getElementsByClassName('special');
// for (let el of specials) {
//   console.log(el);
// }

// //We can use spread to make an actual array:
// const arr = [...specials];
// arr.pop() //this works because it's now an array!
// document.getElementsByTagName('ul')[0]

// <ul>​…​</ul>​<li class=​"special">​…​</li>​<li>​…​</li>​<li class=​"special">​…​</li>​</ul>​
// const ul=document.getElementsByTagName('ul')[0]

// undefined
// ul.getElementsByClassName('special')
// HTMLCollection(2) [li.special, li.special]
// ul.getElementsByTagName('li')
