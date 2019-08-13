import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';

class ShowPreview extends PureComponent {
 
  render() {
      const {data} = this.props;
    
    return (
      <div>
        {Boolean(data.length) && data.map(dataObj => (
          <div className="serial"  key={dataObj.id}>
           
            <div className="name">
              <Link to={{pathname:`/shows/${dataObj.id}`, id: dataObj.id}}>{dataObj.name}</Link>
            </div>
           
            <div className="icon">
                <img src={dataObj.image.medium} alt="Cover" />
             </div>

              <div
                className="summary"
                dangerouslySetInnerHTML={{ __html: dataObj.summary }}
              />
            
          </div>
          ))}
         
       </div>
      
    );
  }
}

export default ShowPreview