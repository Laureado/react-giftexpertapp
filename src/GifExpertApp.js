import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{

    const [categories, setCategories] = useState(['One Punch']);  

    // const handleAdd=()=>{
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories( catego => [...catego, 'HunterXHunter']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ ()=>handleAdd() }>Click aquí</button> */}

            <ol>
                {
                    categories.map( category => 
                        <GifGrid key={category} category={category}/>
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;

 