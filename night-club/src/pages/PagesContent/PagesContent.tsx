import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function PagesContent() {
    const navigate = useNavigate();

    useEffect(() => {

        // Проверка наличия куки с токеном пользователя
        const userToken = Cookies.get('userToken');

        // Если куки с токеном пользователя не найдено, перенаправляем на страницу авторизации
        if (!userToken) {
            navigate('/authorization');
            return;
        }

        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Если пользователь не аутентифицирован, перенаправляем на страницу регистрации
            if (!user) {
                Cookies.remove('userToken');
                navigate('/authorization');
            }else{
                navigate('/home/orderdata/:formattedDate');
            }
        });

        // Очистка подписки при размонтировании компонента
        return () => unsubscribe();
    }, [navigate]);

    return ( 
        <main>
            <Outlet />
        </main>
    );
}

export default PagesContent;