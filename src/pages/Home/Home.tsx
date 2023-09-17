
import Product from '../../components/Product/Product';
import styles from './Home.module.css'
const Home:React.FC=()=>{
        return(
            <>
          <section className={styles.banner}>
            <div>
                <h1 className={styles.red}>
                Search your food recipe
                </h1>
                <h1 className={styles.white}>Best Recipes to Try for Your Every Day Meal</h1>
            </div>
          </section>
          <Product/>
        
            </>
        );
}
export default Home;