import { useState } from "react";

function CreateAballot()
{

    const[form,setForm] = useState({
        name:'',
        email:'',
        Question: '',
        Answer1: '',
        Answer2: '',
        AddInfo: ''
    }); 

                const onChange = (e) => {

                    const {value,name} = e.target;
            
                    setForm((state) => ({
                            ...state,
                            [name]:value
                    }));
                }
            
                        const showData = () => {
                            console.log('Form: ', form)
            
                        }
            
                        const onSubmit = (e) => {
                            e.preventDefault();
                        }
                        return(
                            <div className="Create">
                    
                            <header className="App-header">
                                <form onSubmit={onSubmit}>
                                    <label>
                                        Name:
                                        <input onChange={onChange} name="name" value={form.name}></input>
                                    </label>
                                    <hr/>
                    
                                    <label>
                                        Email:
                                        <input onChange={onChange} name="email" value={form.email}> </input>
                                    </label>
                    
                                        <hr/>
                    
                                    <label>
                                        Question:
                                        <textarea onChange={onChange} name="question" value={form.Question}> </textarea>
                                    </label>
                    
                    
                                    <hr/>
                    
                                    <label>
                                        Answer 1:
                                        <textarea onChange={onChange} name="Answer1" value={form.Answer1}> </textarea>
                                    </label>
                    
                                        <hr/>
                    
                    
                                    <label>
                                        Answer 2:
                                        <textarea onChange={onChange} name="Answer2" value={form.Answer2}> </textarea>
                                    </label>
                    
                    
                                                    <hr/>
                    
                                            <div>
                                                <button onClick={showData}> +Add Answer </button>
                                            </div>
                    
                                            <label>
                                        Additional Information:
                                        <textarea onChange={onChange} name="Additional Information" value={form.AddInfo}> </textarea>
                                    </label>
                    
                    
                                        <div>
                    
                                            <button onClick={showData}> Submit </button>
                                        </div>
                    
                    
                                            <header> Check one:</header>
                    
                                                <p1> private button can only be accessed with a unique link</p1>
                    
                    
                                                    <label>

                                                        <div>
                                                            Unique Poll:
                                                            <input type="radio" value="Public" name="name"></input>
                                                            <input type="radio" value="Private" name="name"></input>

                                                        </div>

                                                    </label>
                    
                    
                                </form>
                    
                    
                            </header>
                    
                    
                            </div>
                    
                    
                        );
    }


   


