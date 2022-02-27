import React, { useState } from 'react';
import { connect, useSelector, RootStateOrAny } from 'react-redux';
import { HeroesState } from '../reducers/heroesReducer';
import { FixedSizeGrid as Grid, GridChildComponentProps, ListChildComponentProps } from 'react-window';
import HeroeListItem from './HeroeListItem';
import '../styles.css'
import { RootState } from '../store/store';



function HeroesList() {
    const [searchTerm, setSearchTerm] = useState("");
    const heroes = useSelector((state:RootState) => state.heroes.heroes)
    //console.log(heroes);

    const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => (
        <div  style={style}>
            {
                heroes.filter((val:any) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    } else if (val.biography.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((heroe:any) => {
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
                columnCount={1}
                columnWidth={500}
                height={1000}
                rowCount={1}
                rowHeight={1000}
                width={600}
            >
                {Cell}

            </Grid>

        </div>




    )
}


export default HeroesList;