setInterval(() => {
    let conteudo = document.querySelector(".main--clock");
    let currentdate = new Date();

    const day = currentdate.getDate();
    const mounth = ((currentdate.getMonth() + 1) < 10 ? "0" + (currentdate.getMonth() + 1) : (currentdate.getMonth() + 1));
    const year = currentdate.getFullYear();
    const hours = (currentdate.getHours() < 10 ? "0" + currentdate.getHours() : currentdate.getHours());
    const minutes = (currentdate.getMinutes() < 10 ? "0" + currentdate.getMinutes() : currentdate.getMinutes());
    const seconds = (currentdate.getSeconds() < 10 ? "0" + currentdate.getSeconds() : currentdate.getSeconds());
    let time = `${hours}:${minutes}:${seconds}`;

    conteudo.textContent = time;

    const date = `${day}/${mounth}/${year}`;
    conteudo = document.querySelector(".main--date");
    conteudo.textContent = date;

    const date1 = new Date(`01/01/${currentdate.getFullYear()}`);
    const date2 = new Date(`${mounth}/${day}/${year}`);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24))) + 1;

    conteudo = document.querySelector(".day--count");
    conteudo.textContent = `Contagem de dias : ${diffDays} dias`;

    const yearPercent = (diffDays / 365) * 100;
    let percentFinal = yearPercent;

    const oneDayPercent = 1 / 3.65;
    const oneHourPercent = oneDayPercent / 24;
    const currentHourPercent = oneHourPercent * hours;
    percentFinal += currentHourPercent;

    const oneMinutePercent = oneHourPercent / 60;
    const currentMinutePercent = oneMinutePercent * minutes;
    percentFinal += currentMinutePercent;

    const oneSecondPercent = oneMinutePercent / 60
    const currentSecondPercent = oneSecondPercent * seconds;
    percentFinal += currentSecondPercent;

    conteudo = document.querySelector(".year--percent");
    conteudo.textContent = `Porcentagem passada do ano: ${percentFinal.toFixed(12)}%`;

    let percentPastDay = (hours / 24) * 100;
    const percentMinute = ((1 / 24) / 60) * minutes;
    percentPastDay += percentMinute;

    const percentSeconds = (((1 / 24) / 60) / 60) * seconds;
    percentPastDay += percentSeconds;

    conteudo = document.querySelector(".day--percent");
    conteudo.textContent = `Porcentagem passada do dia: ${percentPastDay.toFixed(12)}%`;
}, 50);