import React from 'react'

export default function Gate({isOpen}) {
    return (
        <div>
            {
                
                isOpen ? <h1>Open</h1> : <h1>Closed</h1> 
            }
        </div>
    )
}