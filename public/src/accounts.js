function findAccountById(accounts, id) {
  for (account of accounts){
    if (account.id === id){
      return account;
    }
  }
}
//Helper Function 
function totalBorrows(account,books){
  return books.filter(book=>{
    for(let borrowedBook of book.borrows){
      if(borrowedBook.id === account.id){
        return book
      }
    }
  })
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account, adjacent) => account.name.last.toLowerCase() < adjacent.name.last.toLowerCase() ? -1:1);
}

function getTotalNumberOfBorrows(account, books) {
  return (totalBorrows(account, books)).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let totalBorrowed =[];
  books.forEach(book =>{
    book.borrows.forEach(borrowed =>{
      if (borrowed.id === account.id && borrowed.returned === false){
        totalBorrowed.push(book);
      }
    })
  })
  totalBorrowed.forEach(bookBorrowed =>{
    authors.forEach(author => {
      if (author.id === bookBorrowed.authorId){
        bookBorrowed['author'] = author;
      }
    })
  })
  return totalBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
