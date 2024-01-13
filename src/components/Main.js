import React ,{ useState }from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {

    const url=("https://pokeapi.co/api/v2/pokemon/");
    const [pokeData,setPokeData]=useState([]);
    
    const pokemon=async()=>{
        const res=await axios.get(url);
        getPokemon(res.data.results)
    }
    pokemon()
    
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await axios.get(item.url)
            // console.log(result)
            setPokeData(state=>{
                state=[...state,result.data]
                return state;
            })    
        })   
    }
    


    return (
        <div className="content">
            <Card pokemon={pokeData} />
        </div>
            
    );
};

export default Main;