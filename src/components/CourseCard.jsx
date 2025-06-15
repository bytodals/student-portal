import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseCard = ({ course }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/courses/${course.id}`} className="btn btn-dark">Register</Link>
            </div>
            </div>
        </div>
    );
};

export default CourseCard;
