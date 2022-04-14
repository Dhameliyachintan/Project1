import React from 'react';

function Loading(Componate) {
    return function HomeWithLoadingcomponate({isLoading,data}) {
        if (isLoading) {
            return (
                <p>Loading...</p>
            )
             } else {
            return (
                <Componate data = {data}/>
            )
        }
    }
}
     

export default Loading;