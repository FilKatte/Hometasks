import React from "react";
import { connect } from "react-redux";
import { showRequest } from "./store/duck";
import { showSuccessSelector,showValueSelector } from "./store/selectors";
import styles from "./ShowPage.module.css";

const mapStateToProp = state => {
  return {
    data : showSuccessSelector(state),
    loading : showValueSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showRequest: (id) => dispatch(showRequest(id)) 
  };
};

class ShowPage extends React.Component {

  componentDidMount() {
    const {id} = this.props.location
    console.log(id)
    id && this.props.showRequest(id)
  }
 
  render() {
    const {data,loading} = this.props;
  console.log(data)
    return (
      <div>
        {loading && <div>Louding</div>}
        {Boolean(Object.keys(data).length) && (
           <div className={styles.showPage}>
           
           <div className={styles.showPage__title}>
             {data.name}
           </div>
          
           <div>
               <img src={data.image.medium} alt="Cover" />
            </div>

             <div
               className={styles.showPage__summary}
               dangerouslySetInnerHTML={{ __html: data.summary }}
             />

            <div className={styles.showPage__person}>
             {data._embedded.cast.map(dataObj => (
              <div key={dataObj.person.name} >

                <div  className={styles.person__title}>
                {dataObj.person.name}
              </div>
           
            <div>
                <img src={dataObj.person.image && dataObj.person.image.medium} alt="Cover" />
             </div>

          </div>
          ))} 
           </div>
           
         </div>
          )}

      </div>
      
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ShowPage);