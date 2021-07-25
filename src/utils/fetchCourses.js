
async function allCourses() {
    try {
        const res = await fetch(
            'http://localhost:8080/api/v1/courses',
            {
                method: 'GET'
            })

        const courses = await res.json();

        if (courses.error) {
            return console.log(courses.error);
        }

        console.log('Courses', courses);
        return courses;

    } catch (error) {
        console.log(error);
    }
}
export default {
    allCourses,
}