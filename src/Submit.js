import React from "react";

const Submit = (props) => {
    const { submitData } = props;
    return (
        <div className="result_submit">
            {submitData.map((v) => {
                return (
                    <div className="result_2" key={v.id}>
                        <div className="result_3">

                            <p>Name: {v.name} </p>
                            <p>Department: {v.department} </p>
                            <p>Rating: {v.rating} </p>

                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Submit;