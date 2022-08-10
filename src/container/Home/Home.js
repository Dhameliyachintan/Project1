import React from 'react';

function Home({data}) {
    return (
        data.map((d,i) => {
            return (
                <p key={d.id}>{d.name}</p>
            )
        })
        
    );
}

export default Home;
