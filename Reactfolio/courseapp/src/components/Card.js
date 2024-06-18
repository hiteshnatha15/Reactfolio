function Card({course})
{
    return(
        <div>
            <img src={course.image.url} alt="course.title"></img>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
        </div>
    )
}
export default Card;