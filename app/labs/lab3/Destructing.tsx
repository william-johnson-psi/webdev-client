export default function Destructing() {
  const person = { name: "John", age: 25, city: "Boston" };
  const { name, age, city } = person;
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;
  const cheese = {calories: 50, type: "parmesan"}
  const {calories, type} = cheese; 
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;
      <br />
      <br />
      name = {name}
      <br />
      age = {age}
      <br />
      city = {city}
      <h3>Array Destructing</h3>
      const [first, second, third] = ["one","two","three"]
      <br />
      <br />
      first = {first}
      <br />
      second = {second}
      <br />
      third = {third}
      <hr />
      <h3>Cheese</h3>
      <br />
      Calories : {calories}
      Type : {type}
    </div>
  );
}
