import User from "./app/Model/User.js";

User.sync({ force: true })
  .then(() => {
    console.log(`User Model Synced`);
  })
  .catch((e) => {
    console.log(`Cannot Sync User Model`);
    console.log(e);
  });
