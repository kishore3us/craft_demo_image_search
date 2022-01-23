import React, { useState, useEffect }  from 'react';
import { useSearchParams } from "react-router-dom";

const AuthorsDetails = props => {

const [searchParams, setSearchParams] = useSearchParams();

var name = searchParams.get("author")
var imgUrl = searchParams.get("img")

const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&amp;limit=20")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
           <div>
                 <div> &nbsp;</div>
                 <div> {name} </div>
                 <div> &nbsp;</div>
                 <div>
                    <img src={imgUrl} height="300"  width="400"/>
                 </div>
           </div>
        );
    }

}
export default AuthorsDetails;