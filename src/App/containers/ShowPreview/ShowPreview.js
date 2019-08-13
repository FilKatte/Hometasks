import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import styles from "./ShowPreview.module.css";

class ShowPreview extends PureComponent {
 
  render() {
      const {data,result} = this.props;
    
    return (
      <div>
        {(result) ? "Не найдено": data.map(dataObj => (
          <div className={styles.showPreview}  key={dataObj.id}>
           
            <div className={styles.showPreview__title}>
              <Link to={{pathname:`/shows/${dataObj.id}`, id: dataObj.id}} className={styles.showPreview__link}>{dataObj.name}</Link>
            </div>
           
            <div className={styles.showPreview__icon}>
                <img src={dataObj.image && dataObj.image.medium} alt="Cover" />
             </div>

              <div
               className={styles.showPreview__summary}
                dangerouslySetInnerHTML={{ __html: dataObj.summary }}
              />
            
          </div>
          ))}
         
       </div>
      
    );
  }
}

export default ShowPreview