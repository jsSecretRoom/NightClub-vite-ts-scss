import { Outlet } from "react-router-dom";
function PagesContent() {
    return ( 
        <main>
            <Outlet/>
        </main>
    );
}

export default PagesContent;