import React, { useState } from 'react';
import UserNav from '../../components/Nav/UserNav'
import GridCard from '../../components/Card/GridCard'

function location(locate){

    return (
        <div>
            <UserNav />
            <GridCard />
        </div>
    );
};
export default location;