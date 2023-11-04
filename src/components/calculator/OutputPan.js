import './OutputPan.css'

function OutputPan({ outValueButton }) {
    return(
        <section className='output-result'>
            <Display outValue={ outValueButton }/>
        </section>
    );
}

function Display({outValue = 0}) {
    

    let zeroOutValue = outValue.length === 0 ? 0 : outValue;
    let sizeOutValue = {fontSize: '55px'};

    if (outValue.length > 13) {
        sizeOutValue = {fontSize: '40px'};
    } 
    if (outValue.length > 18) {
        sizeOutValue = {fontSize: '30px'};
    }

    return(
        <div className='display' style={sizeOutValue}>{ zeroOutValue }</div>
    );
}


export default OutputPan