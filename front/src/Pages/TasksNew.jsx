import { Formik, Form } from "formik";
import { createTask } from "./Api/tasks.api";

function TasksNew() {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          await createTask(values);

          try {
            console.log(response);
            const response = await createTask(values);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="2"
              onChange={handleChange}
              value={values.description}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving" : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TasksNew;
