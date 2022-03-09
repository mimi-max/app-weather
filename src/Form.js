import style from './Form.module.css'
const Form = (props) => {
    return (
        <form onSubmit={props.searchWeather} className={style.form}>
            <input onChange={props.inputCity} value={props.city} className={style.input} type="search" />
            <button className={style.btn} type="submit">Search</button>
        </form>
    )
}
export default Form;