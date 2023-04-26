import{ useState }from "react"

export default function NewTransactionForm({onSubmission}){
    const[formData, setformData]=useState({
        date:"",
        category:'',
        amount:0,
        description:''
    })
    function handleChange(e){
        e.preventDefault()
        setformData({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        onSubmission(formData)
    }
    return(
        <form onChange={handleChange} onSubmit={handleSubmit} id= "new-item-form">
            <div className="form-input">
                <label htmlFor="date">DATE:</label>
                <input value={formData.date}name="date" type="date" id="date"/>
                <input value={formData.description}name="description" className="text-input" placeholder="description..."/>
                <input value={formData.category}name="category" className="text-input" placeholder="category ..."/>
                <input value={formData.amount}name="amount" type="number"/>
            </div>
            <button>Add Transaction</button>
        </form>
    )
}