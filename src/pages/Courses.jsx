import courses from '../data/courses';
import CourseCard from '../components/CourseCard';

const Courses = () => {
    return (
        <div className="container mt-4">
            <h2>Courses</h2>
            <div className="row">
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
    );
};

export default Courses;