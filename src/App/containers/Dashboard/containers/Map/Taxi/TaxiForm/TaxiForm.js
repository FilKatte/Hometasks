import React from "react";
import { withFormik } from "formik";
import styles from "./TaxiForm.module.css";
import InputSelect from "../../../../../../shared/InputSelect";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const isEmpty = require("lodash/isEmpty");

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: (values, props) => {
    const errors = {};
    const { start, end } = values;

    if (start === end) {
      errors.start = "Пункты отправления и прибытия совпадают";
      errors.end = "Пункты отправления и прибытия совпадают";
    }
    return errors;
  },
  mapPropsToValues: () => {
    return {
      start: "",
      end: ""
    };
  },
  handleSubmit: (values, props) => {
    const {
      props: { getRoute }
    } = props;

    getRoute(values);
  },
  displayName: "TaxiForm"
});

class TaxiForm extends React.Component {
  render() {
    const {
      addressList,
      errors,
      values,
      setFieldValue,
      handleSubmit
    } = this.props;

    const disableButton =
      values.start && values.end && isEmpty(errors) ? false : true;

    const listStart = addressList.map(value => {
      return { value: value, label: value };
    });

    const listEnd = listStart.filter(obj => obj.value !== values.start);

    return (
      <form onSubmit={handleSubmit} className={styles.taxi__form}>
        <div className={styles.taxi__field}>
          <InputSelect
            id="start"
            name="start"
            onChange={setFieldValue}
            value={values.start}
            placeholder="Выберите адрес отправления"
            options={listStart}
            error={errors.start || ""}
          />

          <InputSelect
            id="end"
            name="end"
            onChange={setFieldValue}
            value={values.end}
            placeholder="Выберите адрес прибытия"
            options={listEnd}
            error={errors.end || ""}
          />
        </div>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          disabled={disableButton}
        >
          Вызвать такси
        </Button>
      </form>
    );
  }
}

export default formikEnhancer(TaxiForm);

TaxiForm.propTypes = {
  addressList: PropTypes.array,
  errors: PropTypes.object,
  values: PropTypes.object,
  getRoute: PropTypes.func
};
