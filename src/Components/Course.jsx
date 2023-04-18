import Card from "./cards";
import datas from "./datas";

let data = datas.map(item => {
     return(<Card title={item.title} content={item.content} image={item.image} />)
    });


function Course() {
    return (
        <div className="Course" id="Courses">
            <h1>Available Course</h1>
            <div className="card-arrange">
                {data}
            </div>
        </div>
    );
}

export default Course;