import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One punche', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One punche']);


    /*const handleAdd = () => {

        setCategories(cats => ['HunterXHunter', ...cats]);

        //console.log(categories);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}
