import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifts(category);

    console.log(loading);

    return (
        <>
            <h3 className="animate__fadeInLeft">{category}</h3>

            {loading && <p className = "animate__flash">Loading</p>}
            {<div className="card-grid">

                <ol>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img} />
                        ))
                    }
                </ol>
            </div>}
        </>

    )
}
