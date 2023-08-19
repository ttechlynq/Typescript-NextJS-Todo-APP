import React from 'react';
import { useRouter } from 'next/router';

const TodoDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>Activity Detail Page - ID: {id}</div>;
};

export default TodoDetail;