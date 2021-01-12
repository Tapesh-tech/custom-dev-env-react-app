import React, { Fragment } from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  onChange = (event) => {
    const newCourse = { ...this.state.course, title: event.target.value };
    this.setState({ course: newCourse });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <Fragment>
        <h2>Add a new Course Here:</h2>
        <form onSubmit={this.handleSubmit}>
          Course Title:{" "}
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.course.title}
          ></input>
          <br />
          <br />
          <input
            type="submit"
            value="Save Course"
            className="btn btn-primary"
          />
        </form>
      </Fragment>
    );
  }
}

export default CoursesPage;
