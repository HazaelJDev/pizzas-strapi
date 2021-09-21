import React, {useEffect} from "react";
/* BUG: En el useEffect no sé esta ejecutando bien 
    y no se esta quitando la notificación de acuerdo al tiempo asignado.
*/
const OrderNotification = ({visible,setDataPost}) => {
    
    useEffect(()=>{
        if (visible){
            const timer = setInterval(()=>{
                console.log("Notificación")
            },3000)
            setDataPost(null);

            return () => clearInterval(timer);
        }
    },[]);

    return visible ? (
        <div className="fixed bottom-0 right-0 w-auto bg-green-400 border-l-4 border-white text-black-500 p-6 transition duration-700" role="alert">
            <p className="text-2xl font-bold mb-4">¡El proceso de pedido se realizo con éxito!</p>
            <p className="text-lg">En unos minutos recibiras una llamada o correo para indicar la salida de tu pedido del restaurante.</p>
        </div>
    ) :
    (<div />)
}
export default OrderNotification;