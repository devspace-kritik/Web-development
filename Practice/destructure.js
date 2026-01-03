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