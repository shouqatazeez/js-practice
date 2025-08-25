const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = values.filter((num) => {// if we use the curley braces in the filter or we should we want to keep it in one line like this so that there is no need of the writing the return statement const result = values.filter((num) =>num>4)
    return num > 5

})
console.log(result);

// now let us know about the filter in depth 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];




const Libray = books.filter((key) => key.genre === "History" && key.publish === 1999)
console.log(Libray);
