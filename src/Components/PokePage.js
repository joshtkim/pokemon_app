import React from 'react'

let PokePage = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
            
        </div>
    )
}

export default PokePage