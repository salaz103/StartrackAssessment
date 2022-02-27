import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { HeroesState } from '../reducers/heroesReducer';
import { FixedSizeGrid as Grid, GridChildComponentProps, ListChildComponentProps } from 'react-window';
import getVisibleHeroes from '../selector/heroes';
import HeroeListItem from './HeroeListItem';
import '../styles.css'



function HeroesList() {
    const [searchTerm, setSearchTerm] = useState("");
    const heroes = useSelector<HeroesState, HeroesState["heroes"]>((state) => state.heroes)
    console.log(heroes);

    const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => (
        <div style={style}>
            {
                heroes.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((heroe) => {
                    return <HeroeListItem key={heroe.id} {...heroe} />
                })
            }
        </div>
    );

    return (
        <div>
            <input
                type="text"
                placeholder='Look for more Heroes'
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />

            <Grid
                className="Grid"
                columnCount={3}
                columnWidth={200}
                height={1000}
                rowCount={1}
                rowHeight={800}
                width={1000}
            >
                {Cell}

            </Grid>

        </div>




    )
}


export default HeroesList;