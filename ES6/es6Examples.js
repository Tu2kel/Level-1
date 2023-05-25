// const people = [
//   {name: 'Bob', age: 31},
//   {name: 'Joe', age: 29},
//   {name: 'Ben', age: 42}
// ];
// const [{ name }] = people
// console.log(people);

const profile = {
  title: "Engineer",
  department: "Engineering",
};

function isEngineer(profile) {
  const title = profile.title;
  const department = profile.department;
  return title === "Engineer" && department === "Engineering";
}

const isEngineer = ({ title, department }) =>
  title === "Engineer" && department === "Engineering";