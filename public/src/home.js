function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}
  // return books.reduce((borrowedSum,book)=>{
  //   book.borrows.filter(borrowedBook=> borrowedBook.returned===false? borrowedSum++: null)
  //   return borrowedSum;
  // },0)
function getBooksBorrowedCount(books) {
  return books
  .filter((book)=> book.borrows[0].returned === false)
  .length;
}

function getMostCommonGenres(books) {
  let genreCount = {};
  books.forEach(book => {
    if (genreCount[book.genre]){
      genreCount[book.genre]++;
    }else {
      genreCount[book.genre]=1
    }
  } );
  let genreArray = [];
  for (let key in genreCount){
    let value = genreCount[key];
    genreArray.push({
      'name': key,
      'count': value
    });
  };
  genreArray.sort((genreA,genreB) => genreB.count - genreA.count);
  let results = genreArray.slice(0,5);
  return results;
}

function getMostPopularBooks(books) {
  return books
  .reduce((acc, currentBook) => {
    acc.push({'name':currentBook.title, 'count':currentBook.borrows.length})
    return acc;
  }, [])
  .sort((bookA, bookB) => bookB.count - bookA.count)
  .slice(0,5);
  }

function getMostPopularAuthors(books, authors) {
  return books
  .reduce((acc, currentBook) => {
    authors.forEach(author => {
      if(currentBook.authorId === author.id){
        acc.push({
          'name': `${author.name.first} ${author.name.last}`,
          'count': currentBook.borrows.length
        });
      }
    });
    return acc;
  }, [])
  .sort((authorA,authorB) => authorB.count - authorA.count)
  .slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
