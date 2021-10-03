// import React, { useEffect } from "react";
// import { useState } from "react/cjs/react.development";

// const MealDetails = () => {
//     const [detailes, setDetails] = useState([])

//     useEffect(() => {
//         const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailes}`;

//         fetch(url)
//             .then(res => res.json())
//             .then(data => setDetails(data.detailes));
//     }, []);

//     return (
//         <div>
//             {
//                 detailes.map(detail => <Meal key={meal.idMeal} meal={meal}></Meal>)
//             }
//         </div>
//     );
// };

// export default MealDetails;