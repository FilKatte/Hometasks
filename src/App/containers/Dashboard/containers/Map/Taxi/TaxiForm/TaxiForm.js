import React from "react";
import { withFormik } from "formik";
import styles from "./TaxiForm.module.css";
import InputSelect from "../../../../../../shared/InputSelect";
import Button from "@material-ui/core/Button";

const formikEnhancer = withFormik({
  enableReinitialize: true,
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
    const { addressList, values, setFieldValue, handleSubmit } = this.props;

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
          />

          <InputSelect
            id="end"
            name="end"
            onChange={setFieldValue}
            value={values.end}
            placeholder="Выберите адрес прибытия"
            options={listEnd}
          />
        </div>
        <Button variant="outlined" color="primary" type="submit">
          Вызвать такси
        </Button>
      </form>
    );
  }
}

export default formikEnhancer(TaxiForm);
