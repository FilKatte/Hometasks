import React from "react";
import { withFormik } from "formik";
import styles from "./ProfileForm.module.css";
import Input from "../../../../../shared/Input";

import Button from "@material-ui/core/Button";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: (values, props) => {
    const errors = {};
    const { name, number, date, cvv } = values;

    if (!name) {
      errors.name = "Поле обязательно для заполнения";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      errors.name = "Имя может содержать только латинские буквы";
    }

    if (!number) {
      errors.number = "Поле обязательно для заполнения";
    } else if (!/[0-9]/.test(number) || number.length !== 16) {
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
    return {
      name: "",
      number: "",
      date: "",
      cvv: ""
    };
  },
  handleSubmit: (values, props) => {
    const {
      props: { addData }
    } = props;

    addData(values);
  },
  displayName: "ProfileForm"
});

const ProfileForm = props => {
  const { values, errors, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.profileForm}>
      <p className={styles.profile__title}>Профиль</p>
      <div className={styles.profile__form}>
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
          type="text"
          id="number"
          label="Номер карты"
          name="number"
          value={values.number}
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
          helperText="Last three digits on signature strip"
          name="cvv"
          value={values.cvv}
          handleChange={handleChange}
          error={errors.cvv || ""}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default formikEnhancer(ProfileForm);
