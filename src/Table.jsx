const Table = ({ data }) => {
  //console.log(data)
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {/* {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))} */}
        {
          <tr key={data?.id ? data?.id : undefined}>
            <td>{data?.first_name ? data?.first_name : undefined}</td>
            <td>{data?.last_name ? data?.last_name: undefined}</td>
            <td>{data?.email ? data?.email : undefined}</td>
          </tr>
        }
      </tbody>
    </table>
  );
};

// const Table = ({ data }) => {
//   return (
//     <>
//       <table>
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Surname</th>
//             <th>Email</th>
//           </tr>
//           {
//             <tr key={data?.id ? data?.id : undefined} >
//               <td>{data?.name ? data?.name : undefined}</td>
//               <td>{data?.validDate ? data?.validDate : undefined}</td>
//               <td>{data?.email ? data?.email : undefined}</td>
//             </tr>
//           }
//         </tbody>
//       </table>
//     </>
//   );
// };

export default Table;
