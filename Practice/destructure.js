let obj = {
  size: {
    width: 100,
    height: 299,
  },
  items: ["cake", "donut"],
  extra: true,
};

let {
  size: { width, height },
  items: [item1, item2],
} = obj;
console.log(width, height);
console.log(item1, item2);

const response = {
  data: {
    user: {
      id: 1,
      username: "amit",
      profile: {
        firstName: "Amit",
        lastName: "Sharma",
      },
    },
  },
};
const {
  data: {
    user: {
      username,
      profile: { firstName, lastName },
    },
  },
} = response;
console.log(username, firstName, lastName);

const rawUsers = [
  {id: 1, name: "Amit", city: "Indore", password: "123", role: "user"},
  {id: 2, name: "Sara", city: "Delhi", password: "abc", role: "admin"}
];

const settingsById = {
  1: {theme: "dark", notifications: true},
  2: {theme: "light", notifications: false}
}

function sanitizeUsers(rawUsers){
  // return rawUsers.map((user) => {
  //   const {password, ...rest} = user;
  //   return rest;
  // })
  
  return rawUsers.map(({password, ...user}) => user);
}
// console.log(sanitizeUsers(rawUsers));

function addAdminFlag(rawUsers) {
  return rawUsers.map((user) => {
   return ({...user,
     isAdmin : (user.role === "admin")
   })

  })
}
console.log(addAdminFlag(rawUsers));

// rawUsers.forEach(user => {
//   const users = [...rawUsers, ...settingsById];
// });
const users = rawUsers.map(user => ({...user, ...settingsById[user.id]}));
console.log(users);