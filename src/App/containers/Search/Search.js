import React from "react";
import { connect } from "react-redux";
import { searchRequest } from "./store/duck";
import { followersRequest } from "../Followers/store/duck";
import {
  followersLoadingSelector,
  followersDataSelector,
  followerssuccessNothingSelector
} from "../Followers/store/selectors";
import {
  searchSuccessSelector,
  searchValueSelector,
  successNothingSelector
} from "./store/selectors";
import { getApiKeySelector } from "../../store/selectors";
import UserInfo from "../UserInfo";
import Followers from "../Followers";
import styles from "./Search.module.css";

const mapStateToProp = state => {
  return {
    ApiKey: getApiKeySelector(state),
    dataUser: searchSuccessSelector(state),
    loading: searchValueSelector(state),
    successNothing: successNothingSelector(state),
    dataFollowers: followersDataSelector(state),
    loadingFollowers: followersLoadingSelector(state),
    successNothingFollowers: followerssuccessNothingSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: arg => dispatch(searchRequest(arg)),
    followersRequest: arg => dispatch(followersRequest(arg))
  };
};

class Search extends React.Component {
  state = {
    value: ""
  };

  searchRef = React.createRef();

  componentDidMount() {
    if (this.searchRef.current) {
      this.searchRef.current.focus();
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { searchRequest, followersRequest, ApiKey } = this.props;
    const { value } = this.state;
    event.preventDefault();
    const arg = { ApiKey: ApiKey, user: value };
    if (value) {
      searchRequest(arg);
      followersRequest(arg);
    }

    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    const {
      dataUser,
      dataFollowers,
      successNothingFollowers,
      loading,
      loadingFollowers,
      successNothing,
      searchRequest,
      followersRequest,
      ApiKey
    } = this.props;

    return loading ? (
      <div className={styles.search__loading}>
        <div className={styles.search__loader} />
        <p className={styles.loading__text}>Loading</p>
      </div>
    ) : (
      <div className={styles.search}>
        <form onSubmit={this.handleSubmit} className={styles.search__form}>
          <input
            onChange={this.handleChange}
            value={value}
            className={styles.search__input}
            type="text"
            placeholder="Ник пользователя"
            ref={this.searchRef}
          />
          <button className={styles.search__button}>Найти</button>
        </form>
        <UserInfo data={dataUser} successNothing={successNothing} />
        <Followers
          data={dataFollowers}
          loading={loadingFollowers}
          successNothing={successNothingFollowers}
          searchRequest={searchRequest}
          followersRequest={followersRequest}
          ApiKey={ApiKey}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Search);
