const Form = (props) => {
    return (
        <form onSubmit={props.searchWeather}>
            <input onChange={props.inputCity} type="search" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;