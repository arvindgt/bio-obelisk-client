import type { NextPage } from 'next'
import { useRouter } from 'next/router';


const CoursePage: NextPage = () => {
    const router = useRouter();
    console.log(router);
    console.log(router.pathname);
    console.log(router.query);
    
    return (
        <div>This is course id page !</div>
    );
}

export default CoursePage;
