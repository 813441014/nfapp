export function formatTime(timestamp){
    let date = new Date(parseInt(timestamp) * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    console.log(date)
    let Y = date.getFullYear();
    let M = ((date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    let D = date.getDate() < 10 ? `0${date.getDate()}` :date.getDate();
    let h = date.getHours() < 10 ? `0${date.getHours()}` :date.getHours();
    let m = date.getMinutes() < 10 ? `0${date.getMinutes()}` :date.getMinutes();
   console.log(date)
    // return Y+ '.' + M + '.' + D + " "+h + ":" +m;
    return Y+ '年' + M + '月' + D + "日"
}

export function formatTime01(timestamp){
    let date = new Date(parseInt(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    console.log(date)
    let Y = date.getFullYear();
    let M = ((date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    let D = date.getDate() < 10 ? `0${date.getDate()}` :date.getDate();
    let h = date.getHours() < 10 ? `0${date.getHours()}` :date.getHours();
    let m = date.getMinutes() < 10 ? `0${date.getMinutes()}` :date.getMinutes();
   console.log(date)
    // return Y+ '.' + M + '.' + D + " "+h + ":" +m;
    return Y+ '年' + M + '月' + D + "日"
}