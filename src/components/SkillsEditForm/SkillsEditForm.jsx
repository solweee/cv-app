import { Formik } from "formik";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addSkill } from "../../app/features/skills/skillsScice";
import "./SkillsEditForm.scss";

export function SkillsEditForm() {
  const dispatch = useDispatch();
  return (
    <div className="edit-form">
      <Formik
        initialValues={{ skillName: "", skillRange: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.skillName) {
            errors.skillName = "Skill name is a required field!";
          }
          if (!values.skillRange) {
            errors.skillRange = "Skill range is a required field!";
          } else {
            const rangeNumber = Number(values.skillRange);
            if (isNaN(rangeNumber)) {
              errors.skillRange = "Skill range must be a 'number' type";
            } else if (rangeNumber < 10) {
              errors.skillRange =
                "Skill range must be greater than or equal to 10";
            } else if (rangeNumber > 100) {
              errors.skillRange =
                "Skill range must be less than or equal to 100";
            }
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          dispatch(addSkill(values));
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="skillName">Skill name:</label>
              <input
                type="text"
                name="skillName"
                id="skillName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.skillName}
                placeholder="Enter skill name"
                className={
                  errors.skillName && touched.skillName
                    ? "skill-name error"
                    : "skill-name"
                }
              />

              <div className="input-feedback">
                {touched.skillName && errors.skillName ? errors.skillName : ""}
              </div>
            </div>
            <div>
              <label htmlFor="skillRange">Skill range:</label>
              <input
                type="text"
                name="skillRange"
                id="skillRange"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.skillRange}
                placeholder="Enter skill range"
                className={
                  errors.skillRange && touched.skillRange
                    ? "skill-range error"
                    : "skill-range"
                }
              />
              <div className="input-feedback">
                {touched.skillRange && errors.skillRange
                  ? errors.skillRange
                  : ""}
              </div>
            </div>
            <Button type="submit" disabled={!isValid} text="Add skill" />
          </form>
        )}
      </Formik>
    </div>
  );
}
