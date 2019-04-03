import  React  from  'react';

const  DisplayEmployee = ({ quote }) => {
    return (
        <div  className="DisplayEmployee">
            <ul>
                <li>{quote.quote}</li>
                <li>{quote.character}</li>
                <li><img  src={quote.image}  alt="picture"  /> </li>
                <li>{quote.characterDirection}</li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;