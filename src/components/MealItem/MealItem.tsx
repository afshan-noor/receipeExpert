import React from "react";
import styles from './MealItem.module.css'
import { useNavigate } from "react-router-dom";
const MealItem:React.FC<{data:any}>=({data})=>{
    const navigate=useNavigate();
    console.log(data);
    return(
        <>
       {
        (!data)?"Not Found":data.map((item: { idMeal: React.Key | null | undefined; strMealThumb: string | undefined; strMeal: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; })=>{
            return(
//              
                  <div  key={item.idMeal} onClick={()=>navigate('/restaurant/' + item.idMeal)}>
                    <div className={styles.productItem}>
                        <img src={item.strMealThumb} alt=""  />
                        <div className={styles.productInner}>
                            <div >
                                <h3>{item.strMeal}</h3>
                            </div>
                        </div>
                    </div>
                  
                </div>
                
            )
        })
       }
        </>
    )
}
export default MealItem;