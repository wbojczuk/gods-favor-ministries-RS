import styles from './formandmap.module.css';
import FreeEstimateForm from '../FreeEstimateForm/FreeEstimateForm';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
        <div className={styles.menuCover} >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23796.483374318344!2d-87.66851794616497!3d41.7946862567329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2eec5b9a42bb%3A0x407f7a8ba56a9e34!2s5517%20S%20Halsted%20St%2C%20Chicago%2C%20IL%2060621!5e0!3m2!1sen!2sus!4v1730289887760!5m2!1sen!2sus" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};