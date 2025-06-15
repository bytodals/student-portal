import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import RegisterForm from '../components/RegisterForm';

const CourseDetails = () => {
    const { id } = useParams();
    const course = courses.find(course => course.id === id);

    if (!course) return <p>Course not found</p>;

    return (
        <div className="container mt-4">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <RegisterForm />
        </div>
    );
};

export default CourseDetails;