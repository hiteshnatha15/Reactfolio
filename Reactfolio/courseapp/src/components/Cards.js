import Card from "./Card";

function Cards({ courses, cetegory }) {
  let allCourses = [];
  function getCourses() {
    if (cetegory === "All") {
      Object.values(courses).forEach((course) => {
        course.forEach((item) => {
          allCourses.push(item);
        });
      });
      return allCourses;
    } else {
      return courses[cetegory];
    }
  }
  return getCourses().map((course) => <Card key={course.id} course={course} />);
}
export default Cards;
