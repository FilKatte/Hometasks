import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  nextLinkSelector,
  peopleListSelector,
  loaderPeopleListSelector
} from "./store/selectors";
import { getPeopleList } from "./store/duck";
import styles from "./People.module.css";

const mapStateToProps = state => {
  return {
    nextLink: nextLinkSelector(state),
    peopleList: peopleListSelector(state),
    loading: loaderPeopleListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeopleList: url => dispatch(getPeopleList(url))
  };
};

class People extends React.Component {
  componentDidMount() {
    const { peopleList } = this.props;
    peopleList.length === 0 && this.getPeopleListHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    const { peopleList } = this.props;
    if (peopleList.length < 40) {
      this.getPeopleListHandler();
    }
  }

  getPeopleListHandler = () => {
    const { nextLink, getPeopleList } = this.props;
    if (nextLink) {
      getPeopleList(nextLink);
    }
  };

  render() {
    const { peopleList, loading } = this.props;

    return (
      <div className={styles.people}>
        <div className={styles.title}>People</div>
        <div>
          <InfiniteScroll
            dataLength={peopleList.length}
            next={this.getPeopleListHandler}
            hasMore={true}
            height={600}
            scrollThreshold={0.8}
            loader={
              loading && (
                <div className={styles.loading}>
                  <div className={styles.loader} />
                  <p className={styles.text}>Loading</p>
                </div>
              )
            }
          >
            {peopleList.length > 0 && (
              <ul className={styles.people__list}>
                {peopleList.map(obj => (
                  <li key={obj.name} className={styles.people__item}>
                    {obj.name}
                  </li>
                ))}
              </ul>
            )}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
