import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <Fragment>
        <h1>List of Courses:</h1>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}

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

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
