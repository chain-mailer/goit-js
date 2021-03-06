import users from './users.js';

// ---------------- Task-01 ----------------

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log('task-01 result');
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ---------------- Task-02 ----------------

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log('task-02 result');
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ---------------- Task-03 ----------------

const getUsersWithGender = (users, gender) => {
  return users.filter((user) => user.gender === gender).map((user) => user.name);
};

console.log('task-03 result');
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ---------------- Task-04 ----------------

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log('task-04 result');
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ---------------- Task-05 ----------------

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log('task-05 result');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ---------------- Task-06 ----------------
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => max > user.age && user.age > min);
};

console.log('task-06 result');
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ---------------- Task-07 ----------------

const calculateTotalBalance = (users) => users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log('task-07 result');
console.log(calculateTotalBalance(users)); // 20916

// ---------------- Task-08 ----------------

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName)).map((user) => user.name);
};
console.log('task-08 result');
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ---------------- Task-09 ----------------

const getNamesSortedByFriendsCount = (users) => {
  return [...users].sort((firstFriendsList, secondFriendsList) => firstFriendsList.friends.length - secondFriendsList.friends.length).map((user) => user.name);
};

console.log('task-09 result');
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ---------------- Task-10 ----------------

const getSortedUniqueSkills = (users) => {
  let sortedSkills = [];
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .map((skill) => {
      if (!sortedSkills.includes(skill)) {
        sortedSkills.push(skill);
      }
    });
  return sortedSkills.sort();
};

console.log('task-10 result');
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
