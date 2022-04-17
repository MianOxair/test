function Comp_Form() 
{
    return (
        <header className="Comp_Form-header">
        <form action="/mian">
            <h1>Form</h1>
            <p>
                <label className="Comp_Form-Input" for="Name">Enter name</label>
                <input id="Name" type="text" placeholder="Name" name="Name"/>
            </p>
            
            <p>
                <label className="Comp_Form-Input" for="Designation">Enter Your Designation</label>
                <input id="Designation" type="text" placeholder="Designation" name="Designation"/>
            </p>
            
            <p>
                <label className="Comp_Form-Input" for="Salary">Enter Your Salary</label>
                <input id="Salary" type="text" placeholder="Salary" name="Salary"/>
            </p>

            <p>
                <label className="Comp_Form-Input" for="meal">Please select your meal</label>
                <select name="meal" id="meal">
                    <option value="fish">Fish</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Lamb">Lamb</option>
                    <option value="Beef">Beef</option>
                </select>
            </p>
            
            <button>Submit</button>
        </form>
        </header>
    );
}

export default Comp_Form;