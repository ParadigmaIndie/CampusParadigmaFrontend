
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

async function allCoursesToSee(email, token) {
    try {
        const res = await fetch(
            `http://localhost:8080/api/v1/courses/tosee/${email}`,

            {
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
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

async function allMadeCourses(email, token) {
    try {
        const res = await fetch(
            `http://localhost:8080/api/v1/courses/made/${email}`,

            {
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
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

async function deleteCourse(email, token) {
    try {
        const res = await fetch(
            `http://localhost:8080/api/v1/courses/made/${email}`,

            {
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
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
    allCoursesToSee,
    allMadeCourses
}