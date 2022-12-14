const book_library = [
  {
    id: 1,
    iSBN: "1-903282-25-X",
    book_title: "Harry Pooter",
    author: "J.K Rowling",
    price: "$250.66",
    description:
      "This is a book by J.K Rowling. It potrays the life struggle of the protagonist Harry Potter.",
    category: "Fiction",
  },
  {
    id: 2,
    iSBN: "9781472139962",
    book_title: "Mindset ",
    author: "Carol Dweck",
    price: "$200.66",
    description:
      "World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.",
    category: "Self-Help",
  },
  {
    id: 3,
    iSBN: "9781861972781",
    book_title: "The 48 Laws of Power",
    author: "Robert Greene",
    price: "$180.32",
    description:
      "In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.",
    category: "Society",
  },
  {
    id: 4,
    iSBN: "1847941834",
    book_title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    price: "$130",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    category: "Self-Help",
  },
  {
    id: 5,
    iSBN: "9780307338402",
    book_title:
      "Secrets of Mental Math: The Mathemagician's Guide to Lightning Calculation and Amazing Math Tricks",
    author: "Arthur Benamin",
    price: "$120",
    description:
      "Secrets of Mental Math will have you thinking like a math genius in no time. Get ready to amaze your friends—and yourself—with incredible calculations you never thought you could master, as renowned “mathemagician” Arthur Benjamin shares his techniques for lightning-quick calculations and amazing number tricks.",
    category: "Mathematics",
  },
  {
    id: 6,
    iSBN: "1119457890",
    book_title: "Beginning Programming with Python for Dummies",
    author: "John Paul Mueller",
    price: "$102",
    description:
      "Python is a remarkably powerful and dynamic programming language that's used in a wide variety of application domains. Some of its key distinguishing features include a very clear, readable syntax, strong introspection capabilities, intuitive object orientation, and natural expression of procedural code.",
    category: "Computer",
  },
  {
    id: 7,
    iSBN: "1119527074",
    book_title: "SQL for Dummies",
    author: "Allen G. Taylor",
    price: "$168",
    description:
      "Updated for the latest version of SQL, the new edition of this perennial bestseller shows programmers and web developers how to use SQL to build relational databases and get valuable information from them.",
    category: "Programming",
  },
  {
    id: 8,
    iSBN: "Encyclopedia of Database Systems",
    book_title: "Encyclopedia of Database Systems",
    author: "M. Tamer Özsu",
    price: "$85",
    description: "Encyclopedia of database systems (Springer, 2009)",
    category: "Computer",
  },
  {
    id: 9,
    iSBN: "1584880902",
    book_title: "Handbook of graph theory",
    author: "=Jonathan L. Gross",
    price: "$211",
    description:
      "The Handbook of Graph Theory is the most comprehensive single-source guide to graph theory ever published.",
    category: "Mathematics",
  },
  {
    id: 10,
    iSBN: "9780387310732",
    book_title: "Pattern Recognition and Machine Learning",
    author: "Christopher M. Bishop",
    price: "$315",
    description:
      "The dramatic growth in practical applications for machine learning over the last ten years has been accompanied by many important developments in the underlying algorithms and techniques. ",
    category: "Artifical Intelligence",
  },
];

var selectedBooks = new Array();

//Creating an array for the book information gained from the local storage
var booksFromLocalStorage = new Array();

var bookIdFromStorage;

const displayBookList = () => {
  let str = " ";

  book_library.map((item) => {
    str += `
    <div class="bookdetails-container">
    <div class="bookDetails">
      <div class="isbn">
        <p  class="p-design">ISBN:</p>
        <p>${item.iSBN}</p>
      </div>
      <div class="bookTitle">
        <p  class="p-design">Title:</p>
        <p>${item.book_title}</p>
      </div>
      <div class="author">
        <p  class="p-design">Author:</p>
        <p>${item.author}</p>
      </div>
      <div class="price">
        <p  class="p-design">Price:</p>
        <p>${item.price}</p>
      </div>
      <div class="description">
        <p  class="p-design">Description:</p>
        <p>${item.description}</p>
      </div>
      <div class="category">
        <p  class="p-design">Category:</p>
        <p>${item.category}</p>
      </div>
  
      <div class="button-cart">

      <button class="cart-btn" onclick="addToStorage(${item.id})">Add to cart</button>
      </div>
    
    </div>
    </div>`;
  });
  document.getElementById("display").innerHTML = str;
};

displayBookList();

function addToStorage(itemid) {
  result = book_library.filter((item, id) => itemid === item.id);
  console.log(...result);
  localStorage.setItem("selectedBooks", JSON.stringify(result));
}

//append the selected ids into the new array;
//
//   selectedBooks.push(id);

//  alert(selectedBooks);

//convert the updated selected book array into text
//   let selectedBooks_text = selectedBooks.toString();

//update the selected books to the local storage
//   if (typeof Storage !== "undefined") {
//     localStorage.setItem("selectedBooks", selectedBooks_text);
//     alert(selectedBooks_text);
//   } else {
//     alert("Cant support");
//   }

// document.getElementById("car");

// function displaySelectedBooks() {
//   //get the local storage
//   if (typeof (Storage !== "undefined")) {
//     bookIdFromStorage = localStorage.getItem("selectedBooks");
//   }
//   //push the ids of the books into array

//   alert(bookIdFromStorage);
// }
