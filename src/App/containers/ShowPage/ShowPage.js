import React from "react";
import { connect } from "react-redux";
import { showRequest } from "./store/duck";
import { showSuccessSelector,showValueSelector } from "./store/selectors";

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
           <div className="serial">
           
           <div className="name">
             {data.name}
           </div>
          
           <div className="icon">
               <img src={data.image.medium} alt="Cover" />
            </div>

             <div
               className="summary"
               dangerouslySetInnerHTML={{ __html: data.summary }}
             />

            
             {data._embedded.cast.map(dataObj => (
              <div key={dataObj.person.name}>

                <div >
                {dataObj.person.name}
              </div>
           
            <div className="icon">
                <img src={dataObj.person.image && dataObj.person.image.medium} alt="Cover" />
             </div>

            
          </div>
          ))} 
           
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