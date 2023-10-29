import './OutputPan.css'

function OutputPan({ outValueButton }) {
    return(
        <section className='output-result'>
            <Display outValue={ outValueButton }/>
        </section>
    );
}

function Display({outValue = 0}) {
    // console.log(outValue);

    return(
        <div className='display'>{ outValue.length === 0 ? '0' : outValue }</div>
    );
}

export default OutputPan