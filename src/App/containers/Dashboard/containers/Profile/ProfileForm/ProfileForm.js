import React from "react";
import { withFormik } from "formik";
import styles from "./ProfileForm.module.css";
import Input from "../../../../../shared/Input";
import InputDate from "../../../../../shared/InputDate";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import moment from "moment";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: values => {
    const errors = {};
    const { name, number, date, cvv } = values;

    if (!name) {
      errors.name = "profileForm_validate_error";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "profileForm_validate_error_name";
    }

    if (!number) {
      errors.number = "profileForm_validate_error";
    } else if (!/[0-9]+$/.test(number) || number.indexOf("_") !== -1) {
      errors.number = "profileForm_validate_error_number";
    }

    if (!date) {
      errors.date = "profileForm_validate_error";
    }

    if (!cvv) {
      errors.cvv = "profileForm_validate_error";
    } else if (!/[0-9]+$/.test(cvv) || cvv.length !== 3) {
      errors.cvv = "profileForm_validate_error_cvv";
    }

    return errors;
  },
  mapPropsToValues: props => {
    const { name, number, date, cvv } = props;
    return {
      cvv: cvv,
      name: name,
      date: date,
      number: number
    };
  },
  handleSubmit: (values, props) => {
    const {
      props: { addData }
    } = props;

    const { name, number, date, cvv } = values;

    const data = {
      name,
      number: number.replace(/\s/g, ""),
      date: moment(date).format("MM-DD-YYYY"),
      cvv
    };

    addData(data);
  },
  displayName: "ProfileForm"
});

const ProfileForm = props => {
  const {
    locale,
    values,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.profile__form}>
      <div className={styles.profile__field}>
        <Input
          type="text"
          id="name"
          label="profileForm_label_name"
          name="name"
          value={values.name}
          handleChange={handleChange}
          error={errors.name || ""}
        />
        <Input
          mask="9999 9999 9999 9999"
          value={values.number}
          id="number"
          label="profileForm_label_number"
          name="number"
          handleChange={handleChange}
          error={errors.number || ""}
        />

        <InputDate
          locale={locale}
          id="date"
          helperText="profileForm_label_date"
          name="date"
          value={values.date}
          onChange={setFieldValue}
          error={errors.date || ""}
        />

        <Input
          type="text"
          id="cvv"
          label="profileForm_label_cvv"
          helperText="profileForm_helperText"
          name="cvv"
          value={values.cvv}
          handleChange={handleChange}
          error={errors.cvv || ""}
          maxLength={3}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        <FormattedMessage id="profileForm_button_text" />
      </Button>
    </form>
  );
};

export default formikEnhancer(ProfileForm);

ProfileForm.propTypes = {
  addData: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
  date: PropTypes.string,
  cvv: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object
};
