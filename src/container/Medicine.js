import React from 'react';

export function Medicine(props) 
{let data =
      [
         {
           id: 101,
           name: 'Abacavir',
           quantity: 25,
           price: 150,
           expiry: 2022,
           status: true
         },
         {
           id: 102,
           name: 'Eltrombopag',
           quantity: 90,
           price: 550,
           expiry: 2021,
           status: true
         },
         {
           id: 103,
           name: 'Meloxicam',
           quantity: 85,
           price: 450,
           expiry: 2025,
           status: false
         },
         {
           id: 104,
           name: 'Allopurinol',
           quantity: 50,
           price: 600,
           expiry: 2023,
           status: true
         },
         {
           id: 105,
           name: 'Phenytoin',
           quantity: 63,
           price: 250,
           expiry: 2021,
           status: false
         }
       ];

       let filterdata = data.filter((d,i) => (d.status === true))
    
        let total = filterdata.reduce((acc, d) => acc + d.price,0)
        console.log(total);
       console.log(filterdata);
            
    return (
        <div>
             <table align="center" border = "2px" cellPadding="30px">
         <tr align="center">
           <th>Id</th>
           <th>Name</th>
           <th>Quantity</th>
           <th>Price</th>
           <th>Expiry</th>
           <th>Status</th>
           <th>Total</th>
           <th>Total Export</th>
         </tr>
           {
                    filterdata.map((d,i) => {
                        return(
                        <tr align="center">
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.quantity}</td>
                        <td>{d.price}</td>
                        <td>{d.expiry}</td>
                        <td>{d.status.toString()}</td>
                        <td>{d.quantity+d.price}</td>
                        {i === 0 ? <td rowspan={filterdata.length}>{total}</td>:null}
                        </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Medicine;