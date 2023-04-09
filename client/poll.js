import React, { useState} from "react";


const poll = () => {
    const[options, setOptions] = useState([
        {options: "Option 1", votes: 0},
        {options: "Options 2", votes: 0},
        {options: "Options 3", votes: 0},



    ]);

    const handleVote = (index) => {
        const newOptions = [...options];
        newOptions[index].votes++;
        setOptions(newOptions);
    };

        return(
            <div>
                {options.map((option, index) => (

                    <div key={index}>
                        <p>{option.options}</p>
             <button onClick={() => handleVote(index)}>Vote</button>
             <p>Votes: {option.votes}</p>
                    </div>
                ))}
            </div>


        );

};










