function Comp_Form() 
{
    return (
        <header className="Comp_Form-header">
        <form action="/mian">
            <h1>Contact Us</h1>
            <p>
                <label className="Comp_Form-Input" for="Name">Enter Your Name</label>
                <input id="Name" type="text" placeholder="Name" name="Name"/>
            </p>
            
            <p>
                <label className="Comp_Form-Input" for="Email">Enter Your Email</label>
                <input id="Email" type="text" placeholder="Email" name="Email"/>
            </p>
            
            <p>
                <label className="Comp_Form-Input" for="Cell No">Enter Your Cell No</label>
                <input id="Cell No" type="text" placeholder="Cell No" name="Cell No"/>
            </p>

            <p>
                <label className="Comp_Form-Input" for="Comm mode">Please select your Preferred way of Communication</label>
                <select name="Comm mode" id="Comm mode">
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                    <option value="voice">Voice Call</option>
                </select>
            </p>
            
            <button>Submit</button>
        </form>
        </header>
    );
}
export default Comp_Form;