// import React from 'react';
//
// const onShare = async () => {
//     try {
//         const result = await Share.share({
//             message: 'Привет! Это пример текста для шаринга из моего приложения.',
//             url: 'https://example.com',
//         });
//
//         if (result.action === Share.sharedAction) {
//             if (result.activityType) {
//                 console.log('Поделились через: ', result.activityType);
//             } else {
//                 console.log('Данные успешно отправлены');
//             }
//         } else if (result.action === Share.dismissedAction) {
//             console.log('Шаринг был отменён');
//         }
//     } catch (error: any) {
//         console.error('Ошибка шаринга:', error.message);
//     }
// };
//
// function ShareButton() {
//     return (
//         <div>
//             <button onClick={onShare} style={{borderWidth: 1}}>
//                 Share
//             </button>
//         </div>
//     )
// }
//
// export default ShareButton;
