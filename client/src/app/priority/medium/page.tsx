import React from 'react'
import PriorityPage from '../reusablePriorityPage';
import { Priority } from '@/state/api';

const Urgent = () => {
    return (
        <PriorityPage priority={Priority.Medium} />
    );
}

export default Urgent;