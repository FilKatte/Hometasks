import React from "react";
import { withFormik } from "formik";
import styles from "./ProfileForm.module.css";
import Input from "../../../../../shared/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: values => {
    const errors = {};
    const { name, number, date, cvv } = values;

    if (!name) {
      errors.name = "Поле обязательно для заполнения";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Имя может содержать только латинские буквы";
    }

    if (!number) {
      errors.number = "Поле обязательно для заполнения";
    } else if (!/[0-9]/.test(number)) {
      errors.number = "Номер должен состоять из 16-ти цифр";
    }

    if (!date) {
      errors.date = "Поле обязательно для заполнения";
    }

    if (!cvv) {
      errors.cvv = "Поле обязательно для заполнения";
    } else if (!/[0-9]+$/.test(cvv) || cvv.length !== 3) {
      errors.cvv = "CVV должен состоять из 3-х цифр";
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
      date,
      cvv
    };

    addData(data);
  },
  displayName: "ProfileForm"
});

const ProfileForm = props => {
  const { values, errors, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.profile__form}>
      <div className={styles.profile__field}>
        <Input
          type="text"
          id="name"
          label="Имя владельца"
          name="name"
          value={values.name}
          handleChange={handleChange}
          error={errors.name || ""}
        />
        <Input
          mask="9999 9999 9999 9999"
          value={values.number}
          type="text"
          id="number"
          label="Номер карты"
          name="number"
          handleChange={handleChange}
          error={errors.number || ""}
        />

        <Input
          type="date"
          id="date"
          label="Дата окончания действия"
          name="date"
          value={values.date}
          handleChange={handleChange}
          error={errors.date || ""}
        />

        <Input
          type="text"
          id="date"
          label="CVV"
          helperText="Последние 3 цифры на обратной стороне карты"
          name="cvv"
          value={values.cvv}
          handleChange={handleChange}
          error={errors.cvv || ""}
          maxLength={3}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Сохранить
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
